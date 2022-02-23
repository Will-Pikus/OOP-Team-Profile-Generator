const Intern = require('../lib/Intern.js');

// tests interns school 
test('gets interns school', () => {
    const intern = new Intern('Will', 77, 'williampikus@gmail.com', 'WWU');
    
    expect(intern.getSchool()).toEqual('WWU');
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Will', 77, 'williampikus@gmail.com', 'WWU');

    expect(intern.getRole()).toEqual("Intern");
}); 