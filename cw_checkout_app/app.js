let shipping =25
let tax=0
let total=0

const items=document.querySelector('.items')
const p1_itemName = document.querySelector('.p1_itemName')
const p1_itemPrice = document.querySelector('.p1_itemPrice')
const p1_itemDic=document.querySelector('.p1_itemDic')

const p2_itemName = document.querySelector('.p2_itemName')
const p2_itemPrice = document.querySelector('.p2_itemPrice')
const p2_itemDic=document.querySelector('.p2_itemDic')

const p3_itemName = document.querySelector('.p3_itemName')
const p3_itemPrice = document.querySelector('.p3_itemPrice')
const p3_itemDic=document.querySelector('.p3_itemDic')

items.addEventListener('click',(e)=>{

    if(e.target.classList.contains('p1btn')){
        
        console.log(p1_itemName.textContent);
        console.log(p1_itemPrice.textContent);
        console.log(p1_itemDic.src);
    }
    else if(e.target.classList.contains('p2btn')){

        console.log(p2_itemName.textContent);
        console.log(p2_itemPrice.textContent);
        console.log(p2_itemDic.src);
    }
    else if(e.target.classList.contains('p3btn')){

        console.log(p3_itemName.textContent);
        console.log(p3_itemPrice.textContent);
        console.log(p3_itemDic.src);
    }


})










