const express = require ('express');
const cors = require ('cors')
const bodyParser = require ('body-parser');




const app = express()
app.use(express.json())
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

// app.post('/register', (req, res) => {
    
//     const { email, cohortNumber } = req.body;
    
    
//     res.status(200).json({ message: 'Registration successful' });
//   });
  

  
  app.listen(5501, ()=>{
    console.log('Server running on port 5501');
})