const mongoose = require('mongoose')
const {Schema} = mongoose

const personSchema = new Schema({
     name:{
         type:String,
         require:true,
         default:'joe Schmoe'
     },

     age:{
         type:Number,
         require:true,
         default:18
     },

     favoriteFoods:{
         type:Array,
         require:true,
         default:['Friedrice & turkey']
     }
})

module.exports = mongoose.model('Person',personSchema)