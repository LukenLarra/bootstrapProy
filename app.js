const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/main/html', 'index.html'));
});

app.get('/explanation', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/main/html', 'explanation.html'));
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/main/html', 'form.html'));
});

app.get('/convocatorias', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/main/html', 'convocatorias.html'));
});

app.get('/memorias', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/main/html', 'memorias.html'));
});

app.get('/aboutUs', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/main/html', 'aboutUs.html'));
});

app.get('/normativa', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/main/html', 'normativa.html'));
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});