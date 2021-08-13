const userRoutes = (app, fs) => {
    // variables
    const dataPath = './data/songs.json';
    const dataPath1 = './data/playlist.json';
  
    // READ
    app.get('/songs', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });


    app.get('/playlist', (req, res) => {
        fs.readFile(dataPath1, 'utf8', (err, data) => {
          if (err) {
            throw err;
          }
    
          res.send(JSON.parse(data));
        });
      });
  };


  
  module.exports = userRoutes;