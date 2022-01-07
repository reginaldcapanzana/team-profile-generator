const Engineer = require("../lib/Engineer");

test("Can instantiate Engineer with constructor arguements", () =>{
    const engineer = new Engineer("Reggie", 1, "reggie@reggie.com", "regGithub");

    expect(engineer.name).toBe("Reggie");
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("reggie@reggie.com");
    expect(engineer.github).toBe("regGithub");
});

test("Can get github username via getGithub()", () => {
    const engineer = new Engineer("Reggie", 1, "reggie@reggie.com", "regGithub");

    expect.name(engineer.getGithub()).toBe("regGithub");
});

test("Can get role via getRole()", () => {
    const engineer = new Engineer("Reggie", 1, "reggie@reggie.com", "regGithub");

    expect.name(engineer.getGithub()).toBe("Engineer");
});