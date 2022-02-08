const { validationResult } = require('express-validator');
const BlogPost = require('../models/blog');

exports.createBlogPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const date = new Date();

    // ambil errors dan masukkan 
    const errors = validationResult(req);
    /** jika ada error bernilai false & kosong nilainya true dan-
     * jalankan response 400 Request error / posting blog gagal & me-
     * ngembalikan nilai error.
     */ 
    if(!errors.isEmpty()) {
        // console.log('err: ', errors)
        const err = new Error('Input Value tidak Sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    // Posting akan diambil dari model blog yg sudah dibuat pda file models/blog.js
    const Posting = new BlogPost({
        title: title,
        content: content,
        author: {uid: 1, name: 'Muhammad Acla'}
    });
    /**
     * save variabel Posting ke database.
     * cek apakah proses berhasil apa gagal menggunakan then dan catch.
     * jika proses berhasil masuk ke result => dan jalankan proses response json di dalamnya.
     */
    Posting.save()
    .then(result => {
        res.status(201).json({
            message: "Create Blog Post Success",
            // hasil dari promise yang disimpan ke dalam database akan dimasukkan kedalam data: 
            data: result
        });
    })
    .catch(err => {
        console.log('err: ', err);
    });

}