const obj = {
  name: "mahdi",
  mobile: "09305377471",
};

for (const item in obj) {
  if(obj[item] === "mahdi")
  console.log(item);
}

console.log(obj);
