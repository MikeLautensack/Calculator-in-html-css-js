const buttonPanel = document.querySelector('[data-button-panel]');
const buttons = Array.from(buttonPanel.children);

let displayPrimary = document.querySelector('[data-display-primary]');
let displaySecondary = document.querySelector('[data-displays-secondary]');

buttons.forEach(button => {
    button.addEventListener('click', () => {


    
        //number button & decimal code
        if(displayPrimary.innerText == '') {
            if(event.target.innerText == '.') {
                displayPrimary.innerText = '0.'
            } else {
                displayPrimary.innerText = event.target.innerText;
            }
        } else {
            if(event.target.innerText == '.' && displayPrimary.innerText.includes('.')) return
            displayPrimary.innerText = displayPrimary.innerText + event.target.innerText;
        }

        //operator button code
        if(event.target.hasAttributes('data-add')) {
            console.log('pass');
        }
    
        //equals button code

        //clear button code

        //plus-minus button code

        //percent button code

    })
})

function calculate() {

}

