const express = require("express")

const app = express()

const router = require('./routes/users')


app.get("/", (req, res) => {
  console.log("hehehe")
  // res.send("meooooo")
  res.status(500).json({ message: "Errorko"})
})

app.use('/users', router)
app.use('/ss', router)
app.use('/:id', router)

app.listen(3000)





console.log("Hello meow")