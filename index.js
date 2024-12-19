const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware pour autoriser les requêtes CORS
app.use(cors());

// Exemple de données que l'API va retourner
const cards = [
  {
    id: 1,
    image: "https://via.placeholder.com/300",
    title: "Carte 2",
    description: "Ceci est une carte exemple 1."
  },
 
];

// Route pour récupérer les cartes
app.get("/api/cards", (req, res) => {
  res.json(cards);
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
