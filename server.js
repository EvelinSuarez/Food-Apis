// server.js
import app from './app.js'; // Importa la instancia de Express

const PORT = 3000; // Puedes cambiar el puerto si lo deseas
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
