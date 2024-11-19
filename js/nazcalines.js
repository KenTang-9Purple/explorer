document.getElementById("tarot_img").onclick = () => {
  const card_info=[{"ID":"00","name_ch":"愚者","name_en":"The Fool","keyword":"流浪、自由、無經驗的"},
{"ID":"01","name_ch":"魔術師","name_en":"The Magician","keyword":"創造、說服、運用"},
{"ID":"02","name_ch":"女祭師","name_en":"The High Priestess","keyword":"智慧、二元性、思考、直覺、隱藏"},
{"ID":"03","name_ch":"皇后","name_en":"The Empress","keyword":"豐收、懷孕、愛情、母親"},
{"ID":"04","name_ch":"皇帝","name_en":"The Emperor","keyword":"支配、成熟、有經驗的、深沉"},
{"ID":"05","name_ch":"教皇","name_en":"The Hierophant","keyword":"援助、教導、傳送與發給、制約"},
{"ID":"06","name_ch":"戀人","name_en":"The Lovers","keyword":"結合、選擇、合作"},
{"ID":"07","name_ch":"戰車","name_en":"The Chariot","keyword":"勝利、行動、調整"},
{"ID":"08","name_ch":"力量","name_en":"Strength","keyword":"意志、堅持、克制"},
{"ID":"09","name_ch":"隠者","name_en":"The Hermit","keyword":"尋求、年老、身陷黑暗之中卻有些許光明"},
{"ID":"10","name_ch":"命運之輪","name_en":"Wheel of Fortune","keyword":"輪迴、轉變、好壞交替"},
{"ID":"11","name_ch":"正義","name_en":"Justice","keyword":"均衡、衡量、法律、反擊"},
{"ID":"12","name_ch":"吊人","name_en":"The Hanged Man","keyword":"犧牲、付出、考驗、受苦"},
{"ID":"13","name_ch":"死神","name_en":"Death","keyword":"結束、該做決定的時候、改變"},
{"ID":"14","name_ch":"節制","name_en":"Temperance","keyword":"淨化、交流、斟酌、慢慢的給與"},
{"ID":"15","name_ch":"惡魔","name_en":"The Devil","keyword":"詛咒、本能與慾望、迷惑、限制"},
{"ID":"16","name_ch":"塔","name_en":"The Tower","keyword":"毀滅、衝擊、放棄、災難、神之住所﹝與考驗﹞"},
{"ID":"17","name_ch":"星星","name_en":"The Star","keyword":"希望、祝福、將難過流盡"},
{"ID":"18","name_ch":"月亮","name_en":"The Moon","keyword":"不安、多變、刻板印象"},
{"ID":"19","name_ch":"太陽","name_en":"The Sun","keyword":"生命、實現、純真"},
{"ID":"20","name_ch":"審判","name_en":"Judgement","keyword":"復活、覺醒、知道結果"},
{"ID":"21","name_ch":"世界","name_en":"The World","keyword":"達成、完美、完成命運、完成後銜接的另一個開始。"}];
  const card_no = parseInt(Math.random()*22);
  document.getElementById("tarot_img").src = `tarot/${card_no}.jpg`;
  document.getElementById("card_name").innerHTML = card_info[card_no].name_ch;
  document.getElementById("eng_name").innerHTML = card_info[card_no].name_en;
  document.getElementById("keyword").innerHTML = card_info[card_no].keyword;
}
