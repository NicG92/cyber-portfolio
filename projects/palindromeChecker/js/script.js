const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("result");

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);

    // Simple version with method calls 
    // return str.split("").reverse().join("");
}

const checkPalindrome = (str) => {
    // if input is blank -> alert
    if (str === '') {
        alert('Please input a value');
        return;
    }

    // clear previous output
    // output.innerHTML = '';

    // clean the input value
    // toLowerCase() method to replace Uppercase characters with
    // lowercase
    // replace() method to replace any spaces/special characters with ""
    const cleanInput = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    // Conditional Operator + recursion 
    const reverseCleanInput = reverseString(cleanInput);

    let outputMessage = `<b>${input.value}</b> 
    ${reverseCleanInput === cleanInput ? 'is' : 'is not'} 
    a palindrome`;

    const pElement = document.createElement('p');
    pElement.innerHTML = outputMessage;
    output.appendChild(pElement);
    // check is reverse input strictly matches clean input
    // return reverseCleanInput === cleanInput;
}

checkBtn.addEventListener("click", () => {
    checkPalindrome(input.value);
    input.value = '';
});

clearBtn.addEventListener("click", () => {
    output.innerHTML = '';
})

