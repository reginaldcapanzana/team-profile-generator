const Employee = require("../lib/Employee");

test("Can instantiate Employee with constructor arguements", () =>{
    const employee = new Employee("Reggie", 1, "reggie@reggie.com");

    expect(employee.name).toBe("Reggie");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("reggie@reggie.com");
});

test("Can get name via getName()", () => {
    const employee = new Employee("Reggie", 1, "reggie@reggie.com");

    expect(employee.getName()).toBe("Reggie");
});

test("Can get id via getId()", () => {
    const employee = new Employee("Reggie", 1, "reggie@reggie.com");

    expect(employee.getId()).toBe(1);
});

test("Can get email via getEmail()", () => {
    const employee = new Employee("Reggie", 1, "reggie@reggie.com");

    expect(employee.getEmail()).toBe("reggie@reggie.com");
});

test("Can get role via getRole()", () => {
    const employee = new Employee("Reggie", 1, "reggie@reggie.com");

    expect(employee.getRole()).toBe("Employee");
});
