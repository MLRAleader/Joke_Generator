import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// Définir EJS comme moteur de template
app.set('view engine', 'ejs');


app.get("/", async (req, res) => {
  res.render("index");
});

app.post("/", async (req, res) => {


});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
