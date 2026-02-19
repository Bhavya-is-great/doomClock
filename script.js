const clock = document.getElementById("clock");

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const size = 280;
const cx = size / 2;
const cy = size / 2;
const radius = 115;

hours.forEach(hour => {

    const degrees = (hour % 12) * 30;
    const radians = degrees * Math.PI / 180;

    const x = cx + radius * Math.sin(radians);
    const y = cy - radius * Math.cos(radians);

    const el = document.createElement("div");
    el.className = "hour";
    el.innerText = hour;

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    clock.appendChild(el);
});