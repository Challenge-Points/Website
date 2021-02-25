type statsData = {
    "apicalls": number,
    "status": {
        "stat": string,
        "pagination": {
            "offset": number,
            "limit": number,
            "total": number
        },
        "monitors": [
            {
                "id": number,
                "friendly_name": string,
                "url": string,
                "type": number,
                "sub_type": string,
                "keyword_type": null,
                "keyword_value": string,
                "http_username": string,
                "http_password": string,
                "port": string,
                "interval": number,
                "status": number,
                "create_datetime": number,
                "logs": [
                    {
                        "id": number,
                        "type": number,
                        "datetime": number,
                        "duration": number,
                        "reason": {
                            "code": string,
                            "detail": string
                        }
                    }
                ],
                "lastLogTypeBeforeStartDate": {}
            }
        ]
    },
    "in_queue":0,
    "users_registerd":0,
    "maps_ranked":0,
    "scores_set":0
}

window.addEventListener('load', () => {
    setStats()
})

async function setStats() {
    fetch(`${api_url}/stats/all`).catch(apiDown).then(async res => {
        if (!res) return;
        var data = await res.json() as statsData

        document.getElementById('api-calls').innerText = data.apicalls.toString()
        document.getElementById('scores-set').innerText = data.scores_set.toString()
        document.getElementById('ranked-maps').innerText = data.maps_ranked.toString()
        document.getElementById('registerd-users').innerText = data.users_registerd.toString()
        document.getElementById('in-queue').innerText = data.in_queue.toString()

        document.getElementById('loading-symbol').classList.add('hidden')
        document.getElementById('root').classList.remove('hidden')
    })
}

function apiDown() {
    var error = document.getElementsByClassName('error')[0]

    error.innerHTML = "Error getting maps. 404 Not Found"
    error.classList.remove('hidden')
    document.getElementById('loading-symbol').classList.add('hidden')
    document.getElementById('root').classList.remove('hidden')

    return;
}