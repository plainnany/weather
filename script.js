

getWeather('新乡')
$('.city').on('change',function(){
    let city = $('.city').val()
    $('#currentCity').text(city)
    getWeather(city)
})

function getWeather(city){
    $.get('//jirenguapi.applinzi.com/weather.php?city=' + city).done(function(res){
        let data = JSON.parse(res) // 需要JSON处理 
        console.log(data)
        generateHtml(data)
    })
}

function generateHtml(data){
    let html = ''
    let arrWeather = data.results[0].weather_data
    for(let i=0;i<arrWeather.length;i++){
        
        html += '<li>\
            <h3>'+ arrWeather[i].date +'</h3>\
            <img src='+ arrWeather[i].dayPictureUrl +' alt="">\
            <p>'+ arrWeather[i].weather +'</p><p>'+ arrWeather[i].temperature +'</p></li>'   
    }
    $('.weather').empty()
    $('.weather').append(html)
    
}