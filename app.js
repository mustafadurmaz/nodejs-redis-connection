const redis = require("redis");
const client = redis.createClient();

//redis connection
client.on("connect", function () {
  console.log("Connected!");
});

client.on("error", function (error) {
  console.log("Not Connected!", error);
});

//set : user_name key'ini oluşturur
client.set("user_name", "mustafa", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log(message);
});

//get : user_name key'ini çağırır
client.get("user_name", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log(message);
});

//exists : user_name key'inin olup olmadığını kontrol eder
client.exists("user_name", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log(message);
});

//del : user_name key'ini siler
client.del("user_name", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log(message);
});

//append : user_name key'inin devamına ekler
client.append("user_name", "kemal", (error, message) => {
  if (error) {
    console.log(error);
  }
  console.log(message);
});

client.on("message", (channel, message) => {
  console.log(`${channel} isimli kanala ${message} geldi`);
});

client.subscribe("phantom");


