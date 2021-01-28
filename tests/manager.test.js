const Manager = require('../lib/manager');

test('Can create an office number', () => {
    const newManager = new Manager('Becca', '1234', 'buckets', '555')

    expect(newManager.officeNumber).toBe('555')
});

test('Can create a Manager', () => {
    const newManager = new Manager()

    expect(newManager.getRole()).toBe('Manager')
});
