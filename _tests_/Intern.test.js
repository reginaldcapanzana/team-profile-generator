const Intern = require("../lib/Intern");

test("Can instantiate Intern with constructor arguements", () =>{
    const intern = new Intern("Reggie", 1, "reggie@reggie.com", "SDSU");

    expect(intern.name).toBe("Reggie");
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("reggie@reggie.com");
    expect(intern.school).toBe("SDSU");
});

test("Can get school via getSchool()", () => {
    const intern = new Intern("Reggie", 1, "reggie@reggie.com", "SDSU");

    expect.name(intern.getSchool()).toBe("SDSU");
});

test("Can get role via getRole()", () => {
    const intern = new Intern("Reggie", 1, "reggie@reggie.com", "SDSU");

    expect.name(intern.getGithub()).toBe("Intern");
});