import mongoose from "mongoose";
const connectToMongo= async()=>{
    const res=await mongoose.connect("mongodb+srv://nikhilsingh808199:Nikhil%402001@mernapi.rgns3xg.mongodb.net/");
    if(res){
        console.log('connected successful')
    }
};
export default connectToMongo;