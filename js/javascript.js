var alpa='abcdefghijklmnopqrstuvwxyz';
var box=document.getElementById('box');
for(var i=0;i<alpa.length;i++)
{
    var span=document.createElement('span');
    span.setAttribute('class','box-letter');
    span.setAttribute('value',alpa[i].toLowerCase());
    span.textContent=alpa[i];
    box.appendChild(span);
}
//array of span buttons
var arrCharButtons=Array.from(document.querySelectorAll('.letters .box span'));

const word={
    Programming:['php','cpp','pyhton','html','css','java','javascript','csharp'],
    Serires:['dark','ramy','sherlock','see','hannibal','lucifer','vikings','you'],
    Movies:['spiderman','parasite','inception','interstellar','memento','up'],
    Countries:['egypt','qatar','palestine','syria','yemen']
}
//get rand prob
var keys=Object.keys(word),
    RandProbNum=Math.floor( Math.random()*keys.length),
    RandProbValue=keys[RandProbNum],
    RandProb=word[RandProbValue];

//get rand word form prob
let randWordNum=Math.floor( Math.random()*RandProb.length),
    randWord=RandProb[randWordNum];
document.getElementById('catagory').textContent=RandProbValue;


// make letter guessinng
console.log(numOfChar);
var numOfChar=randWord.length,
    letGu=document.getElementById('lg');
for(var i=0;i<numOfChar;i++)
{
    var span=document.createElement('span');
    span.textContent=randWord[i];
    span.setAttribute('class','hide');
    var div=document.createElement('div');
    div.setAttribute('class','char');
    div.appendChild(span);
    letGu.appendChild(div);
}
var arrCharWord=Array.from(document.querySelectorAll('.letter-guess .char span'));
var w=75*numOfChar;
letGu.style.width=w+'px'


//make fundcion gameOver
var gameover=document.getElementById('go'),
    win=document.getElementById('win'),
    body=document.getElementById('body'),
    tryAgian=document.getElementById('try'),
    tryAgian1=document.getElementById('try1');

//get arr of stands draw

var arrStandDiv=Array.from(document.querySelectorAll('.hang-draw div'));
var currentStandPos=2,
    numOfChances=document.getElementById('num-chances');
var W=false,L=false;
function reomveCursorFromLetters()
{
    for(var i=0;i<arrCharButtons.length;i++)
    {
        arrCharButtons[i].classList.add('finsh');
    
    }
}
function Gameover()
{
    gameover.classList.remove('hide');
    body.classList.add('game-over');
    L=true;
    reomveCursorFromLetters();
}
function Resset()
{
    location.reload();

}

//make win
function Win()
{
    win.classList.remove('hide');
    body.classList.add('game-over');
    W=true;
    reomveCursorFromLetters();
}
//onclick buttons
var numCorrect=0;

for(var i=0;i<arrCharButtons.length;i++)
{
    arrCharButtons[i].onclick=function()
    {
        
        if(randWord.indexOf(this.textContent)>-1)//correct
        {
            if(!W&&!L)//if not win
            {
                var pos = randWord.indexOf(this.textContent);
                while(pos > -1) 
                {
                    arrCharWord[pos].classList.remove('hide');
                    this.classList.add('hide');
                    pos = randWord.indexOf(this.textContent, pos+1);
                    numCorrect++;
                }
                if(numCorrect==randWord.length)
                {
                    Win();
                }
            }
            //arrCharWord[randWord.indexOf(this.textContent)].classList.remove('hide');
        }
        else //wrong
        {
            if(!W&&!L)//if not win
            {
                if(numOfChances.textContent>0)
                {
                    arrStandDiv[currentStandPos].classList.remove('hide');
                    currentStandPos++;
                    numOfChances.textContent=numOfChances.textContent-1;
                    this.classList.add('hide');
                }
                if(numOfChances.textContent==0)
                {
                    Gameover();
                    console.log('lose');
                }
             }
        }
    }
}

tryAgian.onclick=Resset;
tryAgian1.onclick=Resset;