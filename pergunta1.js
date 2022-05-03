var inquirer = require("inquirer");
var figlet = require("figlet");
const playSong = require("./playSong");

function handle() {
  const choices = [
    { name: "Claro, amigo, estou aqui!", value: "toystory" },
    {
      name: "Não.",
      value: "no",
    },
  ];
  console.log(" ");

  console.log("= = = = = = =");
  console.log("Manu, por que você não assiste");
  console.log(figlet.textSync("Toy Story?"));
  console.log("= = = = = = =");
  console.log(" ");
  console.log(" ");
  console.log(" ");
  inquirer
    .prompt([
      {
        type: "list",
        name: "name",
        message: "Vamos convencer a Manu?",
        choices,
      },
    ])
    .then(({ name }) => {
      if (name === "toystory") {
        return playSong(name);
      }

      console.log(
        "Infelizmente divertidamente é o que tem pra hoje... vlw, flw."
      );
    })
    .catch((error) => {
      console.log("Ops... aconteceu alguma coisa errada com isso!");
    });
}

module.exports = handle;
