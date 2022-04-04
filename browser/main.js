console.log("Hello from main");

let ws = null;

function onConnectButtonClick() {
  ws = new WebSocket("ws://localhost:3044");
  ws.addEventListener("open", onConnect);
  ws.addEventListener("message", onMessageReceived);
}

function onSendMessageButtonClick() {
  console.log('Sending "Hello there!"');
  ws.send(stringToByteArray("Hello there!"));
}

function onConnect() {
  console.log("Connected to localhost:3044");
}

async function onMessageReceived(event) {
  const message = await event.data.text();
  console.log("Received:", message);
}

function stringToByteArray(str) {
  const bytes = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    bytes[i] = str.charCodeAt(i);
  }
  return bytes;
}

function init() {
  const connectButton = document.getElementById("connectButton");
  const sendMessageButton = document.getElementById("sendMessageButton");
  connectButton.addEventListener("click", onConnectButtonClick);
  sendMessageButton.addEventListener("click", onSendMessageButtonClick);
}

document.addEventListener("DOMContentLoaded", init);
