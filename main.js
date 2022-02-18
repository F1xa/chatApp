import {UI, URL} from './view.js';

UI.MESSANGER.BUTTON_SEND.addEventListener("click", (e)=> {
  e.preventDefault()
  const currentMassage = UI.MESSANGER.INPUT_SEND.value;

  createTemplate(currentMassage, UI.MESSANGER.TEMPLATE)
  UI.MESSANGER.FORM.reset()
  
})

UI.MESSANGER.BUTTON_SETTING.addEventListener("click", showSettingDisplay)


UI.AUTHORIZATION.BUTTON_GET.addEventListener("click", ()=> {
  sendRequest('POST', URL, UI.AUTHORIZATION.INPUT.value)
  UI.AUTHORIZATION.FORM.reset()
})


function getDate() {
  const date = new Date()
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

function createTemplate(message, template) {
  const clone = template.cloneNode(true)
  const _message = clone.querySelector('.chat__message-content').innerHTML = message;
  const date = clone.querySelector('.chat__message-time').innerHTML = getDate();
  UI.MESSANGER.SCREEN.append(clone)
}

function showSettingDisplay() {
  UI.MESSANGER.BLOCK.classList.add('hide')
  UI.SETTINGS.BLOCK.classList.add('active')
}


function sendRequest(method, url, body) {
  return fetch(url, {
    method: method,
    body: JSON.stringify({email:body}),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
}

document.cookie ='user=oleg'

console.log(document.cookie)