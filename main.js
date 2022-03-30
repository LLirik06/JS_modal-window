function activateButton() {
    let buttonItems = document.querySelectorAll('#activate-button button[type="submit"]');
    let button = document.getElementById('button')
    for (let i = 0; i < buttonItems.length; i++) {
        buttonItems[i].disabled = !buttonItems[i].disabled;
        if(buttonItems[i].disabled = buttonItems[i].disabled){
            button.style.color = "rgb(87, 87, 87)"
        }
        else{
            button.style.color = "white"
        }
    }
  }
let delay_popup = 0000;
setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);