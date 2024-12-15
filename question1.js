//palindrome

let  number=11311;
let string=number.toString();
let reverseString="";

for(let i=string.length-1;i>=0; i--)
{
    reverseString+=string[i];
}
if(string===reverseString){
    console.log("its a palindrome");
    
}
else{
    console.log("its not a palindrome")
}