int buttonState;

void setup() {
  pinMode(12,INPUT);
  pinMode(11, OUTPUT);
}

void loop() {
  buttonState = digitalRead(12);

  /*if(buttonState == HIGH){
    digitalWrite(11, HIGH);
    }else{
    digitalWrite(11,LOW);  
    }*/

   digitalWrite(11, !digitalRead(12));
}
