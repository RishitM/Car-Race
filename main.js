
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
    car1_up();
    console.log("Up Arrow Key");
}
if (key_pressed =='40'){
    car1_down();
    console.log("Down Arrow Key");
}
if (key_pressed =='37'){
    car1_left();
    console.log("Left Arrow Key");
}
if (key_pressed =='39'){
    car1_right();
    console.log("Right Arrow Key");
}
if (key_pressed =='87'){
car2_up();
    console.log("W Key");
}
if (key_pressed =='83'){
    car2_down();
    console.log("S Key");
}
if (key_pressed =='65'){
    car2_left();
    console.log("A Key");
}
if (key_pressed =='68'){
    car2_right();
    console.log("D Key");
}
}
function car1_up() {
    if (car1_y>=0){
        car1_y=car1_y-10
        update_background();
        update_car1();
        update_car2();
    }
}
function car1_down() {
    if (car1_y>=0){
        car1_y=car1_y+10
        update_background();
        update_car1();
        update_car2();
    }
}
function car1_left() {
    if (car1_x>=0){
        car1_x=car1_x-10
        update_background();
        update_car1();
        update_car2();
    }
}
function car1_right() {
    if (car1_x<=600){
        car1_x=car1_x+10
        update_background();
        update_car1();
        update_car2();
    }
}
function car2_up() {
    if (car2_y>=0){
        car2_y=car2_y-10
        update_background();
        update_car1();
        update_car2();
    }
}
function car2_down() {
    if (car2_y>=0){
        car2_y=car2_y+10
        update_background();
        update_car1();
        update_car2();
    }
}
function car2_left() {
    if (car2_x>=0){
        car2_x=car2_x-10
        update_background();
        update_car1();
        update_car2();
    }
}
function car2_right() {
    if (car2_x<=600){
        car2_x=car2_x+10
        update_background();
        update_car1();
        update_car2();
    }
}
if (car1_x=600){
    console.log("car1 Won");
    document.getElementById("game_status").innerHTML= "Car 1 Won";
}
if (car2_x=600){
    console.log("car2 Won");
    document.getElementById("game_status").innerHTML= "Car 2 Won";
}