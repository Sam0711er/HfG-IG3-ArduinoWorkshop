int counter= 12;
boolean countUpwards = false;

void setup() {
  pinMode(12, OUTPUT); 
  pinMode(11, OUTPUT); 
  pinMode(10, OUTPUT); 
  pinMode(9, OUTPUT); 
  pinMode(8 , OUTPUT); 
  pinMode(7 , OUTPUT); 
  pinMode(6 , OUTPUT); 
  
}

void loop() {
   for( int a = 6; a < 13; a++){
      digitalWrite(a, LOW); //all led off
   }      

   //one led on
   digitalWrite(counter, HIGH);
   delay(30);

   //Flip-Flop mechanic
   if(counter == 12) countUpwards = false;
   if(counter == 6) countUpwards = true;

   if(countUpwards) counter++;
      else counter--;
   
   
}
