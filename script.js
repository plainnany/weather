
$(function(){
    let timer = null
    timer = setInterval(function(){
        clearInterval(timer)
        let random = Math.ceil(Math.random()*5)
        $('body').css({
            'background-image': 'url(./bg/bg'+ random + '.jpg)'
        })

    },3000)


    getWeather('北京')
    
    $('.city').on('change',function(){
        clearInterval(timer)
        let city = $('.city').val()
        let random = Math.ceil(Math.random()*5)
        $('#currentCity').text(city)
        $('body').css({
            'background-image': 'url(./bg/bg'+ random + '.jpg)'
        })
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
setInterval(function(){
    let time = new Date()
    let seconds = time.getSeconds()
    seconds = seconds > 9 ? seconds : ('0' + seconds)
    let minutes = time.getMinutes()
    minutes = minutes > 9 ? minutes : ('0' + minutes)
    $('.clock').text(time.getHours() + ':' + minutes + ':' + seconds)
},1000)


