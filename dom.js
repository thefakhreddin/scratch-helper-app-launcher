var exec = require("child_process").execFile;
let state = "not_running";
let child_process = null;

document.querySelector("#connect-botton").onclick = () => {
  if (state == "not_running") {
    console.log("!!!!!!!");
    child_process = exec("server.exe", (err, stdout, stderr) => {
      if (err) console.log(err);
      if (stdout) console.log(stdout);
      if (stderr) console.log(stderr);
    });
    document.querySelector("#connect-botton").querySelector("a").innerHTML =
      "Disconnect";
    state = "running";
    console.log("@@@@@");
  } else if (state == "running") {
    if (child_process != null) child_process.kill;
  }
};

function docInit() {}

module.exports = { docInit };
