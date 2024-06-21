//Exercise-1

//By using convert first letter of string into uppercase

var inputStr=prompt("enter string to capitalise")
const firstLettercapital=(Str)=>{
    var newStr=Str.split("")
    var newArr=newStr.map((value)=>{
        return value.charAt(0).toUpperCase() +value.slice(1)//Hhello Wworld
    });
    return newArr.join("")
}
console.log(firstLettercapital(inputStr));