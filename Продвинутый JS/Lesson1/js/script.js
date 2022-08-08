const goods = [
    { image: 'https://avatars.mds.yandex.net/get-mpic/5204767/img_id2344845672928735290.jpeg/x248_trim', title: 'Motobike', price: 150 },
    { image: 'https://avatars.mds.yandex.net/get-mpic/5360356/img_id6907483225986660995.jpeg/x248_trim', title: 'Monster', price: 50 },
    { image: 'https://avatars.mds.yandex.net/get-mpic/5277279/img_id2084853453747532323.jpeg/x248_trim', title: 'Mandalorece', price: 350 },
    { image: 'https://avatars.mds.yandex.net/get-mpic/5222168/img_id5521246056186485713.jpeg/x248_trim', title: 'Mustang', price: 250 },
];

const renderGoodsItem = (image,title = 'Товар не опознан', price = 0) => {
    return `<a href="#" class="goods-item">
                <div class="goods-img">
                    <img src="${image}" alt="Image">
                </div>
                <h3 class="goods-title">${title}</h3>
                <p class="goods-price">${price}$</p>
                <button class="goods-add-to-cart">Add to cart</button>
            </a>`;
};

const renderGoodsList = (list) => {
    for(var i = 0; i < list.length; i++) {
       let goodsList = renderGoodsItem(list[i].image, list[i].title, list[i].price);
       document.querySelector('.goods-list').innerHTML += goodsList;
    }
}

renderGoodsList(goods);
    