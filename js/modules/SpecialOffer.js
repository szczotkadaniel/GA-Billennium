const basicOffer = document.getElementById("basicOffer");
const advanceOffer = document.getElementById("advanceOffer");
const fullOffer = document.getElementById("fullOffer");
basicOffer.addEventListener("click", chooseSupportOption);
advanceOffer.addEventListener("click", chooseSupportOption);
fullOffer.addEventListener("click", chooseSupportOption);

function chooseSupportOption(event){
    console.log(event.target.id);
    let offer = event.target.id;
    console.log(offer.split("Offer")[0]);
    dataLayer.push({
        "event": "purchase_support",
        "option": offer.split("Offer")[0]
    })
}