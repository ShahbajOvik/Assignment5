
let favCount = 0;
document.querySelectorAll('.heart').forEach(icon => {
    icon.onclick = () => {
        favCount++;
        document.getElementById('heartCount').textContent = favCount;
    };
});


let coins = 100;

document.querySelectorAll('.btn-call').forEach(btn => {
    btn.onclick = () => {
        if (coins < 20) {
            return alert("Not enough coins!");

        }

        coins -= 20;
        document.getElementById('coinCount').textContent = coins;

        let card = btn.closest('.card');
        let name = card.querySelector('.card-title').innerText;
        let number = card.querySelector('.card-number').innerText;

        alert(`Calling ${name}  ${number}`);

        let template = document.getElementById('historyTemplate');
        let clone = template.content.cloneNode(true);

        clone.querySelector('.history-name').textContent = name;
        clone.querySelector('.history-number').textContent = number;
        clone.querySelector('.history-time').textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        document.getElementById('historyList').appendChild(clone);
    };
});


document.getElementById('clearHistory').onclick = () => document.getElementById('historyList').innerHTML = "";

let copyCount = 0;
document.querySelectorAll(".btn-copy").forEach(btn => {
    btn.onclick = () => {
        let number = btn.closest(".card").querySelector(".card-number").innerText;
        navigator.clipboard.writeText(number).then(() => {
            copyCount++;
            document.getElementById("copyCount").textContent = copyCount + " Copy";
            alert("Hotline " + number + " copied!");
        });
    };
});