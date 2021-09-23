const mechanism = (function () {
    const uah = 'грн.';
    const piece = 'шт.';
    let currentOrder;
    let selectedGood;
    let allOrders = [];
    const goods = [];
    const beer = {
        name: 'Пиво',
        price: 27,
        quantity: 100,
        inputName: '.input-2',
        orderedQuantity: 0
    };

    const wine = {
        name: 'Вино',
        price: 300,
        quantity: 50,
        inputName: '.input-3',
        orderedQuantity: 0
    };

    const pepsi = {
        name: 'Пепсі',
        price: 12,
        quantity: 80,
        inputName: '.input-4',
        orderedQuantity: 0
    };

    const shveps = {
        name: 'Швепс',
        price: 31,
        quantity: 69,
        inputName: '.input-5',
        orderedQuantity: 0
    }

    goods.push(beer);
    goods.push(wine);
    goods.push(pepsi);
    goods.push(shveps);

    class order {
        constructor(quantityOfDrinks, typeOfDrink) {
            this.quantityOfDrinks = quantityOfDrinks;
            this.typeOfDrink = typeOfDrink;
        }
    }

    function makingOrder() {
        document.querySelector('.btn1').addEventListener('click', () => {
            for (let i = 0; i < document.querySelector('.wrapRadio').children.length; i++) {
                if (document.querySelector('.wrapRadio').children[i].checked === true) {
                    selectedGood = document.querySelector('.wrapRadio').children[i].value;
                }
            }
            currentOrder = new order(+document.querySelector('.quantity-of-drinks').value, selectedGood);
        })
    }

    function addingOrder() {
        document.querySelector('.btn1').addEventListener('click', () => {
            for (let i = 0; i < goods.length; i++) {
                if (currentOrder.typeOfDrink === goods[i].name) {
                    if (currentOrder.quantityOfDrinks > (goods[i].quantity - goods[i].orderedQuantity)) {
                        document.querySelector('.alelrt-message').style.display = 'block';
                        document.querySelector('.type').innerHTML = goods[i].name;
                        document.querySelector('.quantityOfDrink').innerHTML = document.querySelector(goods[i].inputName).value;
                        allOrders = [];
                        goods[i].orderedQuantity = 0;
                    } else {
                        goods[i].orderedQuantity += currentOrder.quantityOfDrinks;
                        allOrders.push(currentOrder);                     
                    }
                }
            }

            if (currentOrder.typeOfDrink !== undefined && currentOrder.quantityOfDrinks !== '') {
                document.querySelector('.textArea1').insertAdjacentHTML('beforeend', `${currentOrder.typeOfDrink}: ${currentOrder.quantityOfDrinks} ${piece} <br>`);
            } else {
                allOrders.pop();

            }

            document.querySelector('.quantity-of-drinks').value = '';
            console.log(allOrders);
        })
    }

    function addition() {
        let orderPrice = 0;
        document.querySelector('.btn2').addEventListener('click', () => {
            document.querySelector('.content2').textContent = '';
            for (let i = 0; i < allOrders.length; i++) {
                document.querySelector('.content2').insertAdjacentHTML('beforeend', `${allOrders[i].typeOfDrink}: ${allOrders[i].quantityOfDrinks} ${piece} <br>`);
            }
            orderPrice = 0;
            document.querySelector('.balance').style.display = 'block';
            // for (let i = 0; i < allOrders.length; i++) {
            //     if (allOrders[i].typeOfDrink === beer.name) {
            //         orderPrice += beer.price * allOrders[i].quantityOfDrinks;
            //         console.log(orderPrice);
            //     } else if (allOrders[i].typeOfDrink === wine.name) {
            //         orderPrice += wine.price * allOrders[i].quantityOfDrinks;
            //         console.log(orderPrice);
            //     } else if (allOrders[i].typeOfDrink === pepsi.name) {
            //         orderPrice += pepsi.price * allOrders[i].quantityOfDrinks;
            //         console.log(orderPrice);
            //     }
            //     document.querySelector('.price').innerHTML = `${orderPrice} ${uah}`;
            //     console.log('quantityOfDrinks', allOrders[i].quantityOfDrinks);
            //     console.log('typeOfDrink', allOrders[i].typeOfDrink);
            // }

            for (let i = 0; i < goods.length; i++) {
            orderPrice += goods[i].price * goods[i].orderedQuantity;
            document.querySelector('.price').innerHTML = `${orderPrice} ${uah}`;
            }

            for (let i = 0; i < goods.length; i++) {
                document.querySelector(goods[i].inputName).value = `${parseInt(document.querySelector(goods[i].inputName).value) - goods[i].orderedQuantity} ${piece}`;
            }

            document.querySelector('.quantity-of-drinks').value = '';
            document.querySelector('.textArea1').innerHTML = '';
            allOrders = [];
            document.querySelector('.input-1').value = `${parseInt(document.querySelector('.input-1').value) + orderPrice} ${uah}`;
            orderPrice = 0;
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