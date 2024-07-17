const input =document.getElementById("first")

function reverseString(str){
    return str.split("").reverse().join("")
}

function clickcheck(){
    const b=input.value
    const a=reverseString(b);
    
    if(b===a){
        alert("palindrome")
    }
    else{
        alert("not a plaindrome")
    }

}