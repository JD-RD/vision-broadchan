// debugger;
var broadcastExample = {};
broadcastExample.setupChannel = function() {
    if ("BroadcastChannel" in window) {
        if (typeof broadcastExample.channel === 'undefined' || 
           !broadcastExample.channel) {
            //create channel
            broadcastExample.channel = new BroadcastChannel("foo");
        }
    }
}
broadcastExample.pMessage = function() {
    broadcastExample.setupChannel();
    //get image element
    var img = document.getElementById("ffimg");
    //create canvas with image 
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    //get blob of canvas
    canvas.toBlob(function(blob) {
        //broadcast blob
        broadcastExample.channel.postMessage(blob);
    });
}
broadcastExample.setupChannel();
broadcastExample.pMessage();