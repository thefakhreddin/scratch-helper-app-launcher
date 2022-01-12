var exec = require("child_process").execFile;
var open = require("open");
const path = require("path");

let state = "not_running";
let child_process = null;

document.querySelector("#connect-botton").onclick = () => {
  if (state == "not_running") {
    child_process = exec(
      path.join(__dirname, "extraResources", "server", "server_v7.1")
    );
    document.querySelector("#connect-botton").querySelector("a").innerHTML =
      "Disconnect";
    document.querySelector("#connect-botton").style.backgroundColor = "red";
    state = "running";
  } else if (state == "running") {
    if (child_process != null) {
      child_process.kill("SIGKILL");
      document.querySelector("#connect-botton").querySelector("a").innerHTML =
        "Quick Connect";
      document.querySelector("#connect-botton").style.backgroundColor =
        "rgba(75, 16, 48, 1)";
    }
  }
};

document.querySelector("#open-scratch").onclick = () => {
  open(
    path.join(
        __dirname, "extraResources", "extention.sb2"
    )
  );
};

function docInit() {}

module.exports = { docInit };
