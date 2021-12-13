/**
 * import express dari nodejs yg sudah di install.
 * panggil fungsi express dari package express- 
 * & deklarasikan menjadi variabel app.
 */
const express = require('express');
const app = express();
/**
 * panggil routing products dari file products.js- 
 * & deklarasikan menjadi variabel productsRoutes.
 * port 3000 agar dimanis, masukkan ke variabel PORT.
 */
const productsRoutes = require('./src/routes/products');
const PORT = 3000;
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
app.use('/v1/customer', productsRoutes);
// listen to port 3000, and send message to console
app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});