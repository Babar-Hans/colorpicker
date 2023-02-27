const getColor = ()=>{

    let randomNumber = Math.floor(Math.random() * 16777215);
    let randomCode = "#" + randomNumber.toString(16); 
    document.body.style.backgroundColor = randomCode;

    let colorCodeChange = document.getElementById("colorCode");
    colorCodeChange.innerText =  randomCode;

    navigator.clipboard.writeText(randomCode)
}

//event function
let btn = document.getElementById("btn");
btn.addEventListener("click",getColor);

//init function

getColor();