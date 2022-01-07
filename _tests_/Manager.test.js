const Manager = require("../lib/Manager");

test("Can instantiate manager with constructor arguements", () =>{
    const manager = new Manager("Reggie", 1, "reggie@reggie.com", 111);

    expect(manager.name).toBe("Reggie");
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("reggie@reggie.com");
    expect(manager.officeNumber).toBe(111);
});

test("Can get office number via getOfficeNumber()", () => {
    const manager = new manager("Reggie", 1, "reggie@reggie.com", 111);

    expect.name(manager.getOfficeNumber()).toBe(111);
});

test("Can get role via getRole()", () => {
    const manager = new manager("Reggie", 1, "reggie@reggie.com", 111);

    expect.name(manager.getGithub()).toBe("Manager");
});