const { validationResult } = require('express-validator');

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

    const result = {
        message: "Create Blog Post Success",
        data: {
            post_id: 1,
            title: title,
            image: "imagefile.png",
            content: content,
            created_at: date,
            author: {
                uid: 1,
                name: "Testing"
            }
        }
    }
    console.log(result);
    res.status(201).json(result);
    
}