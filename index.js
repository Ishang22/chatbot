const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
const fetchGoogleResult = require("./Controller/fetchGoogleResult");

client.login(process.env.BOT_TOKEN);

client.on("message", msg => {
  if (msg.content === "welcome") {
    msg.reply("thanku!");
  }
});

console.log("Chat Bot Is Ready");

client.on("message", async message => {
  if (message.content.startsWith("!google")) {
    try {
      let searchString = message.content
        .slice(message.content.indexOf("!google") + "!google".length)
        .trim();

      let data = await fetchGoogleResult(searchString);
      let dataToSend = [];

      for (let i = 0; i < data.items.length; i++) {
        dataToSend.push(data.items[i].title);
      }
      message.reply(dataToSend);
    } catch (e) {
      throw e;
    }
  }
});
