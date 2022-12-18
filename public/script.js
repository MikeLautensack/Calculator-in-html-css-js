const buttonPanel = document.querySelector('[data-button-panel]');
const buttons = Array.from(buttonPanel.children);

let displayPrimary = document.querySelector('[data-display-primary]');
let displaySecondary = document.querySelector('[data-display-secondary]');

let displayPrimaryValue = 0;
let displaySecondaryValue = 0;
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {

        

        //number button & decimal button code
        if(displayPrimary.textContent == '0') {
            if(event.target.textContent == '.') {
                displayPrimary.textContent = '0.'
            } else {
                displayPrimary.textContent = event.target.textContent;
            }
        } else {
            if(event.target.textContent == '.' && displayPrimary.textContent.includes('.')) return
            displayPrimary.textContent = displayPrimary.textContent + event.target.textContent;
        }

        //operator button code
        if(event.target.matches('[data-add]') || event.target.parentNode.matches('[data-add]')) {
            displaySecondary.textContent = displayPrimary.textContent;
            displayPrimary.textContent = '0';
            operator = '+';
        } else if (event.target.matches('[data-subtract]') || event.target.parentNode.matches('[data-subtract]')) {
            displaySecondary.textContent = displayPrimary.textContent;
            displayPrimary.textContent = '0';
            operator = '-';
        } else if (event.target.matches('[data-multiply]') || event.target.parentNode.matches('[data-multiply]')) {
            displaySecondary.textContent = displayPrimary.textContent;
            displayPrimary.textContent = '0';
            operator = '*';
        } else if (event.target.matches('[data-divide]') || event.target.parentNode.matches('[data-divide]')) {
            displaySecondary.textContent = displayPrimary.textContent;
            displayPrimary.textContent = '0';
            operator = '/';
        }
    
        //equals button code
        if(event.target.matches('[data-equals]') || event.target.parentNode.matches('[data-equals]')) {
            displayPrimaryValue = Number(displayPrimary.textContent);
            displaySecondaryValue = Number(displaySecondary.textContent);
            displayPrimary.textContent = calculate(displaySecondaryValue, operator, displayPrimaryValue);
            displaySecondary.textContent = '0';
            console.log(displayPrimaryValue);
            console.log(displaySecondaryValue);
            console.log(operator);
        }

        //clear button code
        if(event.target.matches('[data-clear]') || event.target.parentNode.matches('[data-clear]')) {
            displayPrimary.textContent = '0';
            displaySecondary.textContent = '0';
        }

        //plus-minus button code
        if(event.target.matches('[data-plus-minus]') || event.target.parentNode.matches('[data-plus-minus]')) {
            displayPrimary.textContent = '-' + displayPrimary.textContent
        }

        //percent button code
        if(event.target.matches('[data-percent]') || event.target.parentNode.matches('[data-percent]')) {
            displayPrimary.textContent = Number(displayPrimary.textContent) / 100;
        }

    })
})

function calculate (displaySecondaryValue, operator, displayPrimaryValue) {
  
    if (operator === '+') return displaySecondaryValue + displayPrimaryValue;
    if (operator === '-') return displaySecondaryValue - displayPrimaryValue;
    if (operator === '*') return displaySecondaryValue * displayPrimaryValue;
    if (operator === '/') return displaySecondaryValue / displayPrimaryValue;
  }