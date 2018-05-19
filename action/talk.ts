/**
 * talkの処理を行います
 * @type {Function}
 */
import { execSync } from "child_process";

export function exec(message: string | undefined) {
    console.log("talk action start:" + message);
    const talkStr = message.split(" ");
    execSync("./action/jsay.sh " + talkStr[1]);
}
