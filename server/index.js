/**
 * import express dari nodejs yg sudah di install.
 * panggil fungsi express dari package express- 
 * & deklarasikan menjadi variabel app.
 */
const express = require('express');
/**
 * gunakan bodyParser agar express bisa membaca- 
 * body & menangkap data dari request.
 */ 
const bodyParser = require('body-parser');
const app = express();
/**
 * panggil routing products dari file products.js- 
 * & deklarasikan menjadi variabel productsRoutes.
 * port 3000 agar dimanis, masukkan ke variabel PORT.
 */
const authRoutes = require('./src/routes/auth');
const blogRoutes = require('./src/routes/blog');
const PORT = 5000;

app.use(bodyParser.json()); // support json encoded bodies
/**
 * app.use = express().use.
 * response setHeader utk membolehkan * / utk mengakses semua CORS origin.
 * response setHeader buat Content-Type.
 * Note: response seperti reply yg sudah ada, request- 
 * seperti meminta sesuatu yg baru, next seperti melanjutkan-
 * tidak hanya ini saja yang jalan.
 */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
/**
 * productRoutes adalah varibel yg berisi routing dari file products.js.
 * 
 */
// product routes defaultnya di /v1/customer
app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);

/**
 * panggil hasil error/err dri blog controller, error.errorStatus, error.data.
 */
app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  // tampilkan hasil error ke response berupa json api.
  res.status(status).json({message: message, data: data});
});

// listen to port 3000, and send message to console
app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});