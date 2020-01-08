//inport our functions file here
const functions = require('./functions');


//toBe used to compare primative types
test('add 2+2 to equal 4', ()=> {
	expect(functions.add(2,2)).toBe(4);
});

test('add 2+2 to not equal 5', ()=> {
	expect(functions.add(2,2)).not.toBe(5);
});

//less than
test('Total shoul be less than 100', ()=> {
	expect(functions.add(20,75)).toBeLessThan(100);
});

//less than or Eqal to
test('Total shoul be less than or Equal to 100', ()=> {
	expect(functions.add(25,75)).toBeLessThanOrEqual(100);
});

//greater than
test('Total shoul be greater than 100', ()=> {
	expect(functions.add(30,75)).toBeGreaterThan(100);
});

//value should be null
test('should be null', ()=> {
	expect(functions.isNull()).toBeNull();
});

//should return as false
test('should be falsy', ()=> {
	expect(functions.checkValue(null)).toBeFalsy();
});

//should return as true
test('should be truthy', ()=> {
	expect(functions.checkValue(1)).toBeTruthy();
});

//toEqual - can't use toBe for arrays/objects as they are reference types
//also- example of how test can be from internal function doesn't have to be a function in the js.
test('User Should be Bee Object', ()=> {
	expect(functions.createUser()).toEqual({
		firstName: 'Bee',
		lastName: 'Bo'
	});
});

//regexp
//also example of how test can be a string/variable or other doesn't have to be function
test('There is no i n team', ()=>{
	expect('team').not.toMatch(/I/);
});

//array contains
test('Black Widow should be in Avengers', ()=> {
	const avengers = ['Iron Man', 'Captain America', 'Black Widow'];
	expect(avengers).toContain('Black Widow');
});

//Async data use expect assertion and return your function else will pass.
test('User fetched user id is 1', ()=>{
	expect.assertions(1);
	return functions.fetchUser().then(data => {
		expect(data.id).toBe(1);
	});
});

//or use Async await
test('User fetched user id is 1', async ()=>{
	expect.assertions(1);
	const data = await functions.fetchUser().then(data => {
		expect(data.id).toBe(1);
	});
});
