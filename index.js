const express = require('express')
const app = express()
const PORT = 5000
const path = require('path')

// sequelize init
const config = require('./src/config/config.json')
const { Sequelize, QueryTypes } = require('sequelize')
const sequelize = new Sequelize(config.development)

// setup call hbs with sub folder
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

// set serving static file
app.use(express.static('src/assets'))

// parsing data from client
app.use(express.urlencoded({ extended: false }))

// routing
app.get('/', home)
app.get('/blog', blog)
app.get('/contact', contactMe)
app.get('/blog-detail/:id', blogDetail)
app.get('/form-blog', formBlog)
app.post('/form-blog', addBlog)
app.get('/delete-blog/:id', deleteBlog)

// local server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// index
function home(req, res) {
  res.render('index')
}


// blog
async function blog(req, res) {
  try {
    const query = `SELECT id, title, image, content, "createdAt" FROM blogs;`
    let obj = await sequelize.query(query, { type: QueryTypes.SELECT})

    const data = obj.map(res => ({
      ...res,
      author: "Dandi Saputra"
    }))

    console.log(data)

    res.render('blog', { data })
  } catch (error) {
    console.log(error)
  } 
}

// form blogx
function formBlog(req, res) {
  res.render('form-blog')
}

// add a new blog
function addBlog(req, res) {
  const { title, content } = req.body

  const data = {
    title,
    content,
    image: "image.png",
    author: "Jhon Doe",
    postedAt: new Date()
  }

  dataBlog.push(data)
  res.redirect('/blog')
}

// contact me
function contactMe(req, res) {
  res.render('contact-me')
}

// blog detail
function blogDetail(req, res) {
  const { id } = req.params

  res.render('blog-detail', { blog: dataBlog[id] })
}

function deleteBlog(req, res) {
  const { id } = req.params

  dataBlog.splice(id, 1)
  res.redirect('/blog')
}


// const arr = [ 3, 4, 2, 1, 5, 4, 5, 9, 8] => [ 3, 4, 2, 5, 4, 5, 9, 8]
// const arr = [ 3, 4, 2, 1, 5, 4, 5, 9, 8] => [ 3, 4, 2, 9, 8]

// arr.splice(3, 4)