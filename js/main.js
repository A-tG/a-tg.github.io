var $jscomp={scope:{},findInternal:function(a,b,d){a instanceof String&&(a=String(a));for(var c=a.length,e=0;e<c;e++){var f=a[e];if(b.call(d,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,d){if(d.get||d.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=d.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,b,d,c){if(b){d=$jscomp.global;a=a.split(".");for(c=0;c<a.length-1;c++){var e=a[c];e in d||(d[e]={});d=d[e]}a=a[a.length-1];c=d[a];b=b(c);b!=c&&null!=b&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:b})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6-impl","es3");
(function(a){if("function"===typeof define&&define.amd)define(a);else if("object"===typeof exports)module.exports=a();else{var b=window.Cookies,d=window.Cookies=a();d.noConflict=function(){window.Cookies=b;return d}}})(function(){function a(){for(var a=0,b={};a<arguments.length;a++){var e=arguments[a],f;for(f in e)b[f]=e[f]}return b}function b(d){function c(b,f,g){var e;if("undefined"!==typeof document){if(1<arguments.length){g=a({path:"/"},c.defaults,g);if("number"===typeof g.expires){var l=new Date;
l.setMilliseconds(l.getMilliseconds()+864E5*g.expires);g.expires=l}try{e=JSON.stringify(f),/^[\{\[]/.test(e)&&(f=e)}catch(p){}f=d.write?d.write(f,b):encodeURIComponent(String(f)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);b=encodeURIComponent(String(b));b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);b=b.replace(/[\(\)]/g,escape);return document.cookie=[b,"=",f,g.expires&&"; expires="+g.expires.toUTCString(),g.path&&"; path="+g.path,g.domain&&
"; domain="+g.domain,g.secure?"; secure":""].join("")}b||(e={});for(var l=document.cookie?document.cookie.split("; "):[],q=/(%[0-9A-Z]{2})+/g,n=0;n<l.length;n++){var r=l[n].split("="),k=r.slice(1).join("=");'"'===k.charAt(0)&&(k=k.slice(1,-1));try{var m=r[0].replace(q,decodeURIComponent),k=d.read?d.read(k,m):d(k,m)||k.replace(q,decodeURIComponent);if(this.json)try{k=JSON.parse(k)}catch(p){}if(b===m){e=k;break}b||(e[m]=k)}catch(p){}}return e}}c.set=c;c.get=function(b){return c(b)};c.getJSON=function(){return c.apply({json:!0},
[].slice.call(arguments))};c.defaults={};c.remove=function(b,d){c(b,"",a(d,{expires:-1}))};c.withConverter=b;return c}return b(function(){})});var SCALE_SEMITONES_NUMBER=12,MAX_HALF_STEP=11,MIN_HALF_STEP=-11,MAX_STRINGS_NUMBER=12,MIN_STRINGS_NUMBER=3,MAX_ITEMS_NUMBER=5,FRETS_NUMBER=24,DEFAULT_METR_BEATS=4,DEFAULT_METR_BEAT_VAL=4,DEFAULT_METR_VOLUME=50,DEFAULT_METR_TEMPO=120,MIN_BEATS=1,MAX_BEATS=16,MIN_BEAT_VAL=1,MAX_BEAT_VAL=32,MIN_TEMPO=40,MAX_TEMPO=320,DEFAULT_SCALE_OPTIONS_EXPIRE_DAYS=30,DEFAULT_NOTES_SHOW_PATTERN=[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0],DEFAULT_TRIADS_SHOW_PATTERN=[!0,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!1],NOTES="C C# D D# E F F# G G# A A# B".split(" "),
DEFAULT_SCALE_SEMITONES=[2,2,1,2,2,2,1],DEFAULT_STRING_TUNES="E B G D A E B F# C# G# D# A#".split(" "),DEFAULT_SCALE_NOTES="CDEFGAB".split(""),SCALES={major:[2,2,1,2,2,2,1],aeolian:[2,2,1,2,2,2,1],minor:[2,1,2,2,1,2,2],ionian:[2,1,2,2,1,2,2],harmonic_min:[2,1,2,2,1,3,1],chromatic:[1,1,1,1,1,1,1,1,1,1,1,1],dorian:[2,1,2,2,2,1,2],phrygian:[1,2,2,2,1,2,2],lydian:[2,2,2,1,2,2,1],myxolydian:[2,2,1,2,2,1,2],locrian:[1,2,2,1,2,2,2],melodic_min:[2,1,2,2,2,2,1],alt_dom:[1,2,1,2,2,2,2],sup_locrian:[1,2,1,2,
2,2,2],dim_whole_tone:[1,2,1,2,2,2,2],alt_scale:[1,2,1,2,2,2,2],blues_min_hex:[3,2,1,1,3,2],blues_pent:[3,2,1,4,2],blues:[3,2,1,1,3,1,1],major_pent:[2,2,3,2,3],suspended_pent:[2,3,2,3,2],dorian_pent:[2,3,2,3,2],phrygian_pent:[3,2,3,2,2],myxolydian_pent:[2,3,2,2,3],aeolian_pent:[3,2,2,3,2],minor_pent:[3,2,2,3,2],major_beb:[2,2,1,2,1,1,2,1],minor_beb:[2,1,1,1,2,2,1,2],dom_beb:[2,2,1,2,2,1,1,1],dorian_beb:[2,1,1,1,2,2,1,2],whole_tone:[2,2,2,2,2,2],whole_half_tone:[2,1,2,1,2,1,2,1],half_whole_tone:[1,
2,1,2,1,2,1,2],dim:[2,1,2,1,2,1,2,1],dom_dim:[1,2,1,2,1,2,1,2],symm_dim:[1,2,1,2,1,2,1,2],spanish:[1,2,2,2,1,2,2],acoustic:[2,2,2,1,2,1,2],bartok:[2,2,2,1,2,1,2]},TUNINGS={standart_e:"E B G D A E B F# C# G# D# A#".split(" "),standart_e_bass:["G","D","A","E","B"],drop_d_6:"E B G D A D B F# C# G# D# A#".split(" "),drop_a_7:"E B G D A E A F# C# G# D# A#".split(" "),drop_e_8:"E B G D A E B E C# G# D# A#".split(" ")},CUSTOM_TUNING_VALUE="custom",STRING_NUMBER_CLASS="strings_number",SCALE_SELECT_CLASS=
"scale_select",FRETBOARD_CLASS="fretboard",HOR_FRET_CLASS="fret_hor",NULL_VER_FRET_CLASS="fret_null",VER_FRET_CLASS="fret_ver",NOTE_CLASS="note",NORMAL_NOTE_CLASS="normal_note",HIGHLIGHTED_NOTE_CLASS="highlighted_note",TRANSPARENT_NOTE_CLASS="transparent_note",STRINGS_OPTIONS_BLOCK_CLASS="strings_options_block",STRING_TUNE_BLOCK_CLASS="string_tune",STRING_TUNE_SELECT_CLASS="string_tune_select",LEFT_ARROW_CLASS="left_arrow",RIGHT_ARROW_CLASS="right_arrow",HALF_STEP_BLOCK_CLASS="half_step_block",HALF_STEP_SELECT_CLASS=
"half_step_select",TUNING_SELECT_CLASS="tuning_select",ROOT_NOTE_CLASS="root_note",SELECTED_TEXT_CLASS="selected_text",SCALE_NOTES_BLOCK_CLASS="scale_notes_and_semitones_block",SCALE_NOTES_CLASS="scale_notes",SCALE_NOTE_CLASS="scale_note",SCALE_NOTE_TEXT_CLASS="scale_note_text",ADD_STRING_BTN_CLASS="add_string",DEL_STRING_BTN_CLASS="delete_string",CLOSE_BTN_CLASS="close_btn",SET_DEFAULT_BTN_CLASS="set_default_btn",TRIADS_CHECKBOX_CLASS="triads_checkbox",TRIADS_CHECKBOX_EMPTY_CLASS="triads_checkbox_empty",
METRONOME_DISABLED_ID="metronome_disabled_block",ADD_NEW_ITEM_BTN_ID="add_new_item_btn",METR_PLAY_BTN_ID="metronome_play_btn",METR_STOP_BTN_ID="metronome_stop_btn",METR_VOLUME_RANGE_ID="metronome_volume_range",METR_TEMPO_RANGE_ID="metronome_tempo_range",METR_TEMPO_INPUT_ID="metronome_tempo_input",METR_TEMPO_LEFT_ARROW_ID="metronome_tempo_left_arrow",METR_TEMPO_RIGHT_ARROW_ID="metronome_tempo_right_arrow",METR_BEATS_SELECT_ID="metronome_beats_select",METR_BEATS_LEFT_ARROW_ID="metronome_beats_left_arrow",
METR_BEATS_RIGHT_ARROW_ID="metronome_beats_right_arrow",METR_BEAT_VAL_SELECT_ID="metronome_beat_val_select",METR_BEAT_VAL_LEFT_ARROW_ID="metronome_beat_val_left_arrow",METR_BEAT_VAL_RIGHT_ARROW_ID="metronome_beat_val_right_arrow",WRONG_SEMITONE_NUMBER_MSG="Wrong sum of semitones, must be equal to "+SCALE_SEMITONES_NUMBER,WRONG_ROOT_NOTE_MSG="Wrong root note",WRONG_NOTE_MSG="Wrong note",WRONG_SCALE_NAME_MSG="Wrong scale name (value)",WRONG_STRING_TUNE_NOTE_MSG="Wrong string tune note",WRONG_TUNING_NAME=
"Wrong tuning name (value)",WEB_AUDIO_INIT_ERR_MSG="Web audio initialization error",WORKER_INIT_ERR_MSG="Web worker initialization error",SCALE_NOTES_TMPL=doT.template($("#scale_notes_tmpl").html()),STRING_VER_FRET_TMPL=doT.template($("#string_ver_fret_tmpl").html()),STRING_FRET_TMPL=doT.template($("#string_hor_fret_tmpl").html()),STRING_FRET_MARK_TMPL=doT.template($("#fretboard_single_mark").html()),STRING_DOUBLE_FRET_MARK_TMPL=doT.template($("#fretboard_double_mark").html()),STRING_TUNE_BLOCK_TMPL=
doT.template($("#string_tune_block_tmpl").html()),SCALES_ITEM_BLOCK_TMPL=doT.template($("#scales_item_tmpl").html());function isCorrectNote(a){var b=!1;0<=NOTES.indexOf(a.toUpperCase())?b=!0:console.log(a+": "+WRONG_NOTE_MSG);return b}function isCorrectSemitonesSum(a){for(var b=!1,d=0,c=0;c<a.length;c++)d+=a[c];d==SCALE_SEMITONES_NUMBER?b=!0:console.log(a+": "+WRONG_SEMITONE_NUMBER_MSG);return b}function isCorrectScale(a){var b=!1,d=SCALES[a];void 0!==d?b=isCorrectSemitonesSum(d):console.log(a+": "+WRONG_SCALE_NAME_MSG);return b}
function isCorrectTuningNotes(a){for(var b=!1,d=0;d<a.length&&(b=isCorrectNote(a[d]),b);d++);return b}function isCorrectTuning(a){var b=!1;if(a!==CUSTOM_TUNING_VALUE){var d=TUNINGS[a];void 0!==d?b=isCorrectTuningNotes(d):console.log(a+": "+WRONG_TUNING_NAME)}else b=!0;return b}function isCorrectHalfStep(a){return+a>=MIN_HALF_STEP&&+a<=MAX_HALF_STEP}function isCorrectStringsNumber(a){return+a>=MIN_STRINGS_NUMBER&&+a<=MAX_STRINGS_NUMBER}
function getScaleSemitones(a){a=a.toLowerCase();var b=DEFAULT_SCALE_SEMITONES;isCorrectScale(a)&&(b=SCALES[a]);return b}function getTuneNotes(a){a=a.toLowerCase();var b=DEFAULT_STRING_TUNES;isCorrectTuning(a)&&(b=TUNINGS[a].slice());return b}function prevNote(a){resultNote="C";isCorrectNote(a)&&(a=NOTES.indexOf(a),a--,0>a&&(a=NOTES.length-1),resultNote=NOTES[a]);return resultNote}
function nextNote(a){resultNote="C";isCorrectNote(a)&&(a=NOTES.indexOf(a),a++,a==NOTES.length&&(a=0),resultNote=NOTES[a]);return resultNote}function nextNoteAfterSemiTones(a,b){var d=a;if(0<b)for(var c=0;c<b;c++)d=nextNote(d);else for(c=0;c>b;c--)d=prevNote(d);return d}function prevHalfStep(a){a--;a<MIN_HALF_STEP&&(a=MIN_HALF_STEP);return a}function nextHalfStep(a){a++;a>MAX_HALF_STEP&&(a=MAX_HALF_STEP);return a}
function getNotesFromSemiTones(a,b){var d=DEFAULT_SCALE_NOTES;a=a.toUpperCase();if(isCorrectNote(a)&&isCorrectSemitonesSum(b)){var d=[],c=a;d.push(c);for(var e=0;e<b.length;e++){for(var f=1;f<=b[e];f++)c=nextNote(c);d.push(c)}d.pop()}return d}function getSemiTonesPatternForString(a,b,d){for(var c=[],e=0,f=a.indexOf(d);0>f;)d=nextNote(d),f=a.indexOf(d),e++;c.push(e);for(a=f;a<b.length;a++)c.push(b[a]);for(a=0;a<f;a++)c.push(b[a]);return c}
function sliderLogVal(a,b,d){var c=0;0<a&&(b=Math.log(b),c=Math.exp(b+(Math.log(d)-b)/100*(a-0)));return c}function isCorrectNotesShowPattern(a){var b=!1;"object"===typeof a&&Array.isArray(a)&&a.every(function(b){return"boolean"===typeof b})&&(b=!0);return b};var audioCtx,worker,isMetronomeCanWork=!0;try{audioCtx=new AudioContext}catch(a){console.log(WEB_AUDIO_INIT_ERR_MSG),isMetronomeCanWork=!1}try{worker=new Worker("js/worker.js")}catch(a){console.log(WORKER_INIT_ERR_MSG),isMetronomeCanWork=!1}
var metronome={beats:DEFAULT_METR_BEATS,beatValue:DEFAULT_METR_BEAT_VAL,volume:sliderLogVal(DEFAULT_METR_VOLUME,1,100)/100,tempo:DEFAULT_METR_TEMPO,beatNumber:0,beatsQueue:[],$playBtn:$("#"+METR_PLAY_BTN_ID),$stopBtn:$("#"+METR_STOP_BTN_ID),$volumeRange:$("#"+METR_VOLUME_RANGE_ID),$tempoRange:$("#"+METR_TEMPO_RANGE_ID),$tempoInput:$("#"+METR_TEMPO_INPUT_ID),$tempoLeftArrow:$("#"+METR_TEMPO_LEFT_ARROW_ID),$tempoRightArrow:$("#"+METR_TEMPO_RIGHT_ARROW_ID),$beatsSelect:$("#"+METR_BEATS_SELECT_ID),$beatsLeftArrow:$("#"+
METR_BEATS_LEFT_ARROW_ID),$beatsRightArrow:$("#"+METR_BEATS_RIGHT_ARROW_ID),$beatValSelect:$("#"+METR_BEAT_VAL_SELECT_ID),$beatValLeftArrow:$("#"+METR_BEAT_VAL_LEFT_ARROW_ID),$beatValRightArrow:$("#"+METR_BEAT_VAL_RIGHT_ARROW_ID),scheduleBeatFromQueue:function(){if(0<this.beatsQueue.length){beat=this.beatsQueue.shift();var a=audioCtx.createOscillator();a.type="square";var b=440;0==this.beatNumber&&(b=640);a.frequency.value=b;a.connect(this.gainNode);a.start(beat.time);a.stop(beat.time+50/b)}},beatsScheduler:function(){itemThis=
metronome;if(0<itemThis.beatsQueue.length){var a=itemThis.beatsQueue[itemThis.beatsQueue.length-1],b=240/itemThis.beatValue/itemThis.tempo;audioCtx.currentTime+b>=a.time&&(itemThis.beatsQueue.push({time:a.time+b,number:itemThis.beatNumber}),itemThis.scheduleBeatFromQueue(),itemThis.beatNumber=(itemThis.beatNumber+1)%itemThis.beats)}else itemThis.beatsQueue.push({time:audioCtx.currentTime,number:itemThis.beatNumber})},onPlayBtn:function(a){itemThis=a.data.itemThis;$(this).hide();itemThis.$stopBtn.show();
itemThis.beatNumber=0;worker.postMessage("start")},onStopBtn:function(a){itemThis=a.data.itemThis;itemThis.beatsQueue=[];$(this).hide();itemThis.$playBtn.show();worker.postMessage("stop")},onVolumeChange:function(a){itemThis=a.data.itemThis;a=$(this).val();a=sliderLogVal(+a,1,100);a/=100;itemThis.gainNode.gain.value=a;itemThis.volume=a},onTempoChange:function(a){itemThis=a.data.itemThis;a=$(this).val();itemThis.$tempoInput.val(a);itemThis.tempo=+a},onTempoInputChange:function(a){itemThis=a.data.itemThis;
a=$(this).val().replace(/[^,.0-9]/gim,"").replace(/[,.]+/gim,".");a=parseFloat(a);a<MIN_TEMPO?a=MIN_TEMPO:a>MAX_TEMPO&&(a=MAX_TEMPO);itemThis.tempo=a;$(this).val(a);itemThis.$tempoRange.val(a)},onTempoLeftArrow:function(a){itemThis=a.data.itemThis;a=itemThis.$tempoInput.val();a>MIN_TEMPO&&(a--,itemThis.tempo=a,itemThis.$tempoInput.val(a),itemThis.$tempoRange.val(a))},onTempoRightArrow:function(a){itemThis=a.data.itemThis;a=itemThis.$tempoInput.val();a<MAX_TEMPO&&(a++,itemThis.tempo=a,itemThis.$tempoInput.val(a),
itemThis.$tempoRange.val(a))},onBeatsChange:function(a){itemThis=a.data.itemThis;a=$(this).val();itemThis.beats=+a},onBeatsLeftArrow:function(a){itemThis=a.data.itemThis;a=itemThis.beats;a<=MIN_BEATS||(a--,itemThis.beats=a,itemThis.$beatsSelect.find("[value='"+a+"']").prop("selected",!0))},onBeatsRightArrow:function(a){itemThis=a.data.itemThis;a=itemThis.beats;a>=MAX_BEATS||(a++,itemThis.beats=a,itemThis.$beatsSelect.find("[value='"+a+"']").prop("selected",!0))},onBeatValChange:function(a){itemThis=
a.data.itemThis;a=$(this).val();itemThis.beatValue=+a},onBeatValLeftArrow:function(a){itemThis=a.data.itemThis;a=itemThis.beatValue;a<=MIN_BEAT_VAL||(a/=2,itemThis.beatValue=a,itemThis.$beatValSelect.find("[value='"+a+"']").prop("selected",!0))},onBeatValRightArrow:function(a){itemThis=a.data.itemThis;a=itemThis.beatValue;a>=MAX_BEAT_VAL||(a*=2,itemThis.beatValue=a,itemThis.$beatValSelect.find("[value='"+a+"']").prop("selected",!0))},workerTick:function(a){var b=metronome;"tick"==a.data&&b.beatsScheduler()},
init:function(){this.$stopBtn.hide();this.tempo=+this.$tempoRange.val();this.volume=sliderLogVal(+this.$volumeRange.val(),1,100)/100;this.gainNode=audioCtx.createGain();this.gainNode.gain.value=this.volume;this.gainNode.connect(audioCtx.destination);worker.onmessage=this.workerTick;this.$tempoInput.val(this.tempo);this.beats=this.$beatsSelect.val();this.beatValue=this.$beatValSelect.val();this.$playBtn.click({itemThis:this},this.onPlayBtn);this.$stopBtn.click({itemThis:this},this.onStopBtn);this.$volumeRange.change({itemThis:this},
this.onVolumeChange);this.$volumeRange.on("input",{itemThis:this},this.onVolumeChange);this.$tempoRange.change({itemThis:this},this.onTempoChange);this.$tempoRange.on("input",{itemThis:this},this.onTempoChange);this.$tempoInput.change({itemThis:this},this.onTempoInputChange);this.$tempoLeftArrow.click({itemThis:this},this.onTempoLeftArrow);this.$tempoRightArrow.click({itemThis:this},this.onTempoRightArrow);this.$beatsSelect.change({itemThis:this},this.onBeatsChange);this.$beatsLeftArrow.click({itemThis:this},
this.onBeatsLeftArrow);this.$beatsRightArrow.click({itemThis:this},this.onBeatsRightArrow);this.$beatValSelect.change({itemThis:this},this.onBeatValChange);this.$beatValLeftArrow.click({itemThis:this},this.onBeatValLeftArrow);this.$beatValRightArrow.click({itemThis:this},this.onBeatValRightArrow)}};var defaultScaleItemOptions={scale:"major",root:"C",tuning:"standart_e",halfStep:0,stringsTunes:DEFAULT_STRING_TUNES,stringsNumber:6,isTriadMode:!1,normalNotesShowPattern:DEFAULT_NOTES_SHOW_PATTERN,triadsNotesShowPattern:DEFAULT_TRIADS_SHOW_PATTERN};
function getDefaultScaleOptionsFromCookie(){if(void 0!==Cookies.getJSON("defaultScaleOptions")){var a=Cookies.getJSON("defaultScaleOptions");void 0!==a.scale&&isCorrectScale(a.scale)&&(defaultScaleItemOptions.scale=a.scale);void 0!==a.root&&isCorrectNote(a.root)&&(defaultScaleItemOptions.root=a.root);void 0!==a.tuning&&isCorrectTuning(a.tuning)&&(defaultScaleItemOptions.tuning=a.tuning);void 0!==a.halfStep&&isCorrectHalfStep(a.halfStep)&&(defaultScaleItemOptions.halfStep=+a.halfStep);void 0!==a.stringsTunes&&
isCorrectTuningNotes(a.stringsTunes)&&(defaultScaleItemOptions.stringsTunes=a.stringsTunes);void 0!==a.stringsNumber&&isCorrectStringsNumber(a.stringsNumber)&&(defaultScaleItemOptions.stringsNumber=+a.stringsNumber);void 0!==a.isTriadMode&&"boolean"===typeof a.isTriadMode&&(defaultScaleItemOptions.isTriadMode=a.isTriadMode);void 0!==a.normalNotesShowPattern&&isCorrectNotesShowPattern(a.normalNotesShowPattern)&&(defaultScaleItemOptions.normalNotesShowPattern=a.normalNotesShowPattern);void 0!==a.triadsNotesShowPattern&&
isCorrectNotesShowPattern(a.triadsNotesShowPattern)&&(defaultScaleItemOptions.triadsNotesShowPattern=a.triadsNotesShowPattern)}}
function ScalesItem(a){this.id=a;this.scale="major";this.root="C";this.semiTones=DEFAULT_SCALE_SEMITONES;this.scaleNotes=DEFAULT_SCALE_NOTES;this.tuning="standart_e";this.halfStep=0;this.stringsNumber=3;this.stringsTunes=DEFAULT_STRING_TUNES;this.isTriadMode=!1;this.normalNotesShowPattern=DEFAULT_NOTES_SHOW_PATTERN;this.triadsNotesShowPattern=DEFAULT_TRIADS_SHOW_PATTERN;this.putNotesOnString=function(b){var a=this.getTuneForString(b),c=$("."+HOR_FRET_CLASS+":eq("+b+")",$("."+NULL_VER_FRET_CLASS+", ."+
VER_FRET_CLASS,this.$fretboardBlock),this.$fretboardBlock);b=getSemiTonesPatternForString(this.scaleNotes,this.semiTones,a);c=$("."+NOTE_CLASS,c);c.css("display","none");c.toggleClass(TRANSPARENT_NOTE_CLASS,!1);for(var e=b.shift(),a=nextNoteAfterSemiTones(a,e),f=0;e<c.length;){var g=$(c[e]);g.css("display","inline");var h=this.scaleNotes.indexOf(a),l;this.isTriadMode?(l=!this.triadsNotesShowPattern[h],g.text(h+1)):(l=!this.normalNotesShowPattern[h],g.text(a));l&&g.toggleClass(TRANSPARENT_NOTE_CLASS,
!0);h=a==this.root;g.toggleClass(NORMAL_NOTE_CLASS,!h).toggleClass(HIGHLIGHTED_NOTE_CLASS,h);e+=b[f];a=nextNoteAfterSemiTones(a,b[f]);f=++f%b.length}};this.putNotesOnAllStrings=function(){for(var a=0;a<this.stringsNumber;a++)this.putNotesOnString(a)};this.incStringsNumber=function(){this.stringsNumber++;this.$stringsNumberBlock.text(""+this.stringsNumber)};this.decStringsNumber=function(){this.stringsNumber--;this.$stringsNumberBlock.text(""+this.stringsNumber)};this.getTuneForString=function(a){return this.stringsTunes[a%
this.stringsTunes.length]};this.addString=function(a){var b=this.getTuneForString(a),c=$("."+STRINGS_OPTIONS_BLOCK_CLASS,this.$itemBlock).append(STRING_TUNE_BLOCK_TMPL()).children().last();$("."+STRING_TUNE_SELECT_CLASS+" :contains('"+b+"')",c).prop("selected",!0);for(var b={currentStringNumber:a+1},e=$("."+NULL_VER_FRET_CLASS+", ."+VER_FRET_CLASS,this.$fretboardBlock),f,g,h=0;h<e.length;h++)$(e[h]).append(STRING_FRET_TMPL(b)),0==a&&(g=h%12,f=3==g||5==g||7==g||9==g,g=0!=h&&0==g,f?$(e[h]).append(STRING_FRET_MARK_TMPL()):
g&&$(e[h]).append(STRING_DOUBLE_FRET_MARK_TMPL()));this.putNotesOnString(a);$("."+STRING_TUNE_SELECT_CLASS,c).change({itemThis:this},this.onStringTuneChange);$("."+LEFT_ARROW_CLASS,c).click({itemThis:this},this.onLeftArrowTuneClick);$("."+RIGHT_ARROW_CLASS,c).click({itemThis:this},this.onRightArrowTuneClick)};this.delLastString=function(){$("."+STRING_TUNE_BLOCK_CLASS,this.$itemBlock).last().remove();for(var a=$("."+NULL_VER_FRET_CLASS+", ."+VER_FRET_CLASS,this.$fretboardBlock),d=0;d<a.length;d++)$("."+
HOR_FRET_CLASS,$(a[d])).last().remove()};this.selectCurrentStringsTunes=function(){for(var a=$("."+STRINGS_OPTIONS_BLOCK_CLASS,this.$itemBlock),d=0;d<this.stringsNumber;d++)a.find("."+STRING_TUNE_SELECT_CLASS+":eq("+d+") :contains('"+this.getTuneForString(d)+"')").prop("selected",!0)};this.selectCurrentTuning=function(){this.$itemBlock.find("."+TUNING_SELECT_CLASS+" [value='"+this.tuning+"']").prop("selected",!0)};this.selectCurrentScale=function(){$("."+SCALE_SELECT_CLASS+" [value='"+this.scale+
"']",this.$itemBlock).prop("selected",!0)};this.selectCurrentHalfStep=function(){$("."+HALF_STEP_SELECT_CLASS+" [value='"+this.halfStep+"']",this.$itemBlock).prop("selected",!0)};this.moveTuning=function(a){for(var b=0;b<this.stringsTunes.length;b++)this.stringsTunes[b]=nextNoteAfterSemiTones(this.stringsTunes[b],a)};this.changeScaleNotesBlock=function(){$("."+SCALE_NOTES_CLASS,this.$itemBlock).remove();var a=this.scaleNotes.slice();a.push(this.root);a={root:this.root,semiTones:this.semiTones,notes:a};
$("."+SCALE_NOTES_BLOCK_CLASS,this.$itemBlock).append(SCALE_NOTES_TMPL(a));for(var a=$("."+SCALE_NOTES_CLASS,this.$itemBlock).find("."+SCALE_NOTE_TEXT_CLASS),d=a.length-1,c=0;c<d;c++)if(this.isTriadMode?!this.triadsNotesShowPattern[c]:!this.normalNotesShowPattern[c]){var e=$(a[c]);e.toggleClass(TRANSPARENT_NOTE_CLASS,!0);0==c&&(e=$(a[d]),e.toggleClass(TRANSPARENT_NOTE_CLASS,!0))}$("."+SCALE_NOTES_CLASS,this.$itemBlock).on("click","."+SCALE_NOTE_CLASS,{itemThis:this},this.onScaleNoteClick)};this.onScaleChange=
function(a){a=a.data.itemThis;var b=$(this).val().toLowerCase();isCorrectScale(b)&&(a.scale=b,a.semiTones=getScaleSemitones(b),a.scaleNotes=getNotesFromSemiTones(a.root,a.semiTones),a.putNotesOnAllStrings(),a.changeScaleNotesBlock())};this.onStringTuneChange=function(a){var b=a.data.itemThis,c=$("."+STRINGS_OPTIONS_BLOCK_CLASS,a.data.itemThis.$itemBlock);a=$(this).val();c=$("."+STRING_TUNE_SELECT_CLASS,c).index(this);b.stringsTunes[c]=a;b.putNotesOnString(c);b.tuning=CUSTOM_TUNING_VALUE;b.selectCurrentTuning()};
this.onLeftArrowTuneClick=function(a){var b=a.data.itemThis;a=$("."+STRINGS_OPTIONS_BLOCK_CLASS,a.data.itemThis.$itemBlock);var c=$("."+LEFT_ARROW_CLASS,a).index(this),e=b.stringsTunes[c],e=prevNote(e);b.stringsTunes[c]=e;$("."+STRING_TUNE_SELECT_CLASS+":eq("+c+") :contains('"+e+"')",a).prop("selected",!0);b.putNotesOnString(c);b.tuning=CUSTOM_TUNING_VALUE;b.selectCurrentTuning()};this.onRightArrowTuneClick=function(a){var b=a.data.itemThis;a=$("."+STRINGS_OPTIONS_BLOCK_CLASS,a.data.itemThis.$itemBlock);
var c=$("."+RIGHT_ARROW_CLASS,a).index(this),e=b.stringsTunes[c],e=nextNote(e);b.stringsTunes[c]=e;$("."+STRING_TUNE_SELECT_CLASS+":eq("+c+") :contains('"+e+"')",a).prop("selected",!0);b.putNotesOnString(c);b.tuning=CUSTOM_TUNING_VALUE;b.selectCurrentTuning()};this.onTuningChange=function(a){a=a.data.itemThis;var b=$(this).val().toLowerCase();b==CUSTOM_TUNING_VALUE?a.tuning=b:isCorrectTuning(b)&&(a.tuning=b,a.stringsTunes=getTuneNotes(b),a.moveTuning(a.halfStep),a.putNotesOnAllStrings(),a.selectCurrentStringsTunes())};
this.onHalfStepChange=function(a){a=a.data.itemThis;var b=a.halfStep,c=$(this).val().replace(/[^-0-9]/gim,""),c=+c;a.halfStep=c;a.moveTuning(c-b);a.selectCurrentStringsTunes();a.putNotesOnAllStrings()};this.onLeftArrowHalfStepClick=function(a){a=a.data.itemThis;var b=a.halfStep;b!=-MAX_HALF_STEP&&(b=prevHalfStep(b),a.halfStep=b,a.moveTuning(-1),a.selectCurrentStringsTunes(),a.putNotesOnAllStrings(),a.selectCurrentHalfStep())};this.onRightArrowHalfStepCLick=function(a){a=a.data.itemThis;var b=a.halfStep;
b!=MAX_HALF_STEP&&(b=nextHalfStep(b),a.halfStep=b,a.moveTuning(1),a.selectCurrentStringsTunes(),a.putNotesOnAllStrings(),a.selectCurrentHalfStep())};this.onRootNoteChange=function(a){a=a.data.itemThis;var b=$(this).text();isCorrectNote(b)&&(a.root=b.toUpperCase(),$(" ."+ROOT_NOTE_CLASS+"."+SELECTED_TEXT_CLASS,a.$itemBlock).toggleClass(SELECTED_TEXT_CLASS,!1),$(this).toggleClass(SELECTED_TEXT_CLASS,!0),a.scaleNotes=getNotesFromSemiTones(a.root,a.semiTones),a.changeScaleNotesBlock(),a.putNotesOnAllStrings())};
this.onScaleNoteClick=function(a){a=a.data.itemThis;var b=$("."+SCALE_NOTE_CLASS,a.$itemBlock).index(this),b=b%a.scaleNotes.length,c;a.isTriadMode?(c=!a.triadsNotesShowPattern[b],a.triadsNotesShowPattern[b]=c):(c=!a.normalNotesShowPattern[b],a.normalNotesShowPattern[b]=c);0==b?(b=$("."+SCALE_NOTE_CLASS,a.$itemBlock).last().find("."+SCALE_NOTE_TEXT_CLASS),b.toggleClass(TRANSPARENT_NOTE_CLASS,!c),b=$("."+SCALE_NOTE_CLASS,a.$itemBlock).first().find("."+SCALE_NOTE_TEXT_CLASS)):b=$(this).find("."+SCALE_NOTE_TEXT_CLASS);
b.toggleClass(TRANSPARENT_NOTE_CLASS,!c);a.putNotesOnAllStrings()};this.onAddStringButton=function(a){a=a.data.itemThis;var b=a.stringsNumber;b<MAX_STRINGS_NUMBER&&(a.addString(b),a.incStringsNumber())};this.onDelStringButton=function(a){a=a.data.itemThis;a.stringsNumber>MIN_STRINGS_NUMBER&&(a.delLastString(),a.decStringsNumber())};this.onCloseButton=function(a){a=a.data.itemThis;a.$itemBlock.hide(200,function(){$(this).remove()});deleteItem(a.id)};this.onSetDefaultButton=function(a){a=a.data.itemThis;
defaultScaleItemOptions.scale=a.scale;defaultScaleItemOptions.root=a.root;defaultScaleItemOptions.semiTones=a.semiTones;defaultScaleItemOptions.tuning=a.tuning;defaultScaleItemOptions.halfStep=a.halfStep;defaultScaleItemOptions.stringsTunes=a.stringsTunes;defaultScaleItemOptions.stringsNumber=a.stringsNumber;defaultScaleItemOptions.isTriadMode=a.isTriadMode;Cookies.set("defaultScaleOptions",defaultScaleItemOptions,{expires:DEFAULT_SCALE_OPTIONS_EXPIRE_DAYS})};this.onTriadsCheckboxClick=function(a){a=
a.data.itemThis;a.isTriadMode?(a.isTriadMode=!1,a.$triadsCheckbox.hide(0),a.$triadsCheckboxEmpty.show(0)):(a.isTriadMode=!0,a.$triadsCheckboxEmpty.hide(0),a.$triadsCheckbox.show(0));a.changeScaleNotesBlock();a.putNotesOnAllStrings()};this.initStrings=function(){for(var a=0;a<FRETS_NUMBER;a++)this.$fretboardBlock.children().last().before(STRING_VER_FRET_TMPL());for(a=0;a<this.stringsNumber;a++)this.addString(a),this.$stringsNumberBlock.text(""+this.stringsNumber);this.selectCurrentStringsTunes()};
this.readDefaultScaleItemOptions=function(){this.scale=defaultScaleItemOptions.scale;this.root=defaultScaleItemOptions.root;this.semiTones=getScaleSemitones(this.scale);this.scaleNotes=getNotesFromSemiTones(this.root,this.semiTones);this.tuning=defaultScaleItemOptions.tuning;this.halfStep=defaultScaleItemOptions.halfStep;this.stringsTunes=defaultScaleItemOptions.stringsTunes;var a=defaultScaleItemOptions.stringsNumber;a<MIN_STRINGS_NUMBER&&(a=MIN_STRINGS_NUMBER);this.stringsNumber=a;this.isTriadMode=
defaultScaleItemOptions.isTriadMode;this.normalNotesShowPattern=defaultScaleItemOptions.normalNotesShowPattern;this.triadsNotesShowPattern=defaultScaleItemOptions.triadsNotesShowPattern};this.initTriadsCheckbox=function(){this.$triadsCheckbox=$("."+TRIADS_CHECKBOX_CLASS,this.$itemBlock);this.$triadsCheckboxEmpty=$("."+TRIADS_CHECKBOX_EMPTY_CLASS,this.$itemBlock);this.isTriadMode?this.$triadsCheckboxEmpty.hide(0):this.$triadsCheckbox.hide(0);this.$triadsCheckbox.click({itemThis:this},this.onTriadsCheckboxClick);
this.$triadsCheckboxEmpty.click({itemThis:this},this.onTriadsCheckboxClick)};this.initAnimation=function(){this.$itemBlock.hide(0);this.$itemBlock.show(200)};this.init=function(){$addNewItemBtn.before(SCALES_ITEM_BLOCK_TMPL({id:this.id}));this.$itemBlock=$("#"+this.id);this.$stringsNumberBlock=$("."+STRING_NUMBER_CLASS,this.$itemBlock);this.$fretboardBlock=$("."+FRETBOARD_CLASS,this.$itemBlock);this.initAnimation();this.readDefaultScaleItemOptions();this.initStrings();this.initTriadsCheckbox();this.changeScaleNotesBlock();
this.selectCurrentTuning();this.selectCurrentScale();this.selectCurrentHalfStep();this.putNotesOnAllStrings();$("."+SCALE_SELECT_CLASS,this.$itemBlock).change({itemThis:this},this.onScaleChange);$("."+TUNING_SELECT_CLASS,this.$itemBlock).change({itemThis:this},this.onTuningChange);$("."+HALF_STEP_SELECT_CLASS,this.$itemBlock).change({itemThis:this},this.onHalfStepChange);this.$itemBlock.find("."+HALF_STEP_BLOCK_CLASS).find("."+LEFT_ARROW_CLASS).click({itemThis:this},this.onLeftArrowHalfStepClick);
this.$itemBlock.find("."+HALF_STEP_BLOCK_CLASS).find("."+RIGHT_ARROW_CLASS).click({itemThis:this},this.onRightArrowHalfStepCLick);$("."+SCALE_NOTES_BLOCK_CLASS,this.$itemBlock).on("click","."+ROOT_NOTE_CLASS,{itemThis:this},this.onRootNoteChange);$("."+ADD_STRING_BTN_CLASS,this.$itemBlock).click({itemThis:this},this.onAddStringButton);$("."+DEL_STRING_BTN_CLASS,this.$itemBlock).click({itemThis:this},this.onDelStringButton);$("."+CLOSE_BTN_CLASS,this.$itemBlock).click({itemThis:this},this.onCloseButton);
$("."+SET_DEFAULT_BTN_CLASS,this.$itemBlock).click({itemThis:this},this.onSetDefaultButton)};this.init()};var menuItems=[],usedIDs=[];function getIDforNewItem(){for(var a=0;0<=usedIDs.indexOf("menuItem"+a);)a++;return"menuItem"+a}function createNewItem(){var a=getIDforNewItem();menuItems.length<MAX_ITEMS_NUMBER?(menuItems.push(new ScalesItem(a)),usedIDs.push(a)):$addNewItemBtn.hide(200)}function deleteItem(a){menuItems.length==MAX_ITEMS_NUMBER&&$addNewItemBtn.show(200);for(var b=0;b<menuItems.length;b++)menuItems[b].id===a&&(menuItems.splice(b,1),usedIDs.splice(usedIDs.indexOf(a),1))}
var $addNewItemBtn=$("#"+ADD_NEW_ITEM_BTN_ID);$addNewItemBtn.click(createNewItem);isMetronomeCanWork?metronome.init():$("#"+METRONOME_DISABLED_ID).show(0);getDefaultScaleOptionsFromCookie();createNewItem();
