function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
      return res.sendFile('index.html', { root: 'dist/novel-frontend' });
    }
    next();
}

const express = require('express');
const app = express();

app.use(requireHTTPS);
app.use(express.static('./dist/novel-frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/novel-frontend/'}),
);

app.listen(process.env.PORT || 8080);
