function menu(){
  document.getElementById('menue_btn_mobile').style.display = 'none';
  document.getElementById('menu_mobile').style.display = 'block';
 
}
function r1(){
  document.getElementById('menue_btn_mobile').style.display = 'block';
  document.getElementById('menu_mobile').style.display = 'none';
 
}
function menu_mobile(){
  document.getElementById('menue_btn_mobile').style.display = 'block';
  document.getElementById('menu_mobile').style.display = 'none';
 
}
 
 function submit_laptop(){
 const scriptURL = 'https://script.google.com/macros/s/AKfycby-OWRrE7kYDqJ6a5vHVLkeyl69Mxkux0lIu1Eg4L3xFIcRmkUiV2E85x1uHSQoCldSiA/exec'
  const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function(){
      msg.innerHtml = ""
      },5)
      form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
}
function submit_mobile(){
  const scriptURL = 'https://script.google.com/macros/s/AKfycby-OWRrE7kYDqJ6a5vHVLkeyl69Mxkux0lIu1Eg4L3xFIcRmkUiV2E85x1uHSQoCldSiA/exec'
   const form = document.forms['submit-to-google-sheet1']
 const msg1 = document.getElementById("msg1")
   form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
       .then(response => {
       msg1.innerHTML = "Message sent successfully"
       setTimeout(function(){
       msg1.innerHtml = ""
       },5)
       form.reset()
       })
       .catch(error => console.error('Error!', error.message))
   })
 }
