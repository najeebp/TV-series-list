
const express = require('express')
const app = express()
const fs = require('fs')
const port = 4000

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/load_json/:page_number', (req, res) => res.send(loadJsonFile(req.params.page_number)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const loadJsonFile = (page_number) => {
    page_number = page_number > 3 ? 1 : page_number
    let rawdata = fs.readFileSync(`./json/CONTENTLISTINGPAGE-PAGE${page_number}.json`)
    return JSON.parse(rawdata);
}

