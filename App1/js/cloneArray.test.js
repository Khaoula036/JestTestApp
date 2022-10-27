const cloneArray = require('./cloneArray')


test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})




//fAILED TEST : the arrays are not the same because they have different adress memory despite they seem to be the same
//We have to use .toEqual
// test('properly clones array', () => {
//     const array = [1, 2, 3]
//     expect(cloneArray(array)).toBe(array)
// })