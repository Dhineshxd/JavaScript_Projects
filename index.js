const canvas = document.getElementById("canvas");
const canvasContainer = document.querySelector(".canvasContainer");

let context = canvas.getContext('2d');
let image = new Image();

document.getElementById("upload").addEventListener("change",function(event){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event){
        image.src = event.target.result;
        console.log(event.target.result);

    }
    reader.readAsDataURL(file);
})

image.onload = function(){
    console.log("image onload..")
    canvas.width = image.width;
    canvas.height = image.height;

    context.drawImage(image,0,0);
    canvasContainer.style.display = "block";
}

function applyFilter(){
    const brightness = document.getElementById("brightness").value;
    const contrast = document.getElementById("contrast").value;
    const grayscale = document.getElementById("grayscale").value;

    context.filter = `
    brightness(${brightness}%)
    contrast(${contrast}%)
    grayscale(${grayscale}%)
    `
    context.drawImage(image,0,0);

}

document.getElementById("brightness").addEventListener("input",applyFilter);
document.getElementById("contrast").addEventListener("input",applyFilter);
document.getElementById("grayscale").addEventListener("input",applyFilter);


document.getElementById("btn-dwl").addEventListener("click", function(){
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = "Edited Image";

    link.click();
})