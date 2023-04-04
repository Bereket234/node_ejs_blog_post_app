const Blog= require('../models/blogs')

const getBlogs= (req, res)=>{
    Blog.find().sort({createdAt : -1})
    .then(result=> {res.render('blogs.ejs', {title: "Blogs", blogs: result})})
    .catch(err => {console.log(err)})
}

const getCreate= (req, res)=>{
    res.render('create.ejs', {title: "Create"})
}

const createPost= (req, res) => {
    console.log(req.body)
    const blog=  new Blog(req.body)
    console.log(blog)
    blog.save()
        .then(res=> console.log(res))
        .then(result=> res.redirect('/blogs'))
        .catch(e => console.log(e))
}

const deletePost=  (req, res)=>{
    console.log(req.params.id)
    Blog.findByIdAndRemove(req.params.id)
        .then(result => res.send(result))
        .catch(err=> console.log(err))
}

const getBlog= (req, res) => {
    id = req.params.id
    Blog.findById(id)
        .then(result => res.render('details.ejs', {title: "Details", blog: result}))
}


module.exports= {
    getBlogs,
    getCreate,
    createPost,
    deletePost,
    getBlog
}