const fetch = require('node-fetch');

const endpoints = require('./endpoints');

/*
 * Based on MLB-StatsAPI (https://github.com/toddrob99/MLB-StatsAPI)
 */

function get(endpoint_name, params) {
    const endpoint = endpoints.find(endpoint_name);
    console.log(endpoint.getURL(params));
    return fetch(endpoint.getURL(params)).then(res => res.json());
}

module.exports = {get: get};