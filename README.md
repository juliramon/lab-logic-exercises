# lab-logic-exercises

Excelente trabajo en los ejercicios Juli.

Teniendo en cuenta que ya sabes manejar reduce como en la iteracion 2, por que no refactorizar la 1 tambien?

```
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
```

en 

```
function greatestElement(numbers) {
  return numbers.reduce((accumulator, currentNumber) => {
   return currentNumber > accumulator ? currentNumber : accumulator;
},0)
}
```

Fijate que hay un metodo de arrays que se llama .reverse

asi, esto:
```
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
```

podria llegar a ser:

```
function checkPalindrome(str) {
  return str.toLowerCase().join("") === str.toLowerCase().split("").reverse().join(",)
}
```

En la iteracion 7 te recomiendo armar un objeto y no dos arrays:

```
cont morseObj = {
 a: "._",
 b: "--"
 c: "__..
 ....
}
```

de esta forma te evitas anidar loops 
````
for (var i = 0; i < input.length; i++) {
        const currentChar = input[i]
        convertedText += morseCodes[currentChar];   
    }
````

