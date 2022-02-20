 export const UI = {

  BUTTON_CLOSE : document.querySelectorAll('.close-btn'),

  MESSANGER : {
    BUTTON_SEND : document.querySelector('.send-btn'),
    BUTTON_SETTING : document.querySelector('.setting-btn'),
    INPUT_SEND : document.querySelector('.input'),
    SCREEN : document.querySelector('.chatbox'),
    BLOCK : document.querySelector('.message'),
    SETTING_SCREEN : document.querySelector('.setting'),
    TEMPLATE : document.querySelector('.template').content,
    FORM : document.querySelector('.sending__form'),
  },
  
  SETTINGS : {
    BLOCK : document.querySelector('.setting'),
    INPUT : document.querySelector('.creation__name-input'),
    BUTTON : document.querySelector('.setting__send-btn'),
    FORM : document.querySelector('.setting__form')
  },

  AUTHORIZATION : {
    BUTTON : document.querySelector('.authorization-btn'),
    INPUT : document.querySelector('.email-input'),
    FORM : document.querySelector('.authorization__form')
  },

  CONFIRM : {
    BUTTON : document.querySelector('.confirm-btn'),
    INPUT : document.querySelector('.confirm-input'),
    FORM : document.querySelector('.confirm__form')
  }
}

  export const URL = 'https://chat1-341409.oa.r.appspot.com';
