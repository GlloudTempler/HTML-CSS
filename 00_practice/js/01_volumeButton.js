
dragElement(document.getElementById("circle"), 20);

function dragElement(elmnt, initVal) {
  let clientX_gab = 0, clientX = 0;
  let parentElmnt = elmnt.parentNode;
  elmnt.querySelector('span').innerText = Math.round(initVal);
    
  elmnt.style.left = ((initVal/100) * parentElmnt.clientWidth) + "px";
  elmnt.onmousedown = dragMouseDown;
  elmnt.addEventListener('touchstart',dragMouseDown)
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    elmnt.classList.add('s_on');
    if (e.changedTouches) {
      e.clientX = e.changedTouches[0].clientX
    }
    clientX = e.clientX;
    document.onmouseup = closeDragElement;
    document.addEventListener('touchend',closeDragElement);
    document.onmousemove = elementDrag;
    document.addEventListener('touchmove',elementDrag);
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault(); 
    if (e.changedTouches) {
      e.clientX = e.changedTouches[0].clientX
    }
    clientX_gab = e.clientX - clientX;
    clientX = e.clientX;
    let leftVal = 0;
    let parentElmnt = elmnt.parentNode;
    if (
      (elmnt.offsetLeft + clientX_gab) < 0 ||
      clientX < parentElmnt.offsetLeft) 
      {
      leftVal = 0;
    } else if(
      (elmnt.offsetLeft + clientX_gab) > parentElmnt.clientWidth ||
      clientX > (parentElmnt.offsetLeft+parentElmnt.clientWidth))
      {
      leftVal = parentElmnt.clientWidth;
    } else {
      leftVal = (elmnt.offsetLeft + clientX_gab);
    }
    elmnt.querySelector('span').innerText = Math.round((leftVal /parentElmnt.clientWidth)*100);
    
    elmnt.style.left = leftVal + "px";
  }

  function closeDragElement() {
    elmnt.classList.remove('s_on');
    document.onmouseup = null;
    document.removeEventListener('touchend', closeDragElement);
    document.onmousemove = null;
    document.removeEventListener('touchmove', elementDrag);
  }
}