const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get("/", (req, res) => {
	res.send("root request")
})

app.get("/login", (req, res) => {
	res.send({
		token: "test token"
	})
})

const port = 3001

app.listen(port, () => console.log("Server listening %d port", port))
