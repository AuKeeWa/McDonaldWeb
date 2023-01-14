//引入mock模块
import Mock from 'mockjs';

let id2 = {
    productId: 2,
    productMainImage:"/images/menu/鸡肉汉堡/板烧鸡腿堡套餐.png",
    productName: "板烧鸡腿堡套餐",
    productPrice: 33,
    productSelected: true,
    productStatus: 1,
    productStock:9999,
    productTotalPrice:33,
    quantity: 1
};
let id22 = {
    productId: 22,
    productMainImage:"/images/menu/炸鸡/麦辣鸡翅.png",
    productName: "麦辣鸡翅",
    productPrice: 13,
    productSelected: true,
    productStatus: 1,
    productStock:9999,
    productTotalPrice:13,
    quantity: 1
};
let id41 ={
    productId: 41,
    productMainImage:"/images/menu/500大卡套餐/无肉不欢套餐.png",
    productName: "无肉不欢套餐",
    productPrice: 36,
    productSelected: true,
    productStatus: 1,
    productStock:9999,
    productTotalPrice:36,
    quantity: 1
};
let id43 = {
    productId: 43,
    productMainImage:"/images/menu/小食甜品/奥利奥麦旋风.png",
    productName: "奥利奥麦旋风",
    productPrice: 13,
    productSelected: true,
    productStatus: 1,
    productStock:9999,
    productTotalPrice:13,
    quantity: 1
}
let id47 ={
    productId: 47,
    productMainImage:"/images/menu/小食甜品/薯条.png",
    productName: "薯条",
    productPrice: 9,
    productSelected: true,
    productStatus: 1,
    productStock:9999,
    productTotalPrice:9,
    quantity: 1
};
let id48 = {
    productId: 48,
    productMainImage:"/images/menu/小食甜品/香芋派.png",
    productName: "香芋派",
    productPrice: 8,
    productSelected: true,
    productStatus: 1,
    productStock:9999,
    productTotalPrice:8,
    quantity: 1
};

Mock.mock('api/user/login', {
    "status": 0,
    "data": {
      "answer":null,
      "createTime": 1479048325000,
      "email": "admin@51purse.com",
      "id": 8,
      "password":"",
      "phone": null,
      "question":null,
      "role": 0,
      "username": "麦当娜",
      "updateTime": 1479048325000
    }
})

let cartList = [];
let cartTPrice = 0;
let cartTQ = 0;
let selAll = false;

const renderCart = function(){
    let foodnum = 0;
    let checknum = 0;
    cartTPrice = 0;
    cartTQ = 0;
    cartList.forEach(food => {
        foodnum += 1;
        if(food.productSelected){
            cartTPrice += food.productTotalPrice;
            cartTQ += food.quantity;
            checknum += 1;
        }
    });
    if(foodnum == checknum){
        selAll = true;
    }
    else{
        selAll = false;
    }
}

const checkAll = function(type){
    cartList.forEach(food => {
        food.productSelected = !type;
    });
    selAll = !type;
    renderCart();
};



const existFood = function(food){
    if(cartList.includes(food)){
        food.productTotalPrice += food.productPrice;
        food.quantity +=1;
        renderCart();
        return true;
    }
    return false;
};

const addCart = function(id){ 
    if(id==2){
        if(existFood(id2))  return;
        cartList.push(id2);
    }
    else if(id==22){
        if(existFood(id22))  return;
        cartList.push(id22);
    }
    else if(id==41){
        if(existFood(id41))  return;
        cartList.push(id41);
    }
    else if(id==43){
        if(existFood(id43))  return;
        cartList.push(id43);
    }
    else if(id==47){
        if(existFood(id47))  return;
        cartList.push(id47);
    }
    else if(id==48){
        if(existFood(id48))  return;
        cartList.push(id48);
    }
    renderCart();
};

const change = function(food,qua,sel){
    let type = qua - food.quantity;
    if(type == 1){
        food.productTotalPrice += food.productPrice;
        food.quantity++;
    }
    else if(type == -1){
        food.productTotalPrice -= food.productPrice;
        food.quantity--;
    }
    food.productSelected = sel;
}
const updateCart = function(id,qua,sel){
    if(id==2){
        change(id2,qua,sel);
    }
    else if(id==22){
        change(id22,qua,sel);
    }
    else if(id==41){
        change(id41,qua,sel);
    }
    else if(id==43){
        change(id43,qua,sel);
    }
    else if(id==47){
        change(id47,qua,sel);
    }
    else if(id==48){
        change(id48,qua,sel);
    }
    renderCart();
}

const findFood = function(food){
    let index = -1;
    index = cartList.indexOf(food);
    if(index>-1){
        cartList.splice(index,1);
        return true;
    }
    return false;
}

const deleteFood = function(id){
    if(id==2){
        findFood(id2);
    }
    else if(id==22){
        findFood(id22);
    }
    else if(id==41){
        findFood(id41);
    }
    else if(id==43){
        findFood(id43);
    }
    else if(id==47){
        findFood(id47);
    }
    else if(id==48){
        findFood(id48);
    }
    renderCart();
}

Mock.mock('api/carts','post', function(params){
    addCart(JSON.parse(params.body).productId);
    return Mock.mock({
        "status":0,
        "data": {
            'cartProductVoList':cartList,
            'cartTotalPrice':cartTPrice,
            'cartTotalQuantity': cartTQ,
            'imageHost': "/public/images/menu/",
            'selectedAll': selAll
        }
    })
});

Mock.mock('api/carts', 'get', function(){ //输出数据
    return Mock.mock({
        "status": 0,
        "data": {
            'cartProductVoList': cartList,
            'cartTotalPrice': cartTPrice,
            'cartTotalQuantity': cartTQ,
            'imageHost': "/public/images/menu/",
            'selectedAll': selAll
        }
    })
})

Mock.mock('api/carts/update','post', function(params){ //输出数据
    let obj = JSON.parse(params.body);
    let id = obj.productId;
    let qua = obj.quantity;
    let sel = obj.selected;
    updateCart(id,qua,sel);
    return Mock.mock({
        "status": 0,
        "data": {
            'cartProductVoList': cartList,
            'cartTotalPrice': cartTPrice,
            'cartTotalQuantity': cartTQ,
            'imageHost': "/public/images/menu/",
            'selectedAll': selAll
        }
    })
})

Mock.mock('api/checkall','post', function(params){ //输出数据
    checkAll(JSON.parse(params.body).allchecked);
    return Mock.mock({
        "status": 0,
        "data": {
            'cartProductVoList': cartList,
            'cartTotalPrice': cartTPrice,
            'cartTotalQuantity': cartTQ,
            'imageHost': "/public/images/menu/",
            'selectedAll': selAll
        }
    })
})

Mock.mock('api/carts/delete','post', function(params){ //输出数据
    deleteFood(JSON.parse(params.body).id);
    return Mock.mock({
        "status": 0,
        "data": {
            'cartProductVoList': cartList,
            'cartTotalPrice': cartTPrice,
            'cartTotalQuantity': cartTQ,
            'imageHost': "/public/images/menu/",
            'selectedAll': selAll
        }
    })
})


let add1 = {
    'createTime': null,
    'id': 1,
    'receiverProvince':"广东省",
    'receiverCity': "珠海市",
    'receiverDistrict': "香洲区",
    'receiverAddress': "大学路中山大学(珠海校区)北门",
    'receiverName': "海区混子",
    'receiverMobile': "13710539833" ,
    'receiverZip':"000000",
    'updateTime': 1673421785000,
    'userId': 1
};

let add2 = {
    'createTime': null,
    'id': 2,
    'receiverProvince':"广东省",
    'receiverCity': "广州市",
    'receiverDistrict': "海珠区",
    'receiverAddress': "新港西路135号中山大学(南校区)南门",
    'receiverName': "南校小白",
    'receiverMobile': "13710539123" ,
    'receiverZip':"000001",
    'updateTime': 1673421785022,
    'userId': 2
};

let add3 = {
    'createTime': null,
    'id': 3,
    'receiverProvince':"广东省",
    'receiverCity': "广州市",
    'receiverDistrict': "番禺区",
    'receiverAddress': "大学城外环东路132号中山大学(东校区)正门",
    'receiverName': "东区大佬",
    'receiverMobile': "13864729123" ,
    'receiverZip':"000002",
    'updateTime': 1689321985022,
    'userId': 3
};

let addList = [add1,add2,add3];
let sendList = [];
let addtotal = 3;
let endRow = 3;

const addAdress = function(object){
    let obj = {
        'createTime': null,
        'id': addtotal+1,
        'receiverProvince':object.province,
        'receiverCity': object.city,
        'receiverDistrict': object.district,
        'receiverAddress': object.add,
        'receiverName': object.name,
        'receiverMobile': object.mobile ,
        'receiverZip':object.zip,
        'updateTime': 1689321985022+ Mock.Random.integer(10,1000),
        'userId': addtotal+1
    }
    addList.push(obj);
    addtotal+=1;
    endRow+=1;
}

const findAdd = function(id){
    for(let i=0;i<addList.length;i++){
        if(addList[i].id == id){
            return i;
        }
    }
    return -1;
}

const getAddress = function(id){
    let index = findAdd(id);
    if(index>-1){
        return addList[index];
    }
}

const editAddress = function(object){
    let index = findAdd(object.id);
    if(index == -1){
        console.log('该地址不存在!');
    }
    else{
        addList[index].receiverProvince = object.province;
        addList[index].receiverCity = object.city;
        addList[index].receiverDistrict = object.district;
        addList[index].receiverAddress = object.add;
        addList[index].receiverName = object.name;
        addList[index].receiverMobile = object.mobile;
        addList[index].receiverZip = object.zip;
    }

}

const delAddress = function(object){
    let index = findAdd(object.id);
    if(index == -1){
        console.log('该地址不存在!');
    }
    else{
        addList.splice(index,1);
    }
}

Mock.mock('api/shippings', 'get', function(){ //输出数据
    return Mock.mock({
        "status": 0,
        "data": {
            'endRow':endRow,
            'hasNextPage':false,
            'hasPreviousPage':false,
            'isFirstPage':true,
            'isLastPage':true,
            'list': addList,
            'navigateFirstPage':1,
            'navigateLastPage':1,
            'navigatePages':8,
            'navigatepageNums':[1],
            'nextPage': 0,
            'pageNum': 1,
            'pageSize': 10,
            'pages':1,
            'prePage':0,
            'size': addtotal,
            'startRow': 1,
            'total': addtotal,
        }
    })
})

Mock.mock('api/shippings/add', 'post', function({params}){ //输出数据
    addAdress(JSON.parse(params.body))
    return Mock.mock({
        "status": 0,
        "data": {
            'endRow':endRow,
            'hasNextPage':false,
            'hasPreviousPage':false,
            'isFirstPage':true,
            'isLastPage':true,
            'list': addList,
            'navigateFirstPage':1,
            'navigateLastPage':1,
            'navigatePages':8,
            'navigatepageNums':[1],
            'nextPage': 0,
            'pageNum': 1,
            'pageSize': 10,
            'pages':1,
            'prePage':0,
            'size': addtotal,
            'startRow': 1,
            'total': addtotal,
        }
    })
})

Mock.mock('api/shippings/edit', 'post', function(params){ //输出数据
    editAddress(JSON.parse(params.body));
    return Mock.mock({
        "status": 0,
        "data": {
            'endRow':endRow,
            'hasNextPage':false,
            'hasPreviousPage':false,
            'isFirstPage':true,
            'isLastPage':true,
            'list': addList,
            'navigateFirstPage':1,
            'navigateLastPage':1,
            'navigatePages':8,
            'navigatepageNums':[1],
            'nextPage': 0,
            'pageNum': 1,
            'pageSize': 10,
            'pages':1,
            'prePage':0,
            'size': addtotal,
            'startRow': 1,
            'total': addtotal,
        }
    })
})

Mock.mock('api/shippings/delete', 'post', function(params){ //输出数据
    delAddress(JSON.parse(params.body));
    return Mock.mock({
        "status": 0,
        "data": {
            'endRow':endRow,
            'hasNextPage':false,
            'hasPreviousPage':false,
            'isFirstPage':true,
            'isLastPage':true,
            'list': addList,
            'navigateFirstPage':1,
            'navigateLastPage':1,
            'navigatePages':8,
            'navigatepageNums':[1],
            'nextPage': 0,
            'pageNum': 1,
            'pageSize': 10,
            'pages':1,
            'prePage':0,
            'size': addtotal,
            'startRow': 1,
            'total': addtotal,
        }
    })
})

Mock.mock('api/orders/send', 'post', function(params){ //输出数据
    // console.log('send:');
    // console.log(JSON.parse(params.body));
    sendList = JSON.parse(params.body).orderList;
    return Mock.mock({
        "status": 0,
        "data": {
            'result':'success',
            'sendList':sendList
        }
    })
})
let receiver = {};

Mock.mock('api/orders', 'post', function(params){ //输出数据
    console.log('order:');
    console.log(JSON.parse(params.body));
    let sid = JSON.parse(params.body).shippingId;
    sendList = JSON.parse(params.body).orderList;
    receiver = getAddress(sid);
    return Mock.mock({
        "status": 0,
        "data": {
            'closeTime': "",
            'createTime': "",
            'imageHost': null,
            'orderItemVoList':sendList,
            'orderNo|1000000000000-2000000000000':1000000000001,
            'payment':cartTPrice+9,
            'paymentTime':"",
            'paymentType':1,
            'paymentTypeDesc':"在线支付",
            'postage':0,
            'receiverName': receiver.receiverName,
            'sendTime': "",
            'shippingId':sid,
            'shippingVo': receiver,
            'status':10,
            'statusDesc':"未支付"
        }
    })
})

Mock.mock('api/orders/get', 'post', function(params){ //输出数据
    console.log('getOrder:');
    console.log(sendList);
    // console.log(params);
    // console.log(JSON.parse(params.body));
    // let oid = 0;
    // let sid = 0;
    let oid = JSON.parse(params.body).orderid;
    let sid = JSON.parse(params.body).shipid;
    return Mock.mock({
        "status": 0,
        "data": {
            'orderNo': oid,
            'payment': cartTPrice+9 ,
            'paymentType': 1,
            'paymentTypeDesc': "在线支付",
            'postage': 0,
            'status':10,
            'statusDesc':"未支付",
            'paymentTime':"",
            'sendTime':"",
            'endTime':"",
            'createTime':"",
            'closeTime':"",
            'imageHost': null,
            'orderItemVoList':sendList,
            'shippingId':sid,
            'shippingVo': receiver
        }
    })
})

// Mock.mock('api/pay', 'post', function(params){ //输出数据
//     console.log('pay:');
//     console.log(JSON.parse(params.body));
//     return Mock.mock({
//         "status": 0,
//         "data": {
//             'closeTime': "",
//             'createTime': "",
//             'imageHost': null,
//             'orderItemVoList':sendList,
//             'orderNo|1000000000000-2000000000000':1000000000001,
//             'payment':cartTPrice+9,
//             'paymentTime':"",
//             'paymentType':1,
//             'paymentTypeDesc':"在线支付",
//             'postage':0,
//             'receiverName': receiver.receiverName,
//             'sendTime': "",
//             'shippingId':sid,
//             'shippingVo': receiver,
//             'status':10,
//             'statusDesc':"未支付"
//         }
//     })
// })