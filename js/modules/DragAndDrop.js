let currentLvl = 1;
let draggedElem = null;
const tigerVirtues = ["Trust", "Innovation", "Growth", "Energy", "Responsibility"];

window.onload = () => {
    const grayImagesContainer = document.querySelectorAll(".tiger-gray-item img")

    for (let i = 0; i < grayImagesContainer.length; i++) {
        grayImagesContainer[i].addEventListener("dragover", dragOver);
        grayImagesContainer[i].addEventListener("dragleave", dragLeave);
        grayImagesContainer[i].addEventListener("dragend", dragEnd);
        grayImagesContainer[i].addEventListener("drop", drop);
    }

    const body = document.querySelector(".tiger-items-container");
    body.innerHTML = "";

    const templateBox = document.getElementById("tiger-item-row");
    const template = templateBox.content;

    const randomNum = [1,2,3,4,5];      //random(5)
    randomNum.forEach(elem => {
        const row = template.cloneNode(true);
        const img = row.querySelector(".tiger-item-image");

        img.src = `./media/TIGER/${elem}.svg`;

        img.id = elem;

        img.addEventListener("dragstart", dragStart);
        img.addEventListener("dragend", dragEnd);
        body.appendChild(row);
    });

}

function dragStart(event) {
    const element = event.target;
    const id = event.target.id;

    console.log(`Dragged virtue: ${tigerVirtues[id-1]}`)
    dataLayer.push({
        "event": "drag",
        "draggedVirtue": tigerVirtues[id-1]
    });

    draggedElem = element;
    event.dataTransfer.setData('text/plain', id);
    setTimeout(() => {
        element.classList.add('hide');
    }, 0);
}

function dragEnd(event) {
    const element = event.target;
    if (element.id != currentLvl - 1) {
        element.classList.remove('hide');
    }

    if (currentLvl == 6) {

        dataLayer.push({
            "event": "showTiger",
            "isTiger": "sawTiger"
        });

        const tigerContainer = document.querySelector(".tiger-icon-container");
        tigerContainer.classList.add("tiger-icon-container-visible");
    }
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.preventDefault();
    const sourceId = draggedElem.id;
    const targetId = e.target.id;
    const targetImg = document.getElementById(targetId);
    const sourceImg = document.getElementById(sourceId);

    const arrowsContainer = document.getElementById(`${sourceId}-container-arrows`);

    console.log(`Dropped virtue: ${tigerVirtues[(targetId.split("-")[0])-1]}`)
    dataLayer.push({
        "event": "drop",
        "droppedVirtueArea": tigerVirtues[(targetId.split("-")[0])-1]
    });

    if (sourceId == targetId.split("-")[0] && targetId.split("-")[0] == currentLvl) {
        currentLvl += 1;

        const child = arrowsContainer != null ? arrowsContainer.children : [];

        for (let i = 0; i < child.length; i += 1) {
            child[i].classList.add("arrow-opacity-1")
        }
        targetImg.src = sourceImg.src;

        const draggedElemContainer = draggedElem.parentNode;
        draggedElemContainer.remove();
    }
    e.target.classList.remove('drag-over');
}

function random(num) {
    const arr = [];

    while (arr.length < num) {
        var r = Math.floor(Math.random() * num) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
}

