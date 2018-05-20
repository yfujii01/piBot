/**
 * talkの処理を行います
 * @type {Function}
 */
import { execSync } from "child_process";
import { getDateStr } from "./nowtime";

export function exec(message: string | undefined) {
    console.log("talk action start:" + message);
    const timeStr = getDateStr();
    const talkStr = message.split(" ");
    execSync("./action/jsay.sh " + timeStr + talkStr[1]);
}
