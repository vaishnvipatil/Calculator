let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => { // Use 'click' instead of 'Click'
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string); // Use eval cautiously
                input.value = string;
            } catch (error) {
                input.value = "Error"; // Handle errors from eval
                string = ""; // Reset string
            }
        } else if (e.target.innerHTML == 'AC') {
            string = ""; // Change " " to ""
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
