📦 Proyecto Backend: Gestión de Usuarios y Autenticación
Descripción

Este proyecto es un backend escalable desarrollado con Node.js, Express y PostgreSQL, diseñado para manejar usuarios, autenticación y roles.
El proyecto está pensado para ser usado como base profesional, completamente testable, modular y listo para integrarse con frontends modernos o servicios externos.

Cuenta con:

Registro y login de usuarios con JWT.

Hashing de contraseñas con bcrypt.

Estructura modular: controladores, rutas y servicios separados.

Tests automáticos con Jest y Supertest.

Configuración lista para TypeScript, TypeORM y Docker.

Buenas prácticas de desarrollo: patrones de diseño, manejo de errores, middlewares.

Tecnologías

Node.js – Runtime backend.

TypeScript – Tipado estático y seguridad.

Express – Framework HTTP.

TypeORM – ORM para PostgreSQL.

PostgreSQL – Base de datos relacional.

Jest + Supertest – Testing unitario y de integración.

bcrypt – Encriptación de contraseñas.

JWT (jose) – Autenticación basada en tokens.

Instalación

Clonar el repositorio:

git clone https://github.com/hxcCoder/proyect_management.git
cd proyect_management


Instalar dependencias:

npm install


Configurar variables de entorno en .env:

PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=tu_base_de_datos
JWT_SECRET=tu_secreto
JWT_EXPIRES_IN=1d


Levantar la base de datos (PostgreSQL o con Docker):

docker-compose up -d


Compilar TypeScript:

npm run build


Iniciar servidor:

npm run dev

Estructura del proyecto
src/
├─ app.ts           # Configuración de Express y middlewares
├─ server.ts        # Inicio del servidor
├─ routes/          # Definición de rutas
├─ controllers/     # Lógica de negocio
├─ models/          # Entidades de la base de datos
├─ config/          # Configuración de la DB (TypeORM)
tests/
├─ user.test.ts     # Tests de endpoints de usuario
├─ auth.test.ts     # Tests de autenticación

Scripts disponibles
npm run dev       # Levanta el servidor en modo desarrollo
npm run build     # Compila TypeScript
npm run start     # Ejecuta el servidor compilado
npm run test      # Corre tests con Jest

Tests

Se incluyen tests con Jest y Supertest para asegurar que los endpoints principales funcionen correctamente:

Registro de usuarios

Login y autenticación con JWT

Listado de usuarios

Para ejecutar:

npm run test


Los tests no requieren levantar el servidor real gracias a la separación de app.ts y server.ts.

Buenas prácticas implementadas

Separación de capas: rutas, controladores y servicios.

Uso de TypeScript para tipado fuerte.

Seguridad: passwords con bcrypt, JWTs firmados.

Configuración de DB y servidor mediante variables de entorno.

Preparado para tests y CI/CD.

Compatible con Docker para despliegue rápido.

Autor

Benjamin Millalonco – GitHub

Proyecto desarrollado como demostración profesional de backend escalable y modular.
