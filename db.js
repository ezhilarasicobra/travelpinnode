const mongoose=require('mongoose')
const connectdb=()=>{
  mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
  console.log('Mongo DB connected')
}

module.exports=connectdb;
