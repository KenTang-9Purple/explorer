function get4pillar(dDate){
  let p = new paipan();
  const pillar=['年','月','日','時'];
  var fm = p.fatemaps(0, dDate.getFullYear() , dDate.getMonth()  , dDate.getDay() , dDate.getHours() , dDate.getMinutes(), dDate.getSeconds());
  let eight_word="";
  for(let i=0;i<4;i++)
    eight_word+=fm.sz[i]+pillar[i];
  return eight_word;
}

function timeout() {
  setTimeout(()  => {
    document.getElementById("four_pillar").innerText=get4pillar(getRealTime());
    timeout();
  }, 1000 );
}

window.addEventListener("load", (event) => {
  getLocation();
  timeout();
});

genMenu("sanliao.html");
