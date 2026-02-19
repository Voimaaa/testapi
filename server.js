const app = require('express')();
const { exec } = require('child_process');
const PORT = 8080;

app.get('/api/daten', (req, res) => {
    const email = req.query.meinParameter;
    
    exec(`node files.js ${email}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Fehler: ${error.message}`);
          return;
        }
        console.log(`Ausgabe: ${stdout}`);
      });
});

app.listen(
        PORT,
        () => console.log("its alive!")
)
