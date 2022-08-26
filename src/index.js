const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://SAURABH:Soa4GdK4yRvlVN5i@cluster0.umtgp.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

const midGlb= function (req, res, next) {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        console.log(dateTime);
        next();
    }
//     const midGlb1= function (req, res, next) {
//         fetch('http://localhost:3000')
//         .then(result => result.json())
//         .then(console.log);
//          next();
//     }
    
// app.use(midGlb1);

app.use(midGlb);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
