import processing.serial.*;

Serial myPort;
float myValue;
float poti1;
float poti2;

void setup(){
  size(500,500);
  printArray(Serial.list());

  myPort = new Serial(this, Serial.list()[3], 9600);
}

void draw(){
  while (myPort.available() > 0){
    String inBuffer = myPort.readStringUntil(10);
    println("available");

    if (inBuffer != null && inBuffer != ""){

        String[] receivedValues = split(inBuffer, ",");

        if (receivedValues.length == 2){
          poti1 = float(receivedValues[0]);
          poti2 = float(receivedValues[1]);
        }

        println(inBuffer);
        myValue = float(inBuffer);
        background(myValue,0,0);
    }
  }
}
