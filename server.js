const express= require('express')
const mongoose= require('mongoose')
const blogs= require('./routes/blogs')



const app= express()
// mongodb+srv://<name>:<password>@cluster0.sjqmzkb.mongodb.net/?retryWrites=true&w=majority
mongoose.connect('mongoDB-URI')
.then(() => console.log('connected'))
.catch(err => console.log(err)) 


app.set('view-engine', 'ejs')

app.use(express.static('public'))

//get request for the first page
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res)=> {
    res.render('about.ejs', {title: "About"})
})

// routes that are related to blogs
app.use('/blogs', blogs)


app.listen('3000', ()=> {
    console.log('this is the server on 300')
})
