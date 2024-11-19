function get9star(dDate){
  let p = new paipan();
  let output="";
  let nine = [0,0,0,0];
  let nineStarName =["九紫","一白","二黑","三碧","四綠","五黃","六白","七赤","八白","九紫"];
  const pillar=['年','月','日','時'];
  var fm = p.fatemaps(0, dDate.getFullYear() , dDate.getMonth()  , dDate.getDay() , dDate.getHours() , dDate.getMinutes(), dDate.getSeconds());
  let eight_word="";
  output=nineStarName[(9010 - dDate.getFullYear() +(dDate.getFullYear()-fm.dz[0]) % 2  ) % 9+1]+"年";
  output+=nineStarName[(24 -fm.dz[0] % 3 *3-fm.dz[1]+1) % 9 + 1]+"月";
let isPositive = !(parseInt(fm.xzi/6));
  let day60P = (isPositive? 1 : -1  ) *  parseInt(  (new Date().valueOf() -  new Date(2024,0,1).valueOf())/86400000) % 60  ;
  output+=nineStarName[(62+ (isPositive ? 1:0) + parseInt(fm.xzi/2)*3 +day60P)%9 + 1 ]+"日";
  output+=nineStarName[ ( isPositive  ?        ((fm.dz[2] % 3 * 3  + fm.dz[3]) % 9 + 1): 10 - ((fm.dz[2] % 3 * 3  + fm.dz[3]) % 9 + 1) )]+"時";
  for(let i=0;i<4;i++)
    eight_word+=fm.sz[i]+pillar[i];
  return output;
}

function timeout() {
  setTimeout(()  => {
    document.getElementById("starNine").innerText=get9star(getRealTime());
    timeout();
  }, 1000 );
}
//window.onload = getLocation();

window.addEventListener("load", (event) => {
  getLocation();
  timeout();
});

