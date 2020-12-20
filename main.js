
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="racing.jpg";
car1_image="car1.png";
car1_x=0;
car1_y=0;
car2_image="car2.png";
car2_x=0;
car2_y=70;
key_code=0
function add() {
    background_img_tag= new Image();
    background_img_tag.onload=update_background;
    background_img_tag.src= background_image ;
     car1_img_tag= new Image();
    car1_img_tag.onload=update_car1;
    car1_img_tag.src= car1_image ;
    car2_img_tag= new Image();
    car2_img_tag.onload=update_car2;
    car2_img_tag.src= car2_image ;
}
function update_background() {
    ctx.drawImage(background_img_tag,0,0,700,700);
}
function update_car1() {
ctx.drawImage(car1_img_tag,car1_x,car1_y,100,50);
}
function update_car2() {
    ctx.drawImage(car2_img_tag,car2_x,car2_y,100,50);
    }
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
key_pressed=e.keyCode;
console.log(key_pressed);
if (key_pressed =='38'){
    
    console.log("Up Arrow Key");
}
if (key_pressed =='40'){
    
    console.log("Down Arrow Key");
}
if (key_pressed =='37'){
    
    console.log("Left Arrow Key");
}
if (key_pressed =='39'){
    
    console.log("Right Arrow Key");
}
if (key_pressed =='87'){

    console.log("W Key");
}
if (key_pressed =='83'){
    
    console.log("S Key");
}
if (key_pressed =='65'){
    
    console.log("A Key");
}
if (key_pressed =='68'){
    
    console.log("D Key");
}
}