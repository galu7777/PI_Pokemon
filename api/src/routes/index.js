const router = require("express").Router();
const { getPokemon, getPokemonById } = require('../controllers/getPokemonById');
const { getPokemonByName } = require("../controllers/getPokemonByName");
const { getPokemonTypes } = require("../controllers/getPokemonTypes");
const { postPokemon } = require("../controllers/postPokemon");
// Ejemplo: const authRouter = require('./auth.js');

// const router = Router();

// Configurar los routers
router.get("/", getPokemon);

router.get("/type", getPokemonTypes);

router.get("/search", (req, res) => {
  getPokemonByName(req, res);
});

router.get("/:id", (req, res) => {
  getPokemonById(req, res);
});

router.post("/", (req, res) => {
  postPokemon(req, res);
});

module.exports = router;
