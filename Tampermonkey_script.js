// ==UserScript==
// @name         discord bot alert
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bot alert
// @author       Domino
// @match        https://tarhuna.margonem.pl/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=margonem.pl
// @grant        none
// ==/UserScript==

(function () {

  var clanMsg = document.querySelector(
    ".one-message-wrapper.CLAN-message-wrapper"
  ); //withdraw message from game clan chat

  let info = null;

function scanMessages(){
    if (clanMsg) {

  var specificChildren = clanMsg.querySelectorAll(".new-chat-message.chat-CLAN-message:not(.expired-message)");


 } // checking if message exists

  for (var i = 0; i < specificChildren.length; i++) {

    if (specificChildren[i].innerText.includes("Heros!")) {

              specificChildren[i].className += " expired-message";
          info = specificChildren[i].innerText.replace(/[<>-]+[\n\r]+|[\s]{2,}/g, ' ').trim(); // delete whitespaces




    }
      }
  }


function sendHTTPRequest(data) {
    var endpointURL = 'SET YOUR DATABASE URL HERE';
    var dataToSend = {
        info: data,
    };

    var jsonData = JSON.stringify(dataToSend);

    fetch(endpointURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: jsonData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        console.log('Data sent successfully:', responseData);
      })
      .catch(error => {
        console.log("wysłano powiadomienie o elitce!");
      });

  } //HTTP request to database endpoint

        function cleanup(){
    if(info){
        info = null;
    }
        else {
            null};


    } //variable cleanup


function sendRequest(){

if(info){
    sendHTTPRequest(info);
};

}; //sending request

  setInterval(scanMessages , 500);
  setInterval(cleanup , 1050);
  setInterval(sendRequest , 1000);

  //action intervals, better to write mutators in the future


})();
