const express = require('express')
const app = express()
const PORT = 5000
const path = require('path')

// setup call hbs with sub folder
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

// set serving static file
app.use(express.static('src/assets'))

// parsing data from client
app.use(express.urlencoded({ extended: false }))

// dummy data
const dataBlog = [
  {
    // id: 1,
    title: "Ini hari jumat",
    content: "Ketimpangan sumber daya manusia (SDM) di sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia, meningkat dua kali lipat dalam satu dekade terakhir.",
    author: "Rebbeca Eltra",
    postedAt: new Date()
  },
  {
    // id: 2,
    title: "Hari ini laptop jadi berat",
    content: "Ketimpangan sumber daya manusia (SDM) di sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia, meningkat dua kali lipat dalam satu dekade terakhir.",
    author: "Jhon doe",
    postedAt: new Date()
  }
]

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
function blog(req, res) {

  res.render('blog', { dataBlog })
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