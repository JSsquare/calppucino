import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if(connection.isConnected) {
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected ? "DB connection established" : "Unable to connect to DB");
}

export default dbConnect;