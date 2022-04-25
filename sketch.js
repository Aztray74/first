'use strict';

function setup(){
  createCanvas(600,600)
}
function draw(){
  if(state === 'title'){
    title();
  } else if(state === 'level 1')
  level1();
}

fucntion title(){
  background(100);
  textsize(80);
  stroke(255);
  text('MY GAME', 100,100);
}

function level1(){
  background(50,150,200);
}
