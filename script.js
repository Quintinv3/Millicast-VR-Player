const PUBLISH_TOKEN =
  "17a8d5ebf67802645a6a00de513465ae4c6efe9b2d6a024a6a4a938a1cf9db1c";

var xhr = new XMLHttpRequest();

xhr.open("POST", "https://director.millicast.com/api/director/publish", true);
xhr.setRequestHeader("Authorization", `Bearer ${PUBLISH_TOKEN}`);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  // Call a function when the state changes.
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    var jsonData = JSON.parse(xhr.responseText);
    console.log("Call Complete:", jsonData);
  }
};

xhr.send(JSON.stringify({ streamName: "ksn523vd" }));
