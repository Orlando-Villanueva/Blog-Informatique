// npm i --save express


let express = require('express')

const fs = require('fs')
const port = 8080
const path = require('path');

let app = express()
app.use(express.static(__dirname + '/public'));

// express routing
app.get('/', (req, res) => {
    console.log(__dirname);
    fs.readFile(path.join(__dirname + '/index.html'), "utf8", (err,
        data) => {
        if (err) {
            throw err;
        }
        console.log('fichier html lu et ecris')
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
});

// articles html
app.get('/Accueil', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/articles/Accueil.html'))
});

app.get('/Fabrication', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/articles/Fabrication.html'))
});

app.get('/Utilisation', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/articles/Utilisation.html'))
});

app.get('/Elimination', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/articles/Elimination.html'))
});

app.get('/Solution', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/articles/Solution.html'))
});

// application
app.get('/js', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/app.js'))
});

// choisir entre le fichier de style A ou B
app.get('/css/:option', (req, res) => {
    console.log(__dirname);
    switch (req.params.option) {
        case 'A':
            res.sendFile(path.join(__dirname + '/styles/styleRecA.css'))
            break;
        case 'B':
            res.sendFile(path.join(__dirname + '/styles/styleRecB.css'))
            break;
        default:
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write("<h3 style=\"color:red\">Choissisez entre le fichier /A ou /B!</h3>");
            res.end();
    }
});
// images png
app.get('/images/:image', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/images/' + req.params.image + '.png'))
});
// icon d'onglet
app.get('/icon', (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname + '/images/favicon.ico'))
});
// connection au port 8080
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}...`)
});