"use strict";
var api_url = "https://challenge-points-dev.herokuapp.com/api";
function apiDown() {
    var error = document.getElementsByClassName('error')[0];
    error.innerHTML = "Error getting maps. 404 Not Found";
    error.classList.remove('hidden');
    document.getElementById('loading-symbol').classList.add('hidden');
    document.getElementById('root').classList.remove('hidden');
    return;
}
