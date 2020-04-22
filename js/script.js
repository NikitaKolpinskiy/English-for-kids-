const mainSection           = document.querySelector('#main-section');
const main                  = document.querySelector('#main');
const cardsSection          = document.querySelector('#cards-section');
const cardsList             = document.querySelector('#cards-list')
const burgerSlider          = document.querySelector('#burger-menu_section');
const burgerVertical        = document.querySelector('#burger-menu_vertical');
const burgerSlide           = document.querySelector('#burger-menu_slider');
const burgerList            = document.querySelector('#burger-menu_list');
const burgerMenu            = document.querySelector('#burger-menu');
const burgerCards           = document.querySelector('#burger-cards');
const sliderMode            = document.querySelector('#slider-mode');
const sliderModeSwitcher    = document.querySelector('#train-mode');
const sliderAnimation       = document.querySelector('#slider-animation');
const sliderBox             = document.querySelector('#slider-mode');
const playMode              = document.querySelector('#play-mode');
const mainCards             = document.querySelector('#main-section_cards');
const checkBox              = document.querySelector('#check-box');
const startGame             = document.querySelector('#start-game');
const gameButton            = document.querySelector('#game-button');
const repeatButton          = document.querySelector('#repeat-button');
const achievements          = document.querySelector('#achievements');
const gameOver              = document.querySelector('#game-over');

const routingConfig         = {
    '' : mainSection,
    '/cards' : cardsSection
}
const endGameWin            = gameOver.firstElementChild;
const endGameLoose          = gameOver.lastElementChild;        
const cardsArray            = [...cardsSection.firstElementChild.children];
const arrayFromCards        = [...cardsList.children];
const cardsConfig           = [
    [ 
      {soundPath: './sounds/cry.mp3',  enWord:'cry', ruWord:'плакать', path:'./images/cry.jpg',},
      {soundPath: './sounds/dance.mp3',  enWord:'dance', ruWord:'танцевать', path:'./images/dance.jpg',},
      {soundPath: './sounds/dive.mp3',  enWord:'dive', ruWord:'нырять', path:'./images/dive.jpg' ,},
      {soundPath: './sounds/draw.mp3',  enWord:'draw', ruWord:'рисовать', path:'./images/drawing.jpg' , },
      {soundPath: './sounds/fish.mp3',  enWord:'fish', ruWord:'рыбачить', path:'./images/fishing.jpg', },
      {soundPath: './sounds/fly.mp3',  enWord:'fly', ruWord:'летать', path:'./images/fly.jpg',},
      {soundPath: './sounds/hug.mp3',  enWord:'hug', ruWord:'обнимать', path:'./images/hug.jpg', },
      {soundPath: './sounds/jump.mp3',  enWord:'jump', ruWord:'прыгать', path:'./images/jump.jpg'},
    ],
    [
     {soundPath: './sounds/open.mp3', enWord:'open', ruWord:'открывать', path:'./images/opendoor.jpg',}, 
     {soundPath: './sounds/play.mp3', enWord:'play', ruWord:'играть', path:'./images/playkid.jpg',},
     {soundPath: './sounds/point.mp3', enWord:'point',ruWord:'указывать', path:'./images/pointa.jpg',}, 
     {soundPath: './sounds/ride.mp3', enWord:'ride', ruWord:'кататься', path:'./images/ride.jpg',}, 
     {soundPath: './sounds/run.mp3', enWord:'run',  ruWord:'бежать', path:'./images/run.jpg',}, 
     {soundPath: './sounds/sing.mp3', enWord:'sing', ruWord:'петь', path:'./images/sing.jpg',}, 
     {soundPath: './sounds/skip.mp3', enWord:'skip', ruWord:'пропускать, прыгать', path:'./images/skip.jpg',},
     {soundPath: './sounds/swim.mp3', enWord:'swim', ruWord:'плавать', path: './images/swim.jpg'},
    ],
    [ 
     {soundPath: './sounds/argue.mp3', enWord:'argue', ruWord:'спорить', path:'./images/argue.jpg',},
     {soundPath: './sounds/build.mp3', enWord:'build', ruWord:'строить', path:'./images/build.jpg',}, 
     {soundPath: './sounds/care.mp3', enWord:'carry', ruWord:'нести', path:'./images/cart.jpg',}, 
     {soundPath: './sounds/catch.mp3', enWord:'catch', ruWord:'ловить', path:'./images/catch.jpg',}, 
     {soundPath: './sounds/drive.mp3', enWord:'drive', ruWord:'ездить', path:'./images/drivekid.jpg',}, 
     {soundPath: './sounds/drop.mp3', enWord:'drop', ruWord:'падать', path:'./images/drop.jpg', },
     {soundPath: './sounds/pull.mp3', enWord:'pull', ruWord:'тянуть', path:'./images/pull.jpg', },
     {soundPath: './sounds/push.mp3', enWord:'push', ruWord:'толкать', path:'./images/push.jpg'},
    ], 
    [
     {soundPath: './sounds/big.mp3', enWord:'big', ruWord:'большой', path:'./images/big.jpg',},
     {soundPath: './sounds/small.mp3', enWord:'small', ruWord:'маленький', path:'./images/small.jpg',},
     {soundPath: './sounds/fast.mp3', enWord:'fast', ruWord:'забота', path:'./images/fast.jpg',},
     {soundPath: './sounds/slow.mp3', enWord:'slow', ruWord:'медленный', path:'./images/slow.jpg',},
     {soundPath: './sounds/friendly.mp3', enWord:'friendly', ruWord:'дружелюбный', path:'./images/friendly.jpg',},
     {soundPath: './sounds/unfriendly.mp3', enWord:'unfriendly', ruWord:'не дружелюбный', path:'./images/unfriendlyjpg.jpg',},
     {soundPath: './sounds/young.mp3', enWord:'young', ruWord:'молодой', path:'./images/young.jpg',},
     {soundPath: './sounds/old.mp3', enWord:'old', ruWord:'старый', path:'./images/old.jpg'},
    ], 
    [
     {soundPath: './sounds/cat.mp3', enWord:'cat', ruWord:'кот', path:'./images/cat.jpg',},
     {soundPath: './sounds/chick.mp3', enWord:'chick', ruWord:'цыпленок', path:'./images/chick.jpg',},
     {soundPath: './sounds/chicken.mp3', enWord:'chicken', ruWord:'курица', path:'./images/chicken.jpg',},
     {soundPath: './sounds/dog.mp3', enWord:'dog', ruWord:'собака', path:'./images/dog.jpg',},
     {soundPath: './sounds/horse.mp3', enWord:'horse', ruWord:'лошадь', path:'./images/horse.jpg',},
     {soundPath: './sounds/pig.mp3', enWord:'pig', ruWord:'свинья', path:'./images/pig.jpg',},
     {soundPath: './sounds/rabbit.mp3', enWord:'rabbit', ruWord:'кролик', path:'./images/rabbit.jpg',},
     {soundPath: './sounds/sheep.mp3', enWord:'sheep', ruWord:'овца', path:'./images/sheep.jpg'},
    ],
    [
     {soundPath: './sounds/bird.mp3', enWord:'bird', ruWord:'птица', path:'./images/bird.jpg',},
     {soundPath: './sounds/fisha.mp3', enWord:'fish', ruWord:'рыба', path:'./images/fish.jpg',},
     {soundPath: './sounds/frog.mp3', enWord:'frog', ruWord:'лягушка', path:'./images/frog.jpg',},
     {soundPath: './sounds/giraffe.mp3', enWord:'giraffe', ruWord:'жираф', path:'./images/giraffe.jpg',},
     {soundPath: './sounds/lion.mp3', enWord:'lion', ruWord:'лев', path:'./images/lion.jpg',},
     {soundPath: './sounds/mouse.mp3', enWord:'mouse', ruWord:'мышь', path:'./images/mouse.jpg',},
     {soundPath: './sounds/turtle.mp3', enWord:'turtle', ruWord:'черепаха', path:'./images/turtle.jpg',},
     {soundPath: './sounds/dolphin.mp3', enWord:'dolphin', ruWord:'дельфин', path:'./images/dolphin.jpg'},
    ], 
    [ 
     {soundPath: './sounds/skirt.mp3', enWord:'skirt', ruWord:'юбка', path:'./images/skirt.jpg',},
     {soundPath: './sounds/pants.mp3', enWord:'pants', ruWord:'штаны', path:'./images/pants.jpg',},
     {soundPath: './sounds/blouse.mp3', enWord:'blouse', ruWord:'блузка', path:'./images/blouse.jpg',},
     {soundPath: './sounds/dress.mp3', enWord:'dress', ruWord:'платье', path:'./images/dressjpg.jpg',},
     {soundPath: './sounds/boot.mp3', enWord:'boot', ruWord:'ботинки', path:'./images/boot.jpg',},
     {soundPath: './sounds/shirt.mp3', enWord:'shirt', ruWord:'рубашка', path:'./images/shirt.jpg',},
     {soundPath: './sounds/coat.mp3', enWord:'coat', ruWord:'пальто', path:'./images/coat.jpg',},
     {soundPath: './sounds/shoe.mp3', enWord:'shoe', ruWord:'туфли', path:'./images/shoe.jpg'},
    ], 
    [{soundPath: './sounds/sad.mp3', enWord:'sad', ruWord:'грустный', path:'./images/sad.jpg',},
     {soundPath: './sounds/angry.mp3', enWord:'angry', ruWord:'злой', path:'./images/angry.jpg',},
     {soundPath: './sounds/happy.mp3', enWord:'happy', ruWord:'счастливый', path:'./images/happy.jpg',},
     {soundPath: './sounds/tired.mp3', enWord:'tired', ruWord:'уставший', path:'./images/tired.jpg',},
     {soundPath: './sounds/surprised.mp3', enWord:'surprised', ruWord:'удивленный', path:'./images/surprised.jpg',},
     {soundPath: './sounds/scared.mp3', enWord:'scared', ruWord:'испуганный', path:'./images/scared.jpg',},
     {soundPath: './sounds/smile.mp3', enWord:'smile', ruWord:'улыбка', path:'./images/smileface.jpg',},
     {soundPath: './sounds/laugh.mp3', enWord:'laugh', ruWord:'смех', path:'./images/laugh.jpg'},
    ],
];

let elementIndex        = 0;
let sectionCardConfig   =  cardsConfig[elementIndex];
let isGameOn            = false; 
let cardInGame;
let cardsLeft           = cardsArray.slice();
let randomIndex;
let countErrors         = 0;
let correctSound        = './sounds/correct.mp3';
let wrongSound          = './sounds/error.mp3';
let winGameSound        = './sounds/win.mp3';
let looseGameSound      = './sounds/loose.mp3';


window.addEventListener('popstate', (e) => {
    main.innerHTML = '';
    main.appendChild(routingConfig[e.target.location.hash.split('#').pop()]);
})

burgerMenu.addEventListener('click', (e) => {
    burgerSlider.classList.toggle('close-slide_menu');
});

burgerVertical.addEventListener ('click', (e) => {
    burgerSlider.classList.toggle('close-slide_menu');
});

burgerList.addEventListener('click', (e) => {
    burgerSlider.classList.toggle('close-slide_menu');
})

burgerCards.addEventListener('click', renderPage);
burgerCards.addEventListener('click', (e) => {
        reset();
        cardsArray.forEach((e) => {
            e.classList.remove('correct');
        })
        if (checkBox.checked) {
            gameButton.classList.remove('hidden');
        } else {
            gameButton.classList.add('hidden');
        }
});

mainCards.addEventListener('click', renderPage);

sliderMode.addEventListener('click', (element) => {
    const isTrainMode = checkBox.checked;

    sliderModeSwitcher.classList.toggle('hidden');
    sliderMode.classList.toggle('red-gradient');
    playMode.classList.toggle('hidden');
    sliderAnimation.classList.toggle('slider-animation');
    burgerSlide.classList.toggle('red-gradient');
    mainCards.querySelectorAll('a').forEach((e) => {
        e.classList.toggle('red-gradient_cards')
    })
    gameButton.classList.toggle('hidden');

    arrayFromCards.forEach((e) => {
        const cardFront   =  e.querySelector('.front');
        const cardBack    =  e.querySelector('.back');
        const cardRotate  =  e.querySelector('.rotate');
        isTrainMode ? cardFront.classList.add('card-off') : cardFront.classList.remove('card-off');
        isTrainMode ? cardFront.firstElementChild.classList.add('none') :  cardFront.firstElementChild.classList.remove('none');
        isTrainMode ? cardBack.classList.add('card-off') : cardBack.classList.remove('card-off');
        isTrainMode ? cardBack.firstElementChild.classList.add('none') : cardBack.firstElementChild.classList.remove('none');
        isTrainMode ? cardRotate.classList.add('none') : cardRotate.classList.remove('none');
        if (!isTrainMode) {
            reset();
            gameButton.classList.add('hidden');
            e.classList.remove('correct')
        }
    })
})



cardsArray.forEach((e) => {
    e.addEventListener('click', onCardClickAudio);
    e.addEventListener('click', onCardClick);
    e.addEventListener('mouseleave', onCardLeave);
    e.lastElementChild.addEventListener('click', (event) => {
        event.stopImmediatePropagation();
        e.classList.add('translate');   
    });
})

gameButton.addEventListener('click', (e) => {
    isGameOn = !isGameOn;
    
    gameButton.classList.add('hidden');
    repeatButton.classList.remove('hidden');
    nextTurn();
})

repeatButton.addEventListener('click' , (e) => {
    playSound(cardInGame.dataset.soundPath);
})

function renderPage(e) {
    elementIndex = getAroundIndex(e.target);
    sectionCardConfig =  cardsConfig[elementIndex];
    cardsSection.classList.remove('hidden'); 

    cardsArray.forEach((e, i) =>  {
        const cardConfig = sectionCardConfig[i];
        const cardFront  = e.querySelector('.front');
        const cardBack   = e.querySelector('.back');

        cardFront.setAttribute('style', `background-image: url(${cardConfig.path});`);
        cardBack.setAttribute('style', `background-image: url(${cardConfig.path});`);
        cardFront.firstElementChild.innerText = cardConfig.enWord;
        cardBack.firstElementChild.innerText = cardConfig.ruWord;
        e.dataset.soundPath = cardConfig.soundPath;
    })
}

function nextTurn() {
    randomIndex = Math.floor(Math.random() * cardsLeft.length);
    cardInGame  = cardsLeft[randomIndex];
 

    if (cardsLeft.length) {
        let randomSound = cardInGame.dataset.soundPath;
        cardsLeft.splice(randomIndex, 1);
        playSound(randomSound);
    } else {
        if (countErrors === 0) {
            playSound(winGameSound);
            gameOver.classList.remove('hidden');
            endGameWin.classList.remove('hidden');
            setTimeout(endGame, 5000);
        } else {
            playSound(looseGameSound);
            gameOver.classList.remove('hidden')
            endGameLoose.classList.remove('hidden');
            endGameLoose.classList.add('flex');
            endGameLoose.lastElementChild.innerText = `You loose, you have ${countErrors} error`;
            setTimeout(endGame, 5000);
        }
    }
}

function onCardClick(e) {
    const card = e.currentTarget;
    if (isGameOn) {
        if (cardInGame === card) {
            playSound(correctSound);
            card.classList.add('correct');
            const star = document.createElement('div');  
            star.classList.add('star-correct');
            achievements.classList.remove('invisibility')
            achievements.appendChild(star);
            setTimeout(nextTurn, 1000);
        } else if (cardInGame !== card) {
            playSound(wrongSound);
            countErrors++;
            const star = document.createElement('div');
            star.classList.add('star-wrong');
            achievements.classList.remove('invisibility')
            achievements.appendChild(star);
        } 
    }
}

function playSound(e) {
    const sound = new Audio();

    sound.src = e;
    sound.play();
}

function onCardClickAudio (e) {
    if (checkBox.checked) {
        return;
    }
    const card = e.currentTarget;
    const sound = new Audio();
    sound.src = card.dataset.soundPath;
    sound.play();
}

function onCardLeave(e) {
    e.currentTarget.classList.remove('translate');
}

function getAroundIndex(elem) {
    let i = 0;
    while((elem = elem.previousElementSibling)!=null) ++i;
    return i;
}

function endGame() {
    let mainCardsArray = [...mainCards.children];
    cardsLeft = cardsArray.slice();
    window.location.hash = '';
    isGameOn = false;
    checkBox.checked = false;
    sliderModeSwitcher.classList.remove('hidden');
    sliderMode.classList.remove('red-gradient_cards');
    sliderBox.classList.remove('red-gradient');
    sliderAnimation.classList.remove('slider-animation');
    burgerSlide.classList.remove('red-gradient')
    playMode.classList.add('hidden');
    countErrors = 0;
    gameOver.classList.add('hidden')
    repeatButton.classList.add('hidden');
    gameButton.classList.add('hidden');
    achievements.classList.add('invisibility');
    achievements.innerHTML = '';

    cardsArray.forEach((e) => {
        e.classList.remove('correct');
    })

    arrayFromCards.forEach((e) => {
        let frontCard = e.querySelector('.front');
        let backCard  = e.querySelector('.back');
        let rotate    = e.querySelector('.rotate');

        frontCard.firstElementChild.classList.remove('none')
        frontCard.classList.remove('card-off');
        backCard.classList.remove('card-off');
        backCard.firstElementChild.classList.remove('none')
        rotate.classList.remove('none');
    })
    
    mainCardsArray.forEach((e) => {
        e.classList.remove('red-gradient_cards');
    })
}

function reset() {
    cardsLeft = cardsArray.slice();
    isGameOn = false;
    countErrors = 0;
    repeatButton.classList.add('hidden');
    achievements.classList.add('invisibility');
    achievements.innerHTML = '';
}
