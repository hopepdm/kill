KISSY.add("kill/config",function(i,t){var e=t.getUrlKey(),a={game:{width:1e3,height:600},imgPath:__killPath+"img/",fps:60,showHit:!1,god:!1,state:0};return i.each(["fps","showHit","god","state"],function(i){void 0!==e[i]&&(a[i]=e[i])}),a},{requires:["kill/utils"]});