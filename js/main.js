var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.polyfill("Number.isFinite",function(a){return a?a:function(a){return"number"!==typeof a?!1:!isNaN(a)&&Infinity!==a&&-Infinity!==a}},"es6-impl","es3");
$jscomp.polyfill("Number.isInteger",function(a){return a?a:function(a){return Number.isFinite(a)?a===Math.floor(a):!1}},"es6-impl","es3");$jscomp.findInternal=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6-impl","es3");
(function(a){if("function"===typeof define&&define.amd)define(a);else if("object"===typeof exports)module.exports=a();else{var b=window.Cookies,c=window.Cookies=a();c.noConflict=function(){window.Cookies=b;return c}}})(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var e=arguments[a],f;for(f in e)b[f]=e[f]}return b}function b(c){function d(b,f,g){var e;if("undefined"!==typeof document){if(1<arguments.length){g=a({path:"/"},d.defaults,g);if("number"===typeof g.expires){var h=new Date;
h.setMilliseconds(h.getMilliseconds()+864E5*g.expires);g.expires=h}try{e=JSON.stringify(f),/^[\{\[]/.test(e)&&(f=e)}catch(q){}f=c.write?c.write(f,b):encodeURIComponent(String(f)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);b=encodeURIComponent(String(b));b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);b=b.replace(/[\(\)]/g,escape);return document.cookie=[b,"=",f,g.expires&&"; expires="+g.expires.toUTCString(),g.path&&"; path="+g.path,g.domain&&
"; domain="+g.domain,g.secure?"; secure":""].join("")}b||(e={});for(var h=document.cookie?document.cookie.split("; "):[],m=/(%[0-9A-Z]{2})+/g,n=0;n<h.length;n++){var r=h[n].split("="),k=r.slice(1).join("=");'"'===k.charAt(0)&&(k=k.slice(1,-1));try{var p=r[0].replace(m,decodeURIComponent),k=c.read?c.read(k,p):c(k,p)||k.replace(m,decodeURIComponent);if(this.json)try{k=JSON.parse(k)}catch(q){}if(b===p){e=k;break}b||(e[p]=k)}catch(q){}}return e}}d.set=d;d.get=function(a){return d(a)};d.getJSON=function(){return d.apply({json:!0},
[].slice.call(arguments))};d.defaults={};d.remove=function(b,c){d(b,"",a(c,{expires:-1}))};d.withConverter=b;return d}return b(function(){})});var SCALE_SEMITONES_NUMBER=12,MAX_HALF_STEP=11,MIN_HALF_STEP=-11,MAX_STRINGS_NUMBER=12,MIN_STRINGS_NUMBER=3,MAX_ITEMS_NUMBER=5,ITEMS_ID_BASE="menuItem",FRETS_NUMBER=24,DEFAULT_METR_BEATS=4,DEFAULT_METR_BEAT_VAL=4,DEFAULT_METR_VOLUME=50,DEFAULT_METR_TEMPO=120,MIN_BEATS=1,MAX_BEATS=16,MIN_BEAT_VAL=1,MAX_BEAT_VAL=32,MIN_TEMPO=40,MAX_TEMPO=320,DEFAULT_SCALE_OPTIONS_EXPIRE_DAYS=30,DEFAULT_NOTES_SHOW_PATTERN=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],DEFAULT_TRIADS_SHOW_PATTERN=[!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,
!1,!1],SECOND_CLICK_FREQ=880,FIRST_CLICK_FREQ=1480,NOTES="C C# D D# E F F# G G# A A# B".split(" "),DEFAULT_SCALE_SEMITONES=[2,2,1,2,2,2,1],DEFAULT_STRING_TUNES="E B G D A E B F# C# G# D# A#".split(" "),DEFAULT_SCALE_NOTES="CDEFGAB".split(""),SCALES={major:[2,2,1,2,2,2,1],aeolian:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2],ionian:[2,1,2,2,1,2,2],harmonic_min:[2,1,2,2,1,3,1],chromatic:[1,1,1,1,1,1,1,1,1,1,1,1],dorian:[2,1,2,2,2,1,2],phrygian:[1,2,2,2,1,2,2],lydian:[2,2,2,1,2,2,1],myxolydian:[2,2,1,2,2,1,
2],locrian:[1,2,2,1,2,2,2],melodic_min:[2,1,2,2,2,2,1],alt_dom:[1,2,1,2,2,2,2],sup_locrian:[1,2,1,2,2,2,2],dim_whole_tone:[1,2,1,2,2,2,2],alt_scale:[1,2,1,2,2,2,2],blues_min_hex:[3,2,1,1,3,2],blues_pent:[3,2,1,4,2],blues:[3,2,1,1,3,1,1],major_pent:[2,2,3,2,3],suspended_pent:[2,3,2,3,2],dorian_pent:[2,3,2,3,2],phrygian_pent:[3,2,3,2,2],myxolydian_pent:[2,3,2,2,3],aeolian_pent:[3,2,2,3,2],minor_pent:[3,2,2,3,2],major_beb:[2,2,1,2,1,1,2,1],minor_beb:[2,1,1,1,2,2,1,2],dom_beb:[2,2,1,2,2,1,1,1],dorian_beb:[2,
1,1,1,2,2,1,2],whole_tone:[2,2,2,2,2,2],whole_half_tone:[2,1,2,1,2,1,2,1],half_whole_tone:[1,2,1,2,1,2,1,2],dim:[2,1,2,1,2,1,2,1],dom_dim:[1,2,1,2,1,2,1,2],symm_dim:[1,2,1,2,1,2,1,2],spanish:[1,2,2,2,1,2,2],acoustic:[2,2,2,1,2,1,2],bartok:[2,2,2,1,2,1,2]},TUNINGS={standart_e:"E B G D A E B F# C# G# D# A#".split(" "),standart_e_bass:["G","D","A","E","B"],standart_e_bass_6:"CGDAEB".split(""),drop_d_6:"E B G D A D B F# C# G# D# A#".split(" "),drop_a_7:"E B G D A E A F# C# G# D# A#".split(" "),drop_e_8:"E B G D A E B E C# G# D# A#".split(" ")},
CUSTOM_TUNING_VALUE="custom",ITEM_CLASS="item_block",STRING_NUMBER_CLASS="strings_number",SCALE_SELECT_CLASS="scale_select",NECK_BLOCK_CLASS="neck_block",FRETBOARD_CLASS="fretboard",HOR_FRET_CLASS="fret_hor",NULL_VER_FRET_CLASS="fret_null",VER_FRET_CLASS="fret_ver",VER_FRET_INNER_CLASS="fret_ver_inner",FRET_HOVER_CLASS="fret_ver_hover",FRET_HOVER_ACTIVE_CENTER_CLASS="fret_ver_hover_active_center",FRET_HOVER_ACTIVE_START_CLASS="fret_ver_hover_active_start",FRET_HOVER_ACTIVE_END_CLASS="fret_ver_hover_active_end",
NOTE_CLASS="note",NORMAL_NOTE_CLASS="normal_note",HIGHLIGHTED_NOTE_CLASS="highlighted_note",TRANSPARENT_NOTE_CLASS="transparent_note",HIDDEN_NOTE_CLASS="hidden_note",STRINGS_OPTIONS_BLOCK_CLASS="strings_options_block",STRING_TUNE_BLOCK_CLASS="string_tune",STRING_TUNE_SELECT_CLASS="string_tune_select",LEFT_ARROW_CLASS="left_arrow",RIGHT_ARROW_CLASS="right_arrow",TUNING_OPTIONS_CLASS="tuning_options",HALF_STEP_BLOCK_CLASS="half_step_block",HALF_STEP_SELECT_CLASS="half_step_select",TUNING_SELECT_CLASS=
"tuning_select",ROOT_NOTE_CLASS="root_note",SELECTED_TEXT_CLASS="selected_text",SCALE_NOTES_BLOCK_CLASS="scale_notes_and_semitones_block",SCALE_NOTES_CLASS="scale_notes",SCALE_NOTE_CLASS="scale_note",SCALE_NOTE_TEXT_CLASS="scale_note_text",ADD_STRING_BTN_CLASS="add_string",DEL_STRING_BTN_CLASS="delete_string",CLOSE_BTN_CLASS="close_btn",SET_DEFAULT_BTN_CLASS="set_default_btn",TRIADS_CHECKBOX_CLASS="triads_checkbox",TRIADS_CHECKBOX_EMPTY_CLASS="triads_checkbox_empty",LH_TOGGLE_BLOCK_CLASS="lh_toggle_block",
TOGGLE_CHECKBOX_CLASS="toggle_checkbox",LH_TOGGLE_CLASS="lh_toggle",RH_TOGGLE_CLASS="rh_toggle",TOGGLE_SLIDER_CLASS="toggle_checkbox_slider",SLIDER_LH_CLASS="slider_lh",SLIDER_RH_CLASS="slider_rh",LH_CLASS="lh",METRONOME_DISABLED_ID="metronome_disabled_block",ADD_NEW_ITEM_BTN_ID="add_new_item_btn",METR_PLAY_BTN_ID="metronome_play_btn",METR_STOP_BTN_ID="metronome_stop_btn",METR_VOLUME_RANGE_ID="metronome_volume_range",METR_TEMPO_RANGE_ID="metronome_tempo_range",METR_TEMPO_INPUT_ID="metronome_tempo_input",
METR_TEMPO_LEFT_ARROW_ID="metronome_tempo_left_arrow",METR_TEMPO_RIGHT_ARROW_ID="metronome_tempo_right_arrow",METR_BEATS_SELECT_ID="metronome_beats_select",METR_BEATS_LEFT_ARROW_ID="metronome_beats_left_arrow",METR_BEATS_RIGHT_ARROW_ID="metronome_beats_right_arrow",METR_BEAT_VAL_SELECT_ID="metronome_beat_val_select",METR_BEAT_VAL_LEFT_ARROW_ID="metronome_beat_val_left_arrow",METR_BEAT_VAL_RIGHT_ARROW_ID="metronome_beat_val_right_arrow",METR_BEAT_VIS_BLOCK_ID="metronome_beat_vis_block",METR_BEAT_VIS_NUMBER_ID=
"metronome_beat_number_vis",WRONG_SEMITONE_NUMBER_MSG="Wrong sum of semitones, must be equal to "+SCALE_SEMITONES_NUMBER,WRONG_ROOT_NOTE_MSG="Wrong root note",WRONG_NOTE_MSG="Wrong note",WRONG_SCALE_NAME_MSG="Wrong scale name (value)",WRONG_STRING_TUNE_NOTE_MSG="Wrong string tune note",WRONG_TUNING_NAME="Wrong tuning name (value)",PARAMS_ATOB_ERROR_MSG="GET parameter cannot be decoded",SCALE_NOTES_TMPL=doT.template($("#scale_notes_tmpl").html()),STRING_VER_FRET_TMPL=doT.template($("#string_ver_fret_tmpl").html()),
STRING_FRET_TMPL=doT.template($("#string_hor_fret_tmpl").html()),STRING_FRET_MARK_TMPL=doT.template($("#fretboard_single_mark").html()),STRING_DOUBLE_FRET_MARK_TMPL=doT.template($("#fretboard_double_mark").html()),FRET_DOT_TMPL=doT.template($("#fret_dot_tmpl").html()),FRET_DOUBLE_DOT_TMPL=doT.template($("#fret_double_dot_tmpl").html()),STRING_TUNE_BLOCK_TMPL=doT.template($("#string_tune_block_tmpl").html()),SCALES_ITEM_BLOCK_TMPL=doT.template($("#scales_item_tmpl").html());function isCorrectNote(a){if("string"!==typeof a)return!1;var b=!1;0<=NOTES.indexOf(a.toUpperCase())?b=!0:console.log(a+": "+WRONG_NOTE_MSG);return b}function isCorrectSemitonesSum(a){if("object"!==typeof a||!Array.isArray(a))return!1;for(var b=!1,c=0,d=0;d<a.length;d++)c+=a[d];c==SCALE_SEMITONES_NUMBER?b=!0:console.log(a+": "+WRONG_SEMITONE_NUMBER_MSG);return b}
function isCorrectScale(a){if("string"!==typeof a)return!1;var b=!1,c=SCALES[a];void 0!==c?b=isCorrectSemitonesSum(c):console.log(a+": "+WRONG_SCALE_NAME_MSG);return b}function isCorrectTuningNotes(a){if("object"!==typeof a||!Array.isArray(a))return!1;for(var b=!1,c=0;c<a.length&&(b=isCorrectNote(a[c]),b);c++);return b}
function isCorrectTuning(a){if("string"!==typeof a)return!1;var b=!1;if(a==CUSTOM_TUNING_VALUE)b=!0;else{var c=TUNINGS[a];void 0!==c?b=isCorrectTuningNotes(c):console.log(a+": "+WRONG_TUNING_NAME)}return b}function isCorrectHalfStep(a){return Number.isInteger(a)&&+a>=MIN_HALF_STEP&&+a<=MAX_HALF_STEP}function isCorrectStringsNumber(a){return Number.isInteger(a)&&+a>=MIN_STRINGS_NUMBER&&+a<=MAX_STRINGS_NUMBER}
function isCorrectNotesShowPattern(a){var b="object"===typeof a&&Array.isArray(a);if(!b)return!1;var c=a.every(function(a){return"boolean"===typeof a});if(!c)return!1;a=12==a.length;return b&&c&&a}function isCorrectBoxFret(a){return Number.isInteger(a)&&-1<=a&&a<=FRETS_NUMBER}function getScaleSemitones(a){a=a.toLowerCase();var b=DEFAULT_SCALE_SEMITONES;isCorrectScale(a)&&(b=SCALES[a]);return b}
function getTuneNotes(a){a=a.toLowerCase();var b=DEFAULT_STRING_TUNES;isCorrectTuning(a)&&(b=TUNINGS[a].slice());return b}function prevNote(a){resultNote="C";isCorrectNote(a)&&(a=NOTES.indexOf(a),a--,0>a&&(a=NOTES.length-1),resultNote=NOTES[a]);return resultNote}function nextNote(a){resultNote="C";isCorrectNote(a)&&(a=NOTES.indexOf(a),a++,a==NOTES.length&&(a=0),resultNote=NOTES[a]);return resultNote}
function nextNoteAfterSemiTones(a,b){var c=a;if(0<b)for(var d=0;d<b;d++)c=nextNote(c);else for(d=0;d>b;d--)c=prevNote(c);return c}function prevHalfStep(a){a--;a<MIN_HALF_STEP&&(a=MIN_HALF_STEP);return a}function nextHalfStep(a){a++;a>MAX_HALF_STEP&&(a=MAX_HALF_STEP);return a}
function getNotesFromSemiTones(a,b){var c=DEFAULT_SCALE_NOTES;a=a.toUpperCase();if(isCorrectNote(a)&&isCorrectSemitonesSum(b)){var c=[],d=a;c.push(d);for(var e=0;e<b.length;e++){for(var f=1;f<=b[e];f++)d=nextNote(d);c.push(d)}c.pop()}return c}function getSemiTonesPatternForString(a,b,c){for(var d=[],e=0,f=a.indexOf(c);0>f;)c=nextNote(c),f=a.indexOf(c),e++;d.push(e);for(a=f;a<b.length;a++)d.push(b[a]);for(a=0;a<f;a++)d.push(b[a]);return d}
function getTuningName(a){var b=CUSTOM_TUNING_VALUE,c;for(c in TUNINGS)if(TUNINGS[c].length==a.length&&TUNINGS[c].every(function(b,c,f){return b==a[c]}))return c;return b}function sliderLogVal(a,b,c){var d=0;0<a&&(b=Math.log(b),d=Math.exp(b+(Math.log(c)-b)/100*(a-0)));return d}function semiTonesPatternBoolToInt(a,b){if(isCorrectNotesShowPattern(b))for(var c=0;c<b.length;c++)b[c]=b[c]?1:0;return b}
function semiTonesPatternIntToBool(a,b){var c="object"===typeof b&&Array.isArray(b);if(!c)return b;var d=b.every(function(a){return Number.isInteger(a)});if(!d)return b;var e=12==b.length;if(c&&d&&e)for(c=0;c<b.length;c++)b[c]=0===b[c]?!1:!0;return b};var defaults={init:function(){this.scales.init()}};defaults.scales={scale:"major",root:"C",tuning:"standart_e",halfStep:0,stringsTunes:DEFAULT_STRING_TUNES,stringsNumber:6,isTriadMode:!1,normalNotesShowPattern:DEFAULT_NOTES_SHOW_PATTERN,triadsNotesShowPattern:DEFAULT_TRIADS_SHOW_PATTERN,boxFirstFret:-1,isLH:!1,readFromCookie:function(){if(void 0!==Cookies.getJSON("defaultScaleOptions")){var a=Cookies.getJSON("defaultScaleOptions");void 0!==a.scale&&isCorrectScale(a.scale)&&(this.scale=a.scale);void 0!==a.root&&isCorrectNote(a.root)&&(this.root=a.root);
void 0!==a.tuning&&isCorrectTuning(a.tuning)&&(this.tuning=a.tuning);void 0!==a.halfStep&&isCorrectHalfStep(a.halfStep)&&(this.halfStep=+a.halfStep);void 0!==a.stringsTunes&&isCorrectTuningNotes(a.stringsTunes)&&(this.stringsTunes=a.stringsTunes);void 0!==a.stringsNumber&&isCorrectStringsNumber(a.stringsNumber)&&(this.stringsNumber=+a.stringsNumber);void 0!==a.isTriadMode&&"boolean"===typeof a.isTriadMode&&(this.isTriadMode=a.isTriadMode);void 0!==a.normalNotesShowPattern&&isCorrectNotesShowPattern(a.normalNotesShowPattern)&&
(this.normalNotesShowPattern=a.normalNotesShowPattern);void 0!==a.triadsNotesShowPattern&&isCorrectNotesShowPattern(a.triadsNotesShowPattern)&&(this.triadsNotesShowPattern=a.triadsNotesShowPattern);void 0!==a.boxFirstFret&&isCorrectBoxFret(a.boxFirstFret)&&(this.boxFirstFret=a.boxFirstFret);void 0!==a.isLH&&"boolean"===typeof a.isLH&&(this.isLH=a.isLH)}},init:function(){this.readFromCookie()}};var audioCtx,worker,isMetronomeCanWork=!1;try{audioCtx=new AudioContext,worker=new Worker("js/worker.js"),isMetronomeCanWork=!0}catch(a){console.log(a)}
var metronome={isPlaying:!1,beats:DEFAULT_METR_BEATS,beatValue:DEFAULT_METR_BEAT_VAL,volume:sliderLogVal(DEFAULT_METR_VOLUME,1,100)/100,tempo:DEFAULT_METR_TEMPO,nextBeatNumber:0,beatsQueue:[],$playBtn:$("#"+METR_PLAY_BTN_ID),$stopBtn:$("#"+METR_STOP_BTN_ID),$volumeRange:$("#"+METR_VOLUME_RANGE_ID),$tempoRange:$("#"+METR_TEMPO_RANGE_ID),$tempoInput:$("#"+METR_TEMPO_INPUT_ID),$tempoLeftArrow:$("#"+METR_TEMPO_LEFT_ARROW_ID),$tempoRightArrow:$("#"+METR_TEMPO_RIGHT_ARROW_ID),$beatsSelect:$("#"+METR_BEATS_SELECT_ID),
$beatsLeftArrow:$("#"+METR_BEATS_LEFT_ARROW_ID),$beatsRightArrow:$("#"+METR_BEATS_RIGHT_ARROW_ID),$beatValSelect:$("#"+METR_BEAT_VAL_SELECT_ID),$beatValLeftArrow:$("#"+METR_BEAT_VAL_LEFT_ARROW_ID),$beatValRightArrow:$("#"+METR_BEAT_VAL_RIGHT_ARROW_ID),$beatVisBlock:$("#"+METR_BEAT_VIS_BLOCK_ID),$beatVisNumber:$("#"+METR_BEAT_VIS_NUMBER_ID),$beatVisProgressBar:new ProgressBar.Circle("#"+METR_BEAT_VIS_BLOCK_ID,{strokeWidth:15,color:"#0bb",trailWidth:0,svgStyle:null}),scheduleBeatAudio:function(a){var b=
audioCtx.createOscillator();b.type="square";var c=SECOND_CLICK_FREQ;0==a.number&&(c=FIRST_CLICK_FREQ);b.frequency.value=c;b.connect(this.gainNode);b.start(a.audioTime);b.stop(a.audioTime+50/c)},scheduleBeatVisual:function(a){var b=a.visTime-performance.now();this.$beatVisProgressBar.set(0);this.$beatVisProgressBar.animate(1,{duration:b});setTimeout(function(){metronome.isPlaying&&metronome.$beatVisNumber.text(a.number+1)},b)},scheduleBeatFromQueue:function(){if(0<this.beatsQueue.length){var a=this.beatsQueue.shift();
this.scheduleBeatAudio(a);this.scheduleBeatVisual(a)}},beatsScheduler:function(){that=metronome;if(0<that.beatsQueue.length){var a=that.beatsQueue[that.beatsQueue.length-1],b=240/that.beatValue/that.tempo;audioCtx.currentTime+b>=a.audioTime&&(that.nextBeatNumber=(that.nextBeatNumber+1)%that.beats,that.beatsQueue.push({audioTime:a.audioTime+b,visTime:a.visTime+1E3*b,number:that.nextBeatNumber}),that.scheduleBeatFromQueue())}else that.beatsQueue.push({audioTime:audioCtx.currentTime,visTime:performance.now(),
number:0})},onPlayBtn:function(a){that=a.data.that;that.isPlaying=!0;$(this).hide();that.$stopBtn.show();that.nextBeatNumber=0;worker.postMessage("startMetronomeTicking")},onStopBtn:function(a){that=a.data.that;that.isPlaying=!1;$(this).hide();that.$playBtn.show();that.$beatVisNumber.text("");that.$beatVisProgressBar.set(0);worker.postMessage("stopMetronomeTicking");that.beatsQueue=[]},onVolumeChange:function(a){that=a.data.that;a=$(this).val();a=sliderLogVal(+a,1,100);a/=100;that.gainNode.gain.value=
a;that.volume=a},onTempoChange:function(a){that=a.data.that;a=$(this).val();that.$tempoInput.val(a);that.tempo=+a},onTempoInputChange:function(a){that=a.data.that;a=$(this).val().replace(/[^,.0-9]/gim,"").replace(/[,.]+/gim,".");a=parseFloat(a);a<MIN_TEMPO?a=MIN_TEMPO:a>MAX_TEMPO&&(a=MAX_TEMPO);that.tempo=a;$(this).val(a);that.$tempoRange.val(a)},onTempoLeftArrow:function(a){that=a.data.that;a=that.$tempoInput.val();a>MIN_TEMPO&&(a--,that.tempo=a,that.$tempoInput.val(a),that.$tempoRange.val(a))},
onTempoRightArrow:function(a){that=a.data.that;a=that.$tempoInput.val();a<MAX_TEMPO&&(a++,that.tempo=a,that.$tempoInput.val(a),that.$tempoRange.val(a))},onBeatsChange:function(a){that=a.data.that;a=$(this).val();that.beats=+a},onBeatsLeftArrow:function(a){that=a.data.that;a=that.beats;a<=MIN_BEATS||(a--,that.beats=a,that.$beatsSelect.find("[value='"+a+"']").prop("selected",!0))},onBeatsRightArrow:function(a){that=a.data.that;a=that.beats;a>=MAX_BEATS||(a++,that.beats=a,that.$beatsSelect.find("[value='"+
a+"']").prop("selected",!0))},onBeatValChange:function(a){that=a.data.that;a=$(this).val();that.beatValue=+a},onBeatValLeftArrow:function(a){that=a.data.that;a=that.beatValue;a<=MIN_BEAT_VAL||(a/=2,that.beatValue=a,that.$beatValSelect.find("[value='"+a+"']").prop("selected",!0))},onBeatValRightArrow:function(a){that=a.data.that;a=that.beatValue;a>=MAX_BEAT_VAL||(a*=2,that.beatValue=a,that.$beatValSelect.find("[value='"+a+"']").prop("selected",!0))},workerTick:function(a){var b=metronome;"metronomeTick"==
a.data&&b.beatsScheduler()},init:function(){this.$stopBtn.hide();isMetronomeCanWork&&($("#"+METRONOME_DISABLED_ID).hide(0),this.tempo=+this.$tempoRange.val(),this.volume=sliderLogVal(+this.$volumeRange.val(),1,100)/100,this.gainNode=audioCtx.createGain(),this.gainNode.gain.value=this.volume,this.gainNode.connect(audioCtx.destination),worker.onmessage=this.workerTick,this.$tempoInput.val(this.tempo),this.beats=this.$beatsSelect.val(),this.beatValue=this.$beatValSelect.val(),this.$playBtn.click({that:this},
this.onPlayBtn),this.$stopBtn.click({that:this},this.onStopBtn),this.$volumeRange.change({that:this},this.onVolumeChange),this.$volumeRange.on("input",{that:this},this.onVolumeChange),this.$tempoRange.change({that:this},this.onTempoChange),this.$tempoRange.on("input",{that:this},this.onTempoChange),this.$tempoInput.change({that:this},this.onTempoInputChange),this.$tempoLeftArrow.click({that:this},this.onTempoLeftArrow),this.$tempoRightArrow.click({that:this},this.onTempoRightArrow),this.$beatsSelect.change({that:this},
this.onBeatsChange),this.$beatsLeftArrow.click({that:this},this.onBeatsLeftArrow),this.$beatsRightArrow.click({that:this},this.onBeatsRightArrow),this.$beatValSelect.change({that:this},this.onBeatValChange),this.$beatValLeftArrow.click({that:this},this.onBeatValLeftArrow),this.$beatValRightArrow.click({that:this},this.onBeatValRightArrow))}};function StringsTuning(a,b,c){this.state=a;this.$stringsTuningBlock=b;this.tuneChangeEventAction=c;this.init()}StringsTuning.prototype.getStringTune=function(a){return this.state.stringsTunes[a%this.state.stringsTunes.length]};
StringsTuning.prototype.addStringTuning=function(a){var b=this.$stringsTuningBlock.append(STRING_TUNE_BLOCK_TMPL()).children().last();$("."+STRING_TUNE_SELECT_CLASS+" :contains('"+a+"')",b).prop("selected",!0);$("."+STRING_TUNE_SELECT_CLASS,b).change({that:this},this.onStringTuneChange);$("."+LEFT_ARROW_CLASS,b).click({that:this},this.onLeftArrowTuneClick);$("."+RIGHT_ARROW_CLASS,b).click({that:this},this.onRightArrowTuneClick)};
StringsTuning.prototype.delLastString=function(){$("."+STRING_TUNE_BLOCK_CLASS,this.$stringsTuningBlock).last().remove()};StringsTuning.prototype.selectCurrentStringsTunes=function(){for(var a=0;a<this.state.stringsNumber;a++)this.$stringsTuningBlock.find("."+STRING_TUNE_SELECT_CLASS+":eq("+a+") :contains('"+this.getStringTune(a)+"')").prop("selected",!0)};
StringsTuning.prototype.onStringTuneChange=function(a){a=a.data.that;var b=$(this).val(),c=$("."+STRING_TUNE_SELECT_CLASS,a.$stringsTuningBlock).index(this);a.state.stringsTunes[c]=b;a.state.tuning=getTuningName(a.state.stringsTunes);a.tuneChangeEventAction(c);a.state.saveToQuery()};
StringsTuning.prototype.onLeftArrowTuneClick=function(a){a=a.data.that;var b=$("."+LEFT_ARROW_CLASS,a.$stringsTuningBlock).index(this),c=a.state.stringsTunes[b],c=prevNote(c);a.state.stringsTunes[b]=c;$("."+STRING_TUNE_SELECT_CLASS+":eq("+b+") :contains('"+c+"')",a.$stringsTuningBlock).prop("selected",!0);a.state.tuning=getTuningName(a.state.stringsTunes);a.tuneChangeEventAction(b);a.state.saveToQuery()};
StringsTuning.prototype.onRightArrowTuneClick=function(a){a=a.data.that;var b=$("."+RIGHT_ARROW_CLASS,a.$stringsTuningBlock).index(this),c=a.state.stringsTunes[b],c=nextNote(c);a.state.stringsTunes[b]=c;$("."+STRING_TUNE_SELECT_CLASS+":eq("+b+") :contains('"+c+"')",a.$stringsTuningBlock).prop("selected",!0);a.state.tuning=getTuningName(a.state.stringsTunes);a.tuneChangeEventAction(b);a.state.saveToQuery()};
StringsTuning.prototype.init=function(){for(var a=0;a<this.state.stringsNumber;a++)this.addStringTuning(a);this.selectCurrentStringsTunes()};function Fretboard(a,b){this.state=a;this.$fretboardBlock=b;this.notesBlocks=[];this.init()}
Fretboard.prototype.putNotesOnString=function(a){var b=this.calculateNotesBoxSize(a),c=this.getStringTune(a),d=getSemiTonesPatternForString(this.state.scaleNotes,this.state.semiTones,c),e=$(this.notesBlocks[a]);e.toggleClass(HIDDEN_NOTE_CLASS,!0);e.toggleClass(TRANSPARENT_NOTE_CLASS,!1);for(var f=d.shift(),c=nextNoteAfterSemiTones(c,f),g=0;f<e.length;){var l=$(this.notesBlocks[a][f]);l.toggleClass(HIDDEN_NOTE_CLASS,!1);var h=this.state.scaleNotes.indexOf(c),m,n=f>=this.state.boxFirstFret&&f<=this.state.boxFirstFret+
b||-1==this.state.boxFirstFret;this.state.isTriadMode?(m=!this.state.triadsNotesShowPattern[h],l.text(h+1)):(m=!this.state.normalNotesShowPattern[h],l.text(c));!m&&n||l.toggleClass(TRANSPARENT_NOTE_CLASS,!0);h=c==this.state.root;l.toggleClass(NORMAL_NOTE_CLASS,!h).toggleClass(HIGHLIGHTED_NOTE_CLASS,h);f+=d[g];c=nextNoteAfterSemiTones(c,d[g]);g=++g%d.length}};Fretboard.prototype.putNotesOnAllStrings=function(){for(var a=0;a<this.state.stringsNumber;a++)this.putNotesOnString(a)};
Fretboard.prototype.putNotesOnNearStrings=function(a){0==a?this.putNotesOnString(1):a==this.state.stringsNumber?this.putNotesOnString(a-1):(this.putNotesOnString(a-1),this.putNotesOnString(a+1))};Fretboard.prototype.getStringTune=function(a){return this.state.stringsTunes[a%this.state.stringsTunes.length]};
Fretboard.prototype.calculateNotesBoxSize=function(a,b){1<arguments.length&&(b=this.state.boxFirstFret);var c=0;if(0<a)for(var d=this.getStringTune(a-1),e=this.getStringTune(a),d=nextNoteAfterSemiTones(d,b),e=nextNoteAfterSemiTones(e,b);e!=d;)e=nextNote(e),e!=d&&c++;else c=4;return c};Fretboard.prototype.calculateNotesBoxSizeForAllStrings=function(a){for(var b=0,c=0;c<this.state.stringsNumber;c++){var d=this.calculateNotesBoxSize(c,a);d>b&&(b=d)}return b};
Fretboard.prototype.isBoxFit=function(a,b){return a+b<=FRETS_NUMBER};
Fretboard.prototype.addString=function(a){for(var b={currentStringNumber:a+1},c=$("."+NULL_VER_FRET_CLASS+", ."+VER_FRET_INNER_CLASS,this.$fretboardBlock),d,e,f=0;f<c.length;f++)d=$(STRING_FRET_TMPL(b)).appendTo(c[f]),d=$("."+NOTE_CLASS,d)[0],void 0===this.notesBlocks[a]&&(this.notesBlocks[a]=[]),this.notesBlocks[a][f]=d,0==a&&(d=1==f||3==f||5==f||7==f||9==f||15==f||17==f||19==f||21==f,e=12==f||24==f,d?($(c[f]).append(STRING_FRET_MARK_TMPL()),$(FRET_DOT_TMPL()).insertAfter(c[f])):e&&($(c[f]).append(STRING_DOUBLE_FRET_MARK_TMPL()),
$(FRET_DOUBLE_DOT_TMPL()).insertAfter(c[f])));this.putNotesOnString(a)};Fretboard.prototype.delLastString=function(){for(var a=$("."+NULL_VER_FRET_CLASS+", ."+VER_FRET_CLASS,this.$fretboardBlock),b=0;b<a.length;b++)$("."+HOR_FRET_CLASS,$(a[b])).last().remove()};
Fretboard.prototype.onFretClick=function(a){a=a.data.that;var b=a.$fretboardBlock.find("."+NULL_VER_FRET_CLASS+", ."+VER_FRET_INNER_CLASS).index(this);if(a.state.boxFirstFret==b)a.state.boxFirstFret=-1;else{var c=a.calculateNotesBoxSizeForAllStrings(b);a.isBoxFit(b,c)&&(a.state.boxFirstFret=b)}a.putNotesOnAllStrings();a.state.saveToQuery()};
Fretboard.prototype.onFretHoverIn=function(a){var b=a.data.that;a=b.$fretboardBlock.find("."+NULL_VER_FRET_CLASS+", ."+VER_FRET_INNER_CLASS).index(this);var c=b.calculateNotesBoxSizeForAllStrings(a);if(b.isBoxFit(a,c))for(var b=$("."+FRET_HOVER_CLASS,b.$fretboardBlock),d=0;d<=c;d++){var e=FRET_HOVER_ACTIVE_CENTER_CLASS;0==d?e=FRET_HOVER_ACTIVE_START_CLASS:d==c&&(e=FRET_HOVER_ACTIVE_END_CLASS);$(b[a+d]).toggleClass(e,!0)}};
Fretboard.prototype.onFretHoverOut=function(a){a.data.that.$fretboardBlock.find("."+FRET_HOVER_CLASS).toggleClass(FRET_HOVER_ACTIVE_START_CLASS,!1).toggleClass(FRET_HOVER_ACTIVE_CENTER_CLASS,!1).toggleClass(FRET_HOVER_ACTIVE_END_CLASS,!1)};
Fretboard.prototype.init=function(){for(var a=0;a<FRETS_NUMBER;a++)this.$fretboardBlock.children().last().before(STRING_VER_FRET_TMPL());for(a=0;a<this.state.stringsNumber;a++)this.addString(a);this.$fretboardBlock.on("click","."+NULL_VER_FRET_CLASS+", ."+VER_FRET_INNER_CLASS,{that:this},this.onFretClick);this.$fretboardBlock.on("mouseenter","."+NULL_VER_FRET_CLASS+", ."+VER_FRET_INNER_CLASS,{that:this},this.onFretHoverIn);this.$fretboardBlock.on("mouseleave","."+NULL_VER_FRET_CLASS+", ."+VER_FRET_INNER_CLASS,
{that:this},this.onFretHoverOut)};function Neck(a,b,c,d,e,f,g){this.state=a;this.$neckBlock=b;this.$stringsNumberBlock=c;this.$addStringBtn=d;this.$delStringBtn=e;this.$tuningOptionsBlock=f;this.$lhToggleBlock=g;var l=this;this.fretboard=new Fretboard(a,$("."+FRETBOARD_CLASS,b));this.stringsTunings=new StringsTuning(a,$("."+STRINGS_OPTIONS_BLOCK_CLASS,b),function(a){l.putNotesOnString(a);l.fretboard.putNotesOnNearStrings(a);l.selectCurrentTuning()});this.init()}Neck.prototype.putNotesOnString=function(a){this.fretboard.putNotesOnString(a)};
Neck.prototype.putNotesOnAllStrings=function(){this.fretboard.putNotesOnAllStrings()};Neck.prototype.getStringTune=function(a){return this.state.stringsTunes[a%this.state.stringsTunes.length]};Neck.prototype.moveTuning=function(a){for(var b=0;b<this.state.stringsTunes.length;b++)this.state.stringsTunes[b]=nextNoteAfterSemiTones(this.state.stringsTunes[b],a)};Neck.prototype.selectCurrentStringsTunes=function(){this.stringsTunings.selectCurrentStringsTunes()};
Neck.prototype.selectCurrentTuning=function(){this.$tuningOptionsBlock.find("."+TUNING_SELECT_CLASS+" [value='"+this.state.tuning+"']").prop("selected",!0)};Neck.prototype.switchLH=function(){this.$lhToggleBlock.find("."+TOGGLE_SLIDER_CLASS).toggleClass(SLIDER_LH_CLASS,this.state.isLH).toggleClass(SLIDER_RH_CLASS,!this.state.isLH);this.$neckBlock.toggleClass(LH_CLASS,this.state.isLH)};Neck.prototype.switchLHevent=function(){this.state.isLH=!this.state.isLH;this.switchLH();this.state.saveToQuery()};
Neck.prototype.onTuningChange=function(a){a=a.data.that;var b=$(this).val().toLowerCase();b==CUSTOM_TUNING_VALUE?a.state.tuning=b:isCorrectTuning(b)&&(a.state.tuning=b,a.state.stringsTunes=getTuneNotes(b),a.moveTuning(a.state.halfStep),a.putNotesOnAllStrings(),a.selectCurrentStringsTunes());a.state.saveToQuery()};Neck.prototype.selectCurrentHalfStep=function(){$("."+HALF_STEP_SELECT_CLASS+" [value='"+this.state.halfStep+"']",this.$tuningOptionsBlock).prop("selected",!0)};
Neck.prototype.onHalfStepChange=function(a){a=a.data.that;var b=a.state.halfStep,c=$(a).val().replace(/[^-0-9]/gim,""),c=+c;a.state.halfStep=c;a.moveTuning(c-b);a.selectCurrentStringsTunes();a.putNotesOnAllStrings();a.state.saveToQuery()};Neck.prototype.onLeftArrowHalfStepClick=function(a){a=a.data.that;var b=a.state.halfStep;b!=-MAX_HALF_STEP&&(b=prevHalfStep(b),a.state.halfStep=b,a.moveTuning(-1),a.selectCurrentStringsTunes(),a.putNotesOnAllStrings(),a.selectCurrentHalfStep(),a.state.saveToQuery())};
Neck.prototype.onRightArrowHalfStepCLick=function(a){a=a.data.that;var b=a.state.halfStep;b!=MAX_HALF_STEP&&(b=nextHalfStep(b),a.state.halfStep=b,a.moveTuning(1),a.selectCurrentStringsTunes(),a.putNotesOnAllStrings(),a.selectCurrentHalfStep(),a.state.saveToQuery())};
Neck.prototype.onAddStringButton=function(a){a=a.data.that;a.state.stringsNumber<MAX_STRINGS_NUMBER&&(a.fretboard.addString(a.state.stringsNumber),a.stringsTunings.addStringTuning(a.getStringTune(a.state.stringsNumber)),a.state.stringsNumber++,a.$stringsNumberBlock.text(""+a.state.stringsNumber),a.state.saveToQuery())};
Neck.prototype.onDelStringButton=function(a){a=a.data.that;a.state.stringsNumber>MIN_STRINGS_NUMBER&&(a.fretboard.delLastString(),a.stringsTunings.delLastString(),a.state.stringsNumber--,a.$stringsNumberBlock.text(""+a.state.stringsNumber),a.state.saveToQuery())};Neck.prototype.onLhToggleSlider=function(a){a.data.that.switchLHevent()};Neck.prototype.onLhToggleClick=function(a){a=a.data.that;a.state.isLH||a.switchLHevent()};Neck.prototype.onRhToggleClick=function(a){a=a.data.that;a.state.isLH&&a.switchLHevent()};
Neck.prototype.init=function(){this.$stringsNumberBlock.text(""+this.state.stringsNumber);this.selectCurrentTuning();this.selectCurrentHalfStep();this.putNotesOnAllStrings();this.switchLH();this.$addStringBtn.click({that:this},this.onAddStringButton);this.$delStringBtn.click({that:this},this.onDelStringButton);$("."+TUNING_SELECT_CLASS,this.$tuningOptionsBlock).change({that:this},this.onTuningChange);$("."+HALF_STEP_SELECT_CLASS,this.$tuningOptionsBlock).change({that:this},this.onHalfStepChange);
this.$tuningOptionsBlock.find("."+HALF_STEP_BLOCK_CLASS).find("."+LEFT_ARROW_CLASS).click({that:this},this.onLeftArrowHalfStepClick);this.$tuningOptionsBlock.find("."+HALF_STEP_BLOCK_CLASS).find("."+RIGHT_ARROW_CLASS).click({that:this},this.onRightArrowHalfStepCLick);this.$lhToggleBlock.find("."+TOGGLE_CHECKBOX_CLASS).click({that:this},this.onLhToggleSlider);this.$lhToggleBlock.find("."+LH_TOGGLE_CLASS).click({that:this},this.onLhToggleClick);this.$lhToggleBlock.find("."+RH_TOGGLE_CLASS).click({that:this},
this.onRhToggleClick)};function ScaleItemState(a,b){this.id=a;this.type="scales";this.scale="major";this.root="C";this.scaleNotes=DEFAULT_SCALE_NOTES;this.semiTones=DEFAULT_SCALE_SEMITONES;this.tuning="standart_e";this.stringsNumber=0;this.stringsTunes=DEFAULT_STRING_TUNES;this.halfStep=0;this.isTriadMode=!1;this.boxFirstFret=-1;this.normalNotesShowPattern=DEFAULT_NOTES_SHOW_PATTERN;this.triadsNotesShowPattern=DEFAULT_TRIADS_SHOW_PATTERN;this.isLH=!1;this.init(b)}
ScaleItemState.prototype.isCorrectSerializedData=function(a){var b=!1,c=!0,d=[];try{d=JSON.parse(a,semiTonesPatternIntToBool)}catch(e){c=!1}c&&(b=12==d.length&&"scales"==d[0]&&isCorrectScale(d[1])&&isCorrectNote(d[2])&&isCorrectTuning(d[3])&&isCorrectHalfStep(d[4])&&isCorrectStringsNumber(d[5])&&isCorrectTuningNotes(d[6])&&"boolean"===typeof d[7]&&isCorrectNotesShowPattern(d[8])&&isCorrectNotesShowPattern(d[9])&&isCorrectBoxFret(d[10])&&"boolean"===typeof d[11]);return b};
ScaleItemState.prototype.saveToQuery=function(){menuItems.updateItemSerializedData(this.id,this.serialize());menuItems.updateItemsQueryParams()};ScaleItemState.prototype.serialize=function(){var a=[this.type,this.scale,this.root,this.tuning,this.halfStep,this.stringsNumber,this.stringsTunes,this.isTriadMode,this.normalNotesShowPattern.slice(),this.triadsNotesShowPattern.slice(),this.boxFirstFret,this.isLH];return JSON.stringify(a,semiTonesPatternBoolToInt)};
ScaleItemState.prototype.deserialize=function(a){a=JSON.parse(a,semiTonesPatternIntToBool);this.type=a[0];this.scale=a[1];this.root=a[2];this.tuning=a[3];this.halfStep=a[4];this.stringsNumber=a[5];this.stringsTunes=a[6];this.isTriadMode=a[7];this.normalNotesShowPattern=a[8];this.triadsNotesShowPattern=a[9];this.semiTones=getScaleSemitones(this.scale);this.scaleNotes=getNotesFromSemiTones(this.root,this.semiTones);this.boxFirstFret=a[10];this.isLH=a[11]};
ScaleItemState.prototype.saveToDefaultOptions=function(){defaults.scales.scale=this.scale;defaults.scales.root=this.root;defaults.scales.semiTones=this.semiTones;defaults.scales.tuning=this.tuning;defaults.scales.halfStep=this.halfStep;defaults.scales.stringsTunes=this.stringsTunes;defaults.scales.stringsNumber=this.stringsNumber;defaults.scales.isTriadMode=this.isTriadMode;defaults.scales.boxFirstFret=this.boxFirstFret;defaults.scales.isLH=this.isLH;Cookies.set("defaultScaleOptions",defaults.scales,
{expires:DEFAULT_SCALE_OPTIONS_EXPIRE_DAYS})};
ScaleItemState.prototype.readFromDefaultOptions=function(){this.scale=defaults.scales.scale;this.root=defaults.scales.root;this.semiTones=getScaleSemitones(this.scale);this.scaleNotes=getNotesFromSemiTones(this.root,this.semiTones);this.tuning=defaults.scales.tuning;this.halfStep=defaults.scales.halfStep;this.stringsTunes=defaults.scales.stringsTunes;this.stringsNumber=defaults.scales.stringsNumber;this.isTriadMode=defaults.scales.isTriadMode;this.normalNotesShowPattern=defaults.scales.normalNotesShowPattern;
this.triadsNotesShowPattern=defaults.scales.triadsNotesShowPattern;this.boxFirstFret=defaults.scales.boxFirstFret;this.isLH=defaults.scales.isLH};ScaleItemState.prototype.init=function(a){this.readFromDefaultOptions();a&&this.isCorrectSerializedData(a)&&this.deserialize(a);this.saveToQuery()};function ScalesItem(a,b){this.state=new ScaleItemState(a,b);this.init(a,b)}ScalesItem.prototype.putNotesOnAllStrings=function(){this.neck.putNotesOnAllStrings()};ScalesItem.prototype.selectCurrentStringsTunes=function(){this.neck.selectCurrentStringsTunes()};ScalesItem.prototype.selectCurrentScale=function(){$("."+SCALE_SELECT_CLASS+" [value='"+this.state.scale+"']",this.$itemBlock).prop("selected",!0)};
ScalesItem.prototype.updateScaleNotesBlock=function(){$("."+SCALE_NOTES_CLASS,this.$itemBlock).remove();var a=this.state.scaleNotes.slice();a.push(this.state.root);a={root:this.state.root,semiTones:this.state.semiTones,notes:a};$("."+SCALE_NOTES_BLOCK_CLASS,this.$itemBlock).append(SCALE_NOTES_TMPL(a));var a=$("."+SCALE_NOTES_CLASS,this.$itemBlock).find("."+SCALE_NOTE_TEXT_CLASS),b=a.length-1,c=this.state.normalNotesShowPattern;this.state.isTriadMode&&(c=this.state.triadsNotesShowPattern);for(var d=
0;d<b;d++)if(!c[d]){var e=$(a[d]);e.toggleClass(TRANSPARENT_NOTE_CLASS,!0);0==d&&(e=$(a[b]),e.toggleClass(TRANSPARENT_NOTE_CLASS,!0))}$("."+SCALE_NOTES_CLASS,this.$itemBlock).on("click","."+SCALE_NOTE_CLASS,{that:this},this.onScaleNoteClick)};
ScalesItem.prototype.selectCurrentRootNote=function(){$("."+ROOT_NOTE_CLASS+"."+SELECTED_TEXT_CLASS,this.$itemBlock).toggleClass(SELECTED_TEXT_CLASS,!1);$("."+ROOT_NOTE_CLASS+":contains('"+this.state.root+"')",this.$itemBlock).first().toggleClass(SELECTED_TEXT_CLASS,!0)};
ScalesItem.prototype.onScaleChange=function(a){a=a.data.that;var b=$(this).val().toLowerCase();isCorrectScale(b)&&(a.state.scale=b,a.state.semiTones=getScaleSemitones(b),a.state.scaleNotes=getNotesFromSemiTones(a.state.root,a.state.semiTones),a.putNotesOnAllStrings(),a.updateScaleNotesBlock(),a.state.saveToQuery())};
ScalesItem.prototype.onRootNoteChange=function(a){a=a.data.that;var b=$(this).text();isCorrectNote(b)&&(a.state.root=b.toUpperCase(),a.selectCurrentRootNote(),a.state.scaleNotes=getNotesFromSemiTones(a.state.root,a.state.semiTones),a.updateScaleNotesBlock(),a.putNotesOnAllStrings(),a.state.saveToQuery())};
ScalesItem.prototype.onScaleNoteClick=function(a){a=a.data.that;var b=$("."+SCALE_NOTE_CLASS,a.$itemBlock).index(this),b=b%a.state.scaleNotes.length,c;a.state.isTriadMode?(c=!a.state.triadsNotesShowPattern[b],a.state.triadsNotesShowPattern[b]=c):(c=!a.state.normalNotesShowPattern[b],a.state.normalNotesShowPattern[b]=c);0==b?(b=$("."+SCALE_NOTE_CLASS,a.$itemBlock).last().find("."+SCALE_NOTE_TEXT_CLASS),b.toggleClass(TRANSPARENT_NOTE_CLASS,!c),b=$("."+SCALE_NOTE_CLASS,a.$itemBlock).first().find("."+
SCALE_NOTE_TEXT_CLASS)):b=$(this).find("."+SCALE_NOTE_TEXT_CLASS);b.toggleClass(TRANSPARENT_NOTE_CLASS,!c);a.putNotesOnAllStrings();a.state.saveToQuery()};ScalesItem.prototype.deleteItem=function(){var a=$(this);menuItems.deleteItem(a.attr("id"));a.remove()};ScalesItem.prototype.onCloseButton=function(a){a=a.data.that;a.$itemBlock.hide(200,a.deleteItem)};ScalesItem.prototype.onSetDefaultButton=function(a){a.data.that.state.saveToDefaultOptions()};
ScalesItem.prototype.onTriadsCheckboxClick=function(a){a=a.data.that;a.state.isTriadMode?(a.state.isTriadMode=!1,a.$triadsCheckbox.hide(0),a.$triadsCheckboxEmpty.show(0)):(a.state.isTriadMode=!0,a.$triadsCheckboxEmpty.hide(0),a.$triadsCheckbox.show(0));a.updateScaleNotesBlock();a.putNotesOnAllStrings();a.state.saveToQuery()};
ScalesItem.prototype.initTriadsCheckbox=function(){this.$triadsCheckbox=$("."+TRIADS_CHECKBOX_CLASS,this.$itemBlock);this.$triadsCheckboxEmpty=$("."+TRIADS_CHECKBOX_EMPTY_CLASS,this.$itemBlock);this.state.isTriadMode?this.$triadsCheckboxEmpty.hide(0):this.$triadsCheckbox.hide(0);this.$triadsCheckbox.click({that:this},this.onTriadsCheckboxClick);this.$triadsCheckboxEmpty.click({that:this},this.onTriadsCheckboxClick)};ScalesItem.prototype.initAnimation=function(){this.$itemBlock.hide(0);this.$itemBlock.show(200)};
ScalesItem.prototype.init=function(a,b){menuItems.$addNewItemBtn.before(SCALES_ITEM_BLOCK_TMPL({id:a}));this.$itemBlock=$("#"+a);this.initAnimation();this.neck=new Neck(this.state,$("."+NECK_BLOCK_CLASS,this.$itemBlock),$("."+STRING_NUMBER_CLASS,this.$itemBlock),$("."+ADD_STRING_BTN_CLASS,this.$itemBlock),$("."+DEL_STRING_BTN_CLASS,this.$itemBlock),$("."+TUNING_OPTIONS_CLASS,this.$itemBlock),$("."+LH_TOGGLE_BLOCK_CLASS,this.$itemBlock));this.initTriadsCheckbox();this.updateScaleNotesBlock();this.selectCurrentScale();
this.selectCurrentRootNote();$("."+SCALE_SELECT_CLASS,this.$itemBlock).change({that:this},this.onScaleChange);$("."+SCALE_NOTES_BLOCK_CLASS,this.$itemBlock).on("click","."+ROOT_NOTE_CLASS,{that:this},this.onRootNoteChange);$("."+CLOSE_BTN_CLASS,this.$itemBlock).click({that:this},this.onCloseButton);$("."+SET_DEFAULT_BTN_CLASS,this.$itemBlock).click({that:this},this.onSetDefaultButton)};var menuItems={itemsNumber:0,items:{},itemsSerializedStates:{},getIDforNewItem:function(){for(var a=0;void 0!==this.items[ITEMS_ID_BASE+a];)a++;return ITEMS_ID_BASE+a},deleteItem:function(a){this.itemsNumber==MAX_ITEMS_NUMBER&&$addNewItemBtn.show(200);delete this.items[a]&&(delete this.itemsSerializedStates[a],this.updateItemsQueryParams(),this.itemsNumber--)},updateItemsQueryParams:function(){for(var a="?",b=0;b<MAX_ITEMS_NUMBER;b++){var c=ITEMS_ID_BASE+b;void 0!==this.itemsSerializedStates[c]&&
(c=btoa(this.itemsSerializedStates[c]),a+="i"+b+"="+c,b<this.itemsNumber&&(a+="&"))}history.replaceState({},"",a)},updateItemSerializedData:function(a,b){this.itemsSerializedStates[a]=b},createNewItem:function(){var a=this.getIDforNewItem();this.itemsNumber<MAX_ITEMS_NUMBER?(this.items[a]=new ScalesItem(a),this.itemsNumber++):$addNewItemBtn.hide(200)},createItemsFromQueryParams:function(a){for(var b=0;b<a.length&&b<MAX_ITEMS_NUMBER;b++){var c=this.getIDforNewItem();this.items[c]=new ScalesItem(c,
a[b]);this.itemsNumber++}this.itemsNumber>=MAX_ITEMS_NUMBER&&this.$addNewItemBtn.hide(200)},readItemsQueryParams:function(){var a=window.location.href,b=a.indexOf("?"),c=[];if(-1!=b)for(var a=a.slice(b+1).split("&"),d=0;d<a.length&&d<MAX_ITEMS_NUMBER;d++)if(b=a[d].indexOf("="),-1!=b){b=a[d].slice(b+1);b=decodeURI(b);try{b=atob(b),c.push(b)}catch(e){console.log(PARAMS_ATOB_ERROR_MSG+"\n"+e)}}return c},onNewItemButton:function(a){that=a.data.that;that.createNewItem()},init:function(){this.$addNewItemBtn=
$("#"+ADD_NEW_ITEM_BTN_ID);this.$addNewItemBtn.click({that:this},this.onNewItemButton);var a=this.readItemsQueryParams();0==a.length?this.createNewItem():this.createItemsFromQueryParams(a)}};metronome.init();defaults.init();menuItems.init();
