#include <Servo.h>

Servo myServo;
int servoVal = 0;

void setup() {
  // put your setup code here, to run once:
  pinMode(2,OUTPUT);
  Serial.begin(9600);

  myServo.attach(12);
}

void loop() {
  // put your main code here, to run repeatedly:
  int lightValue = analogRead(A0); 

  if (lightValue > 200) {
    digitalWrite(2,LOW);
    //digitalWrite(12,LOW);
    myServo.write(180);
   }else{
    digitalWrite(2,HIGH);
    //digitalWrite(12,HIGH);
    myServo.write(1); 
   }
 

  Serial.println(lightValue);
}
