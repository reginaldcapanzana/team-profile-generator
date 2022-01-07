const teamGenerator = team => {
    const genManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${manager.getName()}</h2>
                <h3>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };
    const genEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${engineer.getName()}</h2>
                <h3>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };
    const genIntern = intern => {
        return `
        <div class="card">
            <div class="card-header">
                <h2>${intern.getName()}</h2>
                <h3>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };
    
    // Create array of cards based on employee seniority
    // A card contains the html that will be displayed on the web page
    const cards = [];

    cards.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => genManager(manager))
    );

    cards.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => genEngineer(engineer))
    );

    cards.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => genIntern(intern))
    );

    return cards.join("");
};



module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    ${teamGenerator(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
};