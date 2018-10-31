int ledPin = 13;


void setup() {
  pinMode(13, OUTPUT); //define pin 13 as output
}

void loop() {
  sos();
}

void sos(){
  s();
  
  o();
  
  s();
  delay(1500);
}

void s(){
  int a;
  for( a = 0; a < 3; a = a + 1 ){
      digitalWrite(ledPin, HIGH); //switch pin 12 on
      delay(100);
      digitalWrite(ledPin, LOW);  //switch pin 12 off
      delay(100);
   }
}

void o(){
  int a;
  for( a = 0; a < 3; a = a + 1 ){
      digitalWrite(ledPin, HIGH); //switch pin 12 on
      delay(1500);
      digitalWrite(ledPin, LOW);  //switch pin 12 off
      delay(100);
   }
}
