void setup() {
 Serial.begin(9600);
 pinMode(13, OUTPUT); //define pin 13 as output

}

void loop() {
  int poti1=analogRead(A0);
  int poti2=analogRead(A1);
  Serial.print(poti1);
  Serial.print(",");
  Serial.println(poti2);
}
