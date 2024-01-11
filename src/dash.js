const dashForm = document.querySelector(".dash__form");
const dashImageInput = document.querySelector(".dash__image--input");
const dashImageContainer = document.querySelector(".dash__input-container");

dashImageInput.onchange = () => {
    if (dashImageInput.files) {
        for (let i = 0; i < dashImageInput.files.length; i++) {
            console.log(dashImageInput.files[i].name)

            createImage(dashImageInput.files[i].name, dashImageContainer);
        }
    }
}


const btnDash =  document.querySelector(".btn__submit--dash");

btnDash.onclick = () => {
    dashName = document.querySelector(".dash__name").value;
    dashCategory = document.querySelector(".dash__category").value;
    dashImage = document.querySelector(".dash__name")
    
    if (dashName && dashCategory) {
        newDash = new Dash(dashImage, dashName, dashCategory, new Date().toLocaleDateString(), Date.now());
    
        // ? Get the user's account and update the dash property
        parsedStore = JSON.parse(currentUser.user);
        parsedStore.dash.push(newDash);
        currentUser.setItem("user", JSON.stringify(parsedStore));
    
        // ! Test
        console.log(currentUser.user)
    }
}
