// const buttons = document.querySelectorAll('.button');
// const body= document.querySelector("body");
// buttons.forEach(function(button){

//     console.log(button);
//     button.addEventListener("click",function(e){
//         console.log(e);
//        console.log(e.target);
//        if(e.target.id === 'grey'){
//             body.style.backgroundColor = '#808080';  //or e.target.id
//        }else if(e.target.id === 'white')
//         {
//             body.style.backgroundColor = e.target.id;
//         }else if(e.target.id === 'blue')
//             {
//                 body.style.backgroundColor = e.target.id;
//             }else{
//                 body.style.backgroundColor = e.target.id;
//             }
            

//        }
//     )
// })



// USING SWITCH

const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body");

buttons.forEach(function(button)
{
    button.addEventListener("click",function(e){
        console.log(e);
        console.log(e.target);
        switch(e.target)
        {
            case grey:
            body.style.backgroundColor = e.target.id;

            case white:
            body.style.backgroundColor = e.target.id;

            case blue:
            body.style.backgroundColor = e.target.id;

            case yellow :
            body.style.backgroundColor = e.target.id;

}
    })
})


