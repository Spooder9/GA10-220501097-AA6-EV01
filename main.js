const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
    console.log(`📁 Sirviendo archivos desde: ${path.join(__dirname, 'public')}`);
});