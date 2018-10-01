export default {

  inputError(){
    let input = document.getElementsByTagName('input');
    for(let i = 0; i < input.length; i++){
      if(input[i].value == '') {
        input[i].classList.add("error_input");
      }
    }
 
    let formAddObject = document.getElementsByClassName('form_add-object')[0];
    formAddObject.addEventListener("focus", function(event) {
      if (event.target.className == 'form-control error_input') {
        event.target.classList.remove("error_input");
      }
    }, true);
 
 
    formAddObject.addEventListener("blur", function(event) {
      if (event.target.value == '') {
        event.target.classList.add("error_input");
      }
    }, true);
  }

 
} 