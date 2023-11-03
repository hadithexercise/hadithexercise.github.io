var z= document.getElementById ("myAudio")

function playAudio(myAudio) {
   z.play(myAudio);

   myAudio.addEventListener ('timeupdate', function() {
    updatewaktu();
});

function updatewaktu() {
    audioslider.value= myAudio.currentTime * (100/myAudio.duration);
}

   var audioslider=document.getElementById ("audioslider") ;
   var geser;

    audioslider.addEventListener ('mousedown', function(e){
        geser=true;
        setPosisiAudio(e);
    })
    audioslider.addEventListener ('touchstart', function(e){
        geser=true;
        setPosisiAudio(e);
    })

    audioslider.addEventListener ('mousemove', function(e){
        setPosisiAudio(e);
    })
    audioslider.addEventListener ('touchmove', function(e){
        setPosisiAudio(e);
    })

    audioslider.addEventListener ('mouseup', function(){
        geser=false;
    })
    audioslider.addEventListener ('touchend', function(){
        geser=false;
    })

    function setPosisiAudio (e) {
        if(geser) {
            var posisiaudio= myAudio.duration*(audioslider.value/100);
            myAudio.currentTime= posisiaudio;
        }
    }

    
}

function pauseAudio(myAudio) {
    z.pause(myAudio);
}


const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12]
const card = document.querySelectorAll('.card')
let matchEs = document.querySelectorAll('.match')
const container = document.querySelector ('.container')
const popUp = document.getElementById ("popup")
const pesan = document.getElementById ("pesan")
const TIMEMEDIUM = 60;
const TIMESUPEREASY = 20;
const TIMEHIGH = 200;
let runningTime = 0;
        //const okButton = document.getElementById ("ok")
        //okButton.addEventListener ('click', function (){ hilangKan();})
        //function hilangKan () {
           // popUp.style.visibility= "hidden";
        //}


function randomCard() {

    card.forEach(c=>{
        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}

const rCard = randomCard();

clicking()


/*function addClass1() {
    card[0].classList.add('cardOpen');
}
function addClass2() {
    card[1].classList.add('cardOpen');
}
function addClass3() {
    card[2].classList.add('cardOpen');
}
function addClass4() {
    card[3].classList.add('cardOpen');
}
function addClass5() {
    card[4].classList.add('cardOpen');
}
function addClass6() {
    card[5].classList.add('cardOpen');
}
function addClass7() {
    card[6].classList.add('cardOpen');
}
function addClass8() {
    card[7].classList.add('cardOpen');
}
function addClass9() {
    card[8].classList.add('cardOpen');
}
function addClass10() {
    card[9].classList.add('cardOpen');
}
function addClass11() {
    card[10].classList.add('cardOpen');
}
function addClass12() {
    card[11].classList.add('cardOpen');
}
*/

//let cardOpen = document.querySelectorAll('cardOpen')


function clicking(){

    for(let i =0; i<card.length; i++){


        //front[i].classList.add('show')

        //setInterval(() => {
           // front[i].classList.remove('show')
        //}, 2000);

        card[i].addEventListener('click' ,()=>{

            card[i].classList.add('cardOpen')
           const filppedCard = document.querySelectorAll('.cardOpen')

            if(filppedCard.length == 2){

                container.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1])
            }
        })
    }
}




function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        //score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('cardOpen') 
        cardTwo.classList.remove('cardOpen') 


        cardOne.classList.add('match')
        cardTwo.classList.add('match')

        const matchCard = document.querySelectorAll('.match').length / 2;
        document.getElementById("matches").innerHTML = `${matchCard} match(es)`

        if(document.querySelectorAll('.match').length == card.length){
            document.getElementById("popup").style.visibility= "visible";
            
            document.getElementById("matches").innerHTML = `all match`;
            runningTime = `time`
            document.getElementById("pesantimeout").style.visibility= "hidden"

        }

    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('cardOpen') 
            cardTwo.classList.remove('cardOpen') 
        }, 800);
    }
}

function startTimerSUPEREASY(){
    const timer = document.getElementById("timerSUPEREASY")
    const interval = setInterval (() => {
        if(runningTime <= 0){
            clearInterval(interval)
            document.getElementById("pesantimeout").style.visibility= "visible"
        }
        
        timer.innerHTML = `time ${runningTime}`;
        --runningTime;
    }, 1000);
}
function startTimerMEDIUM(){
    const timer = document.getElementById("timerMEDIUM")
    const interval = setInterval (() => {
        if(runningTime <= 0){
            clearInterval(interval)
            document.getElementById("pesantimeout").style.visibility= "visible"
        }
       
        timer.innerHTML = `time ${runningTime}`;
        --runningTime;
    }, 1000);
}
function startTimerHIGH(){
    const timer = document.getElementById("timerHIGH")
    const interval = setInterval (() => {
        if(runningTime <= 0){
            clearInterval(interval)
            document.getElementById("pesantimeout").style.visibility= "visible"
        }
       
        timer.innerHTML = `time ${runningTime}`;
        --runningTime;
       
    }, 1000);
}

function startGameSUPEREASY () {
    pesan.style.visibility = "hidden";
    runningTime = TIMESUPEREASY;
    startTimerSUPEREASY();
}
function startGameMEDIUM () {
    pesan.style.visibility = "hidden";
    runningTime = TIMEMEDIUM;
    startTimerMEDIUM();
}
function startGameHIGH () {
    pesan.style.visibility = "hidden";
    runningTime = TIMEHIGH;
    startTimerHIGH();
}



/*function clicking(){

    for(let i =0; i<card.length; i++){

        card[i].addEventListener('click' ,()=>{

            card[i].classList.add('cardOpen')
           const filppedCard = document.querySelectorAll('.cardOpen)')

            if(filppedCard.length == 2){

                container.style.pointerEvents ='none'
                
                setInterval(() => {
                    
                    container.style.pointerEvents ='all'
                }, 1000);
 
                match(filppedCard[0] , filppedCard[1])
            }
        })
    }
}




function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        score.innerHTML = parseInt(score.innerHTML) + 1
       
        cardOne.classList.remove('cardOpen)') 
        cardTwo.classList.remove('cardOpen)') 


        cardOne.classList.add('match')
        cardTwo.classList.add('match')


    }else{

        setTimeout(() => {
            
            cardOne.classList.remove('cardOpen)') 
            cardTwo.classList.remove('cardOpen)') 
        }, 1000);
    }
} 

        /*setInterval(() => {
            cardOpen[i].classList.remove('show')
        },2000);

        card[i].addEventListener('click', () => {
            cardOpen[i].classList.add('cardOpen)')
            const cardOpen)pedCard = document.querySelectorAll('cardOpen)')

            if(cardOpen)pedCard.length == 2) {
                container.style.pointerEvent = 'none'
                
                setInterval (() => {
                    container.style.pointerEvent = 'all'
                },1000);

                match(cardOpen)pedCard[0], cardOpen)pedCard[1])
            }
        })

    }
}

function match(cardOne, cardTwo) {
    if(cardOne.dataset.index == cardTwo.dataset.index){

        cardOne.classList.remove('cardOpen)')
        cardTwo.classList.remove('cardOpen)')

        cardOne.classList.add('match')
        cardTwo.classList.add('match')

    }else{

        setTimeout (() => {
            cardOne.classList.remove('cardOpen')
            cardTwo.classList.remove('cardOpen')
        },1000)
       
    }
}

/*const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");
const card8 = document.getElementById("card8");
const card9 = document.getElementById("card9");
const card10 = document.getElementById("card10");
const card11 = document.getElementById("card11");
const card12 = document.getElementById("card12");
function addClass1() {
    card1.classList.add('cardOpen');
}
function addClass2() {
    card2.classList.add('cardOpen');
}
function addClass3() {
    card3.classList.add('cardOpen');
}
function addClass4() {
    card4.classList.add('cardOpen');
}
function addClass5() {
    card5.classList.add('cardOpen');
}
function addClass6() {
    card6.classList.add('cardOpen');
}
function addClass7() {
    card7.classList.add('cardOpen');
}
function addClass8() {
    card8.classList.add('cardOpen');
}
function addClass9() {
    card9.classList.add('cardOpen');
}
function addClass10() {
    card10.classList.add('cardOpen');
}
function addClass11() {
    card11.classList.add('cardOpen');
}
function addClass12() {
    card12.classList.add('cardOpen');
}

var shuf_card = shuffleCard()
function shuffleCard() {

    card.forEach(c=>{
        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random()*card.length)

        c.style.order = num[random]
    })
}

for(var i=0; i<card.length; i++) {
    if (document.querySelectorAll('.cardOpen')[0].getAttribute("data-value") === document.querySelectorAll('.cardOpen')[1].getAttribute("data-value")) {
                        document.querySelectorAll('.cardOpen')[0].classList.add('cardMatch')
                        document.querySelectorAll('.cardOpen')[1].classList.add('cardMatch')

                        document.querySelectorAll('.cardOpen')[1].classList.remove
                        ('cardOpen')
                        document.querySelectorAll('.cardOpen')[0].classList.remove
                        ('cardOpen')

                        if(document.querySelectorAll('.item.cardMatch').length == card.length){
                           alert("win");
                            
                        }
    }
}



const cardiii = document.querySelectorAll('.cardo')

function klilKlik (cardii){
    console.log (cardii)
}


*/

const draggable_list = document.getElementById('draggable-list');
//const check = document.getElementById('check');

const richestPeople = [
  'الْحَدِيْثُ الثَّانِي',
  'فِى أَنَّ الْأَرْوَاحَ جُنُوْدٌ مُجَنَّدَةٌ',
  'عَنْ عَائِشَةَ رَضِيَ اللهُ عَنْهَا',
  'قَالَتْ',
  'سَمِعْتُ النَّبِيَّ ﷺ يَقُوْلُ',
  'الْأَرْوَاحُ جُنُوْدٌ مُجَنَّدَةٌ',
  'فَمَا تَعَارَفَ مِنْهَا ائْتَلَفَ',
  'وَمَا تَنَاكَرَ مِنْهَا اخْتَلَفَ',
  'رَوَاهُ الإِمَامُ البُخَارِى',
  //'Larry Page'
];

// Store listitems
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...richestPeople]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-index', index);

      listItem.innerHTML = `
      <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
        </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart() {
   console.log('Event: ', 'dragstart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
  console.log(dragStartIndex)
}


function dragEnter() {
  // console.log('Event: ', 'dragenter');
  this.classList.add('over');
}

function dragLeave() {
  // console.log('Event: ', 'dragleave');
  this.classList.remove('over');
}

function dragOver(e) {
   console.log('Event: ', 'dragover');
  e.preventDefault();
}

function dragDrop() {
   console.log('Event: ', 'drop');
  //this.classList.add('over');
  //this.classList.remove('over');
  const dragEndIndex = +this.getAttribute('data-index');

  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}


// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);

  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggable').innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add('wrong');
    } else {
      listItem.classList.remove('wrong');
      listItem.classList.add('right');
    }
  });
}


// Check the order of list items

//function checkOrder() {}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
  });

  dragListItems.forEach(item => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop)
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);

  });
  
}



//checkOrder();
//check.addEventListener('click', checkOrder);