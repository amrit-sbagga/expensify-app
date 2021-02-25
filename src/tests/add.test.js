const add = (a, b) => a + b; //+1
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);


    // if(result !== 7){
    //     throw new Error(`You added 4 & 3. The result was ${result}. Expected 7`);
    // }
});

test('should generate greeting', () => {
    const name = generateGreeting("Monty");
    expect(name).toBe("Hello Monty");
});

test('should generate greeting for no name', () => {
    const name = generateGreeting();
    expect(name).toBe("Hello Anonymous");
})