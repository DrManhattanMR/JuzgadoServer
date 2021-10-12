import app from "./app";
const path = require ('path')
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))
    //res.send('Hello World!')
})
app.listen(app.get("port"));

console.log("Server on port", app.get("port"));
