

let p = 0

function getFromLs() {
  const data = localStorage.getItem('feedback');
  //   console.log(data); //null
  const parsedOrder = JSON.parse(data);
  let right = document.getElementById('right')

  right.addEventListener('click', clickright)
  function clickright() {
    //   if(parsedOrder.name!=null){
    if (p < parsedOrder.length - 1) {
      p++
      let par = document.getElementById('feedarrowr')
      let pal = document.getElementById('feedarrowl')
      if (par != null) {
        par.remove()
      }
      if (pal != null) {
        pal.remove()
      }
      let feedarrows = document.getElementById('feedarrows')
      let paragraph = document.createElement('p')
      paragraph.setAttribute("id", "feedarrowr");
      feedarrows.appendChild(paragraph)
      paragraph.textContent = "   “    "+parsedOrder[p].message+" “"
      let empty = document.createElement('br')
      empty.setAttribute("id", "empty");
      paragraph.appendChild(empty)
      
      let empty1 = document.createElement('br')
      empty1.setAttribute("id", "empty1");
      paragraph.appendChild(empty1)
      
      let empty2 = document.createElement('br')
      empty2.setAttribute("id", "empty2");
      paragraph.appendChild(empty2)

      let h3 = document.createElement('h3')
      h3.setAttribute("id", "h3");
      paragraph.appendChild(h3)
      h3.textContent = `___  ${parsedOrder[p].name} `
      console.log(p)
    }
  }
  // feedarrow.textContent=(parsedOrder.message)

  let left = document.getElementById('left')

  left.addEventListener('click', clickleft)
  function clickleft() {
    // if(parsedOrder.name!=null){
    if (p >= 1) {
      p--

      let par = document.getElementById('feedarrowr')
      let pal = document.getElementById('feedarrowl')
      if (par != null) {
        par.remove()
      }
      if (pal != null) {
        pal.remove()
      }
      let feedarrows = document.getElementById('feedarrows')
      let paragraph = document.createElement('p')
      paragraph.setAttribute("id", "feedarrowl");
      feedarrows.appendChild(paragraph)
      paragraph.textContent = `“${parsedOrder[p].message}“`
      let empty = document.createElement('br')
      empty.setAttribute("id", "empty");
      paragraph.appendChild(empty)
      
      let empty1 = document.createElement('br')
      empty1.setAttribute("id", "empty1");
      paragraph.appendChild(empty1)
      
      let empty2 = document.createElement('br')
      empty2.setAttribute("id", "empty2");
      paragraph.appendChild(empty2)

      let h3 = document.createElement('h3')
      h3.setAttribute("id", "h3");
      paragraph.appendChild(h3)
      h3.textContent = `___ ${parsedOrder[p].name} `
      console.log(p)
    }
  }
}
getFromLs()