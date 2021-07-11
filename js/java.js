'use strict';

const feedbackForm = document.getElementById('feedbackForm');
const orders = document.getElementById('feedback');
let p=0


function Feedback(name, email,message){
  this.name = name;
  this.email = email;
  this.message = message;
  Feedback.Info.push(this);
  saveToLs();
}


Feedback.Info = [];


feedbackForm.addEventListener('submit', handleSubmit);
function handleSubmit(event){
  event.preventDefault();
//   console.log(event.target);

  // get all the values from the form
  const newName = event.target.name.value;
  const newEmail = event.target.email.value;
  const newMessage = event.target.message.value;
  new Feedback(newName, newEmail, newMessage);

  // console.log(Info.Feedback);

  renderOrders();
}

function saveToLs(){

  // we need to convert this array of objects
  const convertedArr = JSON.stringify(Feedback.Info);
  localStorage.setItem('feedback', convertedArr);

}

function getFromLs(){

  const data = localStorage.getItem('feedback');
//   console.log(data); //null
  const parsedOrder = JSON.parse(data); 
  
  let right=document.getElementById('right')
  
  right.addEventListener('click',clickright)
  function clickright(){
    if(p<parsedOrder.length-2){
      p++
      let par=document.getElementById('feedarrowr')
      let pal=document.getElementById('feedarrowl')
      if(par!=null){
      par.remove()}
      if(pal!=null){
        pal.remove()}
      let feedarrows=document.getElementById('feedarrows')
      let paragraph=document.createElement('p')
      paragraph.setAttribute("id", "feedarrowr");
feedarrows.appendChild(paragraph)
paragraph.textContent=(parsedOrder[p].message)
console.log(p)
}}
// feedarrow.textContent=(parsedOrder[p].message)
let left=document.getElementById('left')
  
  left.addEventListener('submit',clickleft)
  function clickleft(){
    if(p>=1){
      p--
      let par=document.getElementById('feedarrowr')
      let pal=document.getElementById('feedarrowl')
      if(par!=null){
      par.remove()}
      if(pal!=null){
        pal.remove()}
      let feedarrows=document.getElementById('feedarrows')
      let paragraph=document.createElement('p')
      paragraph.setAttribute("id", "feedarrowl");
feedarrows.appendChild(paragraph)
paragraph.textContent=(parsedOrder[p].message)
console.log(p)
}}
if(parsedOrder){   
    for(let i = 0 ; i < parsedOrder.length; i++ ){
        let reInst = new Feedback(parsedOrder[i].name,parsedOrder[i].email,parsedOrder[i].message);
        //   console.log(reInst);
        
    }
    renderOrders();
}
}


function renderOrders(){
    
    feedback.textContent = '';
    
    for(let i = 0; i < Feedback.Info.length; i++){
        const drinkLI = document.createElement('p');
        
        feedback.appendChild(drinkLI);
        drinkLI.textContent = `“${Feedback.Info[i].message}“ __ ${Feedback.Info[i].name} `;
    }
}

getFromLs();



// for render random feedback

            
           
            
                          
            setInterval(function(){ 
              let notrandom=document.getElementById('randomparagraph')
              notrandom.remove()
              let randomfeedsec=document.getElementById('randomfeedsec')
              let randomparagraph=document.createElement('p')
              randomparagraph.setAttribute("id", "randomparagraph");
              randomfeedsec.appendChild(randomparagraph)
              function random(){
                return Math.floor(Math.random()*Feedback.Info.length)
            }
            
      let i=random()
      randomparagraph.textContent= `“${Feedback.Info[i].message}“ ___ ${Feedback.Info[i].name} `


    }, 7300);
    