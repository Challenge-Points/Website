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
    }
}

window.onload = async () => {
    var main = document.getElementById('root')
    var loading = document.getElementById('loading-symbol')

    var data = (await (await fetch('http://localhost:80/api/stats/all')).json()) as statsData
    
    document.getElementById('api-calls').innerText = data.apicalls.toString()

    loading.classList.add('hidden')
    main.classList.remove('hidden')
}