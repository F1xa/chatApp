import {UI, URL} from './view.js';
import Cookies from 'js-cookie';


UI.MESSANGER.BUTTON_SEND.addEventListener("click", (e)=> {
  e.preventDefault()
  const currentMassage = UI.MESSANGER.INPUT_SEND.value;
  
  if (!currentMassage) return;

  createTemplate(currentMassage, UI.MESSANGER.TEMPLATE)
  UI.MESSANGER.FORM.reset()
  
});

UI.SETTINGS.BUTTON.addEventListener('click', (e)=> {
  e.preventDefault()
  sendRequest('PATCH', `${URL}/api/user`, {name:UI.SETTINGS.INPUT.value});
  UI.SETTINGS.FORM.reset()
});


UI.AUTHORIZATION.BUTTON.addEventListener("click", (e)=> {
  e.preventDefault()
  sendRequest('POST', `${URL}/api/user`, {email:UI.AUTHORIZATION.INPUT.value});
  UI.AUTHORIZATION.FORM.reset()
});


UI.CONFIRM.BUTTON.addEventListener('click', (e)=> {
  e.preventDefault()
  Cookies.set('token', UI.CONFIRM.INPUT.value)
  UI.CONFIRM.FORM.reset()
});


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


async function sendRequest(method, url, body) {
  return await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json;charset=utf-8g',
      'Authorization': `Bearer ${Cookies.get('token')}`
    }
  })
    .then(response => response.json())
    .catch(alert)
}

