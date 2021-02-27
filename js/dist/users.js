"use strict";
const urlparams = new URLSearchParams(window.location.href);
const page = (urlparams.get('page')) ? urlparams.get('page') : 1;
function getGlobalUsers() {
    fetch(`${api_url}/users/global/${page}`).catch(apiDown).then(async (res) => {
        if (!res)
            return;
        var data = await res.json();
        var table = document.getElementById('user_table');
        data.forEach(u => {
            var row = document.createElement('tr');
            const place = document.createElement('th');
            place.innerText = u.global.toString();
            row.appendChild(place);
            const username = document.createElement('th');
            username.innerHTML = `<img src="https://scoresaber.com/imports/images/usr-avatars/${u.id}.jpg" class='pfp'> &nbsp; ${u.username}`;
            row.appendChild(username);
            const cp = document.createElement('th');
            cp.innerText = u.cp.toString();
            row.appendChild(cp);
            const avgacc = document.createElement('th');
            avgacc.innerText = u.avgacc.toString();
            row.appendChild(avgacc);
            table.appendChild(row);
        });
        document.getElementById('root').classList.remove('hidden');
        document.getElementById('loading-symbol').classList.add('hidden');
    });
}
getGlobalUsers();
