const express = require('express');


const app = express();


const PORT = process.env.PORT || 4000;
const HOST = '127.0.0.1';

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is running on http://${HOST}:${PORT}`);
})

