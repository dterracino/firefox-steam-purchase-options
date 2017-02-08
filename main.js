"use strict"; 

function getAppName(){
  return document.getElementsByClassName('apphub_AppName')[0].innerText;
}

function getSearchUrl(store){
  if(store === 'gog'){
    return "https://www.gog.com/games?sort=bestselling&search=" + getAppName();
  }
  else {
    return "https://isthereanydeal.com/#/search:"+ getAppName() +";/scroll:%23gamelist"
  }
}

function createLink() {
  var game_area = document.createElement('div');
  game_area.className += "details_block"
  var link = document.createElement('a');
  link.className += "linkbar";
  link.innerText = "IsThereAnyDeal";
  link.href = getSearchUrl();
  var link2 = document.createElement('a');
  link2.className += "linkbar";
  link2.innerText = "DRM Free (GOG)";
  link2.href = getSearchUrl("gog");


  
  var header = document.createElement('div');
  header.innerText = 'Other stores:';
  header.className += "block_title";
  game_area.appendChild(header);
  game_area.appendChild(link);
  game_area.appendChild(link2);

  return game_area;
}


var header = document.createElement('div');
var link = document.createElement('a');
link.href= getSearchUrl(getAppName());
header.appendChild(createLink());
header.className += "block responsive_apppage_details_right"
link.textContent = "IsThereAnyDeal";



var rightColumn = document.body.getElementsByClassName('rightcol game_meta_data');
rightColumn[0].insertBefore(header, rightColumn[0].firstChild);

