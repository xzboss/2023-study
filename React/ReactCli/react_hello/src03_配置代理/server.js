const express = require('express')
const app = express()
app.use((request, response, next) => {
	console.log('Someone has requested the server')
	console.log('The requestor is', request.get('Host'))
	next()
})
app.get('/student', (req, res) => {
	const Msg = [
		{ id: "001", name: "A", age: 10 },
		{ id: "002", name: "B", age: 11 },
		{ id: "003", name: "B", age: 12 }
	]
	res.send(Msg)
})
app.listen(5000, (err) => { console.log("服务启动成功localhost:5000") })