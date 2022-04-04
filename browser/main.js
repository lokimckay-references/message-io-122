console.log("Hello from main");

let ws = null;

function onConnectButtonClick() {
  ws = new WebSocket("ws://localhost:3044");

  ws.onopen = function () {
    console.log("Connected to localhost:3044");
  };
}

function onSendMessageButtonClick() {
  console.log('Sending "Hello there!"');
  ws.send("Hello there!");
}

function init() {
  const connectButton = document.getElementById("connectButton");
  const sendMessageButton = document.getElementById("sendMessageButton");
  connectButton.addEventListener("click", onConnectButtonClick);
  sendMessageButton.addEventListener("click", onSendMessageButtonClick);
}

document.addEventListener("DOMContentLoaded", init);
