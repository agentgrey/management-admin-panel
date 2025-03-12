// backend/server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const next = require('next');
dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/products', require('./routes/productRoute'));
app.use('/api/orders', require('./routes/orderRoute'));

if (process.env.NODE_ENV === 'production') {
  const nextApp = next({ dev: false, dir: path.join(__dirname, 'build') });
  const handle = nextApp.getRequestHandler();

  nextApp.prepare().then(() => {
    app.all('*', (req, res) => {
      return handle(req, res);
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  });
} else {
  // Development mode fallback.
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}