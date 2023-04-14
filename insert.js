const option = {
    client: 'mysql2',
    connection:{
        host:'localhost',
        user:'root',
        password:'root',
        database:'kerndb'
    }
}
const knex = require('knex')(option)
const users = [
    {name:"Ricky",age:40,},
    {name:"Rahul",age:30,},
    {name:"Rugved",age:1,},
    {name:"Hindavi",age:4,}
]
knex('users').insert(users)
.then(()=>console.log("data inserted"))
.catch((err)=>{console.log(err); throw err})
.finally(()=>{
    knex.destroy();
})