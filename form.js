let submit = document.getElementById('submit');


// const myValue = [{ thing: 'myValue' }]
// const mySerializedValue = JSON.stringify(myValue)

// localStorage.setItem('myKey', mySerializedValue)
// localStorage.getItem('myKey')


submit.addEventListener('click', function(event){
event.preventDefault()

let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let email = document.getElementById('email').value;
let status = document.getElementById('status').value;
let html = document.getElementById('html').checked;
let css = document.getElementById('css').checked;
let java = document.getElementById('javas').checked;
let comment = document.getElementById('comments').value;
let date = document.getElementById('date').value;
let checkbox = document.getElementById('checkbox').checked;
let agree = document.getElementById('agree').checked;


localStorage.setItem('my_firstName', firstName)
localStorage.setItem('my_lastName', lastName)
localStorage.setItem('my_email', email)
localStorage.setItem('my_status', status)
localStorage.setItem('my_html', html)
localStorage.setItem('my_css', css)
localStorage.setItem('my_java', java)
localStorage.setItem('my_comment', comment)
localStorage.setItem('my_date', date)
localStorage.setItem('my_checkbox', checkbox)
localStorage.setItem('my_agree', agree)

})


let clear = document.getElementById('clear')
clear.addEventListener('dblclick', function(){
    localStorage.clear()
})