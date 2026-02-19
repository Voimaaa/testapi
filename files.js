import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Fehler: Kein Name für den Ordner übergeben!");
  process.exit(1);
}

const folderName = args[0] + "_storage";

const volumePath = "/storage/"; 
const fullPath = path.join(volumePath, folderName);

try {
  if (!fs.existsSync(volumePath)) {
    console.error(`Das Volume unter ${volumePath} wurde nicht gefunden!`);
  } else if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath);
    console.log(`Ordner "${folderName}" wurde erfolgreich im Volume erstellt`);
    for (let i = 1; i <= 100; i++) {
        let inhalt = "hahahahahahahahah"
        await fs.writeFile(fullPath, inhalt + i);
    }

  } else {
    console.log(`Ordner "${folderName}" existiert bereits im Volume`);
    await fs.writeFile(folderName, inhalt);
    for (let i = 1; i <= 100; i++) {
        let inhalt = "hahahahahahahahah"
        await fs.writeFile(fullPath, inhalt + i);
    }

  }
} catch (err) {
  console.error("Fehler beim Erstellen:", err.message);
}
