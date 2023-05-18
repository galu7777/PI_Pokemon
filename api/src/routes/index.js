const router = require("express").Router();
const { getPokemon, getPokemonById, getPoke} = require('../controllers/getPokemonById');
const { getPokemonByName } = require("../controllers/getPokemonByName");
const { getPokemonTypes } = require("../controllers/getPokemonTypes");
const { postPokemon } = require("../controllers/postPokemon");
// Ejemplo: const authRouter = require('./auth.js');

// const router = Router();

// Configurar los routers
router.get("/", (req, res) => {
  getPokemon(req, res);
});

router.get("/type", (req, res) => {
  getPokemonTypes(req, res);
});

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
