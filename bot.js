const discord = require("discord.js");
const { Intents } = require("discord.js");
const client = new discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("message", async (message) => {
setInterval(checkForUpdates , 500);
  function checkForUpdates() {
  var comm = [];
  const axios = require("axios");
  var to_clear = false;
  axios
    .get("https://back-end.kanaquiz.online/api/discordBot/")
    .then((response) => {

      try {
        for (var i = 0; i < response.data.length; i++) {
          
          comm.unshift(response.data[i].info);
         
      
    }
     
        if (message.content === "wlacz") {
          if (to_clear === true) {
            to_clear = false;
          }
          else {
 
         
            if (comm.length != 0) {
              client.channels.cache
                .get("1149746132587663494")
                .send('@everyone' + comm);
                axios
                .delete("https://back-end.kanaquiz.online/api/discordBotDetails/1")
                .then(() => console.log("nice!"));
                comm = [];
            
            }
           
        }

       
      } } catch (error) {
        console.error("An error occurred:", error);
      }
    
    });
  }

});

client.login(
  "MTE0Nzg3NTUzMDI2NDMwMTU4OA.GhUYGZ.FPK7rVWBmC1YJYSng8SE5NnjKDlvq3auawzj18"
);



