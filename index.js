import express from "express";
import bodyParser from "body-parser";
import { Axios } from "axios";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));// Middleware to analyze form data
app.set('view engine', 'ejs');// Define ejs as template engine


const regexNom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]*$/;//Authorized username validation

app.get("/", async (req, res) => {
  res.render("index");
});

app.post("/post", async (req, res) => {
  const username = req.body.username;
 try {
  if (username=="") {
    const error = "Merci d'entrer un nom valide!";
    res.render("index", { error: error });
    console.log(error);
  }else if (typeof username === 'string'  &&  regexNom.test(username) ) {
    console.log(`${username} est une chaîne de caractère.`);
  }
 } catch (error) {
  res.render("index", {error:"Erreur de récupération."})
 }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
