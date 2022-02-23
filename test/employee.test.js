const Employee = require('../lib/Employee.js');

// test employees name
test('gets employees name', () => {
    const employee = new Employee('Will', 77, 'williampikus@gmail.com');
    
    expect(employee.getName()).toEqual('Will');
});

// test employees ID
test('gets employees ID', () => {
    const employee = new Employee('Will', 77, 'williampikus@gmail.com');
    
    expect(employee.getID()).toEqual(77);
});

// test employees email
test('gets employees email', () => {
    const employee = new Employee('Will', 77, 'williampikus@gmail.com');
    
    expect(employee.getEmail()).toEqual('williampikus@gmail.com');
});

// test employees role
test('gets employees role', () => {
    const employee = new Employee('Will', 77, 'williampikus@gmail.com');
    
    expect(employee.getRole()).toEqual('Employee');
});