//import a json server
const jsonserver=require('json-server')

//creating a server for media app
const server=jsonserver.create()

//setup a path for json file
const router=jsonserver.router('db.json')

//return a middleware
//using for json data conversion 
const middleware=jsonserver.defaults()

//setup a new port number 
//frontend is already running in port 3000
const port=process.env.PORT || 3001

//use middleware and router in server
server.use(middleware)
server.use(router)

//run the port
//to listen for resolving request from client
server.listen(port,()=>{
    console.log('listening on port '+ port);
})