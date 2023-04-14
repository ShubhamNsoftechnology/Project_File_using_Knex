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
knex.from('users').select("*")
.then((rows)=>{
    for(row of rows){
        console.log(`${row['id']} ${row['name']} ${row['age']} `)
    }
})
.catch((err)=>{console.log(err); throw err})
.finally(()=>{
    knex.destroy();
})