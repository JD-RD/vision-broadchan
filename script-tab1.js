var bc = new BroadcastChannel("vision_bus");

bc.postMessage("Message sent from tab 1");

bc.onmessage = function(event) {
    console.log(event.data);
}
