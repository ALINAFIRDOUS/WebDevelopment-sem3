
let Roll_No = [1,2,3,4,5,6,7,8,9,10];
let target = parseInt(prompt("Enter the number to search:"));
let found = false;
for (let i = 0; i < Roll_No.length; i++) {
    if (Roll_No[i] === target) {
        console.log("Roll_no found at index " + i);
        found = true;
        break;
    }
}
if (!found) {
    console.log("Roll_no not found in the array.");
}