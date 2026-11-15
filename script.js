// Display the current year
const year = new Date().getFullYear();
document.querySelector("footer p").textContent =
    `© ${year} Merga. Keep Learning.`;

console.log("Welcome to Merga's Cybersecurity Portfolio!");

// Security tips in order
const tips = [
    "Use strong and unique passwords.",
    "Enable two-factor authentication (2FA).",
    "Think before clicking unknown links.",
    "Never share your passwords with anyone.",
    "Keep your software updated."
];

let currentTip = 0;

const tipButton = document.getElementById("tipButton");
const tipResult = document.getElementById("tipResult");

tipButton.addEventListener("click", function () {
    tipResult.textContent = tips[currentTip];
    currentTip = (currentTip + 1) % tips.length;
});