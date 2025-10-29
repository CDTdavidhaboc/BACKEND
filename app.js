import express from "express";
import 'dotenv/config.js';
import studentRoutes from "./routers/StudentRoutes.js";
import bookRoutes from "./routers/BookRoutes.js";

const app = express();

//middlefuckingwear
app.use(express.json());


try{
app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening to port ${process.env.PORT || 3000}...`);
});
}catch(e){
    console.log(e);
}

app.use('/student', studentRoutes);
app.use('/book', bookRoutes);
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
