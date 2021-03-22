type map = {
	difficulties: string[];
	mapper_name: string;
	status: string;
	m_n: string;
	max_cp: number;
	hash: string;
	scores_set: string;
	cover: string;
};

getMaps();

async function getMaps() {
	var wholeTable = document.getElementById('maps-table');
	var loading = document.getElementById('loading-symbol');

	var maps: map[] = await (await fetch(`${api_url}/maps/all/1`)).json().catch(apiDown);

	var table = document.getElementById('cp_table');

	maps.forEach(async (map) => {
		var row = document.createElement('tr');

		var name = document.createElement('th');
		name.innerHTML = `<img src="${map.cover}" class='pfp'> &nbsp; ${map.m_n}`;
		row.appendChild(name);

		var mapper = document.createElement('th');
		mapper.innerText = map.mapper_name;
		row.appendChild(mapper);

		var scoreCount = document.createElement('th');
		scoreCount.innerText = map.scores_set;
		row.appendChild(scoreCount);

		var cp = document.createElement('th');
		cp.innerText = map.max_cp + ' CP';
		row.appendChild(cp);

		table.appendChild(row);
	});
	wholeTable.classList.remove('hidden');
	loading.classList.add('hidden');
}
/*
<tr>
    <th><img src="src/Maps/b6b84dc10c68d379215a54ece4b108e5cfe084d8.jpg" class='pfp'> &nbsp; TTFAF but its all resets</th>
    <th>Thijnmens</th>
    <th>24</th>
    <th>670.48 CP</th>
</tr>
*/
