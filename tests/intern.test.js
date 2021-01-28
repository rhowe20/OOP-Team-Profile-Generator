const Intern = require('../lib/intern');

test('Can create a school name', () => {
    const newIntern = new Intern('Becca', '1234', 'buckets', 'PSU')

    expect(newIntern.school).toBe('PSU')
});

test('Can create a Intern', () => {
    const newIntern = new Intern()

    expect(newIntern.getRole()).toBe('Intern')
});
