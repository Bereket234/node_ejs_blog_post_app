const express= require('express')
const bodyParser= require('body-parser')
const blogs= require('../controllers/blogs')


const router= express.Router()


const urlEncodedParser= bodyParser.urlencoded({extends: true})


router.get('/', blogs.getBlogs)

router.get('/create', blogs.getCreate)

router.post('/create', urlEncodedParser, blogs.createPost)

router.delete('/:id', blogs.deletePost)

router.get('/:id', urlEncodedParser, blogs.getBlog)

module.exports= router