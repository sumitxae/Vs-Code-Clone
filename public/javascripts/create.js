const inputfile = document.querySelector("#addfile");
const inputfolder = document.querySelector("#addfolder");

let createfileIconClicked = 0;
let createfolderIconClicked = 0;
var flag = 0;

function inputCloser() {
    document.querySelectorAll(".inpname")
    .forEach(elem =>{
        elem.style.display = "none";
    })
}

inputfile.addEventListener("click",()=>{
    inputCloser();
    if(createfileIconClicked === 0){
        document.querySelector("#createfile").style.display = "initial";
        createfileIconClicked = 1; 
    } else {
        document.querySelector("#createfile").style.display = "none";
        createfileIconClicked = 0; 
    }
})

inputfolder.addEventListener("click",()=>{
    inputCloser();
    if(createfolderIconClicked === 0){
        document.querySelector("#createfolder").style.display = "initial";
        createfolderIconClicked = 1; 
    } else {
        document.querySelector("#createfolder").style.display = "none";
        createfolderIconClicked = 0; 
    }
})
