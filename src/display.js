// Get all the dashes in the store and display them

// import { DataStore, Beg } from "./test";
body = document.getElementById("root");

DataStore.forEach(user => {
    user.dash.map(dash => {
        card = document.createElement("div");
        card.className = "card";
        
        cardImage = document.createElement("div");
        cardImage.className = "card__image";
        cardImage.style.backgroundImage = `url(${dash.image})`;
        
        begButton = document.createElement("button");
        begButton.type = "button";
        begButton.textContent = "BEG";
        begButton.value = `${dash.id}`;
        begButton.className = "btn__beg";

        begButton.onclick = () => {
            window.open(`beg.html?id=${dash.id}`, "_self");
            console.log(begButton.value);
            // sessionStorage.setItem()

            // I need the button to give me the dash details
        }

        card.appendChild(cardImage).append(begButton);

        body.appendChild(card)
    })
})