// 1 - Escriba una función que retorne el mayor elemento de un array de números
// No vale utilizar el método .sort()
let numeros = [10, 9, 5, 20, 15];

let greatestElement = numbers => {
    // con forEach
    let highestNumber = 0;
    numbers.forEach(function (number) {
        if (number > highestNumber) {
            highestNumber = number;
        }
    })
    // con for loop
    /*for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
        }
    }*/
    return highestNumber;
};
console.log("el elemento mas grande es: " + greatestElement(numeros));

// 2 - Escriba una función que calcule la suma de todos los elementos numéricos de un array
let suma = numbers => {
    // con .reduce()
    let count = numbers.reduce(function (acc, number) {
        return acc + number
    })
    // con for loop
    /*for (let i = 0; i < numbers.length; i++) {
        count += numbers[i];
    }*/
    return count;
};
console.log("la suma es: " + suma(numeros));

// 3 - Escriba una función que retorne true si una String es un palíndromo

const strPalindrome = "Red rum, sir, is murder";

let checkPalindrome = strCheck => {
    const cleanString = strPalindrome.replace(/,/g, '').split(" ").join("").toLowerCase();
    let reverseString = "";
    for (let i = cleanString.length - 1; i >= 0; i--) {
        reverseString += cleanString[i];
    }
    if (reverseString === cleanString) {
        return true;
    } else {
        return false;
    }
};

console.log(`Is the string "${strPalindrome}" a palindrome? ${checkPalindrome(strPalindrome)}`);

// 4 - Escriba una función que combine 2 listas alternando sus elementos.
// ej: [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const list1 = ["a", "b", "c"];
const list2 = [1, 2, 3];

let combineElements = (arr1, arr2) => {
    let list3 = [];
    for (let i = 0; i < arr1.length; i++) {
        list3.push(arr1[i], arr2[i]);
    }
    return list3;
};

let mixedList = combineElements(list1, list2);

console.log(mixedList);

// 5 - Escribe una función que calcule la lista de los primeros 100 números Fibonacci 
// Los primeros números Fibonacci son 1 y 1. 
// El enésimo numero Fibonacci se calcula agregando el enésimo-1 con el enésimo-2
//  1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

let calculateFibonacci = fiboLimit => {
    let previousN1 = 1;
    let previousN2 = 1;
    let next = 0;
    let fiboArray = [previousN1, previousN2];
    for (let i = 2; i <= fiboLimit; i++) {
        next = previousN1 + previousN2;
        previousN1 = previousN2;
        previousN2 = next;
        fiboArray.push(next);
    }
    return fiboArray;
}

console.log(calculateFibonacci(100));

// 6 - Escribir función para tomar un array de Strings e imprimir, cada palabra en una línea
// dentro de un cuadro retangular. 
// Por ejemplo la lista ["Hello", "World", "in", "a", "frame"] debería salir así:
//
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

const arrayStrings = ["Hello", "World", "in", "a", "frame"];

let addSpaces = arrStrings => {
    let longestString = 0;
    arrStrings.forEach(function (string) {
        if (string.length > longestString) {
            longestString = string.length;
        }
    });
    let newArray = [];
    let spacer = " ";
    for (let i = 0; i < arrStrings.length; i++) {
        let convertedString = "* " + arrStrings[i] + spacer.repeat(longestString - arrStrings[i].length) + " *" + '\n';
        newArray.push(convertedString);
    }
    newArray.unshift("*".repeat(longestString + 4) + '\n');
    newArray.push("*".repeat(longestString + 4));
    newArray = newArray.join('');
    return newArray;
};

addSpaces(arrayStrings);

// 7 - Escribir función para converter un texto en código-morse y vice-versa
// ej: toMorseCode("SOS") debería ser retornar "...---..."

const str = "SOS";

let toMorseCode = input => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const morseCodes = [". -", "- . . .", "- . - .", "- . .", ".", ". . - .", "- - .", ". . . .", ". .", ". - - -", "- . -", ". - . .", "- -", "- .", "- - -", ". - - .", "- - . -", ". - .", ". . .", "-", ". . -", ". . . -", ". - -", "- . . -", "- . - -", "- - . .", ". - - - -", ". . - - -", ". . . - -", ". . . . -", ". . . . .", "- . . . .", "- - . . .", "- - - . .", "- - - - .", "- - - - -"];
    let convertedText = "";
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < alphabet.length; j++) {
            if (input[i].toLowerCase() == alphabet[j]) {
                convertedText += morseCodes[j];
            }
        }
    }
    return convertedText;
};

console.log(toMorseCode(str));

// 8 - A partir de 2 Strings, escribir un programa que encuentre la sequencia comun de caracteres más grande
// ej: subsequence("Hola soy una String", "Hola soy una otra String")
// debería retornr "Hola soy una "
// ojo que la palabra "String" también es una sequencia comun, bien como "una", "soy", la letra "a"...
// pero hay que retornar la string comun más grande posible

const string1 = "Hola soy una string";
const string2 = "Hola soy una otra string";

let checkLongestSequence = (str1, str2) => {
    let sequence = "";

    return sequence;
};