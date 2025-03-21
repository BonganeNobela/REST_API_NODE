const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.listen ( PORT, () => {

    console.log('Server listening on PORT: ', PORT);

});

app.get("/status", (request, response) => {

    const status = {

        "Status" : "Running .."
    };

    response.send(status);

});