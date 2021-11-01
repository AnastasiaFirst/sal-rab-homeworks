function sendRequest(name, phone, address, goods, sum) {
    let data = {
        client: name + " " + phone,
        order: {
            address,
            sum
        },
        goods: [ ]
    }
        
    let countOfGoods = goods.length;

    for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push({title: goods[i].title, count: goods[i].count});
    }
 
    data.order.sum = sum;
    data.order.address = `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв ${address.flat}`;
 
    let jsonData = JSON.stringify({data});

    return jsonData;
}