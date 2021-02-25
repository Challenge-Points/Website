"use strict";
window.addEventListener('load', () => {
    setStats();
});
async function setStats() {
    fetch('http://localhost:80/api/stats/all').catch(apiDown).then(async (res) => {
        if (!res)
            return;
        var data = await res.json();
        document.getElementById('api-calls').innerText = data.apicalls.toString();
        document.getElementById('loading-symbol').classList.add('hidden');
        document.getElementById('root').classList.remove('hidden');
    });
}
function apiDown() {
    var error = document.getElementsByClassName('error')[0];
    error.innerHTML = "Error getting maps. 404 Not Found";
    error.classList.remove('hidden');
    document.getElementById('loading-symbol').classList.add('hidden');
    document.getElementById('root').classList.remove('hidden');
    return;
}
