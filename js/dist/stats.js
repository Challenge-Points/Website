"use strict";
setStats();
async function setStats() {
    fetch(`${api_url}/stats/all`)
        .catch(apiDown)
        .then(async (res) => {
        if (!res)
            return;
        var data = (await res.json());
        document.getElementById("api-calls").innerText = data.apicalls.toString();
        document.getElementById("scores-set").innerText = data.scores_set.toString();
        document.getElementById("ranked-maps").innerText = data.maps_ranked.toString();
        document.getElementById("registerd-users").innerText = data.users_registerd.toString();
        document.getElementById("in-queue").innerText = data.in_queue.toString();
        document.getElementById("loading-symbol").classList.add("hidden");
        document.getElementById("root").classList.remove("hidden");
    });
}
