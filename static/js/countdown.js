(function(a){
  a.fn.countdownTimer = function(){

    var f = a(this);

    var e = f.find(".time.seconds");
    var d = f.find(".time.minutes");
    var c = f.find(".time.hours");
    var b = f.find(".time.days");

    var k=0,i=0,h=0,g=0;

    function m(o, u){
      var r = u + "";
      while(r.length < 2){ r = "0" + r; }

      var oldVal = o.find(".value");
      var newVal = $("<div class='value'>" + r + "</div>");

      oldVal.remove();
      o.prepend(newVal);
    }

    // 👉 Set your ORIGINAL start date & time (ONLY ONCE)
    var startTime = new Date("2026-03-28T17:52:00");

    // ✅ REAL WORKING TIMER
    setInterval(function(){

      var now = new Date();
      var diff = Math.floor((now - startTime) / 1000); // seconds

      var days = Math.floor(diff / (24 * 3600));
      var hours = Math.floor((diff % (24 * 3600)) / 3600);
      var minutes = Math.floor((diff % 3600) / 60);
      var seconds = diff % 60;

      if(k !== seconds){ m(e, seconds); k = seconds; }
      if(i !== minutes){ m(d, minutes); i = minutes; }
      if(h !== hours){ m(c, hours); h = hours; }
      if(g !== days){ m(b, days); g = days; }

    }, 1000);

    return this;
  };
}(jQuery));
