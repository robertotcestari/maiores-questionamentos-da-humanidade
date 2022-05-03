const exect = require("child_process").exec;
const progressBar = require("./progressBar");
const path = require("path");
const fs = require("fs");

function playSong (filename) {
  const mainPath = path.dirname(fs.realpathSync(__filename));
  const soundPath = path.join(mainPath, `./assets/${filename}`);
  const soundTime = 50;

  const linuxcmd = "paplay " + soundPath + ".ogg";
  const windowscmd =
    path.join(mainPath, "./forWindows.vbs") + " " + soundPath + ".mp3";
  const maccmd = "afplay " + soundPath + ".mp3";

  const platform = process.platform;

  console.log("... uma das melhores músicas do mundo!🎼 🎸");

  switch (platform) {
    case "linux":
      exec(linuxcmd);
      break;
    case "win32":
      exec(windowscmd);
      break;
    case "darwin":
      exec(maccmd);
      break;
  }
  progressBar(soundTime);

  function exec(cmd) {
    return exect(cmd, function (error, stdout, stderr) {
      if (error) console.error(error);
    });
  }
};

module.exports = playSong;
