var printed=["","","",""];

const Alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u","v","w","x","y","z"];

const lineOne=["M","y"," ","m","o","m"," ","c","a","l","l","e","d"," ","m","y"," ","d","a","d",
    " ","o","n"," ","t","h","e"," ","p","h","o","n","e","(","S","e","c","o","n","d","a","r","y"," ",
    "o","r","a","l","i","t","y",")"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",
    " "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "];

const lineTwo=["M","y"," ","d","a","d"," ","t","o","l","d"," ","m","e","(","f","a","c","e","-",
    "t","o","-","f","a","c","e",")","t","h","a","t"," ","I"," ","n","e","e","d","e","d"," ","t","o",
    " ","t","a","k","e"," ","m","y"," ","b","r","o","t","h","e","r"," ","w","h","a","t"," ","h","e",
    " ","f","o","r","g","o","t","(","o","r","a","l"," ","t","r","a","d","i","t","i","o","n",")"];

const lineThree=["I"," ","g","a","v","e"," ","h","i","s"," ","s","t","u","f","f"," ","t","o"," ",
    "t","h","e"," ","p","e","o","p","l","e"," ","i","n"," ","t","h","e"," ","o","f","f","i","c","e",
    " ","w","h","o"," ","t","o","o","k"," ","i","t"," ","f","r","o","m"," ","m","e"," ","i","m","m",
    "e","d","i","a","t","e","l","y"," ","(","r","e","a","l"," ","t","i","m","e",")"," "," "," "];

const lineFour=["W","h","e","n"," ","I"," ","h","a","d"," ","d","r","o","p","p","e","d"," ","m",
    "y"," ","b","r","o","t","h","e","r","'","s"," ","s","t","u","f","f"," ","o","f","f"," ","t","o",
    " ","h","i","m",","," ","I"," ","t","e","x","t","e","d"," ","m","y"," ","p","a","r","e","n","t",
    "s"," ","(","N","e","w"," ","m","e","d","i","a"," ","t","r","a","d","i","t","i","o","n",")"];

function final(){
    Ending("Line1",printed[0]);
    Ending("Line2",printed[1]);
    Ending("Line3",printed[2]);
    Ending("Line4",printed[3]);
};
async function decode(){

    var i;
    var j;
    for (i=0; i<91; i++){
        for (j=0; j<1; j++){
            let myPromise = new Promise(function(myResolve, myReject) {
            setTimeout(function() {
                    Line(printed[0],Alphabet[Math.floor(Math.random() * 26)],"Line1");
                    Line(printed[1],Alphabet[Math.floor(Math.random() * 26)],"Line2");
                    Line(printed[2],Alphabet[Math.floor(Math.random() * 26)],"Line3");
                    Line(printed[3],Alphabet[Math.floor(Math.random() * 26)],"Line4");
                    
                },1000)
                myResolve();
            });
            myPromise.then(function(value) {});//rest_of_word(i)
                };
            
    };
};   
async function main(){
    let newPromise = new Promise(function(myResolve, myReject) {setTimeout(decode(),500);myResolve();});
    newPromise.then(function(value) {final();});
}
function Line(printed,randomLetter,element){
    document.getElementById(element).innerHTML=printed+randomLetter;

}
function Ending(element,printed){
    document.getElementById(element).innerHTML=printed
}
function rest_of_word(index){
    printed[0]=printed[0].concat(lineOne[index]);
    printed[1]=printed[1].concat(lineTwo[index]);
    printed[2]=printed[2].concat(lineThree[index]);
    printed[3]=printed[3].concat(lineFour[index]);
    console.log(index);

}