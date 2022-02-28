const express = require('express');
const router = express.Router();

router.get('/', async (req , res) => {
    res.send('Welcome - Web Scraping');
});

module.exports = router;

