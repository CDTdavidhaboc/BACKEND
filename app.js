import express from "express";

const app = express();

const port = 3010

//middlefuckingwear
app.use(express.json());

try{
app.listen(port, () => {
    console.log(`listening to port 3000...`);
});
}catch(e){
    console.log(e);
}

app.get('/david', async (request, response) => {
    response.status(200).json({messgae: "Hello! I'm David Emanuel Haboc"})
});