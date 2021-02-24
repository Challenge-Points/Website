"use strict";
window.onload = async () => {
    var main = document.getElementById('root');
    var loading = document.getElementById('loading-symbol');
    var data = (await (await fetch('http://localhost:80/api/stats/all')).json());
    document.getElementById('api-calls').innerText = data.apicalls.toString();
    loading.classList.add('hidden');
    main.classList.remove('hidden');
};
