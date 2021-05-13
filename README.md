# Práctica 11: Ejercicios - PE103

Desarrolle el siguiente ejercicio en un proyecto alojado en un nuevo repositorio de GitHub.

Cree un directorio llamado users y ahí un fichero llamado user.json que contendrá nombres de usuario y su contraseña asociada. Implemente un servidor Express que acceda a dicho fichero y esté pendiente de las peticiones que reciba desde cliente con el nombre del usuario, deberá devolver la contraseña asociada al usuario. Si el usuario no existe, debemos indicar que dicho nombre de usuario no existe.  

Compilar con `tsc`.

Ejemplos de uso:  
```bash
[~/P11_mod_PE103()]$node dist/expressUsers.js
Server is up on port 3000
````  
Luego acceder a [localhost](http://localhost:3000/) para cargar el `index.html` con ejemplos precargados.