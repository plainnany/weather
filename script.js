
$(function(){
    getWeather('北京')
    $('.city').on('change',function(){
        let city = $('.city').val()
        // if(typeof JSON.parse(city) !== 'string'){alert('请输入正确的城市')}
        $('#currentCity').text(city)
        getWeather(city)
    })

})


function getWeather(city){
    
    $.get('//jirenguapi.applinzi.com/weather.php?city=' + city).then(function(res){
        let data = JSON.parse(res) // 需要JSON处理 
        if(data.status === 'success'){
            generateHtml(data)
        }else{
            alert('请输入正确的城市~')  
        }
        
    },function(){
        alert('服务器开小差了')  
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