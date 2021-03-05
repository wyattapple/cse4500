var button = document.querySelector('.button')
var inputVlaue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
tslint:disabled;

button.addEventListener('click',function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=4936a6bcce397fe929537ca2391421e6`)
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        
        name.innerHTML =nameValue;
        temp.innerHTML =tempValue;
        desc.innerHTML =descValue;
    })

    

.catch(err => alert("Wrong city name sir/miss"))
})
