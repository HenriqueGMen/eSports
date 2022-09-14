import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
  return res.json([
    {
      curso: "Node",
      professor: "Henrique"
    },
    {
      curso: "React",
      professor: "Julia"
    }
  ]);
})

app.listen(3333);