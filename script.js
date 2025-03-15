const colorPicker = document.getElementById("picker");
const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorcode");
const copyButton = document.getElementById("copyButton");
const body = document.body;

colorPicker.addEventListener("input",()=>{
  const color = colorPicker.value;
  colorBox.style.backgroundColor = color;
  colorCode.innerText = color;
  body.style.backgroundColor = color;

});

copyButton.addEventListener("click",()=>{
  navigator.clipboard.writeText(colorCode.innerText).then( ()=>{
    alert("Copied: "+ colorCode.innerText);
  }).catch(err=> {
    console.error("Failed to copy: ", err);
  });
});