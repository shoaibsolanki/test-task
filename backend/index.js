
const connectToMongo = require('./db');
const express = require('express')


var cors = require('cors')

connectToMongo();
const app = express()

const port = 5000

app.use(cors())
app.use(express.json())
    
//available routes
// app.use("/uploads",express.static('uploads'))
app.use('/api', require('./routers/ResgistorApi'))
// app.use('/api/book', require('./routers/book'))
// app.use('/api/test', require('./routers/Tests'))
// app.use('/api/Transaction', require('./routers/Transaction'))
// app.use('/api/Reciptes', require('./routers/GetRecipte'))

app.listen(port, () => {
  console.log(`INotebook backend listening at on //localhost:${port}`)
})
