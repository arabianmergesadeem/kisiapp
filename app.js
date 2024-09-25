const express = require('express');
const axios = require('axios');
const path = require('path'); // Import path module to handle file paths
const app = express();

const KISI_API_KEY = 'f9c75f4eb36cd14a2052cbc413ed8b1a';

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API route to get groups
app.get('/api/groups', async (req, res) => {
    try {
        console.log("here1");
        const response = await axios.get('https://api.kisi.io/groups', {
            headers: {
                Authorization: `Bearer ${KISI_API_KEY}`,
                Accept: 'application/json'
            }    
        });
        console.log("here2");

        res.json(response.data);
    } catch (error) {
        console.log("here3");

        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
