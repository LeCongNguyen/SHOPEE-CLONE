class menuItem {
    constructor(img, text) {
        this.img = img;
        this.text = text;
    }
}

let menuItems = [
    new menuItem("https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn", "Thời Trang Nam"),
    new menuItem("https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn", "Điện Thoại & Phụ Kiện"),
    new menuItem("https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn", "Thiết Bị Điện Tử"),
    new menuItem("https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn", "Máy Tính & Laptop"),
    new menuItem("https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn", "Máy Ảnh & Máy Quay Phim"),
    new menuItem("https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn", "Đồng Hồ"),
    new menuItem("https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn", "Giày Dép Nam"),
    new menuItem("https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn", "thiết bị điện gia dụng"),
    new menuItem("https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn", "Thể thao & du lịch"),
    new menuItem("https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn", "ô tô & xe máy & xe đạp"),
    new menuItem("https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn", "thời trang nữ"),
    new menuItem("https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn", "mẹ & bé"),
    new menuItem("https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn", "nhà cửa & đời sống"),
    new menuItem("https://cf.shopee.vn/file/ef1f336ecc6f97b790d5aae9916dcb72_tn", "sắc đẹp"),
    new menuItem("https://cf.shopee.vn/file/49119e891a44fa135f5f6f5fd4cfc747_tn", "sức khoẻ"),
    new menuItem("https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn", "giày dép nữ"),
    new menuItem("https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn", "túi ví nữ"),
    new menuItem("https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn", "phụ kiện & trang sức nữ"),
    new menuItem("https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn", "bách hoá online"),
    new menuItem("https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn", "nhà sách online"),
    new menuItem("https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn", "Balo & Túi ví nam"),
    new menuItem("https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn", "Đồ chơi"),
    new menuItem("https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn", "chăm sóc thú cưng"),
    new menuItem("https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn", "thời trang trẻ em"),
    new menuItem("https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn", "giặt giũ & chăm sóc nhà cửa"),
    new menuItem("https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn", "voucher & dịch vụ"),
]

localStorage.setItem("menuItems", JSON.stringify(menuItems));

//Show menu
function showHomeMenu() {
    let menuContainer1 = document.querySelector(".menu-container-1");
    let menuContainer2 = document.querySelector(".menu-container-2");
    for(let i = 0; i < 20; ++i) {
        let newItem = document.createElement("div");
        newItem.classList.add("menu-item");
        newItem.innerHTML = `<img class="menu-item__img" src="${menuItems[i].img}" alt="">
        <span class="menu-item__text">${menuItems[i].text}</span>`;
        menuContainer1.appendChild(newItem);
    }
    for(let i = 20; i < menuItems.length; ++i) {
        let newItem = document.createElement("div");
        newItem.classList.add("menu-item");
        newItem.innerHTML = `<img class="menu-item__img" src="${menuItems[i].img}" alt="">
        <span class="menu-item__text">${menuItems[i].text}</span>`;
        menuContainer2.appendChild(newItem);
    }
}


/*-------------------------------------------------------------------------------------------------*/

showHomeMenu();
