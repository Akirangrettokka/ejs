import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var strDay;
app.use(express.urlencoded({ extended: true }));

app.use(workDayOrNot);
function workDayOrNot(req, res, next) {
    const dayofWeek = new Date(); 
    if (dayofWeek.getDay() === 0 || dayofWeek.getDay() === 6) {strDay = "Weekend"} else {strDay = "WorkDay"};
    next();
}

app.get("/", (req, res) => {
    res.render("index.ejs", {name: strDay})
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});