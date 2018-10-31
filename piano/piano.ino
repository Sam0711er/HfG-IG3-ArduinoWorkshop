int buttonState;
double counter = 1000;
boolean countUpwards = true;

void setup() {
  pinMode(2,OUTPUT);
  pinMode(12,INPUT);
  pinMode(10, OUTPUT);
}

void loop() {
  
  
  
  buttonState = digitalRead(12);
  
  if(buttonState == HIGH){
    digitalWrite(10,HIGH);
    delay(100);
    digitalWrite(10,LOW);
    delay(100);
    
      tone(2, counter);

      if(counter >= 3000){
        countUpwards = false;
      }
      if(counter <= 1000){
        countUpwards = true;
      }

      if(countUpwards){
        counter+=200;
      }else{
        counter-=200;
      }
    
    }else{
      noTone(2); 
      digitalWrite(10, LOW);
    }
}
