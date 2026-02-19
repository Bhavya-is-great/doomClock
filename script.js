const clock = document.getElementById("clock");

const size = 280;
const cx = size / 2;
const cy = size / 2;

const numberRadius = 105;
const dotRadius = 132;

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

hours.forEach(hour => {
    const degrees = (hour % 12) * 30;
    const radians = degrees * Math.PI / 180;

    const x = cx + numberRadius * Math.sin(radians);
    const y = cy - numberRadius * Math.cos(radians);

    const el = document.createElement("div");
    el.className = "hour";
    el.innerText = hour;

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    clock.appendChild(el);
});

const dotCount = 60;

for (let i = 0; i < dotCount; i++) {
    const degrees = i * (360 / dotCount);
    const radians = degrees * Math.PI / 180;

    const x = cx + dotRadius * Math.sin(radians);
    const y = cy - dotRadius * Math.cos(radians);

    const dot = document.createElement("div");
    dot.className = "dot";

    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;

    if (i % 5 === 0) {
        dot.style.width = "6px";
        dot.style.height = "6px";
    }

    clock.appendChild(dot);
}