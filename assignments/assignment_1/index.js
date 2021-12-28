function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    return String(process.arg[2]);
}

function getNameFromEnv() {
    // Write your code here
    return process.env.name;
}

function getNameFromReadLine() {
    // Write your code here
    const read_line = require("readline");
    const rl=read_line.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const input=null
    rl.question("input",(ans)=>{
        input=ans
    });
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}