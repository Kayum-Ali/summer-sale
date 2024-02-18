
let titleCount = 1;
let totalPrice = 0;


const cards = document.querySelectorAll('.card');


for(let index = 0; index < cards.length; index++){
    const card = cards[index];

    card.addEventListener('click', function(){

        const title = card.querySelector('h3').innerText;
        console.log(title);
        const price = parseFloat(card.querySelector('span').innerText.split(" ")[1]);

        const titleContainer = document.getElementById('title-container');
        const p = document.createElement('p');
        p.innerText = titleCount + ". " + title;

        titleContainer.appendChild(p)
        titleCount++;

        totalPrice += price;
        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2);

        
    });
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function(){
    const cuponElement =document.getElementById('input-field').value;
    const cuponCode = cuponElement.split(' ').join('').toUpperCase();
    if( totalPrice >= 200){
        if(cuponCode === 'SELL200'){
            const discountElement =document.getElementById('discountPrice');
            const discoutAmount = totalPrice * 0.2;
            discountElement.innerText = discoutAmount.toFixed(2);


            const restTotal = document.getElementById('total');
            restTotal.innerText = totalPrice - discoutAmount.toFixed(2);
            document.getElementById('input-field').value = " ";
            hide();

        }
        else{
            alert('Invalide coupon code');
        }
    }
    else{
        alert('Please at Least $200 korosh koren vai ');
    }
})

function hide(){
    const hide = document.getElementById('apply-btn');
    hide.classList.add('hidden');
    const inputHide = document.getElementById('input-field');
    inputHide.classList.add('hidden');

    const h3 = document.getElementById('h3');
    h3.classList.add('hidden');


}