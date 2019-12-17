function wildCode(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "WildCode"
    } 

    if (num % 3 === 0) {
        return "Wild"
    } 

    if (num % 5 === 0) {
        return "Code"
    } 
} 

console.log(wildCode(15));