const discord = require("discord.js");
const { Intents } = require("discord.js");
require('dotenv').config();
const client = new discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.on("ready", () => {
  setInterval(checkForUpdates, 500);
  
  function checkForUpdates() {
    
    var comm = [];
    const axios = require("axios");

    axios
      .get("https://back-end.kanaquiz.online/api/discordBot/")
      .then((response) => {
        try {
          for (var i = 0; i < response.data.length; i++) {
            comm.unshift(response.data[i].info);
            console.log(comm);
          }

          if (comm.length != 0) {
            
            client.channels.cache
              .get("1148987884309852291")
              .send("@everyone" + comm);
            axios
              .delete(
                "https://back-end.kanaquiz.online/api/discordBotDetails/1"
              )
              .then(() => console.log("nice!"));
            comm = [];
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      });
  }
});

client.login(process.env.TOKEN);
