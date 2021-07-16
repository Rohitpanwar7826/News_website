window.onscroll = function () { scrollup() }
let scroll_btn = document.getElementById("scollbtn");
let scrollup = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scroll_btn.style.display = "block";
    }
    else {
        scroll_btn.style.display = "";
    }
}
localStorage.clear();
scroll_btn.addEventListener('click', myfn = () => {
    window.scroll({
        top: 5,
        behavior: 'smooth'
    })
});

const open_menu = (x) => {
    var y = document.getElementById("menu_bar");
    if (y.style.visibility == "visible") {
        y.style.visibility = "hidden";
    }
    else {
        y.style.visibility = "visible";
    }

}

const menu_bar = () => {
    var y = document.getElementById("mobile-menu");
    var open = document.getElementById("open");
    var close = document.getElementById("close");
    if (y.className == "visible") {
        y.className = "hidden";
        open.className.baseVal = "block h-6 w-6";
        close.className.baseVal = "hidden h-6 w-6";

    }
    else {
        open.className.baseVal = "hidden h-6 w-6 text-red-800";
        close.className.baseVal = "block h-6 w-6 text-red-800";
        y.className = "visible";
    }
}



let news_set = document.getElementById('news_set');
let one_news = document.getElementById("one_news");
const countrys = document.querySelector('#dropp');
const source = document.querySelector('#drop');

urls_collect = {
    url: 'https://newsapi.org/v2/top-headlines?country=',
    key: '&apiKey=8e2a531577c34455bd105a1208fee4ac',
    urls_complete: `https://newsapi.org/v2/top-headlines?country=in&apiKey=8e2a531577c34455bd105a1208fee4ac`
}

function myFunction() {
    var element = document.body;
    let nav = document.getElementById("mynav");
    element.classList.toggle("dark-mode");
    var btn = document.getElementById("btn_dark");
    if (element.className == 'dark-mode') {
        btn.innerHTML = "Light Mode";
        nav.style.backgroundColor = "black";
    }
    else {
        btn.innerHTML = "Dark Mode";
        nav.style.backgroundColor = "gray";
    }
}

let load = (fild, ...args) => {

    switch (fild) {
        case 'country': {
            let url = `${urls_collect.url}${args[0]}&category=${args[1]}${urls_collect.key}`
            fetch(url)
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                    else {
                        throw error;
                    }
                }).then(function (result) {
                    show_data(result['articles'])
                }).catch(function (error) {
                    console.log("Wrong")
                });
            break;
        }
        case 'source': {
            let url = `${urls_collect.url}${args[0]}&category=${args[1]}${urls_collect.key}`
            fetch(url)
                .then(function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                    else {
                        throw error;
                    }
                }).then(function (result) {
                    show_data(result['articles'], args[0])
                }).catch(function (error) {
                    console.log("wrong")
                });
            break;
        }
    }
}
const show_data = (element) => {
    let newshtml = "";

    for (var i = 0; i < element.length; i++) {
        if (element[i]['description'] == null) {
            continue;
        }

        else {
            let href_link = element[i]['urlToImage'];
            let news = `<div data-aos="fade-right" class="shadow2 lg:w-1/3 md:w-1/2 p-4 w-full break-word border-2 border-gray-400 rohit" id="img_space${i}">
        <a id="web" href="${href_link}" target="_blank" class="block relative h-58 rounded overflow-hidden">
            <img alt="Image" class="object-cover object-center w-80 h-80 block rohit" src="${element[i]['urlToImage']}">
        </a>
        <h3>${i + 1}</h3>

        <div class="mt-4">
            <h3 class="text-xs mt-5 tracking-widest title-font mb-1">${element[i]['source']['name']}</</h3>
            <h2 id="read" class="title-font mt-5 overflow-clip whitespace-wrap overflow-hidden text-lg font-medium"id="title1">
            ${element[i]['title']}
            </h2>
            <Button id="${i}" onclick="data_get(this.id)"  class="mt-10" >Read more</Button>
        </div>
    </div>
    `;

            newshtml += news;
        }


    }
    news_set.innerHTML = newshtml;
}
window.load = load('country', countrys.value, source.value)

countrys.onchange = function (event) {
    load('country', countrys.value, source.value)
    up()
}
source.onchange = function (event) {
    load('country', countrys.value, source.value)
    up()
}
const up = () => {
    window.scroll({
        top: 470,
        behavior: 'smooth'
    });
}
// const data_get = (index = -1, ...args) => {
//     var url = `${urls_collect.url}${countrys.value}&category=${source.value}${urls_collect.key}`;
//     if (index == -1) {

//         let hide = document.getElementById("hide_news");
//         if (hide != null) {

//             hide.style.display = "none";
//         }
//     }
//     else {
//         fetch(url)
//             .then(function (response) {
//                 if (response.ok) {
//                     return response.json();
//                 }
//                 else {
//                     throw error;
//                 }
//             }).then(function (result) {
//                 let element = result['articles']
//                 let hide = document.getElementById("hide_news");
//                 if (hide != null) {
//                     hide.style.display = "";
//                 }
//                 let ones_news = `
// <div data-aos="zoom-in"  data-aos-delay="600" data-aos-duration="1000"  data-aos-once="false" data-aos-anchor-placement="top-center" id="hide_news" class="shadow lg:w-5/6 md:border-0 lg:border-t-0 lg:border-r-0 lg:border-l-0 mx-auto lg:border-2 lg:border-red-900">
//     <div class="rounded-lg h-64 overflow-hidden">
//         <img alt="content" class="object-cover object-center h-full w-full"
//             src="${element[index]['urlToImage']}">
// </div>
//         <div class="flex flex-col sm:flex-row mt-10">
//             <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
//                 <div
//                     class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
//                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
//                         stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
//                         <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
//                         <circle cx="12" cy="7" r="4"></circle>
//                     </svg>
//                 </div>
//                 <div class="flex flex-col items-center text-center justify-center">
//                     <h2 class="font-medium title-font mt-4 text-gray-950 text-lg">${element[index]['source']['name']}</h2>
//                     <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
//                     <p class="text-base ml-9 text-gray-950">${element[index]['title']}.</p>
//                 </div>
//             </div>
//             <div
//                 class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
//                 <p class="leading-relaxed text-gray-950 text-lg mb-4 break-normal mr-4">${element[index]['description']}.</p>
//                 <a class="text-indigo-900 inline-flex items-center" href="${element[index]['url']}" target="_blank">Learn More
//                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
//                         stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
//                         <path d="M5 12h14M12 5l7 7-7 7"></path>
//                     </svg>
//                 </a>
//             </div>
//         </div>
//     </div>`
//                 one_news.innerHTML = ones_news;
//                 up()
//             }).catch(function (error) {
//                 alert("Some is wrong..!")
//             });


//     }
// }
