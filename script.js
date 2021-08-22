const PUBLISH_TOKEN =
  "66b45a2202b9fa77c59653e2493cc5f32252c1cdba99eb3a28b1f1c3c8f9bf03";
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://director.millicast.com/api/director/publish", true);
xhr.setRequestHeader("Authorization", `Bearer ${PUBLISH_TOKEN}`);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    var jsonData = JSON.parse(xhr.responseText);
    console.log("Call Complete:", jsonData);
  }
};
xhr.send(JSON.stringify({ streamName: "ksi0861i" }));
