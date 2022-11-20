import mongoose from "mongoose";

const mongodbUrl = 'mongodb://127.0.0.1:27017/book?authSource=admin';
const connect = () => mongoose.connect(mongodbUrl,
    {
        useNewUrlParser: true,
        user: process.env.user,
        pass: process.env.pass,
        
    }
).catch(error => handleError(error));

const handleError = (error) => console.error(`Error: ${error}`);

const close = () => mongoose.connection.close();

// mongoose.connect(mongodbUrl,{ useNewUrlParser: true }, function (err) { 
//  if (err) throw err; console.log('Successfully connected'); });

export default {
    connect, 
    close
}