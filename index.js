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
async function addBlog(req, res) {
  try {
    const { title, content } = req.body
    const image = "image.png"
    
    await sequelize.query(`INSERT INTO blogs(title, content, image, "createdAt", "updatedAt") VALUES ('${title}', '${content}', '${image}', NOW(), NOW())`)
  
    res.redirect('/blog')
  } catch (error) {
    console.log(error)
  }
}

// contact me
function contactMe(req, res) {
  res.render('contact-me')
}

// blog detail
async function blogDetail(req, res) {
  try {
    const { id } = req.params
    const query = `SELECT * FROM "blogs" WHERE id=${id}`  

    const obj = await sequelize.query(query, {type: QueryTypes.SELECT})

    const data = obj.map((res) => ({
      ...res,
      author: "Eltra"
    }))

    res.render('blog-detail', { blog: data[0] })
  } catch (error) {
    console.log(error)
  }
}

async function deleteBlog(req, res) {
  try {
    const { id } = req.params

    await sequelize.query(`DELETE FROM blogs WHERE id = ${id}`)
    res.redirect('/blog')
  } catch (error) {
    console.log(error)
  }
}
