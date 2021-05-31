const fetch = require("node-fetch")

async function sendToDynatrace(action, settings, httpMethod, path, body){
    const url = (action.params.url || settings.url || "").trim();
    const apiToken = action.params.apiToken || settings.apiToken;
    if (!url || !apiToken){
        throw "One of the required parameters was not given";
    }
    const opts = {
        method: httpMethod,
        headers: {  'Authorization': `Api-token ${apiToken}`},
        redirect: 'follow'
    };
    if (body){
        opts.body = JSON.stringify(body);
        opts.headers['Content-Type'] = 'application/json';
    }
    const res = await fetch(`${url}/api/v2/${path}`, opts);
    if (!res.ok){
        throw await res.json();
    }
    return res.json();
}

module.exports = {
    sendToDynatrace
}
