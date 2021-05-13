import express from 'express';
import {join} from 'path';
import * as fs from "fs";

/**
 * Tipos de dato user JSON 
 * */
type userJSON = {
  username :string,
  password :string,
}

const app = express();

app.use(express.static(join(__dirname, '../public')));

app.get('/users', (req, res) => {
  console.log(req.query);
  if (!req.query.user) {
    res.send({
      success: false,
      error: `Please, especify a user`,
    });
  } else {
    getUser(req.query.user as string, (err, password) => {
      if (err) {
        res.send({
          success: false,
          error: err,
        });
      } else {
        res.send({
          success: true,
          user: req.query.user as string,
          password: password,
        });
      }
    });
  }
});


app.get('*', (req, res) => {
  res.send('<h1>Page not found 404</h1>');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});

const getUser = (username :string, 
    cb: (err: string | undefined, password: string | undefined) => void) => {
  fs.readFile(`./users/user.json`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const usersArray :userJSON[] = JSON.parse(data.toString());
      const userFind = usersArray.find((user) => user.username === username);
      if (userFind == undefined) {
        cb(`That user doesn't exist`, undefined);
      } else {
        cb(undefined, userFind?.password);
      }
    }
  });
};
