var riffle = require('jsriffle');

riffle.setFabric(process.env.WS_URL);
riffle.setLogLevelInfo();

var domain = riffle.Domain(process.env.DOMAIN);

domain.onJoin = function() {
    this.register("echo", riffle.want(function(msg) {
        console.log("Echo: " + msg);
        return msg;
    }, String));
}
domain.onJoin = function(){
  this.register("counter", riffle.want(function(){
    var count = 0;
    return count++;
  }))
}

domain.join()
