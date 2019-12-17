function coord() {
    let arrCoordinates = [];
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
    
    for (let i = 0; i < letters.length; i++) {
        for (let j = 1; j <= 15; j++) {
            // console.log(letters[i]);
            arrCoordinates.push(`${letters[i]}-${j}`);// + ''; 
        } 
    }   
    
    return arrCoordinates;
} 

console.log(coord());