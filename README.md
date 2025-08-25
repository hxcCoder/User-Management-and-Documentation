*🚀 Proyecto Backend Profesional*- Gestión de Usuarios
Este es un backend robusto y modular desarrollado con Node.js, Express y PostgreSQL. Está diseñado para gestionar usuarios, roles y autenticación, siguiendo estándares de la industria y las mejores prácticas de desarrollo.

**✨ Características Clave**
Seguridad y Autenticación: Implementación de JWT para el control de acceso y bcrypt para el almacenamiento seguro de contraseñas.

Arquitectura Escalable: Código organizado en capas (rutas, controladores y modelos) para facilitar el mantenimiento y la escalabilidad.

Tipado Fuerte: Desarrollado en TypeScript para una mayor seguridad y legibilidad del código.

Mapeo Objeto-Relacional: Uso de TypeORM para una interacción fluida y orientada a objetos con la base de datos PostgreSQL.

Pruebas Automatizadas: Cobertura de tests unitarios y de integración con Jest y Supertest, garantizando la fiabilidad de los endpoints.

Contenerización: Configuración lista para Docker, simplificando el entorno de desarrollo y el despliegue.

**⚙️ Tecnologías**
Runtime: Node.js

Framework: Express

Base de Datos: PostgreSQL

ORM: TypeORM

Lenguaje: TypeScript

Autenticación: JWT (jose), bcrypt

Testing: Jest, Supertest

**📂 Estructura del Proyecto**
src/
├─ app.ts           # Configuración principal de Express
├─ server.ts        # Inicio del servidor
├─ routes/          # Rutas del API
├─ controllers/     # Lógica de negocio
├─ models/          # Entidades de la base de datos
├─ config/          # Configuración de la DB con TypeORM
tests/
├─ user.test.ts     # Pruebas de endpoints de usuario
├─ auth.test.ts     # Pruebas de autenticación

**🚀 Instalación y Uso**
Clona el repositorio:

Bash

git clone https://github.com/hxcCoder/proyect_management.git
cd proyect_management
Instala las dependencias:

Bash

npm install
Crea un archivo .env en la raíz del proyecto y añade tus variables de entorno:

Fragmento de código

PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=tu_base_de_datos
JWT_SECRET=tu_secreto_secreto
JWT_EXPIRES_IN=1d
Inicia la base de datos. Si tienes Docker instalado, usa:

Bash

docker-compose up -d
Ejecuta el servidor en modo desarrollo:

Bash

npm run dev
**🧪 Pruebas Automatizadas**
Para ejecutar los tests, usa el siguiente comando. Se han configurado pruebas de integración para los endpoints de registro, login y gestión de usuarios.

Bash

npm run test

**👤 Autor**
Benjamin Millalonco - GitHub
