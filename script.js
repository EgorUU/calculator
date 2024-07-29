const buttons = document.querySelectorAll('.management>button');
const input = document.querySelector('.introduction>input')
let operator
let i
buttons.forEach((b) => {
    // switch (b.textContent)
    b.addEventListener('click', () => {
        if (b.textContent == '=') {
            switch (operator) {
                case '+':
                    i = input.value.slice(input.value.indexOf('+') + 1)
                    input.value = parseInt(input.value) + parseInt(i)
                    break;
                case '-':
                    i = input.value.slice(input.value.indexOf('-') + 1)
                    input.value = parseInt(input.value) - parseInt(i)
                    break;
                case '*':
                    i = input.value.slice(input.value.indexOf('*') + 1)
                    input.value = parseInt(input.value) * parseInt(i)
                    break;
                case '/':
                    i = input.value.slice(input.value.indexOf('/') + 1)
                    input.value = parseInt(input.value) / parseInt(i)
                    break;
            }
        }
        else if (b.textContent == 'C') {
            input.value = ''
        }
        else {
            switch (b.textContent) {
                case '+':
                    operator = '+';
                    break;
                case '-':
                    operator = '-';
                    break;
                case '/':
                    operator = '/';
                    break;
                case '*':
                    operator = '*';
                    break;
            }
            input.value += b.textContent
        }
        
    })
})
