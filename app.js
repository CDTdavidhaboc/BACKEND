import express from "express";
import 'dotenv/config.js';
import studentRoutes from "./routers/StudentRoutes.js";
import bookRoutes from "./routers/BookRoutes.js";
import userRoutes from "./routers/UserRoutes.js";
import cors from "cors";

const app = express();

let corsOptions = {
    origin: process.env.ORIGIN
}
//middlefuckingwear
app.use(express.json());
app.use(cors(corsOptions));


app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})  


app
try{
app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening to port ${process.env.PORT || 3000}...`);
});
}catch(e){
    console.log(e);
}

app.use('/student', studentRoutes);
app.use('/book', bookRoutes);
app.use('/user', userRoutes);

/*try{
app.listen(port, () => {
    console.log(`listening to port 3000...`);
});
}catch(e){
    console.log(e);
}

app.get('/david', async (request, response) => {
    response.status(200).json({messgae: "Hello! I'm David Emanuel Haboc"})
});*/
