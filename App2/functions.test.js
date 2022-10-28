const { createUser } = require('./functions');
const functions = require('./functions');

//ToBe
test('Adds 2 +2 to equal 4' , () => {
    expect(functions.add(2, 2)).toBe(4);
});

//NottoBe
test('Adds 2 +2 to NOT equal 5' , () => {
    expect(functions.add(2, 2)).not.toBe(5);
});


/*CHECK FOR TRUTHY & FALSY VALUES
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite if toBeUndefined 
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matche anything that an if statement treats as false 
*/

//ToBeNull
test('should be null' , () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy 
//Passed : with => null , undefined, 0
test('should be falsy' , () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

//FAILED : with => AnyValue except : (null , undefined, 0)
// test('should be falsy' , () => {
//     expect(functions.checkValue(2)).toBeFalsy();
// });


//Using ToEqual for Object
test('User should be Brad Traversy object' , () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

//For Primitive types like String, Number ,.. we can use toBe 
//For : Arrays and Objects : We Use toEqual
//FAILED BECAUSE OBJECTS ARE NOT STORED IN THE SAME PLACE , EVEN IF THE VALUES ARE THE SAME 
// test('User should be Brad Traversy object' , () => {
//     expect(functions.createUser()).toBe({
//         firstName: 'Brad',
//         lastName: 'Traversy'
//     });
// });


//tests than and greater than 
//ToBeLessThan
 test('Should be under 1600' , () =>{
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
 });

 //ToBeLessThanOrEqual
 test('Should be under 1600' , () =>{
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test('There is no team', () => {
    expect('teami').not.toMatch(/I/)
})

//Arrays
test('Admin should be in username' , () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

