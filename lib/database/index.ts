import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn:null, promise:null };

export const connectToDatabase = async () => {
    console.log(MONGODB_URI);
    console.log("ABOVE");
    if(cached.conn) return cached.conn;
    console.log("BELOW");
    console.log(MONGODB_URI);
    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'eve',
        bufferCommands:false,

    })

    cached.conn = await cached.promise;
    return cached.conn;

}

    