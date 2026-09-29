import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send("Hello Express");
});

app.listen(PORT, () => {
  try {
    console.log(`Server started at port: ${PORT}`)  
  } catch (error) {
    console.log('Server Starting Error:',error);
  }
});