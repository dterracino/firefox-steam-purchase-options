"use strict"; 


function getAppName(){
  var nameElement = document.getElementsByClassName('apphub_AppName');
  
  if(nameElement.length === 0) {
    return;
  }
  return document.getElementsByClassName('apphub_AppName')[0].innerText;
}


function createLink(store){
  var alternative = document.createElement('div');
  alternative.className += 'details_block';
  var link = document.createElement('a');
  link.className += 'linkbar';
  
  if(store === 'isthereanydeal'){
    link.innerText = 'IsThereAnyDeal';
    link.href = 'https://isthereanydeal.com/#/search:' + getAppName() + ';/scroll:%23gamelist'
  }

  if(store === 'gog') {
    link.innerText = 'DRM Free (GOG)';
    link.href = 'https://www.gog.com/games?sort=bestselling&search=' + getAppName();
  }

  alternative.appendChild(link);
  return alternative;

}

function createHeader(){
  var header = document.createElement('div');
  header.className += 'block_title';
  header.innerText = 'Other stores:';
  return header;
 
}

function createDisplayArea(){
  var displayArea = document.createElement('div');
  displayArea.className += 'block responsive_apppage_details_right';
  displayArea.appendChild(createHeader());
  displayArea.appendChild(createLink('isthereanydeal'));
  displayArea.appendChild(createLink('gog'));
  return displayArea;
}


function insertIntoDOM(child){
  var rightColumn = document.body.getElementsByClassName('rightcol game_meta_data');
  if(rightColumn.length === 0 || !rightColumn[0].firstChild){
    return;
  }

  rightColumn[0].insertBefore(child, rightColumn[0].firstChild);
}

// If vital information is missing, then hide the addon
function shouldAddonRun(){
  if(!getAppName()){
    return false;
  } 
 return true; 
}

if(shouldAddonRun()){
  var displayArea = createDisplayArea();
  insertIntoDOM(displayArea);
}
