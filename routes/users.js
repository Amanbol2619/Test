const express = require("express")

const router = express.Router()

router.get('/', (req, res) => {
  res.send("User list")
})


router.get("/new", (req, res) => {
  res.send("hrhrh")
})


router.get("/:id", (req, res) => {
  res.send(`Get user with id ${req.params.id}`)
})

module.exports = router