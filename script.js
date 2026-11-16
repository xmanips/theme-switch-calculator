const display = document.querySelector("#display");

const buttons = document.querySelectorAll(".btn")

let resultdisplay = false


buttons.forEach(button => {
  button.addEventListener("click",function(){
   
    if(resultdisplay === true){
      display.innerHTML = ""
      resultdisplay = false
    }
     display.textContent += button.textContent
  })
});

function calc(){
  let displayvalue = display.textContent;
  displayvalue = displayvalue.replaceAll("x","*")
  
  try{
     const result = eval(displayvalue)
 display.innerHTML = result
resultdisplay = true
 
  }
  catch(error){
    display.innerHTML= "error"
    resultdisplay = true
  }

}

function reset(){
  display.innerHTML=" "
}

function del(){
  let store = display.textContent
  store = store.slice(0,-1)
  display.innerHTML = store
}

const radios = document.querySelectorAll("input[name='num']")

radios.forEach(radio =>
{
  radio.addEventListener("change", () => {
    document.documentElement.dataset.theme = radio.value
  })
}
)