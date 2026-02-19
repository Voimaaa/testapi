const app = require('express')();
const PORT = 8080;

app.get('/api/daten', (req, res) => {
    const empfangenerWert = req.query.meinParameter;
    console.log("Der Client hat geschickt:", empfangenerWert);
    res.json({ status: "erhalten", deinWert: empfangenerWert });
});

app.listen(
        PORT,
        () => console.log("its alive!")
)
