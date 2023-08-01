

function fetch_data()
{
    var cityname= document.getElementById('cityname').value
    console.log(cityname)
    if(cityname===""){
        alert('Enter city name')
    }
    var url= 'https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=2a8738537461b38521204f336b761404&units=metric'
    fetch(url)
    .then(respone => respone.json())
    .then (data=>{
        var my_code= data['cod']
        if(my_code === '404')
        {
            alert('CITY NOT FOUND')
        }
        else{
            var cityTemp = data['main']['temp']
             console.log(cityTemp)
             var icon = data['weather']['0']['icon']
                 console.log(icon)
                 var icon_url= 'https://openweathermap.org/img/wn/'+icon+'@2x.png'
                 document.getElementById('result').innerHTML=`<img src=`+icon_url+`>`+`<br>`+`<h2>Temperature is:`+cityTemp+`&deg;C</h2>`
        }
    }
    )
}
    