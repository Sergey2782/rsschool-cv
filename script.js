const avatarPhoto = document.querySelector('.main_photo');
const mainSection = document.querySelector('.main');
const linksList = document.querySelector('.ul_nav');
const listContacts = document.querySelector('.list_contacts');
const listScills = document.querySelector('.list_scills');
let targetInnerHtml;
let isBigAvatar = false;
let isOpenBurger = false;
const log = console.log;
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const logoSmallDevice = document.querySelector('.logo-small-device');
const logoRsSchoolBasic = document.querySelector('.logo_rs_school');
const nav = document.querySelector('.nav');
//---------------- tooltip  by CLICK -------------------//
function openMenuBurger(){
 if(!isOpenBurger){
    linksList.classList.remove('display-none-mobile');
    openBtn.classList.remove('display-none-only-desktop');
    openBtn.classList.add('display-none');
    closeBtn.classList.remove('display-none');
    closeBtn.classList.add('display-flex');
    closeBtn.classList.add('border-none');
    logoRsSchoolBasic.classList.add('display-none');
    nav.classList.add('margin--60');
    mainSection.classList.remove('border-top');
    isOpenBurger = true;
   } else return;
}
function closeMenuBurger(){
   if(isOpenBurger) {
    linksList.classList.add('display-none-mobile');
    openBtn.classList.remove('display-none');
    openBtn.classList.add('display-none-only-desktop');
    closeBtn.classList.add('display-none');
    closeBtn.classList.remove('display-flex');
    closeBtn.classList.remove('border-none');
    logoRsSchoolBasic.classList.remove('display-none');
    nav.classList.remove('margin--60');
    mainSection.classList.add('border-top');
    isOpenBurger = false;
  } else return;
}
function findTarget(event) {
  let target = event.target;
  if(target.tagName != 'A') return;
  targetInnerHtml = target.textContent.toUpperCase();
};
linksList.addEventListener("click", findTarget);

function removeTooltipImSmallDevice(){
     if(innerWidth < 800){
    return;
  }
};
//------------------big size by  CLICK ------------------//

function setScreenColorToBody (){
  document.body.classList.add('screen_all');
};
function unSetScreenColorToBody () {
  document.body.classList.remove('screen_all');
 
};
function deactivateLink() {
  let links =  document.querySelectorAll('a');
  for (let i = 0; i < links.length; i ++) {
      links[i].style.pointerEvents='none';
  };    
};
function activateLink() {
  let links =  document.querySelectorAll('a');
  for (let i = 0; i < links.length; i ++) {
      links[i].style.pointerEvents='auto';
  };    
};
function bigScaleSmallScale (){
    if(avatarPhoto.classList.contains('big_scale')){
        avatarPhoto.classList.add('main_photo');
        avatarPhoto.classList.remove('big_scale');
        activateLink();
        unSetScreenColorToBody();
        isBigAvatar = false;
   }else {
        avatarPhoto.classList.remove('main_photo');
        avatarPhoto.classList.add('big_scale');
        let marginTopFiftyPerCent = (document.documentElement.clientHeight - avatarPhoto.offsetHeight)/2;
        avatarPhoto.style.top = marginTopFiftyPerCent + 'px';
        deactivateLink();
        setScreenColorToBody();
        isBigAvatar = true;
   }
 };
avatarPhoto.addEventListener('click', bigScaleSmallScale);
const opBtn = document.querySelector('.op-btn');
const clBtn = document.querySelector('.cl-btn');
document.addEventListener('click', function(e) {
   let target = e.target;
   log(target);
   if( target == opBtn ){
    openMenuBurger();
   }else if( target == clBtn ){
    closeMenuBurger();
   }else if ( target.hasAttribute('nav-elem') && isOpenBurger){
      return;
   }else if ( !target.hasAttribute('nav-elem') && isOpenBurger){
      closeMenuBurger();
   };

    if( target != avatarPhoto && isBigAvatar == false ){
      return;
    }else if ( target != avatarPhoto && isBigAvatar == true ){
       bigScaleSmallScale();
    };
  }
)
//---------------tooltip by MOUSEOVER and MOUSEOUT --------//
let tooltipEl;
document.onmouseover = function(event){
 if(innerWidth < 800){
   return;
 }
  let target = event.target;
  let toolTipHtml = target.dataset.tooltip;
  if( !toolTipHtml) return;
  tooltipEl = document.createElement('div');
  tooltipEl.className ='tooltip';
  tooltipEl.innerHTML = toolTipHtml;
  document.body.append(tooltipEl);
  let coords = target.getBoundingClientRect();
  let left = coords.left + (target.offsetWidth - tooltipEl.offsetWidth) / 2;
  if(left < 0) left  = 0; 
  let top = coords.top - tooltipEl.offsetHeight - 5;
      if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
      }
      tooltipEl.style.left = left + 'px';
      tooltipEl.style.top = top + 'px';
};
document.onmouseout = function(e) {
  if (tooltipEl) {
    tooltipEl.remove();
    tooltipEl = null;
  };
};
const anchors = document.querySelectorAll('a[href*="#"]');
function smoothScrollId(){
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
};
smoothScrollId();