let mechanism = (function () {
    let beerPrice = 0;
    let winePrice = 0;
    let pepsiPrice = 0;
    let ord;
    let lol;
    let allOrders = [];
    class order {
        constructor(quantityOfDrinks, typeOfDrink) {
            this.quantityOfDrinks = quantityOfDrinks;
            this.typeOfDrink = typeOfDrink;
        }
    }

    function makingOrder() {
        window.addEventListener('mouseover', () => {
            for (let i = 0; i < document.querySelector('.wrapRadio').children.length; i++) {
                if (document.querySelector('.wrapRadio').children[i].checked === true) {
                    lol = document.querySelector('.wrapRadio').children[i].value
                }
            }
            ord = new order(document.querySelector('.quantity-of-drinks').value, lol);
        })

    }

    function addingOrder() {
        document.querySelector('.btn1').addEventListener('click', () => {
            if (ord.typeOfDrink == 'Пиво' && ord.quantityOfDrinks > 100 || ord.typeOfDrink == 'Пиво' && parseInt(document.querySelector('.input-2').value) <
                parseInt(document.querySelector('.quantity-of-drinks').value)) {
                allOrders.push();
                document.querySelector('.alelrt-message').style.display = 'block';
                document.querySelector('.quantityOfBeer').innerHTML = document.querySelector('.input-2').value;

            } else if (ord.typeOfDrink == 'Вино' && ord.quantityOfDrinks > 50 || ord.typeOfDrink == 'Вино' && parseInt(document.querySelector('.input-3').value) <
                parseInt(document.querySelector('.quantity-of-drinks').value)) {
                allOrders.push();
                document.querySelector('.alelrt-message2').style.display = 'block';
                document.querySelector('.quantityOfWine').innerHTML = document.querySelector('.input-3').value;
            } else if (ord.typeOfDrink == 'Вино' && ord.quantityOfDrinks > 80 || ord.typeOfDrink == 'Пепсі' && parseInt(document.querySelector('.input-4').value) <
                parseInt(document.querySelector('.quantity-of-drinks').value)) {
                allOrders.push();
                document.querySelector('.alelrt-message3').style.display = 'block';
                document.querySelector('.quantityOfPepsi').innerHTML = document.querySelector('.input-4').value;
            } else {
                allOrders.push(ord);
            }

            if (ord.typeOfDrink !== undefined && ord.quantityOfDrinks !== '') {
                document.querySelector('.textArea1').insertAdjacentHTML('beforeend', `${ord.typeOfDrink}: ${ord.quantityOfDrinks} шт <br>`);
            } else {
                allOrders.pop()
            }
            document.querySelector('.quantity-of-drinks').value = '';
            console.log(allOrders);
        })

    }

    function addition() {
        let all = 0;

        document.querySelector('.btn2').addEventListener('click', () => {
            all = 0;
            document.querySelector('.content2').textContent = '';

            for (let i = 0; i < allOrders.length; i++) {
                if (allOrders[i].typeOfDrink === 'Пиво') {
                    beerPrice = 27;
                    all += beerPrice * allOrders[i].quantityOfDrinks;
                    console.log(all);
                } else if (allOrders[i].typeOfDrink === 'Вино') {
                    winePrice = 300;
                    all += winePrice * allOrders[i].quantityOfDrinks;
                    console.log(all);
                } else if (allOrders[i].typeOfDrink === 'Пепсі') {
                    pepsiPrice = 12;
                    all += pepsiPrice * allOrders[i].quantityOfDrinks;
                    console.log(all);
                }
                document.querySelector('.price').innerHTML = all + ' грн';

                console.log('quantityOfDrinks', allOrders[i].quantityOfDrinks);
                console.log('typeOfDrink', allOrders[i].typeOfDrink);
            }

            for (let i = 0; i < allOrders.length; i++) {
                document.querySelector('.content2').insertAdjacentHTML('beforeend', `${allOrders[i].typeOfDrink}: ${allOrders[i].quantityOfDrinks} шт. <br>`);
                if (allOrders[i].typeOfDrink === 'Пиво') {
                    document.querySelector('.input-2').value = parseInt(document.querySelector('.input-2').value) - allOrders[i].quantityOfDrinks + ' шт.';
                } else if (allOrders[i].typeOfDrink === 'Вино') {
                    document.querySelector('.input-3').value = parseInt(document.querySelector('.input-3').value) - allOrders[i].quantityOfDrinks + ' шт.';
                } else if (allOrders[i].typeOfDrink === 'Пепсі') {
                    document.querySelector('.input-4').value = parseInt(document.querySelector('.input-4').value) - allOrders[i].quantityOfDrinks + ' шт.';
                }
                document.querySelector('.balance').style.display = 'block';
            }


            document.querySelector('.quantity-of-drinks').value = '';
            document.querySelector('.textArea1').innerHTML = '';
            allOrders = [];
            console.log(allOrders);
            document.querySelector('.input-1').value = parseInt(document.querySelector('.input-1').value) + all + ' грн';
            all = 0;
        })
    }

    return {
        makingOrder: makingOrder,
        addingOrder: addingOrder,
        addition: addition
    }
}())

mechanism.makingOrder();
mechanism.addingOrder()
mechanism.addition();