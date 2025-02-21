const form= document.querySelector("form")
form.addEventListener('submit',function(e){
e.preventDefault()
const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

 if(height ==='' || height < 0 || isNaN(height)){
    results.innerHTML = `plz give a valid height`; 
    }else if(weight ==='' || weight < 0 || isNaN(weight)){
    results.innerHTML = `plz give a valid weight`; 
    }else{
      const bmi =  (weight /((height*height)/10000)).toFixed(2)
      //show the results
    
      if(bmi < 18.6){
        results.innerHTML = `You Are UnderWeight Y'r BMI is <span>${bmi}</span>`
      }else if(bmi >18.6 && bmi< 24.9 )
      {
        results.innerHTML = `Your weight is Normal Y'r BMI is <span>${bmi}</span>`
      } else if(bmi > 24.9){
        results.innerHTML = `You are Overweight Person and Your BMI is<span>${bmi}</span>`;
      }
     
    } 
  

}); 