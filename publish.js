const redis = require("redis");
const client = redis.createClient();

client.on("connect", function () {
  console.log("Connected!");
});

client.on("error", function (error) {
  console.log("Not Connected!", error);
});

client.publish(
  "phantom",
  "Mesaj publish dosyasından gönderildi",
  (err, number) => {
    console.log(`Mesaj ${number} kişiye gönderildi`);
  }
);
