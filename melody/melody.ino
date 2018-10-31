int counter= 1000;
boolean countUpwards = true;

int lightCounter = 12;
boolean lightCountUpwards = false;

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
/*tone(5, 10000);*/   


  tone(5, counter);

 //Flip-Flop mechanic
   if(counter == 3000) countUpwards = false;
   if(counter == 1000) countUpwards = true;

   if(countUpwards) counter++;
      else counter--;
   
}
