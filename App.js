// ill use the fect req here to get the data from the api and then display it on the page
//resolve , reject
function walkDog() {

    return new Promise ((resolve , reject) => {
        setTimeout(() => {

            const dogWalked = true; 

            if(dogWalked) {
                console.log("you walked the dog")
            }
            else{
                console.log("you did not walk the dog")
            }
        })
    })

}

function cleanKitchen() {
    
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            const cleanKitchen = false;

            if (cleanKitchen){
                console.log("You cleaned the Kitchen")
            }
            else{ 
                console.log("You never cleaned the kitchen")
            }

        })
    })

} 

function takeOutTrash() {
   
    return new Promise ((resolve, reject) => {
        setTimeout(() => {

            const takeOutTrash = true;

            if(takeOutTrash) {
                console.log("You took out the Trash")
            }
            else {
                 consoleS.log("You did not take out the trash")
            }

        })
    })

}

async function doChores() {

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finnished the Chores")
    }
    catch(error) {
        console.error(error);
    }
    
}

doChores()