type queueData = {
	map_hash: string;
	estimated_cp: number;
	time_requested: number;
	map_data: {
		difficulties: string[];
		mapper_name: string;
		status: string;
		map_name: string;
		max_cp: number;
		hash: string;
		scores_set: string;
		cover: string;
	};
};

async function getQueue() {
	fetch("https://challenge-points-dev.herokuapp.com/api/maps/queue/1")
		.catch(apiDown)
		.then(async (res) => {
			if (!res) return;
			var data = (await res.json()) as queueData[];

			var table_body = document.getElementById("table_body");
			var template = table_body.innerHTML;
			removeChildren(table_body);

			var html = "";

			for (const i of data) {
				html = template
					.replace("{map_icon}", `<img src="https://scoresaber.com/imports/images/songs/${i.map_hash}.png" class="float-left" />`)
					.replace("{map_name}", i.map_data.map_name)
					.replace("{mapper}", i.map_data.mapper_name)
					.replace("{req_timestamp}", toDateTime(i.time_requested).toDateString())
					.replace("{estimated_cp}", i.estimated_cp.toString());

				table_body.insertAdjacentHTML("beforeend", html);
			}

			document.getElementById("root").classList.remove("hidden");
			document.getElementById("loading-symbol").classList.add("hidden");
		});
}

getQueue();
