const heartIcons = document.querySelectorAll('.heart');
const heartCount = document.getElementById('heartCount');
let favCount = 0;

heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        if (icon.classList.contains('fa-regular')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            icon.style.color = "red";
            favCount++;
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            icon.style.color = "#888";
            favCount--;
        }
        heartCount.textContent = favCount;
    });
});

// ------------------ Call button functionality ------------------
const callButtons = document.querySelectorAll('.btn-call');
const coinCount = document.getElementById('coinCount');
const historyList = document.getElementById('historyList');
let coins = 100;

callButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.card');
        const serviceName = card.querySelector('.card-title').innerText;
        const serviceNumber = card.querySelector('.card-number').innerText;

        if (coins < 20) {
            alert("Not enough coins to make a call!");
            return;
        }

        coins -= 20;
        coinCount.textContent = coins;

        alert(`Calling ${serviceName} at ${serviceNumber}`);

        // Add to history
        const li = document.createElement('li');
        li.textContent = `${serviceName} - ${serviceNumber}`;
        historyList.appendChild(li);
    });
});

// Clear history
document.getElementById('clearHistory').addEventListener('click', () => {
    historyList.innerHTML = "";
});

// ------------------ Copy button functionality ------------------
let copyCount = 0; // total copies
const copyCountEl = document.getElementById("copyCount");
const copyButtons = document.querySelectorAll(".btn-copy");

copyButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const hotlineNumber = card.querySelector(".card-number").innerText;

        navigator.clipboard.writeText(hotlineNumber).then(() => {
            copyCount++;
            copyCountEl.textContent = copyCount + " Copy";
            alert("Hotline number " + hotlineNumber + " copied!");
        }).catch(err => {
            alert("Failed to copy: " + err);
        });
    });
});