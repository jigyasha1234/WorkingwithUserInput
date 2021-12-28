function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
     return String(process.argv[2]);
}

function getNameFromEnv() {
    // Write your code here
    process.env.ENV_VARIABLE="Yash"
    return process.env.ENV_VARIABLE;
}

function getNameFromReadLine() {
    // Write your code here
    const read_line = require("readline");
    const rl=read_line.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const input_var =null
    rl.question("Input",(answer)=>{
        input_var = answer
    });
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}