const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

// Database Connection
connectDB();
// Default Route
app.get('/', (req, res) => {
   res.send('Notes Management API Running...');
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/notes', require('./routes/notesRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});