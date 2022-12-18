const mongoose = require('mongoose');
// const DB = process.env.DATABASE;  //yaha par DB ka link nahi aa raha hai dotenv se and direct link paas karne pe kaam kar raha hai
const DB = "mongodb+srv://Rehnuma11:1212@cluster0.mkx69tw.mongodb.net/Music_App?retryWrites=true&w=majority";


mongoose.connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log(`Database Connected Successfully !!`);
})
.catch((err) => {
    console.log(`no connection with DB`);
})

module.exports = mongoose;