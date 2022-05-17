//BẢNG ĐIỀU KHIỂN BANNER
/*===========================================================================================*/
//Mảng chứa ảnh banner lớn
let bigBannerImg = [
    "https://cf.shopee.vn/file/8da7a277ab0b311b9152070ac7e2c217_xxhdpi",
    "https://cf.shopee.vn/file/b2dc315a076a5453d8871d39e7436855_xxhdpi",
    "https://cf.shopee.vn/file/06b8bf6635e0abb4422c35bfe342d48a_xxhdpi",
    "https://cf.shopee.vn/file/558d729cbcc9b6038ffabf8e479ef77c_xxhdpi",
    "https://cf.shopee.vn/file/777ec1959a40e4715aa1983dfdd8f080_xxhdpi",
    "https://cf.shopee.vn/file/e38199bf804d561a33e9211a41e7993d_xxhdpi",
    "https://cf.shopee.vn/file/858ec951d74cee5c394bfec37c3982a0_xxhdpi"
]

//Thời gian chuyển đổi ảnh tự động
let timeToChange = 6;

//Ảnh banner nhỏ trên
let upperSmallBanner = document.querySelector(".small-banner img:first-child");
upperSmallBanner.src = "https://cf.shopee.vn/file/68760af8cbe336a87ce07b027bd91ffc_xhdpi";

//Ảnh banner nhỏ dưới
let underSmallBanner = document.querySelector(".small-banner img:nth-child(2)");
underSmallBanner.src = "https://cf.shopee.vn/file/e25d632afedc1340840fc5cd62b104d7_xhdpi";
/*===========================================================================================*/



//Lưu mảng chứa ảnh vào localStorage
localStorage.setItem("bigBannerImg", JSON.stringify(bigBannerImg));

//Tạo số lượng dot dựa vào số lượng ảnh
let imgQuantity = JSON.parse(localStorage.getItem("bigBannerImg")).length;
// console.log(imgQuantity);
let dotList = document.querySelector(".big-banner .dot-list");
// console.log(dotList);
for(let i = 0; i < imgQuantity; ++i) {
    let newDot = document.createElement("div");
    newDot.classList.add("dot");
    dotList.appendChild(newDot);
}

//Mảng chứa banner dot
let bannerDot = document.querySelectorAll(".big-banner .dot");
// console.log(bannerDot);

//Ảnh đầu tiên
let bannerImg = document.querySelector(".big-banner img");
// bannerImg.src = bigBannerImg[0];
// bannerDot[0].style = "background-color: #ee4d2d;";

//Dot index
let dotIndex = 0;

//previous btn click
function previousImg() {
    if(dotIndex == 0) {
        dotIndex = bannerDot.length - 1;
        bannerImg.src = bigBannerImg[dotIndex];
        bannerDot[dotIndex].style = "background-color: #ee4d2d;";
        bannerDot[0].style = "background-color: none;";
    }
    else {
        dotIndex -= 1;
        bannerImg.src = bigBannerImg[dotIndex];
        bannerDot[dotIndex].style = "background-color: #ee4d2d;";
        bannerDot[dotIndex + 1].style = "background-color: none;"
    }
    console.log(dotIndex);
}

//next btn click
function nextImg() {
    if(dotIndex == bannerDot.length - 1) {
        dotIndex = 0;
        bannerImg.src = bigBannerImg[dotIndex];
        bannerDot[dotIndex].style = "background-color: #ee4d2d;";
        bannerDot[bannerDot.length - 1].style = "background-color: none;";
    }
    else {
        dotIndex += 1;
        bannerImg.src = bigBannerImg[dotIndex];
        bannerDot[dotIndex].style = "background-color: #ee4d2d;";
        bannerDot[dotIndex - 1].style = "background-color: none;"
    }
    console.log(dotIndex);
}

//Auto change banner img
let y;
function autoChangeImg(t) {    
    let prm = new Promise((resolve) => {
        bannerImg.src = bigBannerImg[dotIndex];
        bannerDot[dotIndex].style = "background-color: #ee4d2d;";
        console.log(dotIndex);
        resolve();
    })
    prm.then(() => {
        y = setInterval(() => {
            if(dotIndex == bannerDot.length - 1) {
                dotIndex = 0;
                bannerImg.src = bigBannerImg[dotIndex];
                bannerImg.style = "animation: bannerChange 2s linear;";
                bannerDot[dotIndex].style = "background-color: #ee4d2d;";
                bannerDot[bannerDot.length - 1].style = "background-color: none;";
                setTimeout(() => {           //Thời gian animation
                    bannerImg.style = "";
                }, 2000);
            }
            else {
                dotIndex += 1;
                bannerImg.src = bigBannerImg[dotIndex];
                bannerImg.style = "animation: bannerChange 2s linear;";
                bannerDot[dotIndex].style = "background-color: #ee4d2d;";
                bannerDot[dotIndex - 1].style = "background-color: none;";
                setTimeout(() => {           //Thời gian animation
                    bannerImg.style = "";
                }, 2000);
            }
            console.log(dotIndex);
        }, t * 1000);
    })     
}




/*-----------------------------------------------------------------------*/
autoChangeImg(timeToChange);

document.querySelector(".previous-btn").addEventListener("click", () => {
    clearInterval(y);
    previousImg();
    autoChangeImg(timeToChange);
})

document.querySelector(".next-btn").addEventListener("click", () => {
    clearInterval(y);
    nextImg();
    autoChangeImg(timeToChange);
})































/*-----------------------------------------------------------------------------------------------------------*/

// //Chuyển banner tự động
// let startImgIndex = 0;
// let y;
// function autoChangeBanner(sii, t) {      //(sii - start img index - Hình ảnh bắt đầu) (t - time - thời gian giữa mỗi lần chuyển đổi ảnh)
//     let x = new Promise ((resolve) => {
//         let imgContainer =  document.querySelector(".big-banner img");
//         imgContainer.src = bigBannerImg[sii];
//         bannerDot[sii].style = "background-color: #ee4d2d;";
//         resolve(imgContainer);
//     })
//     x.then((imgContainer) => {
//         startImgIndex = sii - 1;
//         console.log("first", startImgIndex);
//         y = setInterval(() => {
//             if(startImgIndex != -1) {
//                 bannerDot[startImgIndex].style = "background-color: none;";
//             }
//             else {
//                 bannerDot[bannerDot.length - 1].style = "background-color: none;";
//             }
//             if(startImgIndex == bigBannerImg.length - 1) {
//                 startImgIndex = -1;
//             }
//             ++startImgIndex;
//             imgContainer.src = bigBannerImg[startImgIndex];
//             bannerDot[startImgIndex].style = "background-color: #ee4d2d;";
//             console.log(startImgIndex);
//         }, t * 1000)
//     })
// }

// //Kiểm tra xem trong thời gian t previous/next btn có được nhấn nữa không
// let w;
// function isPreBtnClicked(t) {
//     let z = startImgIndex;
//     let check = new Promise ((resolve) => {
//         w = setTimeout(() => {
//             resolve();
//         }, t * 1000);
//     })
//     check.then(() => {
//         if(startImgIndex == z) {
//             console.log("true");
//             autoChangeBanner(startImgIndex, timeToChange);
//         }
//     })
// }

// //Chuyển banner khi nhấn previous btn
// function preChange() {
//     clearInterval(y);            //Tắt tự động chuyển
//     clearTimeout(w);             //Tắt kiểm tra nhấn phím sinh ra ở lần click trước
//     bannerDot[startImgIndex].style = "background-color: none;";
//     if(startImgIndex == 0) {
//         startImgIndex = bannerDot.length - 1;
//     }
//     else {
//         startImgIndex -= 1;
//     }
//     console.log(startImgIndex);
//     let imgContainer =  document.querySelector(".big-banner img");
//     imgContainer.src = bigBannerImg[startImgIndex];
//     bannerDot[startImgIndex].style = "background-color: #ee4d2d;";
//     isPreBtnClicked(timeToChange);   //1 - 1s - phải bằng với giá trị truyền cho start = autoChangeBanner(x, 1)
// }

// //Chuyển banner khi nhấn next btn
// function nextChange() {
//     clearInterval(y);
//     clearTimeout(w);
//     bannerDot[startImgIndex].style = "background-color: none;";
//     if(startImgIndex == bannerDot.length - 1) {
//         startImgIndex = 0;
//     }
//     else {
//         startImgIndex += 1;
//     }
//     console.log(startImgIndex);
//     let imgContainer =  document.querySelector(".big-banner img");
//     imgContainer.src = bigBannerImg[startImgIndex];
//     bannerDot[startImgIndex].style = "background-color: #ee4d2d;";
//     isPreBtnClicked(timeToChange);
// }






/*--------------------------------------------------------------------*/

// let start = autoChangeBanner(startImgIndex, timeToChange);     //3 - ảnh bắt đầu, 1 - thời gian chuyển là 1s

// document.querySelector(".previous-btn").addEventListener("click", () => {
//     preChange();
// })

// document.querySelector(".next-btn").addEventListener("click", () => {
//     nextChange();
// })

