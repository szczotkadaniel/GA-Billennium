import { modalLogin, modalRegister } from './modules/ModalLoginRegister.js';

modalLogin;
modalRegister;



function logoClicked(size){
    console.log("CLICKED: " + size);
    dataLayer.push({
        "event": "click",
        "logo": size
    })
}

function changePage(pageName){
    console.log(pageName);
    dataLayer.push({
        "event":"click",
        "page name": pageName
    })
}

function logUser(){
    console.log("Login clicked");
    dataLayer.push({
        "event":"click",
        "login": "userID"
    })
}

function registerUser(){
    console.log("Register clicked");
    dataLayer.push({
        "event":"click",
        "register": "user name"
    })
}

function clickSearchBar(){
    console.log("Search bar clicked");
    dataLayer.push({
        "event":"click",
        "search status": "start"
    })
}

function searchBtnClicked(){
    let search = document.getElementById("searchbar");
    let searchWord = search.value;
    console.log(searchWord);
    console.log("Search button clicked");
    dataLayer.push({
        "event":"click",
        "search word": searchWord,
        "search status": "end"
    })
}

