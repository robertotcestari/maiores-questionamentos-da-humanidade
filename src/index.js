#!/usr/bin/env node

var inquirer = require("inquirer");
var figlet = require("figlet");
const playSong = require("./playSong");
const handle = require("./pergunta1");
const handle2 = require("./pergunta2");

const choices = [
  { name: "Primeira pergunta mais importante da humanidade", value: "1" },
  { name: "Segunda pergunta mais importante da humanidade", value: "2" },
];


console.log(" ");

console.log("= = = = = = =");
console.log("Feito carinhosamente para a Turma 21!");
console.log("Escolha as perguntas mais importantes da humanidade");
console.log("= = = = = = =");
console.log(" ");
console.log(" ");

inquirer
  .prompt([
    {
      type: "list",
      name: "name",
      message: "Quais são as duas perguntas mais importantes da humanidade?",
      choices,
    },
  ])
  .then(({ name }) => {
    if (!module.parent && name === "1") {
     return handle();
    }

    if (!module.parent && name === "2") {
      return handle2();
     }
  })
  .catch((error) => {
    console.log("Ops... aconteceu alguma coisa errada com isso!");
  });

