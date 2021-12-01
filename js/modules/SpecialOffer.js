const basicOffer = document.getElementById("basicOffer");
const advanceOffer = document.getElementById("advanceOffer");
const fullOffer = document.getElementById("fullOffer");
basicOffer.addEventListener("click", chooseSupportOption);
advanceOffer.addEventListener("click", chooseSupportOption);
fullOffer.addEventListener("click", chooseSupportOption);

function chooseSupportOption(event){
    console.log(event.target.id);
    let offer = event.target.id;
    let optionOffer = offer.split("Offer")[0]
    console.log(optionOffer);
    dataLayer.push({
        "event": "purchase_support",
        "option": optionOffer
    })
}