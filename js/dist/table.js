"use strict";
// utilities
window.addEventListener("load", () => {
    fill_cp_table();
    fill_stats();
});
function fill_cp_table() {
    // api output example
    var json_cp = {
        head: ["#", "Name", "Map", "Score", "Acc", "CP"],
        data: [
            { id: 45, user_icon: "src/Team/ThiJNmEnS.png", user_name: "TurboSlayer", map: "fortnite pumpernickel emote", score: 69420, acc: "69%", cp: 420 },
            { id: 68, user_icon: "src/Team/ThiJNmEnS.png", user_name: "IronMerc", map: "Silence", score: 45348, acc: "89.96%", cp: 566 },
            { id: 38, user_icon: "src/Team/ThiJNmEnS.png", user_name: "DarkCarnage", map: "A Test", score: 53428, acc: "116%", cp: 854 },
            { id: 864, user_icon: "src/Team/ThiJNmEnS.png", user_name: "CrypticHatter", map: "FELT - white", score: 64384, acc: "75.25%", cp: 31 },
            { id: 48, user_icon: "src/Team/ThiJNmEnS.png", user_name: "SteelTitan", map: "藤井風 - 何なんｗ (Fujii Kaze - Nan-Nan) (short ver.)", score: 68484, acc: "89.96%", cp: 566 },
            { id: 4, user_icon: "src/Team/ThiJNmEnS.png", user_name: "FatalDestiny", map: "Kairiki Bear x Mafumafu - MAO", score: 38456, acc: "45.54%", cp: 566 },
            { id: 38, user_icon: "src/Team/ThiJNmEnS.png", user_name: "CrashTV", map: "GHOSTMANE - F L E S H", score: 38453, acc: "78.38%", cp: 566 },
            { id: 34, user_icon: "src/Team/ThiJNmEnS.png", user_name: "StealthedDefender", map: "Topic, A7S - Breaking Me (RetroVision Remix)", score: 534848, acc: "12.38%", cp: 566 },
            { id: 84, user_icon: "src/Team/ThiJNmEnS.png", user_name: "UltimateBeast", map: "Kazoo Kid Remix", score: 2348548, acc: "84.48%", cp: 566 },
            { id: 984, user_icon: "src/Team/ThiJNmEnS.png", user_name: "Blue Defender", map: "Udon's Love Beam", score: 438464, acc: "95.56%", cp: 566 },
            { id: 6453, user_icon: "src/Team/ThiJNmEnS.png", user_name: "Blaze Assault", map: "City Of Angels (Illusion Remix)", score: 89774, acc: "64.84%", cp: 566 },
            { id: 435, user_icon: "src/Team/ThiJNmEnS.png", user_name: "Masked Titan", map: "Boy & Bear", score: 867534, acc: "106.48%", cp: 566 },
            { id: 843, user_icon: "src/Team/ThiJNmEnS.png", user_name: "Toxic Headshot", map: "サークルコースター", score: 8764, acc: "45.84%", cp: 566 },
            { id: 24, user_icon: "src/Team/ThiJNmEnS.png", user_name: "Venom Fate", map: "Evil", score: 978674, acc: "98.56%", cp: 566 },
            { id: 5, user_icon: "src/Team/ThiJNmEnS.png", user_name: "Frozen Gunner", map: "Sunrise (feat. shully)", score: 463847, acc: "89.96%", cp: 566 },
            { id: 48, user_icon: "src/Team/ThiJNmEnS.png", user_name: "deluxe_vegan", map: "Cosmic Disgust", score: 3454564, acc: "89.96%", cp: 566 },
            { id: 72, user_icon: "src/Team/ThiJNmEnS.png", user_name: "readingpro", map: "Butterfly", score: 534584, acc: "89.96%", cp: 566 },
            { id: 8976, user_icon: "src/Team/ThiJNmEnS.png", user_name: "reakefit", map: "Death by Glamour (Undertale)", score: 4536484, acc: "89.96%", cp: 566 },
            { id: 4892, user_icon: "src/Team/ThiJNmEnS.png", user_name: "spuffyffet", map: "Champion AYAYA", score: 453428, acc: "89.96%", cp: 566 },
            { id: 123, user_icon: "src/Team/ThiJNmEnS.png", user_name: "rozalthiric", map: "おさかのたこやきがたべたぃ!", score: 486445, acc: "89.96%", cp: 566 },
            { id: 89, user_icon: "src/Team/ThiJNmEnS.png", user_name: "breacche", map: "Let Her Go", score: 123123, acc: "89.96%", cp: 566 },
            { id: 687, user_icon: "src/Team/ThiJNmEnS.png", user_name: "brighthulk", map: "NateWantsToBattle - The Wrecked and The Worried", score: 38448, acc: "89.96%", cp: 566 },
            { id: 148, user_icon: "src/Team/ThiJNmEnS.png", user_name: "bootecia", map: "Seeb, Goodboys, HRVY – Unfamiliar", score: 54354, acc: "89.96%", cp: 566 },
            { id: 9678, user_icon: "src/Team/ThiJNmEnS.png", user_name: "rozalthiric", map: "Repo by FREDDIE DREDD", score: 38387, acc: "89.96%", cp: 566 },
        ],
    };
    var cp_head = document.getElementById("cp_head");
    var cp_table = document.getElementById("cp_table");
    var cp_head_template = cp_head.innerHTML;
    var cp_body_template = cp_table.innerHTML;
    removeChildren(cp_head);
    removeChildren(cp_table);
    var item, html = "";
    // fill table head
    for (var i = 0; i < json_cp.head.length; i++) {
        item = json_cp.head[i];
        html = cp_head_template.replace("{title}", json_cp.head[i]);
        cp_head.insertAdjacentHTML("beforeend", html);
    }
    // fill table body
    for (var i = 0; i < json_cp.data.length; i++) {
        item = json_cp.data[i];
        html = cp_body_template
            .replace("{id}", item.id.toString())
            .replace("{user_icon}", '<img src="' + item.user_icon + '" class="pfp" />')
            .replace("{user_name}", item.user_name)
            .replace("{map}", item.map)
            .replace("{score}", item.score.toString())
            .replace("{acc}", item.acc)
            .replace("{cp}", item.cp + " CP");
        cp_table.insertAdjacentHTML("beforeend", html);
    }
}
function fill_stats() {
    /** eventually more to come **/
}
