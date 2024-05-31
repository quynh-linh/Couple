const axios = require("axios");
const qs = require("qs");
const config = require("../config/config.json").web;

function getNewLogin() {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.client_id}&redirect_uri=${config.redirect_uris[0]}&access_type=offline&response_type=code&scope=https://www.googleapis.com/auth/photoslibrary.readonly&state=new_access_token&include_granted_scopes=true&prompt=consent`;
    return axios.get(url);
}

function getNewRefreshToken(code) {
    var data = {
        client_id: config.client_id,
        client_secret: config.client_secret,
        code: code, // Explicitly pass the code as a parameter
        grant_type: "authorization_code",
        redirect_uri: config.redirect_uris[0]
    };

    const axiosConfig = {
        method: "post",
        url: "https://oauth2.googleapis.com/token",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: qs.stringify(data) // Convert data to URL-encoded string
    };

    return axios(axiosConfig);
}

module.exports = {
    getNewLogin,
}