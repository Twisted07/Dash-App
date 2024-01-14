

const begForm = document.querySelector(".beg__form");
const btnBeg = document.querySelector(".btn__submit--beg");
const cancelBtn = document.querySelector(".btn__cancel");
const userList = storeManager.loadStore('anonymous');
const user = userList.find(user => user.username === 'anonymous');
console.log("The current user is: ", user)

btnBeg.onclick = () => {

    const urlparam = new URLSearchParams(window.location.search)
    const begMessage = document.querySelector(".beg__message").value;
    const dashID  = urlparam.get('id');
    const begID = Date.now();
    
    if (begID && dashID && begMessage) {
        const newBeg = new Beg(begMessage, user.username, begID, dashID);
        
        newBeg.submitBeg(newBeg);
        newBeg.updateBeg(user, newBeg);
        storeManager.updateStore(user);
    }


    begMessage = "";
}

cancelBtn.onclick = () => {
    window.open("index.html", "_self");
}