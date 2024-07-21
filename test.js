let obj = {
  name: "mahdi",
  mobile: "09305377471",
};

obj = {
  ...({ mobile: "09305377471", mobiles: ["09305377471", "09301727471"] }, obj),
};

console.log(obj);
