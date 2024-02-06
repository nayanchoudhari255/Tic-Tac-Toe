let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#newgame-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let turnO= true;



let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetgame=()=>{
    turnO=true;

    enableboxes();
    msgcontainer.classList.add("hide");s
}
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
    
        if(turnO){
            box.innerText="O";
          
            turnO=false;
     
        }
        else{
            box.innerText="X";
            turnO=true;
        
        }
        box.disabled=true;
    

        checkwinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
for(pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if (pos1val!=""&&pos2val!=" "&&pos3val!=""){
        if(pos1val ===pos2val && pos2val===pos3val){
          

            showwinner(pos1val);
        }
    }
}

};
newgamebtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);