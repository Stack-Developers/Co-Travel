'use strict';

const feedbackForm = document.getElementById('feedbackForm');
const orders = document.getElementById('feedback');


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
//   feedbackForm.removeEventListener('submit', handleSubmit);
  renderOrders();
//   alert('`${Feedback.Info[i].name} Feedback Co-Travel web-page : ${Feedback.Info[i].message} `');
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
    const drLI = document.createElement('p');

    feedback.appendChild(drLI);
    drLI.textContent = `“${Feedback.Info[i].message}“ __ ${Feedback.Info[i].name} `;

	}
}

getFromLs();




	// (function(d, t, e, m){
    
	// 	// Async Rating-Widget initialization.
	// 	window.RW_Async_Init = function(){
					
	// 		RW.init({
	// 			huid: "477408",
	// 			uid: "567b8b167a1dd2faa1ef40d236f818c3",
	// 			source: "website",
	// 			options: {
	// 				"advanced": {
	// 					"layout": {
	// 						"align": {
	// 							"hor": "center",
	// 							"ver": "top"
	// 						},
	// 						"lineHeight": "24px"
	// 					},
	// 					"font": {
	// 						"bold": true,
	// 						"type": "arial"
	// 					}
	// 				},
	// 				"size": "large",
	// 				"style": "christmas",
	// 				"isDummy": false
	// 			} 
	// 		});
	// 		RW.render();
	// 	};
	// 		// Append Rating-Widget JavaScript library.
	// 	var rw, s = d.getElementsByTagName(e)[0], id = "rw-js",
	// 		l = d.location, ck = "Y" + t.getFullYear() + 
	// 		"M" + t.getMonth() + "D" + t.getDate(), p = l.protocol,
	// 		f = ((l.search.indexOf("DBG=") > -1) ? "" : ".min"),
	// 		a = ("https:" == p ? "secure." + m + "js/" : "js." + m);
	// 	if (d.getElementById(id)) return;              
	// 	rw = d.createElement(e);
	// 	rw.id = id; rw.async = true; rw.type = "text/javascript";
	// 	rw.src = p + "//" + a + "external" + f + ".js?ck=" + ck;
	// 	s.parentNode.insertBefore(rw, s);
	// 	}(document, new Date(), "script", "rating-widget.com/"));



// for render random feedback       
    //  marwaaaaaaaaaan worke start       
    function random(){
      return Math.floor(Math.random()*Feedback.Info.length)
  }
  
let i=random()
let randomfeedsec=document.getElementById('randomfeedsec')
    let notrandom=document.getElementById('randomparagraph')
    randomfeedsec.appendChild(randomparagraph)
    randomparagraph.textContent= `“${Feedback.Info[i].message}“  `
	

      let h5 = document.createElement('h4')
      h5.setAttribute("id", "h4");
      randomfeedsec.appendChild(h5)
      h5.textContent = `___ ${Feedback.Info[i].name} `


            setInterval(function(){ 
              let notrandom=document.getElementById('randomparagraph')
			  let h5=document.getElementById('h4')
              notrandom.remove()
			  h5.remove()
              let randomfeedsec=document.getElementById('randomfeedsec')
              let randomparagraph=document.createElement('p')
              randomparagraph.setAttribute("id", "randomparagraph");
              randomfeedsec.appendChild(randomparagraph)
              i=random()
      randomparagraph.textContent= `“${Feedback.Info[i].message}“  `
	  let h4 = document.createElement('h4')
      h4.setAttribute("id", "h4");
      randomfeedsec.appendChild(h4)
      h4.textContent = `___ ${Feedback.Info[i].name} `

    }, 7300);
	AOS.init();
     //  marwaaaaaaaaaan worke end  