var metronome={tickIntervalID:null,tick:function(){postMessage("metronomeTick")},start:function(){this.tickIntervalID=setInterval(this.tick,1e3/60)},stop:function(){void 0!=this.tickIntervalID&&clearInterval(this.tickIntervalID)}};onmessage=function(a){var b=a.data;switch(b){case"startMetronomeTicking":metronome.start();break;case"stopMetronomeTicking":metronome.stop()}};
