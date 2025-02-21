const clock = document.getElementById('clock')  //or document.queryselector("#clock");



setInterval(function(){    //setInterval(function(){},1000)
    let date = new Date();
   // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},2000)  