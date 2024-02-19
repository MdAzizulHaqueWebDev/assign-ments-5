// Scroll 
function goToExpressSection() {
    const goLo = document.getElementById('atlantic-container');
    goLo.scrollIntoView()
}


const cards = document.getElementsByClassName('cards');

let count = 0;

for (const card of cards) {

    card.addEventListener('click', function () {

        if (count >= 4) {
            alert('Cannot purchase more than 4');
            card.classList.setAttribute('disabled', true);
        }
        card.style.backgroundColor = '#1DD100'
        card.style.color = 'white'

        const seatCount = document.getElementById('seatCount');
        count++
        seatCount.innerText = count;

        // available seats
        const availableSeats = document.getElementById('available-seats');

        const totalCurrent = availableSeats.innerText;
        const currentSeats = parseInt(totalCurrent)
        const availableCurrent = currentSeats - 1;
        availableSeats.innerText = availableCurrent;


        // seat info container
        const titleContainer = document.getElementById('title-container');
        const seat = document.getElementById('seat');
        const class2 = document.getElementById('class-2');
        const price3 = document.getElementById('price-3');


        //seat title add
        const p = document.createElement('p')
        p.innerText = card.innerText;
        seat.appendChild(p)
        titleContainer.appendChild(seat)


        //seat class add
        const p2 = document.createElement('p')
        p2.innerText = 'Economoy';
        class2.appendChild(p2)
        titleContainer.appendChild(class2)
        //seat price add
        const p3 = document.createElement('p')
        p3.innerText = 550;
        price3.appendChild(p3)
        titleContainer.appendChild(price3)


        const totalPrice = document.getElementById('total-price');

        const Price = count * 550;
        totalPrice.innerText = Price;
        console.log(Price)
        if (count >= 1) {
            card.setAttribute("disabled", true);
        }
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = Price

        // apply btn enabled/disabled
        const applyBtn = document.getElementById('apply-btn')
        if (count === 4) {
            applyBtn.removeAttribute('disabled');

        }

        else {
            applyBtn.setAttribute('disabled', true);
        }

    })
}




const applyBtn = document.getElementById('apply-btn').addEventListener('click', function () {

    const Price = count * 550;
    const inputField = document.getElementById('input-field').value;
    if (inputField === 'NEW15') {
        const discount = Price * 15 / 100;
        const afterDiscountPrice = Price - discount;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = afterDiscountPrice;

        const discountContainer = document.getElementById('discount-container');

        // title add
        const p = document.createElement('p')
        p.innerText = 'Discount Price';
        discountContainer.appendChild(p)

        // discount add
        const p2 = document.createElement('p')
        p2.innerText = 'BDT ' + discount;
        discountContainer.appendChild(p2)

        hideElement('input-container')
    }
    else if (inputField === 'Couple 20') {
        const discount = Price * 20 / 100;
        const afterDiscountPrice = Price - discount;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = afterDiscountPrice;

        const discountContainer = document.getElementById('discount-container');

        // title add
        const p = document.createElement('p')
        p.innerText = 'Discount Price';
        discountContainer.appendChild(p)

        // discount add
        const p2 = document.createElement('p')
        p2.innerText = 'BDT' + discount;
        discountContainer.appendChild(p2)

        hideElement('input-container')
    }
    else {
        alert('Invalid Coupon Code')

    }

})


function hideElement(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}


