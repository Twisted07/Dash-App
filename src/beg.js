

const begForm = document.querySelector(".beg__form");
const btnBeg = document.querySelector(".btn__submit--beg");
const cancelBtn = document.querySelector(".btn__cancel");

btnBeg.onclick = () => {

    const urlparam = new URLSearchParams(window.location.search)
    begMessage = document.querySelector(".beg__message").value;
    const dashID  = urlparam.get('id');

    parsedUser = JSON.parse(currentUser.user);
    begID = Date.now();
    newBeg = new Beg(begMessage, parsedUser.userName, begID, dashID);
    console.log(newBeg)

    begMessage = "";
}

cancelBtn.onclick = () => {
    window.open("index.html", "_self");
}