// index.js
const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hola desde Express!");
});

app.get("/articulos/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Artículo con id: ${id}`);
});

app.get("/usuarios/:userId/posts/:postId", (req, res) => {
  const { userId, postId } = req.params;
  res.json({ userId, postId });
});
app.get("/articulos", (req, res) => {
  const categoria = req.query.categoria;
  const orden = req.query.orden;
  res.json({ categoria, orden });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
