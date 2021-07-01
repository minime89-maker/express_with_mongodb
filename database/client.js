const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => {
		console.log('Connection successful')
		
	})
	.catch(() => {
		console.log('Connection failed')
	})

	const client = mongoose.connection

	//notified if connection successfull or if a connection error 
	client.on('error', (err) => {
		console.log(err.message)
	})

	module.exports = client