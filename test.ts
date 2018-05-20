let date: Date = new Date();

let now = "ぴろりん。";

let hours: number = date.getHours();
if (hours > 12) {
    hours -= 12;
}
now += hours + "時";

const minutes: number = date.getMinutes();
if (minutes !== 0) {
    now += minutes + "分";
}

now += "です。";

console.log(now);
