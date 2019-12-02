var bc = new BroadcastChannel("vision_bus");

bc.postMessage("Message sent from tab 2");

bc.onmessage = function(event) {
    console.log(event.data);
}
