
let a = [
    { name: 'Habeebllah', username: 'gmor04', password: 'habeeb1234' },
    { name: 'Olaniyi', username: 'olax', password: '12345' },
    { name: 'Habeebllah', username: 'gmor', password: 'habeeb1234990' },
]

let username = document.querySelector('.inpput')
let password = document.querySelector('.inpput2')
let UpperDisplay = document.querySelector('#upper-display')
let LowerDisplay = document.querySelector('#lower-display')

function login(event) {
    event.preventDefault();


    if ( username.value == '' || password.value == '' ) {
        UpperDisplay.innerHTML = 'fill in your details'
    return  
}
    let data = a.find(function(p) {
        return p.username === `${username.value}`
        
    })
      if (!data) {
        UpperDisplay.innerHTML = 'incorrect username or password'
        return     
    }
    else if (data.password !== `${password.value}`) {
        UpperDisplay.innerHTML = 'incorrect username or password' 
        return
    }
    else{
        LowerDisplay.innerHTML = 'Login successful' 
    }
}
