const mongoose = require("mongoose")

const blockSchema = new mongoose.Schema({
    Symbol:{
        type:String,
        unique:true
    },
    name:{
        type:String,
        unique:true
    },
    marketCapUsd:{
        type:String
    },
    priceUsd:{
        type:String
    }


},{timestamps:true})

module.exports= mongoose.model("block_chain",blockSchema)