const { sendToDynatrace } = require("./helpers");

async function getProblem(action, settings) {
    const problemId = action.params.problemId;
    if (!problemId){
        throw "You must provide Problem ID!";
    }
    return sendToDynatrace(action, settings, "GET", `problems/${problemId}`);
}

///// Exports

module.exports = {
    getProblem
}
