const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blog');

// panggil body dri express-validator & gunakan body untuk validasi input
const { body } = require('express-validator');
/** [POST] : /v1/blog/post
 * validasi input dari body title & content panjangnya minimal 5 karakter
 */
router.post('/post', [
    body('title').isLength({min: 5}).withMessage('Title must be at least 5 characters long'), 
    body('content').isLength({min: 5}).withMessage('Content must be at least 5 characters long')], 
    blogController.createBlogPost);

module.exports = router;