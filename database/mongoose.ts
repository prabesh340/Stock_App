import mongoose from "mongoose"

const MONGODB_URL = process.env.MONGODB_URL;

declare global{
    var mongooseCache:{
        conn:typeof mongoose | null;
        promise:Promise<typeof mongoose>|null;
    }
}

let cached = global.mongooseCache;

if(!cached){
    cached = global.mongooseCache = {conn:null, promise:null}
}


export const connectToDatabase = async ()=>{
    if(!MONGODB_URL) throw new Error("Please define the MONGODB_URL environment variable inside .env.local");
    if(cached.conn) return cached.conn;
    if(!cached.promise){
      cached.promise=mongoose.connect(MONGODB_URL,{bufferCommands:false});
    }
    try{
        cached.conn = await cached.promise;
    }
    catch(err){
        cached.promise = null;
        throw err;
    }
    console.log(`Connected to database ${process.env.NODE_ENV} - ${MONGODB_URL}`);
    return cached.conn;
}