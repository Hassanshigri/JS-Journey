// fetch('https://reqres.in/api/users')
// .then(res => {
//     if (res.ok){
//         console.log('Success')
//     }else{
//         console.log('Fail')
//     }
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))


fetch('https://reqres.in/api/users',{
    method: 'POST',
    //when you post in api you should tell fetch passing JSON 
    headers:{
        'Contant-Type':'application/json'
    },
    //convets JSON object into string
    body:JSON.stringify(
        {
            name: 'User 1'
        }
    )
})

.then(res=>{
    if (res.ok){
        console.log('Success')
    }else{
        console.log('Not successfull')
    }
})
.then(data=>console.log(data))
.catch(error=>console.log('ERROR'))