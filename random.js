console.log("random images project is working")
// grab the div 
let imageContainer = document.querySelector(".image-container");
console.log(imageContainer)
// grab the load button
let btn = document.querySelector(".btn");
btn.addEventListener('click', randomImages);

function randomImages(){

    for(let i = 0; i < 15; i++){
        let imgElement = document.createElement('img');
        imgElement.setAttribute("src", `https://picsum.photos/300?random=${Math.ceil(Math.random()*2000)}`)
        imageContainer.appendChild(imgElement)
    }
    // let imgElement = document.createElement('img');
    // imgElement.setAttribute("src", `https://picsum.photos/300?random=${Math.ceil(Math.random()*2000)}`)
    // imageContainer.appendChild(imgElement)
}