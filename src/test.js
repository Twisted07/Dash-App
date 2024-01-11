/* 
 Todo: This space is meant to hold all the test data and major functions that are used across entire Dash App
 * Local storage data: 

 * For a dash, all the data should be collected and parsed into the user's dash list, the time the dash was created/updated 
*/
// localStorage.clear();
const store = localStorage;
store.setItem("user", JSON.stringify({
    userName: "User",
    password: "12345",
    phone: "+23412345678",
    dash: [],
    beg: []
}));


/**
 * 
 * [ USER: -> [ username password phone dash beg] ]
 * 
 * 
 */

class StoreManager {
    constructor() {}

    load_store() {
        if (loca
        localStorage.get('dash-app', [])
    }
}


class Dash {

    constructor (image, itemName, category, dateCreated, id) {
        this.image = image;
        this.itemName = itemName;
        this.category = category;
        this.dateCreated = dateCreated;
        this.id = id;
        this.begged = [];
    }

    loadDashes() {
        /** 
         * load the dashes from the storage . disregarding authentication at this point !
         */

        
    }
}






function createImage(imageName, node) {
    /*
        Get the image name and append it to the directory path the image exists in and create an image element that uses the url to load image
    */

    imageContainer = document.createElement("div");
    imageContainer.style.backgroundImage = `url("img/${imageName}")`
    imageContainer.className = "dash__image--container";

    node.append(imageContainer);
    
}

class Dash {

    constructor (image, itemName, category, dateCreated, id) {
        this.image = image;
        this.itemName = itemName;
        this.category = category;
        this.dateCreated = dateCreated;
        this.id = id;
        this.begged = [];
    }

    loadDashes() {
        /** 
         * load the dashes from the storage . disregarding authentication at this point !
         */


    }
}

class Beg {
    constructor (message, user, id, dash_id) {
        this.message = message;
        this.user = user;
        this.id = id;
        this.dash_id = dash_id;
    }
}