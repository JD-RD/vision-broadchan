// debugger;
var broadcastFrame = {};
 
//setup broadcast channel
broadcastFrame.setup = function() {
    if ("BroadcastChannel" in window) {
        if (typeof broadcastFrame.channel === 'undefined' || !broadcastFrame.channel) {
            broadcastFrame.channel = new BroadcastChannel("blob_bus");
        }
        //function to process broadcast messages
        function func(e) {
            if (e.data.image instanceof Blob) {
                //if message is a blob create a new image element and add to page
                var blob = e.data.image;
                var newImg = document.createElement("img"),
                    url = URL.createObjectURL(blob);
                newImg.onload = function() {
                    // no longer need to read the blob so it's revoked
                    URL.revokeObjectURL(url);
                };
                newImg.src = url;
                var content = document.getElementById("content");
                content.innerHTML = "";
                content.appendChild(newImg);
            }
        };
        //set broadcast channel message handler
        broadcastFrame.channel.onmessage = func;
    }
}
window.onload = broadcastFrame.setup();