/**
 * panggil mongoose dari mongoose utk menggunakan mongoose.Schema.
 * Schema untuk menentukan struktur data / model yang akan dibuat di dalam database.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * buat Schema/Model/Struktur data baru untuk Blog Post.
 * buat database title & content.
 */
const BlogPost = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Object,
        required: true,
    }
}, {
    // timestamps digunakan utk mencatat waktu data dibuat dan diubah.
    timestamps: true,
})
/** 
 * export model blogPost untuk digunakan di file lain dgn menggunakan-
 * function mongoose.model(). membuat model dengan nama 'BlogPost' yg dibuat dri-
 * variable const BlogPost yg sudah dibuat di atas
 */
module.exports = mongoose.model('BlogPost', BlogPost);