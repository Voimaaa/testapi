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

  } else {
    console.log(`Ordner "${folderName}" existiert bereits im Volume`);
    const inhalt = args[0];
    const zielPfad = path.join('/storage/', 'email.txt');
    console.log(args[0]);
    await writeFile(zielPfad, inhalt, 'utf8');
    const daten = await readFile(zielPfad, 'utf8');
    console.log("Erfolgreich geschrieben!");
    console.log('📖 Datei-Inhalt:', daten);
  }
} catch (err) {
  console.error("Fehler beim Erstellen:", err.message);
}
