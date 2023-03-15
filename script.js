const express = require('express');
const ytdl = require('ytdl-core');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/downloadmp4', (req, res) => {
  const url = req.query.url;
  res.header('Content-Disposition', `attachment; filename="DownloadedFile.mp4"`);
  ytdl(url, { format: 'mp4' }).pipe(res);
});
app.get('/downloadmp3', (req, res) => {
    const url = req.query.url;
    res.header('Content-Disposition', `attachment; filename="DownloadedFile.mp3"`);
    ytdl(url, { format: 'mp3' }).pipe(res);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
