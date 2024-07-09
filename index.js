import express from "express";
import fs from 'fs';
import path from "path";

const app = express();

app.get('/create-file', (req, res) => {
    const currentDate = new Date();
    const timestamp = currentDate.toISOString();
    const filename = `presenttimeStamp.txt`;
    const content = timestamp;
  
    const filePath = path.join("/Users/ramprasath/Documents", 'files', filename);
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        return res.status(500).send('Error writing file');
      }
      res.send(`File created: ${filename}`);
    });
  });


app.listen(3000, () => {
    console.log('listening on port 3000');
})

