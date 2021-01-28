const Employee = require('../lib/employee');

test('Can create a name', () => {
    const newEmployee = new Employee('Matt')

    expect(newEmployee.name).toBe('Matt')
});

test('Can create an ID', () => {
    const newEmployee = new Employee('Matt', '1234')

    expect(newEmployee.id).toBe('1234')
});

test('Can create a email', () => {
    const newEmployee = new Employee('Matt', '1234', 'blue@gmail.com')

    expect(newEmployee.email).toBe('blue@gmail.com')
});

test('Can create an Employee', () => {
    const newEmployee = new Employee()

    expect(newEmployee.getRole()).toBe('Employee')
});