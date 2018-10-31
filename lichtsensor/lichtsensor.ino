#include <Servo.h>



void setup() {
  // put your setup code here, to run once:
  pinMode(2,OUTPUT);
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  int lightValue = analogRead(A0); 

  if (lightValue > 200) {
    digitalWrite(2,LOW);
    digitalWrite(12,LOW);

   }else{
    digitalWrite(2,HIGH);
    digitalWrite(12,HIGH);
}
 

  Serial.println(lightValue);
}
