 const Manager = require('../lib/Manager.js');

// tests managers office number
test('gets managers office number', () => {
    const manager = new Manager('Will', 77, 'williampikus@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(1);
});

// tests get role
test('gets role of employee', () => {
    const manager = new Manager('Will', 77, 'williampikus@gmail.com', 1);

    expect(manager.getRole()).toEqual("Manager");
}); 