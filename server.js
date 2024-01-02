import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());

app.get("/pokemons", async (req, res) => {
  try {
    const result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
    res.json(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.listen(5000, () => {
  console.log("Proxy server running on http://localhost:5000");
});
