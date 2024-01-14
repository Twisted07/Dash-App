/* 
 Todo: This space is meant to hold all the test data and major functions that are used across entire Dash App
 * Local storage data: 

 * For a dash, all the data should be collected and parsed into the user's dash list, the time the dash was created/updated 
*/
// localStorage.clear();

/**
 * localtorage: dash-app: [ USER: -> UserData ]
 */

// The storeManager gets the entire storeData, then updates the user actions (dash and beg) at the end of the event.

// So if a dash occurs, the dashes property of the dash-app is 




// We are meant to have a storeManager, a user, a dash, a beg

/**
 * dash: get the dash object,
 *       assign a dash id to the dash
 *       update the dashmanager with : the new dash and the user's id
 *       
 * The dash manager should directly update the store with the dash updates. 
 * 
 */ 


class StoreManager {
    // todo; save store name as a private var 'dash-app' , then replace 
    // todo; as appropriate . 
    constructor() {
        this._data = this.loadStore()
    }

    saveStore() {
        localStorage.setItem('dash-app', JSON.stringify(this._data));
    }

    updateStore(userData) {
        localStorage.setItem('dash-app', JSON.stringify([userData]))
    }

    loadStore(user) {
        // 
        if (localStorage.getItem('dash-app') === null || localStorage.getItem('dash-app') === '') {
            localStorage.setItem('dash-app', [])
            const firstAnonymous = new UserData(user);
            
            return [firstAnonymous];

        } 
        // deserialize ! important 
        const serializedData = localStorage.getItem('dash-app');
        const deserializedData = JSON.parse(serializedData);
    
        return deserializedData;
    }

    get store() {
        return this._data;
    }
}

// on  initialization , just call load store and store it in a generic store variable 


class UserData {
    
    constructor(username) {
        this.username = username;
        this.dashes = [];
        this.begs = [];
    }

    addDash(newDash) {
        this.dashes.push(newDash)
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

}



class DashManager {
    
    loadAllDashes() {
        /** 
         * load the dashes from the storage . disregarding authentication at this point !
        */
        const store_data =  storeManager.store;
        const accumulatedDashes = store_data.reduce((acc, curr) => acc.concat(curr.dashes), []);
        return accumulatedDashes;     
    }

    // Adds dash to the data store
    updateUser(username, dash) {
        // modify the store data by finding the right username data , 
        // append the newly created object in the `dash` proops
        // then call `save_store` to persist it . 
        storeManager.store.map(currUser => {
            console.log(currUser)
            if (currUser.username === username) {
                const currentUser = storeLoad[0]; 
                console.log("current user exits", currUser)
                currentUser.dashes.push(dash);
                storeManager.updateStore(currentUser);
            } else {
                const currentUser = storeLoad[0];
                currentUser.addDash(dash);
                storeManager.updateStore(currentUser);
            }
        })
        // todo;  what if the user is not found ?? ! 
        
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

function createImage(imageName, node) {
    /*
        Get the image name and append it to the directory path the image exists in and create an image element that uses the url to load image
    */

    imageContainer = document.createElement("div");
    imageContainer.style.backgroundImage = `url("img/${imageName}")`
    imageContainer.className = "dash__image--container";

    node.append(imageContainer);
    
}


// * create new managers
const storeManager = new StoreManager();
const store = storeManager.store;

const dashManager = new DashManager();
