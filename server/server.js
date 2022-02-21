const express = require("express")
const app = express()
const dotenv = require("dotenv")
const port = 4000
const db = require("./dbService")
const bodyParser = require('body-parser'); // check if this is being used correctly!
const cors = require("cors")

app.use(
    cors({
        origin:"http://localhost:3000",
    })
)


dotenv.config()

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

db.connect((err)=>{
    if (err){
        throw err;
    }
    console.log("MySql Database Connected...")
}) 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/authRegister', (req , res)=>{

    //const { username, email, password, passwordConfirm } = req.body; 
    const { username, email, password} = req.body
    console.log(username) 

    
    db.query('INSERT INTO users SET ?', {username: username, email: email, password: password , firstname: "fname", lastname: "lname"}, (error, results) => {
        if(error) {
            console.log(error);

        } else {
            console.log(results);
            
            res.send('User Registered');
        }


    })   
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})