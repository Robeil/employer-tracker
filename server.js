const inquirer = require('inquirer');
const logo = require('asxiiart-logo');
const prompt = require('/db');
require('console.table');

async function viewAllTitles() {
  const titles = await db.viewallTitles();

  console.log('/n');
  console.table(titles);

  mainPrompt()
}


// viewallhouses

const { choice } = inquirer.prompt(prompts.mainPromt);

//then use swich method