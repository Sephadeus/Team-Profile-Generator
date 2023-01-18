const buildTeam = (team) => {
let page = [];
  //Manager profile template
  const managerProfile = (manager) => {
   return `<section class="profile manager">
            <h2 class="employee-name">${manager.getName()}</h2>
            <br>
            <ul>
                <li>Role: ${manager.getRole()}</li>
                <li>Email: <a href="mailto: ${manager.getEmail()}">${manager.email}</a></li>
                <li>Office Number: ${manager.getOfficeNum()}</li>
                <li>ID: ${manager.getID()}</li>
            </ul>
        </section>`;
  };

  //Engineer profile template
  const engineerProfile = (engineer) => {
   return  `<section class="profile engineer">
        <h2 class="employee-name">${engineer.getName()}</h2>
        <br>
        <ul>
            <li>Role: ${engineer.getRole()}</li>
            <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li>Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.getGit()}</a></li>
            <li>ID: ${engineer.getID()}</li>
        </ul>
    </section>`;
  };

  //Intern profile template
  const internProfile = (intern) => {
   return `<section class="profile intern">
        <h2 class="employee-name">${intern.getName()}</h2>
        <br>
        <ul>
            <li>Role: ${intern.getRole()}</li>
            <li>Email: <a href="mailto: ${intern.getEmail()}"> ${intern.getEmail()}</a></li>
            <li>School: ${intern.getSchool()}</li>
            <li>ID: ${intern.getID()}</li>
        </ul>
    </section>`;
  };

  for (let i = 0; i < team.length; i++) {

    if (team[i].getRole() == "Manager") {
        managerProfile(team[i]);
      page.push(managerProfile(team[i]));
    }
     if (team[i].getRole() == "Engineer") {
        engineerProfile(team[i]);
       page.push(engineerProfile(team[i]));
    } 
    if (team[i].getRole() == "Intern") {
        internProfile(team[i]);
      page.push(internProfile(team[i]));
    } 
 page.join(``);
//  console.log(page, "page");
  }
return page;
};


module.exports = (team) => {
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
    </html>`;
}
