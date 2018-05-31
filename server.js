const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
var server = http.createServer(app)
var io = socketIO(server)


//app.get('/',(req,res) => {
//  res.send('Test World');
//})

app.use(express.static(__dirname + '/public'))

io.on('connection',(socket) => {
  console.log('new user connected')

  socket.emit('newEmail',{ 
    from:'Rods email',
    text:'some message',
    id:123
  }) 

 socket.on('disconnect',()=>{console.log('disconnected') })
 socket.on('createEmail',(data)=>{console.log('email recieved:'+data.text) })

})


server.listen(3000,()=>{ console.log('Server is running on port 3000')});

