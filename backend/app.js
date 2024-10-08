const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fileRoutes = require("./routes/fileRoutes");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

//* Conexión a la base de datos
mongoose
  .connect(process.env.DB_HOST)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

// Rutas
app.use("/api", fileRoutes);

// Archivos estáticos
app.use(express.static("storage"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
