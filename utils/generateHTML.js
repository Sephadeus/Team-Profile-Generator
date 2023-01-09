const buildTeam = (team) => {
    const page = [];

    const managerProfile = manager => {
        let managerHTML = `<div id="team" class="team">
        <section class="profile manager">
            <h2 class="employee-name">${manager.name}</h2>
            <br>
            <ul>
                <li>Role: ${manager.getRole}</li>
                <li>Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
                <li>Office Number: ${manager.officeNumber}</li>
                <li>ID: ${manager.id}</li>
            </ul>
        </section>`;

         page.push(managerHTML);
    }
    const engineerProfile = engineer => {
        let engineerHTML = `<section class="profile engineer">
        <h2 class="employee-name">${engineer.name}</h2>
        <br>
        <ul>
            <li>Role: ${engineer.getRole}</li>
            <li>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li>Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            <li>ID: ${engineer.id}</li>
        </ul>
    </section>`;

    page.push(engineerHTML);
    }

    const internProfile = intern => {
        let internHTML = `<section class="profile intern">
        <h2 class="employee-name">${intern.name}</h2>
        <br>
        <ul>
            <li>Role: ${intern.getRole}</li>
            <li>Email: <a href="mailto: ${intern.email}"> ${intern.email}</a></li>
            <li>School: ${intern.school}</li>
            <li>ID: ${intern.id}</li>
        </ul>
    </section>`;

    page.push(internHTML);
    }

    for(let i = 0; i < team.length; i++) {

        if(team[i].getRole == "Manager") {
            managerProfile(team[i]);
        } else if (team[i].getRole == "Engineer") {
            engineerProfile(team[i]);
        } else if(team[i].getRole == "Intern") {
            internProfile(team[i]);
        } else {
            console.log("Something went awry");
        }
    }

    return page.join('');
}

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
    </head>
    <header class="header">
        <h1 class="headline">Our Team:</h1>
    </header>
    <body>
        <div id="team" class="team">
            ${buildTeam(team)}
        </div>
    </body>
    </html>`
}