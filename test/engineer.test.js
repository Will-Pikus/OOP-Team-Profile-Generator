const Engineer = require('../lib/Engineer.js');

// test engineers github
test('gets engineers github', () => {
    const engineer = new Engineer('Will', 77, 'williampikus@gmail.com', 'Will-Pikus');
    
    expect(engineer.getGithub()).toEqual('Will-Pikus');
});

// gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('Will', 77, 'williampikus@gmail.com', 'Will-Pikus');

    expect(engineer.getRole()).toEqual("Engineer");
}); 