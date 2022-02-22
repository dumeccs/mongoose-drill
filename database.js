const mongoose = require('mongoose')
const person = require('./person')
const Person = require('./person')

mongoose.connect("mongodb://localhost/PeopleDB",{useNewUrlParser:true,useUnifiedTopology:true} )

//Create and save a record of a model
run()
async function run(){
    const josh = new Person({
        name:'Josh Belvis',
        age:21,
        favoriteFoods: ['Chicken pasta','lasagnia']
    })
    await josh.save()


    //Adding a array of people

    let arrayOfPeople = [
        {
        name:'Alafaa chris',
        age:21,
        favoriteFoods: ['Brocolli oil','Hot yam & sauce'] 
        },
        {
            name:'John Grace',
            age:20,
            favoriteFoods: ['Potato mash','Pasta'] 
        },
        {
            name:'Emma Adeoye',
            age:18,
            favoriteFoods: ['Beans','Apple pies'] 
            },
            {
                name:'Miruvie General',
                age:29,
                favoriteFoods: ['Any takeout','Orange Juice'] 
                }
    ]

    Person.create(arrayOfPeople,(err,people)=>{
        if(err){
            console.error(err)
        }
    })
    
 //Querying
    // Person.find({
    //     name:'John Grace'
    // },(err,person) =>{
    //     if(err){
    //         console.log(err)
    //     }
    //     console.log(person)
    // })

    Person.findOne({
        favoriteFoods:'lasagnia'
    },(err,found) => {
        if(err){
            console.error(err)
        }
        console.log(found)
    })

//    Person.findById({
//        _id:"6214832145378b492120971f"
//     }, (err,person)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log(person)
//     })
}

