// Import required packages
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Create an Express app
const app = express();

// Enable CORS for all origins
app.use(cors());

// Define the port to listen on
const PORT = process.env.PORT || 5000;

// Proxy route for images
app.get('/images', async (req, res) => {
    const query = req.query.q || '';
    const pageSize = req.query.page_size || 6;
    try {
        const response = await axios.get(`https://api.openverse.engineering/v1/images`, {
            params: { q: query, page_size: pageSize }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching images from Openverse' });
    }
});

// Proxy route for audio
app.get('/audio', async (req, res) => {
    const query = req.query.q || '';
    const pageSize = req.query.page_size || 6;
    try {
        const response = await axios.get(`https://api.openverse.engineering/v1/audio`, {
            params: { q: query, page_size: pageSize }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching audio from Openverse' });
    }
});

// Proxy route for video
app.get('/video', async (req, res) => {
    const query = req.query.q || '';
    const pageSize = req.query.page_size || 6;
    try {
        const response = await axios.get(`https://api.openverse.engineering/v1/video`, {
            params: { q: query, page_size: pageSize }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching videos from Openverse' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
