document.getElementById("footer_date").innerHTML = new Date().getFullYear();

function calNumerology(){
  const result = [
    "您是一個想像力豐富與服務人群的愛好者",
    "您是一個能夠獨立和具有創意頭腦的人",
    "您是一個適合合夥生意且會注意細節的人",
    "您是一個能夠獨立和具有創意頭腦的人且會與人溝通的愛好者",
    "您是一個著重安全且有秩序的愛好者",
    "您是一個崇尚自由與冒險的愛好者",
    "您是一個追求和諧和追求平安順利的人",
    "您是一個善於分析與追求真理的愛好者",
    "您是一個：擁有權力和勇於開發的愛好者",
    "您是一個想像力豐富與服務人群的愛好者"
  ];
   console.log(document.getElementById("birthday").value   );
   if (document.getElementById("birthday").value =="")
      return(alert('請輸入生日日期'));
    let numerology = document.getElementById("birthday").value.split("-").reduce((a, c) => a + Number(c),0) % 9;
    numerology = numerology ? numerology : 9;
    document.getElementById("result").innerHTML="您的生命數為："+numerology+","+result[numerology];
}