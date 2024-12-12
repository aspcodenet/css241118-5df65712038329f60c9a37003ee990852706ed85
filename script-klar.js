



const fetchQuotesButton = document.getElementById("fetchQuotes")
const tal1Input = document.getElementById("tal1")
const tal2Input = document.getElementById("tal2")
const resultat = document.getElementById("resultat")
const quoteBody = document.getElementById("quoteBody")


async function fetchJson(){
    const response = await fetch("https://programming-quotesapi.vercel.app/api/bulk");
    const json = await response.json()
    return json
}

// vid klick poå fetch knappen
async function onClick(){
    let arr = await fetchJson()
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




function add(tal1,tal2){
      return tal1 + tal2;
}




function onChangeTal(){
    let varde1 = parseInt(tal1.value);
    let varde2 = parseInt(tal2.value);

    let svar = add(varde1,varde2);
    resultat.innerText = svar;
}

fetchQuotesButton.addEventListener("click",onClick);
tal1Input.addEventListener("input",onChangeTal)
tal2Input.addEventListener("input",onChangeTal)
// använd INTE var utan let och const
// använd inte == utan === och !== etc

let player = {
    name: "Foppa",
    age:53,
    jersey: 21,

    play(){
        alert('Foppa spelar match');
    }
};





player.age = 12;
//player.play();
//player.team = "Colorado";
console.log(player.age);



function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  john.name = "sdasdas"


  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
  }
  
  const square = new Rectangle(10, 10);
  










// const addFunc = (tal1,tal2)=>{
//     return tal1+tal2;
// }

// let x2 = addFunc(111,222)

let x = add(12,13)

let i = 12;

console.log('Start')

i = i + 1;

if(i !== '13'){
    console.log('13')
}else{
    console.log('ej 13')
}


i = "Stefan";

;
