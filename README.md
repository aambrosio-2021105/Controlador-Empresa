# Servidor Venta Online IN6BM

Este es un servidor con conección a mongoDB

Renombrar el archivo example.env a .env, esto es con la intención de tener las variables de entorno
configuradas en le proyecto, se estara agregando más en el futuro.

Para instalar los modulos de node ejecutar el comando
```
npm install
```
```
Empresa
localhost:8080/api/empresa/
localhost:8080/api/empresa/agregar
localhost:8080/api/empresa/editar
localhost:8080/api/empresa/eliminar
localhost:8080/api/empresa/ById
localhost:8080/api/auth/login
```
```
Sucursales
localhost:8080/api/sucursal/agregar
localhost:8080/api/sucursal/
localhost:8080/api/sucursal/editar/:id
localhost:8080/api/sucursal/eliminar/:id
```