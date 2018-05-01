//Write a function which receives a string and returns the length of the string; function('abc') returns 3
function returnLen(value){
    return value.length;
}
//Write a function which returns the calling string value converted tolowercase. //function("ALPHABET"); // return "alphabet"
function lowerCase(value){
    var str = "";
    for (var i = 0; i < value.length; i++){
     if (value.charCodeAt(i) >=65 && value.charCodeAt(i) <= 90) {
         str += String.fromCharCode(value.charCodeAt(i) + 32)
        }
        else{
         str += value[i];
     }
    }
    return str;
}

function upperCase(value){
    var str = "";
    for (var i = 0; i < value.length; i++){
        if (value.charCodeAt(i) >=97 && value.charCodeAt(i) <= 122) {
            str += String.fromCharCode(value.charCodeAt(i) - 32)
        }
        else{
            str += value[i];
        }
    }
    return str;
}
//Write a function which receives one argument (string) and return the reverse version of the string. Function('abc123') return '321cba'
function reverser(value){
    var str = "";
    for (var i = value.length; i >=  0 ; i--){
        str += value.charAt(i);
    }
    return str;
}
/*Write a function which receives one argument (array) return the sum of the numerical values.
function([1,2,'3','a') return 6. Notice how the function skips non-numerical values
*/
function addArray(value){
    var sum = 0;
    for (var i = 0; i < value.length; i++){
        if (!isNaN(value[i])) {
            sum += parseInt(value[i]);
        }
    }
    return sum;
}
/*
Write a function which receives two arguments a string and a character. The function should remove all similar character to the character parameter
from the string and return the new string. function("abacdef","A") return bcdef
 */
function charRemove(value, v){
    var str = "";
    for (var i = 0; i < value.length; i++){
        if (value[i] === upperCase(v) || value[i] === lowerCase(v) || value[i] === v){
            str[i] = "";
        }
        else{
            str += value[i];
        }
    }
    return str;
}
/*
Write a function which combines the two strings it receives
as its parameters by placing one character from each string and return the resulting string. function("ABC","Defg") return ADBeCfg
 */
function alternate(s1, s2){
    var str = "";
    if (s1.length >= s2.length) {
        for (var i = 0; i < s1.length; i++) {
            str += s1.charAt(i) + s2.charAt(i);
        }
    }
    if (s1.length < s2.length) {
        for (var j = 0; j < s2.length; j++) {
            str += s1.charAt(j) + s2.charAt(j);
        }
    }
        return str;
}
/*
Write a function which receives two arguments (string , findChar).
Search the string for findChar when the value is found, change its case to the opposite case. funcntion('Abca', 'a') returns 'abcA'
 */
function caseChanger(value, findChar){
    var str = "";
    for (var i = 0; i < value.length; i++){
        if (value[i] === upperCase(findChar)) {
            str += lowerCase(value[i]);
        }
        else if (value[i] === lowerCase(findChar)) {
            str += upperCase(value[i]);
        }
        else{
            str += value[i];
        }
    }
    return str;
}
/*
Write a function which removes whitespace from both ends of the receiving string.
Whitespace in this context is all the whitespace characters (spaces, tabs, and newlines.) function(" value	") //return" value"
 */
function whitespace(value){
    var str = "";
    var i = 0;
    var j = value.length -1;
    while (value[i] === " " || value[i] === "\n" || value[i] === "\t"){
        i++;
    }
    while (value[j] === " " || value[j] === "\n" || value[j] === "\t"){
        j--;
    }
    for (; i <= j; i++){
        str += value[i];
    }
    return str;
}
/*
Write a function to concatenate two strings and return a new string.
The first string must be the one with smaller ASCII character value. (A (65) < a (97)) function('A123','B123') return A123B123
 */
function asciiCompare(val1, val2){
    var str = "";
    if (val1[0] < val2[0]){
        str = val1 + val2;
    }
    else{
        str = val2 + val1;
    }
    return str;
}
/*
Write a function that accepts an array and a value and checks every element from given array against given value and returns true if the value of any array element is bigger than given value.
function( [5,10], 5) // true // function([6,10],11) //false’, (Note: similar functionality as Array.every )
 */
function myEvery(value, num){
    var counter = 0;

    for (var i = 0; i < value.length; i++){

        if (isNaN(value[i])){
            if (value > num){
                counter++;
            }
        }
        else if (value[i] > num ){
            counter++;
        }
    }
    return counter === value.length;
}