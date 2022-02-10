import router from "./routes/router";
import Server from "./classes/server";
import cors from "cors"

const server= new Server()
//enable cors
server.app.use(cors({
    origin: true,
    credentials: true
}))

server.app.use('/mensajes',router)

server.start(()=>{
    console.log(`server runningo on port ${server.port} `)
})