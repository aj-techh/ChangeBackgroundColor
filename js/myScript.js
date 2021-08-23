const myButton = document.querySelector("button");
const myBody = document.querySelector("body");
const hexValues=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let newColor = [];

myButton.onclick=()=>{
    buildColor(newColor);
};

buildColor=(newArray)=>{
    if(newArray.length==8){
        updatedColor=newArray.join('');
        myBody.style.backgroundColor=`#${updatedColor}`;
        document.querySelector('h3').textContent=`Hex Color: ${updatedColor}`
        newColor=[];
        return;
    }else{
        newArray.push(hexValues[Math.floor(Math.random()*hexValues.length)]);
        newColor=newArray
        buildColor(newColor);
        return; //unnecessary but just incase
    }
}