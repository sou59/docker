const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.json({
        "message": "My awesone API"
    });
});

app.listen(3000);