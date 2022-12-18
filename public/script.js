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
        if(event.target.matches('[data-add]') || event.target.parentNode.matches('[data-add]')) {
            displaySecondary.innerText = displayPrimary.innerText;
            displayPrimary.innerText = '';
        } else if (event.target.matches('[data-subtract]') || event.target.parentNode.matches('[data-subtract]')) {
            console.log('-');
        } else if (event.target.matches('[data-multiply]') || event.target.parentNode.matches('[data-multiply]')) {
            console.log('*');
        } else if (event.target.matches('[data-divide]') || event.target.parentNode.matches('[data-divide]')) {
            console.log('/');
        }
    
        //equals button code
        if(event.target.matches('[data-equals]') || event.target.parentNode.matches('[data-equals]')) {
            console.log('=');
        }

        //clear button code
        if(event.target.matches('[data-clear]') || event.target.parentNode.matches('[data-clear]')) {
            displayPrimary.innerText = '';
            displaySecondary.innerText = '';
            
        }

        //plus-minus button code
        if(event.target.matches('[data-plus-minus]') || event.target.parentNode.matches('[data-plus-minus]')) {
            console.log('+-');
        }

        //percent button code
        if(event.target.matches('[data-percent]') || event.target.parentNode.matches('[data-percent]')) {
            console.log('%');
        }

    })
})

function calculate() {

}

