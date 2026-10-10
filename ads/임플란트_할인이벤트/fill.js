// config.js 값을 화면에 채웁니다. ○ 이 남아 있으면 주황색으로 표시해 빠뜨린 값을 알아보기 쉽게 합니다.
(function(){
  var E = window.EVENT, $ = function(id){ return document.getElementById(id); };
  function put(id, text){ var el=$(id); if(!el) return; el.textContent=text; if(text.indexOf("○")>=0) el.classList.add("ph"); }
  var nameEl=$("name"); if(nameEl){ nameEl.textContent=E.brand+" 1개 "; var s=document.createElement("span"); s.textContent=E.includes; nameEl.appendChild(s); }
  put("reg", E.regularPrice); put("ev", E.eventPrice); put("war", E.brand.replace(" 임플란트","")+" "+E.warranty);
  put("period", "이벤트 기간  "+E.period);
  put("contact", "☎ "+E.phone+"  ·  "+E.address);
  put("n1", "· 이벤트가는 "+E.brand+" 1개 기준이며, "+E.excluded+"입니다. 기간 내 준비된 인원이 마감되면 조기 종료될 수 있습니다.");
  put("rv", "의료광고 심의필 제 "+E.reviewNo+"호");
})();
