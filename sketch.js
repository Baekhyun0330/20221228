var song
var songIsplay=false
var amp
var vol=0
var m_x,m_y
var music_btn,mouse_btn,Speech_btn
var mosueIsplay=true
var myRec = new p5.SpeechRec();
var result
var face_x = []
var face_y = []
var face_size = []

{
  for (var i=0 ; i< 5; i++){
  face_size[i] = random(0,200)
  face_x [i]= random(0,width)
  face_y [i] = random(0,height)
 }
}

function preload(){
  song = loadSound("[COVER] KIM CHAEWON - First Love (원곡 Hikaru Utada).mp3");
}
  
function setup() {

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  background("#ffc8dd")
  music_btn = createButton("音樂跳舞")
  music_btn.position(10,10)
  music_btn.size(350, 150);
  music_btn.style('background-color', '#fcd5ce');
  music_btn.style('font-size', '44px');
  music_btn.style('color', 'white');
  music_btn.mousePressed(music_btn_pressed)
 
  mouse_btn = createButton("滑鼠移動")
  mouse_btn.position(400,10)
  mouse_btn.size(350, 150);
  mouse_btn.style('background-color', '#f9dcc4');
  mouse_btn.style('font-size', '44px');
  mouse_btn.style('color', 'white');
  mouse_btn.mousePressed(mouse_btn_pressed)
 
  Speech_btn = createButton("語音辨識(跳舞/不要跳)")
  Speech_btn.position(800,10)
  Speech_btn.size(350, 150);
  Speech_btn.style('background-color', '#fec89a');
  Speech_btn.style('font-size', '33px');
  Speech_btn.style('color', 'white');
  Speech_btn.mousePressed(Speech_btn_pressed)
 
 }
 for (var i=0 ; i<7 ; i++){
  face_size[i] = random(0,400)
  face_x [i]= random(0,width)
  face_y [i] = random(0,height)
 }
 
 function music_btn_pressed(){
  song.stop()
  song.play()
  songIsplay = true
  mosueIsplay = false
  amp=new p5.Amplitude()  
}

function mouse_btn_pressed(){
  song.pause()
  mouseIsplay = true
  songIsplay = false

}

function Speech_btn_pressed(){
  myRec.onResult = showResult;
  myRec.start();  

}

function showResult()
	{
		if(myRec.resultValue==true) {
			// background(192, 255, 192);
			// text(myRec.resultString, width/2, height/2);
      push()
        translate(0,0)
        background(192, 255, 192);
        fill(255,0,0)
        textStyle("italic")
        text(myRec.resultString,1200,10);
        text(myRec.resultString,0, height/2);
      pop()
      result = myRec.resultString
      if(myRec.resultString==="跳舞")
      {
        music_btn_pressed()
      }
      if(myRec.resultString==="不要跳")
      {
        // song.pause()
        // mosueIsplay = true
        // songIsplay = false
          mouse_btn_pressed()
        }
		}
	}

  function draw(clr) {
    push()
    translate(width/2,height/2)
    fill(0)
    ellipse(-120,-200,120)
    ellipse(120,-200,120)
    fill("#FFFFFF")
    ellipse(0,0,400)//臉
    fill(0)
    ellipse(0,0,100,60)//鼻子橢圓
    fill(100)
    //ellipse(-30,0,30)//左鼻孔
    //ellipse(30,0,30)//右鼻孔
    
    ellipse(-70,-80,60)//左眼
    fill(0)
    ellipse(-70+mouseX/80,-90+mouseY/60,40)//右眼
    fill(100)
    ellipse(70,-80,60)
    fill(0)
    ellipse(70+mouseX/80,-90+mouseY/60,40)
  
    fill("#f4978e")
    arc(0,100,200,100,0,180)
    fill(255)
    if(mouseIsPressed)
    {   
      //mouseIspressed為true，代表有按下滑鼠
      arc(0,99,200,40,0,180)
    }
    else
    {  
       //mouseIspressed為false，代表沒有按下滑鼠
      arc(0,99,200,90,0,180)
    }
  
    noFill()
    pop()
      
  
  }



if(songIsplay){
  vol = amp.getLevel()
  face_x =map(vol,0,1,0,width) 
  face_y= map(vol,0,1,0,height)
}
else
if(mosueIsplay)
{
  face_x = mouseX
  face_y= mouseY

}

function mouse_btn_pressed(){
  song.pause()
  songIsplay = false

}

function showResult()
	{
		if(myRec.resultValue==true) {
            //顯示辨識文字
          push()
            translate(0,0)
            background(192, 255, 192);
            fill(255,0,0)
            textStyle("italic")
            text(myRec.resultString,1200,10);
            text(myRec.resultString,0, height/2);
          pop()
        //=======================
          result = myRec.resultString
          if(myRec.resultString==="跳舞")
          {
            music_btn_pressed()
          }
          if(myRec.resultString==="不要跳")
          {
            song.pause()
            mosueIsplay = true
            songIsplay = false
            }
		}
	}
