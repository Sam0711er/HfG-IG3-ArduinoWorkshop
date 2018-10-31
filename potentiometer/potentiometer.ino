void setup() {
  // put your setup code here, to run once:
  pinMode(10,OUTPUT);
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  int potiValue = analogRead(A0); //value of A0 (0-1023)

  digitalWrite(10, HIGH);
  delay(potiValue);
  digitalWrite(10, LOW);
  delay(potiValue);

  Serial.println(potiValue);
}
