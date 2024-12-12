const resultatElement =  document.getElementById("resultat");
const tal1Element =  document.getElementById("tal1");
const tal2Element =  document.getElementById("tal2");

const fetchQuotesButton = document.getElementById("fetchQuotes")
const quoteBody = document.getElementById("quoteBody")






async function fetchJson(){
    const response = await fetch("https://programming-quotesapi.vercel.app/api/bulk");
    const json = await response.json()
    return json
}

// vid klick poå fetch knappen
async function onClick(){
    let arr = await fetchJson()
    console.log(arr)
    for(let  i = 0; i < arr.length;i++ ){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        td1.innerText = arr[i].author
        td2.innerText = arr[i].quote
        tr.appendChild(td1)
        tr.appendChild(td2)
        quoteBody.appendChild(tr)
        
        console.log(arr[i].author) // .quote
     }

    //console.log(arr)

}



fetchQuotesButton.addEventListener("click",onClick);



//resultatElement.style.fontSize = "100px";
resultatElement.innerText = "Mata in nåt så får du se";

function add(tal1,tal2){
    // if
    let result = parseInt(tal1) + parseInt(tal2);
    return result;
}



tal1Element.addEventListener("input", function(){
    let result = add(tal1Element.value, tal2Element.value);
    resultatElement.innerText = result;
} );

tal2Element.addEventListener("input", function(){
    let result = add(tal1Element.value, tal2Element.value);
    resultatElement.innerText = result;
} );

// CLASS

function HockeyPlayer(id,name,jersey,team){
    this.id = id;
    this.name = name;
    this.jersey = jersey;
    this.team = team;
}

let f = new HockeyPlayer(12,"Foppa",21,"Colorado")
console.log(f.jersey)

let f2 = new HockeyPlayer(13,"Sudden",13,"Toronto")
console.log(f2.jersey)

let team = [f1,f2]


let player = {    id: 12,
    name: "Foppa",
    jersey: 21,
    team: "Colorado"
};

let player2 = {
    id: 13,
    name:"Sudden",
    jersey: 13,
    team: "Toronto"
};

player.name = "Peter";
player.isBest = true;

console.log(player.jersey);







let result = add(12,13);
console.log(result);

const addFunc = function(tal1,tal2){
    let result = tal1 + tal2;
    return result;
}
let result2 = addFunc(12,22);
console.log(result2);


const addFunc3 = (tal1,tal2)=>{
    let result = tal1 + tal2;
    return result;
}

addFunc3(1,2)



// let nummer = "21";
// let namn2 = prompt("Vad deter du")
// if(nummer === 21){
//     alert("Foppas nummer")
// }else{
//     alert("Inte Foppas nummer")
// }


// //var  player = new HockeyPlayer();

// // name = "Stefan" FÖRBJUDET
// // var x = 12 FÖRBJUDET
// let iscool = true;
// let age = 52;
// age = "gammal";
// let namn = "Stefan"
// namn = 'Stefan Holmberg'
// namn = `Stefan är ${age}  år` 
// age = age + 1;

// let varde = "12";
// let n = parseInt(varde)


// //const isCool = true




