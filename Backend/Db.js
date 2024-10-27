import mongoose from "mongoose";

const MongooDB=()=>{
    try{
       mongoose.connect(process.env.MONGO_DB_LINK)
        .then(()=>{console.log("MongoDb connected")});
    
    }
    catch(err){
        console.log(err);
    }
}
export default MongooDB;