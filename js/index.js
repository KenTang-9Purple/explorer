
let ytdSunSetValueOf;  // 昨天日落時間 VALUE；
let tdySunRiseValueOf; // 今天日出時間 VALUE；
let tdySunSetValueOf;  // 今天日落時間 VALUE；
let tmrSunRiseValueOf; // 明天日出時間 VALUE；
let fPosition;
let bDaytime;
let isShowCycle=false;

//提取日出日落時間
function updateSSR(){
  let timezone= -(new Date()).getTimezoneOffset()/60;
  let res0 = computeSunRiseSunSet( lat, lon,timezone,-1);
  ytdSunSetValueOf = res0.SunSet.valueOf()-86400000;
  let res1 = computeSunRiseSunSet( lat, lon,timezone,0);
  tdySunRiseValueOf =res1.SunRise.valueOf();
  tdySunSetValueOf = res1.SunSet.valueOf();
  let res2 = computeSunRiseSunSet( lat, lon,timezone,1);
  tmrSunRiseValueOf =res2.SunRise.valueOf()+86400000;
}


//計算太陽月亮位置
function calSMPosition(){
  let curTime=new Date();
  document.getElementById('Time').innerText=curTime.toTimeString().substring(0,5) ;
    bDaytime = (curTime.valueOf() >=tdySunRiseValueOf && curTime.valueOf() <=tdySunSetValueOf);
    if(bDaytime){
      fPosition=1 - (curTime.valueOf()-tdySunRiseValueOf)/(tdySunSetValueOf-tdySunRiseValueOf);
    } else if (curTime.valueOf() < ytdSunSetValueOf){
      fPosition=1 - (curTime.valueOf()-ytdSunSetValueOf)/(tdySunRiseValueOf-ytdSunSetValueOf);
    } else if (curTime.valueOf() < tmrSunRiseValueOf)   {
      fPosition=1 - (curTime.valueOf()-tdySunSetValueOf)/(tmrSunRiseValueOf-tdySunSetValueOf);
    } else {
      updateSSR();
      calSMPosition();
    }
    updateSMPosition(fPosition,bDaytime);
  }

function updateSMPosition(Position,isDaytime){
    let sun = document.getElementById('sun');
    let moon = document.getElementById('moon');
    document.getElementById('sky').style.backgroundImage=(isDaytime ? (Position<0.95 && Position>0.1 ? "url('images/sun_sky.jpg')": "url('images/sunriseset.jpg')"): "url('images/star_sky.png')");
    document.getElementById('sky').style.color =(isDaytime ? "black": "white");
    sun.style.visibility=(isDaytime ? "visible": "hidden");
    moon.style.visibility=(isDaytime ? "hidden": "visible");
    sun.style.left = ((document.getElementById('sky').offsetWidth-32) *  Position) +'px';
    sun.style.top = (80 - document.getElementById('sky').offsetWidth/20 * Math.sin(Math.PI * Position)) +'px' ;
    moon.style.left = sun.style.left;
    moon.style.top =  sun.style.top ;
}

function timeout() {
  setTimeout(()  => {
    if (isShowCycle){
      let curTime=new Date();
      updateSMPosition((1-curTime.valueOf() % 10000 / 10000), parseInt(curTime.valueOf()/10000) % 2    );
      timeout();
    } else {
      calSMPosition();
      timeout(isShowCycle);
    }
  }, (isShowCycle ? 40: 1000));
}
//window.onload = getLocation([ updateSSR, calSMPosition, timeout]);


window.addEventListener("load", (event) => {
  getLocation(updateSSR);
  updateSSR();
  calSMPosition();
  timeout();
});
