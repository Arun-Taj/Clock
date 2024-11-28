var second = document.getElementById("sec-circle");
var minute = document.getElementById("min-circle");
var hour = document.getElementById("hr-circle");
var amPm = document.getElementById("am");
var sCount = (mCount = 60);
var hCount = 12;
var am = "";
setInterval(() => {
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();
  var h = new Date().getHours();

  s = s < 10 ? `0${s}` : s;
  m = m < 10 ? `0${m}` : m;
  am = h < 12 ? "AM" : "PM";
  h = h > 12 ? h - 12 : h;
  h = h < 10 ? `0${h}` : h;

  var sPer = Math.round((s / sCount) * 100);
  var mPer = Math.round((m / mCount) * 100);
  var hPer = Math.round((h / hCount) * 100);

second.innerHTML =`<div class="circle sec-circle" style="background-image: ${getPercentage(sPer)}">            
  <div id="second" class="in-circle sec-in-circle">                <div>${h}<div>                <div>${m}<div>                <div>${s}<div>            </div>            </div>        `;
  minute.innerHTML = `        <div class="circle min-circle" style="background-image: ${getPercentage(
    mPer
  )}">            <div id="second" class="in-circle min-in-circle"></div>            </div>        `;
  hour.innerHTML = `        <div class="circle hr-circle" style="background-image: ${getPercentage(
    hPer
  )}">            <div id="second" class="in-circle hr-in-circle"></div>            </div>        `;
  amPm.innerHTML = am;
});
function getPercentage(perc) {
  degs = (perc / 100) * 360;
  if (degs <= 180) {
    return `linear-gradient(${
      90 + degs
    }deg, transparent 50%, #000000  50%),linear-gradient(90deg, #000000 50%, transparent 50%);`;
  } else {
    return `linear-gradient(${
      degs - 90
    }deg, transparent 50%, #E65962  50%),linear-gradient(90deg, #000000 50%, transparent 50%);`;
  }
}
