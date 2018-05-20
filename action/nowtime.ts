export function getDateStr(): string {
    const nowDate: Date = new Date();

    let ret: string;
    ret = "ぴろりん。";

    let hour: number = nowDate.getHours();
    if (hour > 12) {
        hour -= 12;
    }
    ret += hour + "時";

    const minute: number = nowDate.getMinutes();
    if (minute !== 0) {
        ret += minute + "分";
    }

    ret += "です。";

    console.log(ret);

    return ret;
}
