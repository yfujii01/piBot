import * as botkit from "botkit";
import * as ACTION_TALK from "./action/talk";
import * as password from "./password.json";

const controller = botkit.slackbot({
    debug: false,
});
const events = ["direct_message", "direct_mention", "mention"];
const slackBot = controller.spawn({
    token: password.token,
});

slackBot.startRTM((err) => {
    if (err) {
        throw new Error("Could not connect to Slack");
    }
});

// 言われたことに対する返答。
controller.hears(["^talk "], events, (bot, message) => {
    bot.reply(message, message.text + "を受け付けました。");
    ACTION_TALK.exec(message.text);
});
