const express = require('express')
const app = express()
const PORT = 5000
const path = require('path')
const bcrypt = require('bcrypt')
const session = require('express-session')
const flash = require('express-flash')

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

// setup flash
app.use(flash())

// setup session
app.use(session({
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 2
  },
  store: new session.MemoryStore(),
  saveUninitialized: true,
  resave: false,
  secret: 'secretValue'
}))

// routing
app.get('/', home)
app.get('/blog', blog)
app.get('/contact', contactMe)
app.get('/blog-detail/:id', blogDetail)
app.get('/form-blog', formBlog)
app.post('/form-blog', addBlog)
app.get('/delete-blog/:id', deleteBlog)

// login & register
app.get("/register", formRegister)
app.post("/register", addUser)
app.get("/login", formLogin)
app.post("/login", userLogin)

// local server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// index
function home(req, res) {
  res.render('index', {
    isLogin: req.session.isLogin,
    user: req.session.user
  })
}


// blog
async function blog(req, res) {
  try {
    const query = `SELECT id, title, image, content, "createdAt" FROM blogs;`
    let obj = await sequelize.query(query, { type: QueryTypes.SELECT})

    const data = obj.map(res => ({
      ...res,
      author: "Dandi Saputra",
      isLogin: req.session.isLogin
    }))

    res.render('blog', { 
      data,
      isLogin: req.session.isLogin,
      user: req.session.user
    })
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

function formRegister(req, res) {
  res.render('register')
}

async function addUser(req, res) {
  try {
    const { name, email, password } = req.body
    const salt = 10

    // query untuk cek email apakah sudah di regitrasi
    // if(emailquery.length != 0) return email sudah ada
    
    await bcrypt.hash(password, salt, (err, hashPassword) => {
      const query = `INSERT INTO users (name, email, password, "createdAt", "updatedAt") VALUES ('${name}', '${email}', '${hashPassword}', NOW(), NOW())`

      sequelize.query(query)
      res.redirect('login')
    })
  } catch (error) {
    console.log(error)
  }
}

function formLogin(req, res) {
  res.render('login')
}

async function userLogin(req, res) {
  try {
    const { email, password } = req.body
    const query = `SELECT * FROM users WHERE email = '${email}'`
    let obj = await sequelize.query(query, { type: QueryTypes.SELECT })

    console.log(obj)

    // checking if email has not been registered
    if(!obj.length) {
      req.flash('danger', "user has not been registered")
      return res.redirect('/login')
    }

    await bcrypt.compare(password, obj[0].password, (err, result) => {
      if(!result) {
        req.flash('danger', 'password wrong')
        return res.redirect('/login')
      } else {
        req.session.isLogin = true
        req.session.user = obj[0].name
        req.flash('success', 'login success')
        res.redirect('/')
      }
    })
  } catch (error) {
    console.log(error)
  }
}

// user@mail.com
// password from tag input = root
// password from database = $2b$10$R2JDQXMynWYBjwJfMfloIupInHYedEbOccPqxBL604ds98fofsE2K