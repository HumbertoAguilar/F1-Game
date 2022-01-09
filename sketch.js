var player
var playerImg
var Background
var barrera1
var barera2
var barrera3

var p3
var p4
var p5
var bordes
var pista
var pista2
var pista3
var pista4
var pistasGroup
var img2
var img3
var pistavertImg
var pistaHorImg
var gameState="intro"
var p4img,p4img2,p4img3
var p3img,p3img2,p3img3
var p5img,p5img2,p5img3
var arbusto
var gradas,gradasimg
var back
var youwin,youwinimg
var trofeo,trofeoimg;
var ylose,yloseimg
var over,overimg
var historia,historiaimg

var sound

function preload(){
playerImg=loadImage("F1.png")
img2=loadImage("carro1v2.png")
img3=loadImage("carro1v3.png")
limite2=loadImage("limite3.png")
pistavertImg=loadImage("limite.jpg")
limite5img=loadImage("limite5.png")
p1img=loadImage("maclaren.png")
p1img2=loadImage("maclarender.png")
p1img3=loadImage("maclarenizq.png")

p2img=loadImage("ferrari.png")
p2img2=loadImage("ferrder.png")
p2img3=loadImage("ferrizq.png")
p6img=loadImage("lotus.png")
p6img2=loadImage("lotusder.png")
p6img3=loadImage("lotusizq.png")
limite5img=loadImage("limite5.png")
limite4=loadImage("limite2.jpg")

metaimg2=loadImage("bandera.jpg")


banderaImg=loadImage("bandera.jpg")
sound=loadSound("FR3.mp4")
M1=loadSound("M1.mp4")
Yl=loadSound("Yl.mp4")
Yw=loadSound("YW.mp4")
sound2=loadSound("RFW.mp4")
vuelta2=loadSound("Fin.mp4")


p3img=loadImage("ferrari.png")
p3img2=loadImage("ferrder.png")
p3img3=loadImage("ferrizq.png")

p4img=loadImage("maclaren.png")
p4img2=loadImage("maclarender.png")
p4img3=loadImage("maclarenizq.png")

p5img=loadImage("lotus.png")
p5img2=loadImage("lotusder.png")
p5img3=loadImage("lotusizq.png")
arbustoimg=loadImage("arbusto.png")
arbusto2img=loadImage("arbusto2.png")
 restartimg=loadImage("restart.png")
 tierraimg=loadImage("tierra.jpg")
 gradasimg=loadImage("gradas.jpg")

reloadimg=loadImage("Press-r-to-restart.png")
trofeoimg=loadImage("trofeo.png")
youwinimg=loadImage("youwin2.png")

overimg=loadImage("GAME-OVER.png")
yloseimg=loadImage("YOU-LOSE.png")
historiaimg=loadImage("historia1.jpg")
gano=loadImage("You-win.png")
mimg=loadImage("Tu-padre-era-un-corredor.png")
iimg=loadImage("que-murio-con-el-sueno-d.png")
fimg=loadImage("Ayudalo-a-cumplir-su-sue.png")
eimg=loadImage("Este-va-a-ser-tu-carro.png")
himg=loadImage("Presiona-barra-espaciado (1).png")
nimg=loadImage("Dirige-el-carro-con-las-.png")
continuarimg=loadImage("Press-space-to-continue (1).png")

troimg=loadImage("tr.png")
tro2img=loadImage("tr2.png")
congrimg=loadImage("congr.png")
pasto1=loadImage("planta.jpg")
pasto2=loadImage("planta2.jpg")
gradas2img=loadImage("gradas2.jpg")

}


function setup(){
 
    createCanvas(windowWidth,windowHeight)
    //background("blue")
historia=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
historia.addImage(historiaimg)
historia.visible=false
    bordes=createEdgeSprites();
    Background=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    Background.shapeColor="grey"
    
   ground=createSprite(windowWidth/2+1000,windowHeight/2+93)
   ground.scale=2
   ground.addImage(tierraimg)
    gradas=createSprite(windowWidth/2+400,-1480)
          gradas.addImage(gradasimg)
          gradas.scale=3
          
    
    barrera1=createSprite(0,windowHeight/2,20,windowHeight)
    barrera1.visible=false
    barrera2=createSprite(windowWidth,windowHeight/2,20,windowHeight)
    barrera2.visible=false
    barrera3=createSprite(windowWidth/2,windowHeight,windowWidth,20)
    barrera3.visible=false
    
    esp=createSprite(windowWidth/2-1050,windowHeight/2-100)
    esp.addImage(tierraimg)
    esp.scale=2
    
   
    //numero pista impar lado derecho
    //pistaW=createSprite(windoWidth/2+50,,120)
    pistaW=createSprite(windowWidth/2+200,120,20,550)
    
    pistaW.addImage(pistavertImg)
    pistaW.scale=0.8
   
    
    //  pista.lifetime=500
  pista3=createSprite(windowWidth/2+340,-150,300,20)
  pista3.addImage(limite2)
  pista3.scale=0.7
  
  pista5=createSprite(windowWidth/2+473,-487,20,670)
  pista5.addImage(pistavertImg)
  pista5.scale=0.98
  
  pista7=createSprite(windowWidth/2+279,-815,400,20)
  pista7.addImage(limite2)
  pista7.scale=0.98
  

  pista9=createSprite(windowWidth/2+87,-1055,20,500)
  pista9.addImage(pistavertImg)
  pista9.scale=0.72

  pista11=createSprite(windowWidth/2-50,-1300,280,20)
  pista11.addImage(limite2)
  pista11.scale=0.7
  pista13=createSprite(windowWidth/2-180,-1550,20,350)
  pista13.addImage(pistavertImg)
  pista13.scale=0.72


  //numero pista par lado izquierdo
  pista2=createSprite(windowWidth/2-250,22,20,750)
  pista2.addImage(pistavertImg)
  pista2.scale=1.1
  //430
  verde=createSprite(windowWidth/2-128,-451,400,190)
  verde.addImage(tierraimg)
  verde.scale=0.4
  //pista2.lifetime=500
  pista4=createSprite(windowWidth/2-110,-352,300,20)
  pista4.addImage(limite2)
  pista4.scale=0.72
  
  pista6=createSprite(windowWidth/2+24,-454,20,200)
  pista6.addImage(limite5img)
  pista6.scale=0.55

  pista8=createSprite(windowWidth/2-110,-550,300,20)
  
  pista8.addImage(limite2)
  pista8.scale=0.72

  pista10=createSprite(windowWidth/2-250,-800,20,500)
  pista10.addImage(pistavertImg)
  pista10.scale=0.75
  pista12=createSprite(windowWidth/2-360,-1052,200,20)
  pista12.addImage(limite2)
  pista12.scale=0.55
  

  pista14=createSprite(windowWidth/2-460,-1420,20,620)
  pista14.addImage(pistavertImg)
  pista14.scale=1.05


   meta2=createSprite(windowWidth/2-315,-1800,300,20)
   meta2.addImage(banderaImg)
   meta2.scale=0.45
  
b=createSprite(windowWidth/2-315,-1990,300,20)
b.visible=false

   meta1=createSprite(windowWidth/2,windowHeight-230,500,20)
   meta1.addImage(banderaImg)
   meta1.scale=0.45
 



   fondo=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
   fondo.visible=false

   p3=createSprite(windowWidth/2-40,350)
   p3.addImage(p3img)
   p3.scale=0.157
   p3.setCollider("rectangle",0,0,18,10)

    p4=createSprite(windowWidth/2,430)
    p4.addImage(p4img)
    p4.setCollider("rectangle",0,0,18,10)
    p4.scale=0.13
    
   p5=createSprite(windowWidth/2-40,430,20,20)
   p5.addImage(p5img)
   p5.setCollider("rectangle",0,0,18,10)
   p5.scale=0.105

   player=createSprite(windowWidth/2,350)
   player.setCollider("rectangle",0,0,player.width,player.Height)
   player.addImage(playerImg)
   player.scale=0.175
  
  
reload=createSprite(windowWidth/2,windowHeight/2+200)
reload.addImage(reloadimg)
reload.visible=false
back=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
back.visible=false

trofeo=createSprite(windowWidth/2-50,windowHeight/2)
trofeo.addImage(trofeoimg)
trofeo.scale=0.5
trofeo.visible=false

youwin=createSprite(windowWidth/2-50,windowHeight/2+50)
youwin.addImage(youwinimg)
youwin.scale=3.3
youwin.visible=false

over=createSprite(windowWidth/2,windowHeight/2-150)
over.addImage(overimg)
over.visible=false
ylose=createSprite(windowWidth/2,windowHeight/2)
ylose.addImage(yloseimg)
ylose.visible=false
model=createSprite(windowWidth/2,windowHeight/2)
model.addImage(playerImg)
model.visible=false
fond=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
fond.shapeColor="black"
fond.visible=false
m=createSprite(windowWidth/2,windowHeight/2-250,30,30)
m.addImage(mimg)
m.scale=0.5
m.visible=false
i=createSprite(windowWidth/2,windowHeight/2-200,30,30)
i.addImage(iimg)
i.scale=0.5
i.visible=false
f=createSprite(windowWidth/2,windowHeight/2-145,30,30)
f.addImage(fimg)
f.scale=0.5
f.visible=false
j=createSprite(windowWidth/2,windowHeight/2-90,30,30)
j.addImage(eimg)
j.scale=0.5
j.visible=false
h=createSprite(windowWidth/2,windowHeight/2+30,30,30)
h.addImage(img2)
h.scale=0.9
h.visible=false
l=createSprite(windowWidth/2,windowHeight/2+230,30,30)
l.addImage(himg)
l.scale=0.5
l.visible=false
n=createSprite(windowWidth/2,windowHeight/2+160,30,30)
n.addImage(nimg)
n.scale=0.5
n.visible=false
bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
bg.shapeColor="black"
bg.visible=false
ganador=createSprite(windowWidth/2,windowHeight/2-230)
ganador.addImage(gano)
ganador.visible=false
continuar=createSprite(windowWidth/2,windowHeight/2+230)
continuar.addImage(continuarimg)
continuar.scale=0.8
continuar.visible=false
M1play();
}


function draw(){
    //background("blue")

    
    if(gameState==="intro"){
    background("blue")
      

    truet();
Background.visible=true     
     
     fond.visible=true
      drawSprites();
     
      if(keyCode===32){
        gameState="play"
        M1.stop();
        playSound();
      }
    }

    if(gameState==="play"){
      Yw.stop();
      Yl.stop();
        model.visible=false
fond.visible=false
historia.visible=false
m.visible=false
i.visible=false
f.visible=false
j.visible=false
h.visible=false
l.visible=false
n.visible=false
fond.visible=false
    
if(frameCount%1===0&&p3.y>=257){
  arbusto=createSprite(random(windowWidth/2-700,windowWidth/2-300),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=4
  arbusto.scale=0.7
  arbusto.lifetime=167
  
}
if(frameCount%1===0&&p3.y>=257){
  arbusto2=createSprite(random(windowWidth/2-700,windowWidth/2-300),windowHeight-630)
arbusto2.addImage(arbustoimg)
arbusto2.velocityY=4
arbusto2.scale=0.2
arbusto2.lifetime=167
}


if(frameCount%3===0&&p3.y<=250){
  arbusto=createSprite(random(windowWidth/2-700,windowWidth/2-510),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=4
  arbusto.scale=0.7
  arbusto.lifetime=167
}
if(frameCount%3===0&&p3.y<=250){

  arbusto2=createSprite(random(windowWidth/2-700,windowWidth/2-510),windowHeight-630)
  arbusto2.addImage(arbustoimg)
  arbusto2.velocityY=4
  arbusto2.scale=0.2
  arbusto2.lifetime=167
}




if(frameCount%1===0&&p3.y>=280){
  arbusto=createSprite(random(windowWidth/2+520,windowWidth/2+700),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=4
  arbusto.scale=0.7
  arbusto.lifetime=167
}
if(frameCount%1===0&&p3.y>=280){
  arbusto2=createSprite(random(windowWidth/2+540,windowWidth/2+700),windowHeight-630)
  arbusto2.addImage(arbustoimg)
  arbusto2.velocityY=4
  arbusto2.scale=0.2
  arbusto2.lifetime=167
}
if(frameCount%1===0&&p3.y<=219){
  arbusto=createSprite(random(windowWidth/2-120,windowWidth/2+100),windowHeight-630)
  arbusto.addImage(arbustoimg)
  arbusto.velocityY=4
  arbusto.scale=0.2
  arbusto.lifetime=167
  back.depth=arbusto.depth
  back.depth=back.depth+1
}
if(frameCount%1===0&&p3.y<=219){
  arbusto2=createSprite(random(windowWidth/2-120,windowWidth/2+100),windowHeight-630)
  arbusto2.addImage(arbusto2img)
  arbusto2.velocityY=4
  arbusto2.scale=0.48
  arbusto2.lifetime=167
  back.depth=arbusto2.depth
  back.depth=back.depth+1
}

      pistaW.velocityY=4
      pista2.velocityY=4
      pista3.velocityY=4
      pista4.velocityY=4
      pista5.velocityY=4
      pista6.velocityY=4
      pista7.velocityY=4
      pista8.velocityY=4
      pista9.velocityY=4
      pista10.velocityY=4
      pista11.velocityY=4
      pista12.velocityY=4
      pista13.velocityY=4
      pista14.velocityY=4
      meta1.velocityY=4
      meta2.velocityY=4
      b.velocityY=4
      verde.velocityY=4
      esp.velocityY=4
      gradas.velocityY=4
      ground.velocityY=4
      if(meta1.y>=650){
        meta1.destroy();
      }

if(pistaW.y>=870){
  pistaW.destroy();
}
if(pista2.y>=990){
  pista2.destroy();
}
if(pista3.y>=630){
  pista3.destroy();
}
if(pista4.y>=640){
  pista4.destroy();
}
if(pista5.y>=920){
  pista5.destroy();
}
if(pista6.y>=700){
  pista6.destroy();
}
if(pista7.y>=700){
  pista7.destroy();
} 
if(pista8.y>=700){
  pista8.destroy();
}
if(pista9.y>=870){
  pista9.destroy();
}
if(pista10.y>=870){
  pista10.destroy();
}
if(pista11.y>=700){
  pista11.destroy();
}
if(pista12.y>=650){
  pista12.destroy();
}
     //esp ground verde
     if(esp.y>=1180){
       esp.destroy();
     }
     if(verde.y>=700){
       verde.destroy();
     }
     if(ground.y>=1180){
       ground.destroy();
     }

  //
  p3.velocityY=-(random(0.3,0.5))
  if(p3.y<=310){
    p3.velocityX=4
    p3.addImage(p3img2)
  }
    if(p3.y<=292){
      p3.velocityX=0

      p3.addImage(p3img)
    }
    if(p3.y<=265){
      p3.velocityX=-4
      p3.addImage(p3img3)

    }
if(p3.y<=250){
  p3.velocityX=0
  p3.addImage(p3img)
}
if(p3.y<=223){
  p3.velocityX=-4
  p3.addImage(p3img3)
}
if(p3.y<=200){
  p3.velocityX=0
  p3.addImage(p3img)
}

//

p4.velocityY=-(random(0.3,0.5))
if(p4.y<=383){
  p4.velocityX=4
  p4.addImage(p4img2)
}
if(p4.y<=363){
  p4.velocityX=0
  p4.addImage(p4img)
}

if(p4.y<=342){
  p4.velocityX=-4
  p4.addImage(p4img3)
}
if(p4.y<=326){
  p4.velocityX=0
  p4.addImage(p4img)
}

if(p4.y<=310){
  p4.velocityX=-4
  p4.addImage(p4img3)
}
if(p4.y<=265){
  p4.velocityX=0
  p4.addImage(p4img)
}
//
p5.velocityY=-(random(0.4,0.7))
if(p5.y<=360){
  p5.velocityX=4
  p5.addImage(p5img2)
}
if(p5.y<=340){
  p5.velocityX=0
  p5.addImage(p5img)
}
if(p5.y<=305){
  p5.velocityX=-4
  p5.addImage(p5img3)
}
if(p5.y<=280){
  p5.velocityX=0
  p5.addImage(p5img)
}
if(p5.y<=255){
  p5.velocityX=-4
  p5.addImage(p5img3)
}
if(p5.y<=220){
  p5.velocityX=0
  p5.addImage(p5img)
}

reload.depth=arbusto2.depth
reload.depth=arbusto.depth

reload.depth+=+1



      if(keyCode===UP_ARROW){
        player.velocityY=-0.85
                player.velocityX=0
        player.addImage(playerImg)
      }
         if(keyCode===RIGHT_ARROW){
             player.velocityX=3
             player.velocityY=0
     
             player.addImage(img2)
         }
         if(keyCode===LEFT_ARROW){
         player.velocityX=-3
         player.velocityY=0
         player.addImage(img3)
       }
       if(keyCode===DOWN_ARROW){
         player.velocityX=0
         player.velocityY=0
       }
     
     
        //player.collide(barrera1)
        //player.collide(barrera2)
        //player.collide(barrera3)
        //p1.bounceOff(player)
        player.collide(p3)
        player.collide(p4)
        //player.bounceOff(p5)*/
     
        player.collide(pistaW)
        player.collide(pista2)
        player.collide(pista3)
        player.collide(pista4)
        player.collide(pista5)
        player.collide(pista6)
        player.collide(pista7)
        player.collide(pista8)
        player.collide(pista9)
        player.collide(pista10)
        player.collide(pista11)
        player.collide(pista12)
        player.collide(pista13)
        player.collide(pista14)
     
      
     
     
        p3.collide(pistaW)
        p3.collide(pista2)
        p3.collide(pista3)
        p3.collide(pista4)
        p3.collide(pista5)
        p3.collide(pista6)
        p3.collide(pista7)
        p3.collide(pista8)
        p3.collide(pista9)
        p3.collide(pista10)
        p3.collide(pista11)
        p3.collide(pista12)
        p3.collide(pista13)
        p3.collide(pista14)
        
     
     
        p4.collide(pistaW)
        p4.collide(pista2)
        p4.collide(pista3)
        p4.collide(pista4)
        p4.collide(pista5)
        p4.collide(pista6)
        p4.collide(pista7)
        p4.collide(pista8)
        p4.collide(pista9)
        p4.collide(pista10)
        p4.collide(pista11)
        p4.collide(pista12)
        p4.collide(pista13)
        p4.collide(pista14)
        
     
        p5.collide(pistaW)
        p5.collide(pista2)
        p5.collide(pista3)
        p5.collide(pista4)
        p5.collide(pista5)
        p5.collide(pista6)
        p5.collide(pista7)
        p5.collide(pista8)
        p5.collide(pista9)
        p5.collide(pista10)
        p5.collide(pista11)
        p5.collide(pista12)
        p5.collide(pista13)
        p5.collide(pista14)
      
        drawSprites();



if(player.collide(b)){
  sound.stop();

  Yw.play();
  bg.visible=true
  
  gameState="end"
  p3.destroy();
p4.destroy();
p5.destroy();
player.destroy();
gradas.destroy();
arbusto.destroy();
arbusto2.destroy();
pista13.destroy();
pista14.destroy();
meta2.destroy();
  
bg.depth=back.depth
bg.depth=Background.depth
bg.depth=trofeo.depth
bg.depth=bg.depth+1
bg.visible=true
bg.shapeColor="black"
reload.depth=back.depth
reload.depth+=+1
ganador.depth=back.depth
ganador.depth+=+1
ganador.visible=true

trofeo.depth=back.depth
trofeo.depth+=+1
ganador.visible=true
youwin.depth=back.depth
youwin.depth+=+1
trofeo.visible=true

back.visible=true
reload.visible=true
if(keyCode===82){
  gameState="play2"
  Yw.stop();
  crate();
}



}
     if(p3.collide(b)){
      sound.stop();

      Yl.play();
       gameState="end2"
       bg.visible=true
       bg.shapeColor="black"
       bg.depth=back.depth
bg.depth=Background.depth
bg.depth=bg.depth+1
        bg.visible=true
        
        
        continuar.depth=back.depth
        continuar.depth+=+1
        
        over.depth=back.depth
        over.depth+=+1
        ylose.depth=back.depth
        ylose.depth+=+1
        
        
        back.visible=true
        over.visible=true
        ylose.visible=true
        
        
        p3.destroy();
        p4.destroy();
        p5.destroy();
        player.destroy();
        gradas.destroy();
        arbusto.destroy();
        arbusto2.destroy();
        pista13.destroy();
        pista14.destroy();
        meta2.destroy();
        reload.visible=true

          if(keyCode===82){
            Yl.stop();
            gameState="play"
            create();
          }
          
                  
     }

     

    }
    
 
if(gameState==="end"){

  bg.visible=true
  bg.shapeColor="black"
  reload.visible=false

p3.destroy();
p4.destroy();
p5.destroy();
player.destroy();
gradas.destroy();
arbusto.destroy();
arbusto2.destroy();
pista13.destroy();
pista14.destroy();
meta2.destroy();
  
bg.depth=back.depth
bg.depth=Background.depth
bg.depth=bg.depth+1
bg.visible=true

continuar.depth=back.depth
continuar.depth+=+1

trofeo.depth=back.depth
trofeo.depth+=+1

youwin.depth=back.depth
youwin.depth+=+1
trofeo.visible=true
ganador.depth=back.depth
ganador.depth+=+1
ganador.visible=true

back.visible=true
continuar.visible=true
if(keyCode===32){
  gameState="play2"
  sound2.play();
  crate();
}
drawSprites();

}


if(gameState==="end2"){
bg.visible=true
bg.shapeColor="black"
bg.depth=back.depth
bg.depth=Background.depth
bg.depth=bg.depth+1
reload.depth=back.depth
reload.depth+=+1

over.depth=back.depth
over.depth+=+1
ylose.depth=back.depth
ylose.depth+=+1


back.visible=true
reload.visible=true
over.visible=true
ylose.visible=true


p3.destroy();
p4.destroy();
p5.destroy();
player.destroy();
gradas.destroy();
arbusto.destroy();
arbusto2.destroy();
pista13.destroy();
pista14.destroy();
meta2.destroy();
  if(keyCode===82){
    gameState="play"
    create();
  }
  
  drawSprites();
}
/*if(gameState==="end3"){
  Background.shapeColor="green"
  
  
  reload.depth=back.depth
  reload.depth+=+1
  
  over.depth=back.depth
  over.depth+=+1
  ylose.depth=back.depth
  ylose.depth+=+1
  
  
  back.visible=true
  reload.visible=true
  over.visible=true
  ylose.visible=true
  
  
  p3.destroy();
  p4.destroy();
  p5.destroy();
  player.destroy();
  gradas.destroy();
  arbusto.destroy();
  arbusto2.destroy();
  pista13.destroy();
  pista14.destroy();
  meta2.destroy();
    if(keyCode===82){
      gameState="play"
      create();
    }
    
    drawSprites();
  }*/
  

  if(gameState==="play2"){
    background("blue")
    Yw.stop();
    Yl.stop();
    reload.visible=false
    bg.visible=false
    continuar.visible=false
    ganador.visible=false
    Background.depth=arbusto.depth
    Background.depth=arbusto2.depth
    Background.depth+=+1

trofeo.visible=false
back.visible=false
reload.visible=false
youwin.visible=false

over.visible=false
ylose.visible=false

if(frameCount%2===0&&p6.y>=367){

  arbusto=createSprite(random(windowWidth/2-700,windowWidth/2-300),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=3
  arbusto.scale=0.7
  arbusto.lifetime=250
}

if(frameCount%2===0&&p6.y>=367){
  arbusto3=createSprite(random(windowWidth/2-700,windowWidth/2-300),windowHeight-630)
arbusto3.addImage(arbustoimg)
arbusto3.velocityY=3
arbusto3.scale=0.2
arbusto3.lifetime=250
}

if(frameCount%3===0&&p6.y<=370){

  arbusto=createSprite(random(windowWidth/2-700,windowWidth/2-650),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=3
  arbusto.scale=0.7
  arbusto.lifetime=250
}
if(frameCount%3===0&&p6.y<=370){

  arbusto3=createSprite(random(windowWidth/2-700,windowWidth/2-650),windowHeight-630)
  arbusto3.addImage(arbustoimg)
  arbusto3.velocityY=3
  arbusto3.scale=0.2
  arbusto3.lifetime=250
}



if(frameCount%2===0&&p6.y>=297){

  arbusto=createSprite(random(windowWidth/2+280,windowWidth/2+670),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=3
  arbusto.scale=0.7
  arbusto.lifetime=250
}


if(frameCount%2===0&&p6.y>=297){

  arbusto3=createSprite(random(windowWidth/2+280,windowWidth/2+670),windowHeight-630)
  arbusto3.addImage(arbustoimg)
arbusto3.velocityY=3
arbusto3.scale=0.2
arbusto3.lifetime=250
}



if(frameCount%2===0&&p6.y>=200){

  arbusto=createSprite(random(windowWidth/2+450,windowWidth/2+670),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=3
  arbusto.scale=0.7
  arbusto.lifetime=250
}

if(frameCount%2===0&&p6.y>=200){

  arbusto3=createSprite(random(windowWidth/2+450,windowWidth/2+670),windowHeight-630)
  arbusto3.addImage(arbustoimg)
  arbusto3.velocityY=3
  arbusto3.scale=0.2
  arbusto3.lifetime=250
  arbusto.visible=true

}
if(frameCount%2===0&&p6.y<=200){

  arbusto3=createSprite(random(windowWidth/2+625,windowWidth/2+670),windowHeight-630)
  arbusto3.addImage(arbustoimg)
  arbusto3.velocityY=3
  arbusto3.scale=0.2
  arbusto3.lifetime=250
  arbusto.visible=true

}
if(frameCount%2===0&&p6.y<=200){

  arbusto=createSprite(random(windowWidth/2+625,windowWidth/2+670),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=3
  arbusto.scale=0.7
  arbusto.lifetime=250
  arbusto.visible=true

}
if(frameCount%2===0&&p6.y<=150){
  arbusto=createSprite(random(windowWidth/2-360,windowWidth/2-670),windowHeight-630)
  arbusto.addImage(arbusto2img)
  arbusto.velocityY=3
  arbusto.scale=0.7
  arbusto.lifetime=250
arbusto.visible=true
}
player2.collide(pista15)
player2.collide(pista16)
player2.collide(pista17)
player2.collide(pista18)
player2.collide(pista19)
player2.collide(pista20)
player2.collide(pista21)
player2.collide(pista22)
player2.collide(pista23)
player2.collide(pista24)
player2.collide(pista25)
player2.collide(pista26)
player2.collide(pista27)
player2.collide(pista28)
player2.collide(pista29)
player2.collide(pista30)
player2.collide(pista31)
player2.collide(pista32)
player2.collide(p1)

player2.collide(p2)

player2.collide(p6)


p1.velocityY=-0.3
if(p1.y<=246){
    p1.velocityX=-4
    p1.addImage(p1img3)
}
if(p1.y<=226){
    p1.velocityX=0
    p1.addImage(p1img)
}
if(p1.y<=196){
    p1.velocityX=6.5
    p1.addImage(p1img2)
    
}
if(p1.y<=180){
    p1.velocityX=0
    p1.addImage(p1img)

}
if(p1.y<=163){
    p1.velocityX=-6
    p1.addImage(p1img3)

}
if(p1.y<=148){
    p1.velocityX=0
    p1.addImage(p1img)

}
if(p1.y<=128){
    p1.velocityX=6
    p1.addImage(p1img2)

    
}
if(p1.y<=91){
    p1.velocityX=0
    p1.addImage(p1img)

}

p2.velocityY=-0.3

if(p2.y<=333){
    p2.velocityX=-4
    p2.addImage(p2img3)
}
if(p2.y<=309){
    p2.velocityX=0
    p2.addImage(p2img)
}
if(p2.y<=287){
    p2.velocityX=6.3
    p2.addImage(p2img2)
}
if(p2.y<=268){
    p2.velocityX=0
    p2.addImage(p2img)
}
if(p2.y<=253){
    p2.velocityX=-6
    p2.addImage(p2img3)
}
if(p2.y<=235){
    p2.velocityX=0
    p2.addImage(p2img)
}
if(p2.y<=218){
    p2.velocityX=6.8
    p2.addImage(p2img2)
}
if(p2.y<=191){
    p2.velocityX=0
    p2.addImage(p2img)
}



console.log(p6.y)
p6.velocityY=-(random(0.3,0.45))
if(p6.y<=299){
    p6.velocityX=-4
    p6.addImage(p6img3)
}
if(p6.y<=276){
    p6.velocityX=0
    p6.addImage(p6img)
}
if(p6.y<=250){
    p6.velocityX=6
    p6.addImage(p6img2)

}
if(p6.y<224){
    p6.velocityX=0
    p6.addImage(p6img)
}
if(p6.y<=208){
    p6.velocityX=-6.8
    p6.addImage(p6img3)
}
if(p6.y<=180){
    p6.velocityX=0
    p6.addImage(p6img)
}
if(p6.y<=170){
p6.velocityX=6.7
p6.addImage(p6img2)
}
if(p6.y<=127){
    p6.velocityX=0
    p6.addImage(p6img)
}
if(keyCode===UP_ARROW){
    player2.velocityY=-0.67
                player2.velocityX=0
    player2.addImage(playerImg)
  }
     if(keyCode===RIGHT_ARROW){
         player2.velocityX=6.7
         player2.velocityY=0
 
         player2.addImage(img2)
     }
     if(keyCode===LEFT_ARROW){
     player2.velocityX=-6.7
     player2.velocityY=0
     player2.addImage(img3)
   }
   if(keyCode===DOWN_ARROW){
     player2.velocityX=0
     player2.velocityY=0
   }
 if(player2.isTouching(a)){
   arbusto.destroy();
   arbusto3.destroy();

   Backg.depth=p6.depth
Backg.depth+=+1
Backg.visible=true
Backg.depth=arbusto3.depth
   Backg.depth+=+1
   Backg.depth=arbusto.depth
   Backg.depth+=+1
   arbusto3.lifetime=0
  arbusto.lifetime=0
   sound2.stop();
   vuelta2.play();
   gameState="end3"
   


p1.destroy();
p2.destroy();
p6.destroy();
player2.destroy();



   


reload.depth=Backg.depth
reload.depth+=+1

trofeo.depth=Backg.depth
trofeo.depth+=+1

youwin.depth=Backg.depth
youwin.depth+=+1
trofeo.visible=true
youwin.visible=true
trof.visible=true
TrofDer.visible=true
congrats.visible=true
back.visible=true
drawSprites();

 }
    drawSprites();
    if(p1.isTouching(a)){
      gameState="end4"
      sound2.stop();
Yl.play();
arbusto.destroy();
   arbusto3.destroy();
Backg.depth=arbusto3.depth
Backg.depth+=+1
Backg.depth=arbusto.depth
Backg.depth+=+1



      Backg.visible=true
      
    
      
      
      over.depth=Backg.depth
      over.depth+=+1
      ylose.depth=Backg.depth
      ylose.depth+=+1
      reload.depth=Backg.depth
      reload.depth+=+1
      reload.visible=true
      
      back.visible=true
      
      
      over.visible=true
      ylose.visible=true
      
      
      p3.destroy();
      p4.destroy();
      p5.destroy();
      player2.destroy();
      meta4.destroy()
      a.destroy();
      pista31.destroy();
      pista32.destroy();
      drawSprites();

     
     
        if(keyCode===82){
          gameState="play2"
          sound2.play()
          crate();
        }


    }


    }
if(gameState==="end3"){
  sound2.stop();
  gameState="end3"
  
  
  Fondop.visible=true
  Fondop.depth=arbusto3.depth
  Fondop.depth+=+1
  Fondop.depth=arbusto.depth
  Fondop.depth+=+1


p1.destroy();
p2.destroy();
p6.destroy();
player2.destroy();






trofeo.depth=Backg.depth
trofeo.depth+=+1

youwin.depth=Backg.depth
youwin.depth+=+1
trofeo.visible=true
youwin.visible=true
trof.visible=true
trof.depth=Fondop.depth
trof.depth+=+1

TrofDer.visible=true
TrofDer.depth=Fondop.depth
TrofDer.depth+=+1
congrats.visible=true
congrats.depth=Fondop.depth
congrats.depth+=+1

drawSprites();


}
if(gameState==="end4"){
  sound2.stop();
  Backg.visible=true
  Backg.depth=arbusto3.depth
  Backg.depth+=+1
  Backg.depth=arbusto.depth
  Backg.depth+=+1
      Backg.visible=true
      
      Backg.depth=p6.depth
      Backg.depth+=+1
      Backg.visible=true
      Backg.depth=arbusto3.depth
         Backg.depth+=+1
         Backg.depth=arbusto.depth
         Backg.depth+=+1
      
      
      over.depth=Backg.depth
      over.depth+=+1
      ylose.depth=Backg.depth
      ylose.depth+=+1
      reload.depth=Backg.depth
      reload.depth+=+1
      reload.visible=true
      Backg.depth=p6.depth
Backg.depth+=+1
Backg.visible=true
Backg.depth=arbusto3.depth
   Backg.depth+=+1
   Backg.depth=arbusto.depth
   Backg.depth+=+1
      back.visible=true
      
      
      over.visible=true
      ylose.visible=true
      
      
      p3.destroy();
      p4.destroy();
      p5.destroy();
      player2.destroy();
      meta4.destroy()
      a.destroy();
      pista31.destroy();
      pista32.destroy();
      if(keyCode===82){
        gameState="play2"
        sound2.play()
        crate();
      }
      drawSprites();

}





  }
    


function create(){
  Background=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    Background.shapeColor="grey"
   ground=createSprite(windowWidth/2+1000,windowHeight/2+93)
   ground.scale=2
   ground.addImage(tierraimg)
    gradas=createSprite(windowWidth/2+400,-1480)
          gradas.addImage(gradasimg)
          gradas.scale=3
          
    
    barrera1=createSprite(0,windowHeight/2,20,windowHeight)
    barrera1.visible=false
    barrera2=createSprite(windowWidth,windowHeight/2,20,windowHeight)
    barrera2.visible=false
    barrera3=createSprite(windowWidth/2,windowHeight,windowWidth,20)
    barrera3.visible=false
    
    esp=createSprite(windowWidth/2-1050,windowHeight/2-100)
    esp.addImage(tierraimg)
    esp.scale=2
    
   
    //numero pista impar lado derecho
    //pistaW=createSprite(windoWidth/2+50,,120)
    pistaW=createSprite(windowWidth/2+200,120,20,550)
    
    pistaW.addImage(pistavertImg)
    pistaW.scale=0.8
   
    
    //  pista.lifetime=500
  pista3=createSprite(windowWidth/2+340,-150,300,20)
  pista3.addImage(limite2)
  pista3.scale=0.7
  
  pista5=createSprite(windowWidth/2+473,-487,20,670)
  pista5.addImage(pistavertImg)
  pista5.scale=0.98
  
  pista7=createSprite(windowWidth/2+279,-815,400,20)
  pista7.addImage(limite2)
  pista7.scale=0.98
  

  pista9=createSprite(windowWidth/2+87,-1055,20,500)
  pista9.addImage(pistavertImg)
  pista9.scale=0.72

  pista11=createSprite(windowWidth/2-50,-1300,280,20)
  pista11.addImage(limite2)
  pista11.scale=0.7
  pista13=createSprite(windowWidth/2-180,-1550,20,350)
  pista13.addImage(pistavertImg)
  pista13.scale=0.72


  //numero pista par lado izquierdo
  pista2=createSprite(windowWidth/2-250,22,20,750)
  pista2.addImage(pistavertImg)
  pista2.scale=1.1
  //430
  verde=createSprite(windowWidth/2-128,-451,400,190)
  verde.addImage(tierraimg)
  verde.scale=0.4
  //pista2.lifetime=500
  pista4=createSprite(windowWidth/2-110,-352,300,20)
  pista4.addImage(limite2)
  pista4.scale=0.72
  
  pista6=createSprite(windowWidth/2+24,-454,20,200)
  pista6.addImage(limite5img)
  pista6.scale=0.55

  pista8=createSprite(windowWidth/2-110,-550,300,20)
  
  pista8.addImage(limite2)
  pista8.scale=0.72

  pista10=createSprite(windowWidth/2-250,-800,20,500)
  pista10.addImage(pistavertImg)
  pista10.scale=0.75
  pista12=createSprite(windowWidth/2-360,-1052,200,20)
  pista12.addImage(limite2)
  pista12.scale=0.55
  

  pista14=createSprite(windowWidth/2-460,-1420,20,620)
  pista14.addImage(pistavertImg)
  pista14.scale=1.05


   meta2=createSprite(windowWidth/2-315,-1800,300,20)
   meta2.addImage(banderaImg)
   meta2.scale=0.45
  
b=createSprite(windowWidth/2-315,-1990,300,20)
b.visible=false

   meta1=createSprite(windowWidth/2,windowHeight-230,500,20)
   meta1.addImage(banderaImg)
   meta1.scale=0.45
 



   fondo=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
   fondo.visible=false

   p3=createSprite(windowWidth/2-40,350)
   p3.addImage(p3img)
   p3.scale=0.157
   p3.setCollider("rectangle",0,0,18,10)

    p4=createSprite(windowWidth/2,430)
    p4.addImage(p4img)
    p4.setCollider("rectangle",0,0,18,10)
    p4.scale=0.13
    
   p5=createSprite(windowWidth/2-40,430,20,20)
   p5.addImage(p5img)
   p5.setCollider("rectangle",0,0,18,10)
   p5.scale=0.105

   player=createSprite(windowWidth/2,350)
   player.setCollider("rectangle",0,0,player.width,player.Height)
   player.addImage(playerImg)
   player.scale=0.175

    
  
reload=createSprite(windowWidth/2,windowHeight/2+200)
reload.addImage(reloadimg)
reload.visible=false
back=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
back.visible=false

trofeo=createSprite(windowWidth/2-50,windowHeight/2)
trofeo.addImage(trofeoimg)
trofeo.scale=0.5
trofeo.visible=false

youwin=createSprite(windowWidth/2-50,windowHeight/2+50)
youwin.addImage(youwinimg)
youwin.scale=3.3
youwin.visible=false
ganador=createSprite(windowWidth/2,windowHeight/2-230)
ganador.addImage(gano)
ganador.visible=false
continuar=createSprite(windowWidth/2,windowHeight/2+230)
continuar.addImage(continuarimg)
continuar.scale=0.8
continuar.visible=false

over=createSprite(windowWidth/2,windowHeight/2-150)
over.addImage(overimg)
over.visible=false
ylose=createSprite(windowWidth/2,windowHeight/2)
ylose.addImage(yloseimg)
ylose.visible=false
model=createSprite(windowWidth/2,windowHeight/2)
model.addImage(playerImg)
model.visible=false

fond=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
   sound.play();
   if(player.collide(b)){
    gameState="end"
  }
       if(p3.collide(b)){
         gameState="end2"
       }
}
function playSound(){
  sound.play();

}
function M1play(){
  M1.play();
}

function truet(){
  m.visible=true
     i.visible=true
     f.visible=true
     j.visible=true
     h.visible=true
     l.visible=true
     n.visible=true
  

}

function crate(){
  pista15=createSprite(windowWidth/2-230,windowHeight/2-550,20,1000)
pista15.shapeColor="red"
pista15.velocityY=3
pista15.addImage(pistavertImg)
pista15.scale=1.46
pista17=createSprite(windowWidth/2-420,windowHeight/2-1050,400,20)
pista17.velocityY=3
pista17.addImage(limite2)
pista19=createSprite(windowWidth/2-610,windowHeight/2-1450,20,800)
pista19.velocityY=3
pista19.addImage(pistavertImg)
pista19.scale=1.2
pista21=createSprite(windowWidth/2-300,windowHeight/2-1855,600,20)
pista21.velocityY=3
pista21.addImage(limite4)
pista21.scale=0.9

pista23=createSprite(windowWidth/2,windowHeight/2-1913,20,140)
pista23.velocityY=3
pista23.addImage(limite5img)
pista23.scale=0.32   
pista25=createSprite(windowWidth/2-300,windowHeight/2-1975,600,20)
pista25.velocityY=3
pista25.addImage(limite4)
pista25.scale=0.9

pista27=createSprite(windowWidth/2-600,windowHeight/2-2320,20,700)
pista27.velocityY=3
pista27.addImage(pistavertImg)
pista29=createSprite(windowWidth/2-200,windowHeight/2-2660,800,20)
pista29.velocityY=3
pista29.addImage(limite4)
pista29.scale=1.17
pista31=createSprite(windowWidth/2+200,windowHeight/2-2840,20,400)
pista31.velocityY=3
pista31.addImage(pistavertImg)
pista31.scale=0.499999999999


//par derecho
pista16=createSprite(windowWidth/2+230,windowHeight/2-750,20,1400)
pista16.velocityY=3

pista16.addImage(pistavertImg)
pista16.scale=2.05
pista18=createSprite(windowWidth/2+15,windowHeight/2-1450,450,20)
pista18.velocityY=3
pista18.addImage(limite2)
pista18.scale=1.1
pista20=createSprite(windowWidth/2-200,windowHeight/2-1530,20,170)
pista20.velocityY=3
pista20.addImage(limite5img)
pista20.scale=0.43
pista22=createSprite(windowWidth/2+90,windowHeight/2-1610,600,20)
pista22.velocityY=3
pista22.addImage(limite4)
pista22.scale=0.85
pista24=createSprite(windowWidth/2+380,windowHeight/2-1903,20,600)
pista24.velocityY=3
pista24.scale=0.86
pista24.addImage(pistavertImg)
pista26=createSprite(windowWidth/2+90,windowHeight/2-2200,600,20)
pista26.velocityY=3
pista26.addImage(limite4)
pista26.scale=0.86
pista28=createSprite(windowWidth/2-200,windowHeight/2-2300,20,200)
pista28.velocityY=3
pista28.addImage(limite5img)
pista28.scale=0.55
pista30=createSprite(windowWidth/2+190,windowHeight/2-2400,800,20)
pista30.velocityY=3
pista30.addImage(limite4)
pista30.scale=1.15
pista32=createSprite(windowWidth/2+580,windowHeight/2-2700,20,650)
pista32.velocityY=3
pista32.addImage(pistavertImg)
pista32.scale=0.9

gradas2=createSprite(windowWidth/2-70,windowHeight/2-3170)
gradas2.addImage(gradas2img)
gradas2.velocityY=3
gradas2.scale=2.3



terre=createSprite(windowWidth/2+760,windowHeight/2-80)
terre.addImage(tierraimg)
terre.velocityY=3
terre.scale=1.3
terre2=createSprite(windowWidth/2-760,windowHeight/2-80)
terre2.addImage(tierraimg)
terre2.velocityY=3
terre2.scale=1.3

meta3=createSprite(windowWidth/2,windowHeight/2-30,200,30)
meta3.velocityY=3
meta3.addImage(metaimg2)
meta3.scale=0.8

meta4=createSprite(windowWidth/2+390,windowHeight/2-3030,200,30)
meta4.shapeColor="red"
meta4.velocityY=3
meta4.addImage(metaimg2)
meta4.scale=0.67 
a=createSprite(windowWidth/2+390,windowHeight/2-3150,400,10)
a.velocityY=3

player2=createSprite(windowWidth/2,windowHeight/2+50)

player2.addImage(playerImg)
player2.scale=0.2
p1=createSprite(windowWidth/2-30,windowHeight/2+50,20,150)
    p1.addImage(p1img)
    p1.setCollider("rectangle",0,0,20,150)
    p1.scale=0.15
    
p2=createSprite(windowWidth/2-30,windowHeight/2+150)
p2.addImage(p2img)
p2.setCollider("rectangle",0,0,18,13)

p2.scale=0.18
p6=createSprite(windowWidth/2,windowHeight/2+150)
p6.addImage(p6img)
p6.setCollider("rectangle",0,0,18,13)

p6.scale=0.127
Backg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
Backg.visible=false
re=createSprite(windowWidth/2,windowWidth/2-50)
re.addImage(reloadimg)

Fondop=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
Fondop.visible=false

trof=createSprite(windowWidth/2-550,windowHeight/2+170)
trof.addImage(troimg)
trof.scale=2
trof.visible=false
TrofDer=createSprite(windowWidth/2+550,windowHeight/2+170)
TrofDer.addImage(tro2img)
TrofDer.scale=2
TrofDer.visible=false
congrats=createSprite(windowWidth/2-50,windowHeight/2-200)
congrats.addImage(congrimg)
congrats.scale=2
congrats.visible=false
}

