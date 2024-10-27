import mongoose from 'mongoose';
const DataPointSchema = mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: Number, required: true }
});
const Chart=mongoose.Schema({
    title: {
        type: String,
     
    },
   fileName:{
     type: String,
     required: true
    },
    description: {
        type: String,
        
    },
   
    data:{
        type: [DataPointSchema],
       
    }
})
export default mongoose.model('Chart', Chart);