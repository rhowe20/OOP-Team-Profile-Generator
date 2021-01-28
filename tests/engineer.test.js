const Engineer = require('../lib/engineer');

test('Can create an Github username', () => {
    const newEngineer = new Engineer('Becca', '1234', 'buckets', 'berko')

    expect(newEngineer.github).toBe('berko')
});

test('Can create an Engineer', () => {
    const newEngineer = new Engineer()

    expect(newEngineer.getRole()).toBe('Engineer')
});
