const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

console.log('==============================================');

const isAdult = age => {
    if (age >= 18) {
        return 'Adult';
    } else {
        return 'Minor';
    }
}

console.log('Exercise 2 Result:', isAdult(21));

console.log('==============================================');

const isCharAVowel = character => {
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log('Exercise 3 Result:', isCharAVowel("a"));

console.log('==============================================');

const generateEmail = (name, domain) => `${name}@${domain}`;

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

console.log('==============================================');

const greetUser = (name, time) => `Good ${time}, ${name}!`

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

console.log('==============================================');

const maxOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num2 && num3 > num1) {
        return num3;
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

console.log('==============================================');

const calculateTip = (amount, percentage) => amount * (percentage / 100);

console.log('Exercise 7 Result:', calculateTip(50, 20));

console.log('==============================================');

const convertTemperature = (temprature, scale) => {
    if (scale == 'C') {
        return (temprature * (9 / 5)) + 32;
    } else {
        return (temprature - 32) * 5 / 9;
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

console.log('==============================================');

const basicCalculator = (num1, num2, operator) => {
    switch (operator) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

console.log('==============================================');

const calculateGrade = num => {
    if (100 >= num >= 90) {
        return 'A';
    } else if (num < 90) {
        return 'B';
    } else if (num < 80) {
        return 'C';
    } else if (num < 70) {
        return 'D';
    } else if (0 < num < 60) {
        return 'F';
    }
}

console.log('Exercise 10 Result:', calculateGrade(85));

console.log('==============================================');

const createUsername = (firstName, lastName) => {
    return firstName.slice(0, 3) + lastName.slice(0, 3) + (firstName.length + lastName.length)
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

console.log('==============================================');

function numArgs() {
    return arguments.length;
}
console.log('Exercise 12 Result:', numArgs(2, 3, 4));

console.log('==============================================');

