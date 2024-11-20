document.getElementById("footer_date").innerHTML = new Date().getFullYear();
let lat = 22.3994305;
let lon = 113.9709846;



function genMenu(activeLink){
    const links = [{link:"index.html" , name:"首頁"},
        {link:"sanliao.html" , name:"中國三僚村"},
        {link:"tajmahal.html" , name:"印度泰姬瑪哈陵"},
        {link:"thebes.html" , name:"埃及底比斯"},
        {link:"nazcalines.html" , name:"秘魯納斯卡線"}];
        links.forEach((link) => {
            const na  = document.createElement("a");
            const nli = document.createElement("li");
            const fli = document.createElement("li");
            na.href=link.link;
            na.textContent=link.name;
            const fa = na.cloneNode(true);
            na.className="nav-link";
            fa.className="footer-link";  
            nli.className=(activeLink == link.link  ? "nav-item active":  "nav-item" );
            nli.appendChild(na);
            fli.appendChild(fa);
            document.getElementById("navbar").appendChild(nli);
            document.getElementById("footer-links").appendChild(fli);
        }
    )
}
function genFooterIcon() {
    /*<li>
    <a href="https://www.facebook.com/forecasting.hk/" class="footer-icon">
        <i class="fa-brands fa-facebook"></i>
    </a>
</li>
<li>
    <a href="https://wa.me/85296949133?text=我想了解風水神秘學探索者之旅" class="footer-icon">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
</li>
<li>
    <a href="https://www.instagram.com/forecasting_hk" class="footer-icon">
        <i class="fa-brands fa-instagram"></i>
    </a>
</li>*/
    const icons = [{link:"https://www.facebook.com/forecasting.hk/",icon:"fa-brands fa-facebook"},
        {link:"https://wa.me/85296949133?text=我想了解風水神秘學探索者之旅",icon:"fa-brands fa-whatsapp"},
        {link:"https://www.instagram.com/forecasting_hk",icon:"fa-brands fa-instagram"}
    ]
    icons.forEach((icon)=>{
        const i = document.createElement("i");
        const a = document.createElement("a");
        const li= document.createElement("li");
        i.className=icon.icon;
        a.className="footer-icon";
        a.href=icon.link;
        a.appendChild(i);
        li.appendChild(a);
        document.querySelector(".footer-icons").appendChild(li);
    });
    //footer-icons
}

genFooterIcon();



function getRealTime(){
    let curTime=new Date();
    // 計算 本年是否潤年，  0 - common year, 1 - lear Year
    let isLeapYear = parseInt((new Date(curTime.getFullYear(),11,31).valueOf()-new Date(curTime.getFullYear(),0,1).valueOf())/86400000)-364; //0 -common year // 1 - lear Year
    // 計算 今日是否本年的第幾日， 0 - 1月1日, 30 - 1月31日
    let dateOfYear = parseInt((curTime.valueOf()-new Date(curTime.getFullYear(),0,1).valueOf())/86400000);
    const TimeDiff=[[-203.5,-232,-259.5,-287,-314,-340.5,-367,-392.5,-417.5,-442.5,-467,-490.5,-513.5,-536,-557.5,-578.5,-599,-618.5,-637.5,-656,-673.5,-690,-706,-721,-735,-748.5,-767,-784.5,-794.5,-808,-820.5,-827,-833,-838.5,-843,-847,-850,-852,-853.5,-854.5,-854.5,-853.5,-852,-849.5,-846.5,-843,-838.5,-833.5,-827.5,-821,-814,-806,-797.5,-728.5,-719,-768.5,-757.5,-746.5,-734.5,-722,-709.5,-696,-682,-668,-654,-639.5,-624,-608.5,-593,-576.5,-560,-543.5,-526.5,-509.5,-492.5,-475,-457.5,-440,-422,-404,-386,-367.5,-349,-331,-313,-294.5,-276,-258,-240,-222,-204.5,-187,-169.5,-152.5,-135.5,-118.5,-101.5,-85,-69,-53.5,-38,-23,-8.5,6,20,34,47.5,60,72.5,85,96.5,107.5,118.5,129,138.5,148,157,165,173,180.5,127,133,198.5,203.5,208,213.5,216.5,217.5,219.5,221,222,222,222,221.5,220,218,215.5,212.5,209,205,200.5,195.5,190,184,177.5,170.5,163,155,146.5,137.5,128.5,119,109,99,88.5,77.5,66,54,42,30,18,5.5,-7.5,-26.5,-45.5,-58.5,-71.5,-84.5,-98,-111,-123.5,-136.5,-149.5,-162,-174.5,-187,-199,-211,-223,-234.5,-245.5,-256.5,-267.5,-278,-288,-297.5,-306.5,-315.5,-324,-332,-339.5,-346.5,-353,-359,-365,-370,-374,-378,-381.5,-384,-386,-388,-389,-389,-389,-388.5,-387,-385,-382.5,-379,-375,-370.5,-365.5,-360,-354,-347.5,-340,-332,-323.5,-314.5,-305,-295,-284.5,-273,-261,-248.5,-235.5,-222.5,-208.5,-194,-179,-163.5,-148,-131.5,-115,-98,-80.5,-63,-44.5,-26,-7.5,11.5,31,50.5,70,90,110.5,131,151.5,172.5,183,193.5,214.5,235.5,256.5,277.5,299,320.5,342,363.5,384.5,406,427.5,448.5,469.5,490.5,511.5,532,552,572,592,611.5,630.5,649.5,668.5,687,696,704.5,722,739.5,756,772,788,796,803.5,818,832,846,859.5,872,884,895.5,906.5,796.5,806,935.5,944,951.5,958,964,969.5,974,978,981,983,984.5,985,984.5,983.5,982,979,975,971,966,959.5,952.5,945,936.5,927,916.5,905.5,893.5,880.5,867,853,838,822,805.5,788,769.5,750.5,731,710.5,689,667,644.5,621,597,573,548,522,496,469.5,442.5,415.5,388,360,331.5,302.5,273.5,244.5,215.5,186,156.5,127,97,67,37.5,8,-22,-51.5,-81,-110.5,-139.5,-168.5],[-189,-218,-246,-273,-301,-327,-354,-380,-405,-430,-455,-479,-502,-525,-547,-568,-589,-609,-628,-647,-665,-682,-698,-714,-728,-742,-755,-779,-790,-799,-817,-824,-830,-836,-841,-845,-849,-851,-853,-854,-855,-854,-853,-851,-848,-845,-841,-836,-831,-824,-818,-810,-802,-793,-664,-774,-763,-752,-741,-728,-716,-703,-689,-675,-661,-647,-632,-616,-601,-585,-568,-552,-535,-518,-501,-484,-466,-449,-431,-413,-395,-377,-358,-340,-322,-304,-285,-267,-249,-231,-213,-196,-178,-161,-144,-127,-110,-93,-77,-61,-46,-30,-16,-1,13,27,41,54,66,79,91,102,113,124,134,143,153,161,169,177,184,70,196,201,206,210,217,216,219,220,222,222,222,222,221,219,217,214,211,207,203,198,193,187,181,174,167,159,151,142,133,124,114,104,94,83,72,60,48,36,24,12,-1,-14,-39,-52,-65,-78,-91,-105,-117,-130,-143,-156,-168,-181,-193,-205,-217,-229,-240,-251,-262,-273,-283,-293,-302,-311,-320,-328,-336,-343,-350,-356,-362,-368,-372,-376,-380,-383,-385,-387,-389,-389,-389,-389,-388,-386,-384,-381,-377,-373,-368,-363,-357,-351,-344,-336,-328,-319,-310,-300,-290,-279,-267,-255,-242,-229,-216,-201,-187,-171,-156,-140,-123,-107,-89,-72,-54,-35,-17,2,21,41,60,80,100,121,141,162,183,183,204,225,246,267,288,310,331,353,374,395,417,438,459,480,501,522,542,562,582,602,621,640,659,678,696,696,713,731,748,764,780,796,796,811,825,839,853,866,878,890,901,912,681,931,940,948,955,961,967,972,976,980,982,984,985,985,984,983,981,977,973,969,963,956,949,941,932,922,911,900,887,874,860,846,830,814,797,779,760,741,721,700,678,656,633,609,585,561,535,509,483,456,429,402,374,346,317,288,259,230,201,171,142,112,82,52,23,-7,-37,-66,-96,-125,-154,-183]];
    let realTime = new Date(curTime.valueOf() + (curTime.getTimezoneOffset()+lon*4) * 60000 + TimeDiff[isLeapYear][dateOfYear] * 1000);
    let strRealTime =   realTime.toString();
    document.getElementById("real_sun_time").innerText=strRealTime.substring(0,strRealTime.indexOf("GMT"));
    return realTime;
}
function getLocation(f) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (position)=> {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            if(typeof f =="function")
                f();
            }    
        )
    }
}
