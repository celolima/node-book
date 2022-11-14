import mongoose from "mongoose";

const mongodbUrl = 'mongodb://127.0.0.1:27017/local';
const connect = () => mongoose.connect(mongodbUrl,
    {
        useNewUrlParser: true
    }
).catch(error => handleError(error));

const close = () => mongoose.connection.close();

export default {
    connect, 
    close
}