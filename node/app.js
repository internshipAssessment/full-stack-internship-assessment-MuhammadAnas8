const express = require('express');
const app = express();
app.use(express.json());

// // TODO: implement POST /api/sum
// 2. Node.js (40 pts) — POST /api/sum

// File: node/app.js

// Implement a POST endpoint:

// Route: /api/sum

// Input JSON: { "a": number, "b": number }

// Output JSON: { "sum": a+b }
app.post('/api/sum', (req, res) => {
    const { a, b } = req.body; 
    if (typeof a === 'number' && typeof b === 'number') {
        const sum = a + b;
        const result = `sum: ${sum}`;
        res.status(200).json({ sum: sum });
    } else {
        res.status(400).json({ error: "Invalid input"});
    }
});


module.exports = app;
