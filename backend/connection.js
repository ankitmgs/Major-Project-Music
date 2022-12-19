const mongoose = require('mongoose');
// const DB = process.env.DATABASE;
const DB = "mongodb+srv://Rehnuma11:1212@cluster0.mkx69tw.mongodb.net/Music_App?retryWrites=true&w=majority";


mongoose.connect(DB, {

}).then(() => {
    console.log(`Database Connected Successfully !!`);
})
.catch((err) => {
    console.log(`no connection with DB`);
})

module.exports = mongoose;