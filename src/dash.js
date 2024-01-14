const dashForm = document.querySelector(".dash__form");
const dashImageInput = document.querySelector(".dash__image--input");
const dashImageContainer = document.querySelector(".dash__input-container");

// ? Display selected file image as a card
dashImageInput.onchange = () => {
    if (dashImageInput.files) {
        for (let i = 0; i < dashImageInput.files.length; i++) {
            console.log(dashImageInput.files[i].name)

            createImage(dashImageInput.files[i].name, dashImageContainer);
        }
    }
}

const storeLoad = storeManager.loadStore('anonymous');

const btnDash =  document.querySelector(".btn__submit--dash");

btnDash.onclick = () => {
    dashName = document.querySelector(".dash__name").value;
    dashCategory = document.querySelector(".dash__category").value;
    dashImage = document.querySelector(".dash__name")
    
    if (true) {
        newDash = new Dash(dashImage, dashName, dashCategory, new Date().toLocaleDateString(), Date.now());

        dashManager.updateUser('anonymous', newDash);
        // console.log(store);
        dashForm.submit();
    
        // ? Get the user's account and update the dash property

    }
}
