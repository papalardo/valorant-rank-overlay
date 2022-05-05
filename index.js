import express from 'express';
import 'express-async-errors';
import path from 'path';
import ejs from 'ejs';

import getPlayerRank from "./fn/get-player-rank.js";

const app = express();
const port = process.env.PORT || 8081;

app.engine('html', ejs.renderFile);
app.use('/static', express.static('public'));

app.get('/:region/leaderboard/:playerName/:playerTag', async (req, res) => {
    return res.send();

    const player = await getPlayerRank(
        req.params['region'],
        req.params['playerName'],
        req.params['playerTag'],
    );

    res.send(player)
});

app.get('/:region/leaderboard/:playerName/:playerTag/overlay', async (req, res) => {
    try {
        const player = await getPlayerRank(
            req.params['region'],
            req.params['playerName'],
            req.params['playerTag'],

        );

        if (!player) return res.send();

        res.render(path.join(path.resolve(), '/views/overlay.html'), {
            player,
            lastUpdate: new Date().toLocaleString(),
            showName: req.query['no-name'] === undefined,
            bg: req.query['bg'] || 'bg-slate-100',
            textColor: req.query['color'] || 'text-zinc-800'
        });
    } catch (e) {
        return res.send();
    }
})

app.use(function errorHandler(err, req, res, next) {
    res.status(500).send({
        error: err.message,
    });
})

app.listen(port);
console.log('Server started at http://localhost:' + port);