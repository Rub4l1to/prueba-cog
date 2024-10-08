# Iniciar el proyecto

## 1. Instalar dependencias

Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en tu sistema. Luego, navega al directorio del proyecto y ejecuta el siguiente comando:

> (Utiliza el gestor de paquetes que prefieras)

```bash
pnpm install / npm install / yarn install
```

## 2. Iniciar el servidor de desarrollo

```bash
pnpm start / npm start / yarn start
```

Este comando iniciará tanto el servidor backend como el frontend.

## 3. Navegar a la aplicación

**Frontend**: Accede a la aplicación a través de la URL local generada. Por defecto, suele estar disponible en:

- http://localhost:5173

**Backend**:El servidor backend generalmente estará disponible en:

- http://localhost:3000 (ajusta el puerto según la configuración del `.env`)

## 4. Notas

- Asegúrate de tener una conexión a internet estable, ya que la aplicación necesita conectarse a una base de datos en la nube.

- Si deseas ejecutar la aplicación en modo de producción, puedes hacerlo ejecutando el siguiente comando:

```bash
pnpm build / npm run build / yarn build
```

Este comando compilará la aplicación y la empaquetará para producción.
