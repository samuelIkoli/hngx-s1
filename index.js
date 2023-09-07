const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    const { slack_name = 'Not provided, Check spelling maybe',
        track = 'Not provided, Check spelling maybe' } = req.query
    return res.status(200).json({
        slack_name,
        track
    })
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});

