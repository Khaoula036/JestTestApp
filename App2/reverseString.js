const reverseString = str => 
    str
       .toLowerCase()  //before reverse convert to  lowercase 
       .split('')
       .reverse()
       .join('');

module.exports = reverseString; 


//to run automatically : npm run testWatch