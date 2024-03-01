import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the cors middleware
import { MONGOURI } from './keys.js'; // Assuming keys.js exports MONGOURI

const app = express();
const PORT = 5000;

mongoose
  .connect(MONGOURI)
  .then(() => {
    console.log("Connection to MongoDB was successful!");
  })
  .catch((err) => {
    console.log("Connection to MongoDB was unsuccessful!!", err);
  });

// require('./models/users');
// require('./models/post');

// Use the cors middleware
app.use(cors());

app.use(express.json());
// app.use(require('./routes/auth'));
// app.use(require('./routes/post'));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
