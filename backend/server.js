const express = require('express');
const cors = require('cors'); // Optional: for handling CORS
const app = express();
const PORT = 3001; // Ensure this matches the port you're trying to access

// Middleware
app.use(cors()); // Enable CORS if needed
app.use(express.json()); // Parse JSON bodies

// Define a GET route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the API!'); // Response for the root URL
});

// Define a GET route for /api/data
app.get('/api/data', (req, res) => {
    // You can send back some sample data
    res.json({ message: 'This is your data!', data: [1, 2, 3, 4, 5] });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
