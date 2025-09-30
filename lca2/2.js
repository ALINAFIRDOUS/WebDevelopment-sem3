let words = ["apple", "banana", "cherry", "grape", "orange"];
let searchWord = "cherry";
let found = false;

for (let i = 0; i < words.length; i++) {
    if (words[i] === searchWord) {
        console.log(`Word "${searchWord}" found at index "${i}"`);
        found = true;
        break;  
    }
}

if (!found) {
    console.log(`Word "${searchWord}" not found in the array.`);
}
