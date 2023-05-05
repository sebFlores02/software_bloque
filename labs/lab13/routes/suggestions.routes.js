const express = require('express');

const router = express.Router();

const suggestions = [
    {
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "tagle02",
        followed: "Followed by charlieVelasco + 4 mas",
    },
    {
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "tagle02",
        followed: "Followed by langaricaDavid + 7 mas"
    },
    {
        pp: "https://bulma.io/images/placeholders/1280x960.png",
        user: "tagle02",
        followed: "Followed by rodriTeras + 20 mas"
    }
]

router.get('/', (request, response, next) => {
    response.render('suggestions', {suggestions: suggestions});
});

module.exports = router;