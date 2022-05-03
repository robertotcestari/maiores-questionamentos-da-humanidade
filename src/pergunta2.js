var inquirer = require("inquirer");
var figlet = require("figlet");
const playSong = require("./playSong");

function handle2() {
  const choices = [
    { name: "Ouça com os próprios ouvidos", value: "1" },
    {
      name: "Versão Hard - Loop de 10h de Boa Tarde Turma 21.",
      value: "2",
    },
  ];
  console.log(" ");

  console.log("= = = = = = =");
  console.log("Por que a Let tem o tom imutável na seguinte frase:");
  console.log(figlet.textSync("Boa tarde turma 21..."));
  console.log("= = = = = = =");
  console.log(" ");
  console.log(" ");

  inquirer
    .prompt([
      {
        type: "list",
        name: "name",
        message: "Boa tarde turma 21...",
        choices,
      },
    ])
    .then(({ name }) => {
      if (name === "1") {
        return playSong("boatardeturma21");
      }

      if (name === "2") {
        return playSong("boatardeturma21loop");
      }

     
    })
    .catch((error) => {
      console.log("Ops... aconteceu alguma coisa errada com isso!");
    });
}


module.exports = handle2