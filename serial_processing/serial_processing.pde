import processing.serial.*;

Serial myPort;
float myValue;

void setup(){
  size(500,500);
  printArray(Serial.list());
  
  myPort = new Serial(this, Serial.list()[3], 9600);
}

void draw(){
  while (myPort.available() > 0){
    String inBuffer = myPort.readStringUntil(10);
    
    if (inBuffer != null && inBuffer != ""){
        println(inBuffer);
        myValue = float(inBuffer);     
        background(myValue,0,0);
    }
}
}
