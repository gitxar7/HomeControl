#include <WiFi.h>

NetworkServer server = NetworkServer(80);

void setup() {
  Serial.begin(115200);
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);


  Serial.print("Connecting...");
  WiFi.begin("WiFi1", "123456");

  while (WiFi.status() != WL_CONNECTED) {
    // digitalWrite(12, HIGH);
    // delay(200);
    Serial.print(".");
    // digitalWrite(12, LOW);
    delay(200);
  }

  Serial.println();
  Serial.println("WiFi Connected");

  server.begin();
  Serial.println("Server Started");
  Serial.println(WiFi.localIP());
}

void loop() {
  NetworkClient client = server.accept();

  if (client) {

    String requestText = "";

    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        requestText += c;

        if (c == '\n') {
          Serial.println(requestText);
          // Control Light 1 (Pin 12)
          if (requestText.indexOf("light1=on") != -1) {
            digitalWrite(12, HIGH);
          } else if (requestText.indexOf("light1=off") != -1) {
            digitalWrite(12, LOW);
          }

          // Control Light 2 (Pin 13)
          if (requestText.indexOf("light2=on") != -1) {
            digitalWrite(13, HIGH);
          } else if (requestText.indexOf("light2=off") != -1) {
            digitalWrite(13, LOW);
          }

          break;
        }
        // Serial.write(c);
      }
    }
  }
  client.stop();
}
