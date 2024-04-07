const body = document.querySelector('.body');
const main = document.querySelector('.main');
const heroSection = document.querySelector('.hero');
const newSection = document.querySelector('.new');
const heroGrid = document.querySelector('.hero__grid');
const footer = document.querySelector('.footer');
const btnSignIn = document.querySelector('.header__sign-in');
const btnSignInSecond = document.querySelector('.sign-in-btn-2');
const btnSignInThree = document.querySelector('.sign-in-btn-3');
const btnSettingTwo = document.querySelector('.btn-setting-2');
const btnEvent = document.querySelector('.btn-event');
const btnEventSecond = document.querySelector('.btn-event-2');
const btnSetting = document.querySelector('.btn-setting');
const btnMaster = document.querySelector('.btn-master');
const btnMasterSecond = document.querySelector('.btn-master-2');
const btnMasterThree = document.querySelector('.btn-master-3');
const signInBlock = document.querySelector('.sign-in-block');
const settingBlock = document.querySelector('.setting-block');
const settingBlockMaster = document.querySelector('.setting-block-master');
const registerBtn = document.querySelector('.register-btn');
const registerBlock = document.querySelector('.register-block');
const closeBtnFirst = document.querySelector('.close-btn-1');
const closeBtnSecond = document.querySelector('.close-btn-2');
const closeBtnThree = document.querySelector('.close-btn-3');
const closeBtnFour = document.querySelector('.close-btn-4');
const bg = document.querySelector('.bg');
btnSignIn.addEventListener('click', function() {
    body.style.overflow = 'hidden';
    signInBlock.classList.remove('none');
    bg.classList.remove('none');
});
bg.addEventListener('click', function() {
    signInBlock.classList.add('none');
    registerBlock.classList.add('none');
    settingBlock.classList.add('none');
    settingBlockMaster.classList.add('none');
    heroSection.classList.remove("none");
    newSection.classList.remove('none');
    footer.classList.remove('none');
    bg.classList.add('none');
    bg.style.height = '';
});
closeBtnFirst.addEventListener('click', function() {
    body.style.overflow = '';
    signInBlock.classList.add('none');
    bg.classList.add('none');
});
closeBtnSecond.addEventListener('click', function() {
    registerBlock.classList.add('none');
    bg.classList.add('none');
    bg.style.height = '';
});
btnSignInSecond.addEventListener('click', function() {
    signInBlock.classList.remove('none');
    heroSection.classList.add("none");
    newSection.classList.add('none');
    footer.classList.add('none');
    bg.classList.remove('none');
});
registerBtn.addEventListener('click', function() {
    signInBlock.classList.add('none');
    registerBlock.classList.remove('none');
    bg.style.height = '155vh';
});
btnSignInThree.addEventListener('click', function() {
    registerBlock.classList.add('none');
    signInBlock.classList.remove('none');
    bg.style.height = '';
});
btnSetting.addEventListener("click", function() {
    settingBlock.classList.remove("none");
    newSection.classList.add("none");
    footer.classList.add('none');
    heroGrid.style.display = 'none';
    bg.classList.remove('none');
    bg.style.height = '155vh';
});
closeBtnThree.addEventListener('click', function() {
    settingBlock.classList.add('none');
    newSection.classList.remove('none');
    footer.classList.remove('none');
    heroGrid.style.display = '';
    bg.classList.add('none');
});
btnMasterSecond.addEventListener('click', function() {
    settingBlock.classList.add('none');
    settingBlockMaster.classList.remove('none');
    bg.classList.remove("none");
});
closeBtnFour.addEventListener('click', function() {
    settingBlockMaster.classList.add('none');
    newSection.classList.remove('none');
    footer.classList.remove('none');
    heroGrid.style.display = '';
    bg.classList.add('none');
});
btnEventSecond.addEventListener('click', function() {
    settingBlockMaster.classList.add('none');
    settingBlock.classList.remove('none');
});
btnSettingTwo.addEventListener('click', function() {
    settingBlock.classList.remove('none');
    bg.classList.remove('none');
    newSection.classList.add("none");
    footer.classList.add('none');
    heroGrid.style.display = 'none';
});
btnMaster.addEventListener('click', function() {
    settingBlock.classList.add('none');
    settingBlockMaster.classList.remove('none');
    btnMasterThree.classList.add('fill');
    btnEventSecond.classList.add('unfill')
});