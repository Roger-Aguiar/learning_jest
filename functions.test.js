const functions = require('./functions');
const mockUser = require('./mocks/mockUsers');

test('2 + 2 should be equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('10 - 2 should be equal 8', () => {
    expect(functions.subtract(10, 2)).toBe(8);
});

test('2 * 2 should be equal 4', () => {
    expect(functions.times(2, 2)).toBe(4);
});

test('12 / 2 should be equal 6', () => {
    expect(functions.divide(12, 2)).toBe(6);
});

test('It should create an user object', () =>{
    expect(functions.createUser()).toStrictEqual(mockUser.createMockUser());
});

//it makes a test in a Promisse
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual("Leanne Graham");
    })
});

//It makes a test in a Promisse
test('The fetch fails with an error', () => {    
    return functions.fetchUser().catch(e => expect(e).toMatch('error'));
});

//It tests an async function
test('Async function: User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    await expect(data.name).toEqual("Leanne Graham");
});

//It makes a test in a Promisse using resolves
test('It should return a user data', () => {
    expect.assertions(1);
    return expect(functions.fetchUser()).resolves.toStrictEqual(mockUser.getUsers());
});
