fetch("data/response.json")                             //  Fetching the data from the JSON file
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    rates = data.rates;                                 // Extract the currency rates
    difNOK = 1 / rates["NOK"];                          // Get the difference (1 EUR = 10.44 NOK -> 1 NOK = 0.10 EUR (1/10.44) 
    difUSD = 1 / rates["USD"];              
    difJPY = 1 / rates["JPY"];
    difEUR = 1 / rates["EUR"]; // 1
    difGBP = 1 / rates["GBP"];
    difRUB = 1 / rates["RUB"];
    difCNY = 1 / rates["CNY"];
    difINR = 1 / rates["INR"];
  });

$("#NOK").on("keyup", function () {                     // When the NOK field gets an input                      |
  Color("NOK");                                         // Color it to show current base currency                v
  $(".chosenCurrency").text("NOK");                     // Change all currencies bottom span class to NOK (1.00 NOK = 0.11 USD)
  $(".to_nok").text((difNOK / difNOK).toFixed(2));      
  $(".to_usd").text((difNOK / difUSD).toFixed(2));      // To get USD from NOK we simply divide the difference from the EUR (0.10 / 0.85) -> 1.00 NOK = 0.12 USD
  $(".to_jpy").text((difNOK / difJPY).toFixed(2));      
  $(".to_eur").text((difNOK / difEUR).toFixed(2));                                            
  $(".to_gbp").text((difNOK / difGBP).toFixed(2));
  $(".to_rub").text((difNOK / difRUB).toFixed(2));
  $(".to_cny").text((difNOK / difCNY).toFixed(2));
  $(".to_inr").text((difNOK / difINR).toFixed(2));
  document.getElementById("USD").value = ((this.value * difNOK) /difUSD).toFixed(2); // To get currency conversion of the input, we multiply this input with the difference for each currency
  document.getElementById("JPY").value = ((this.value * difNOK) /difJPY).toFixed(2); // Insert 100 in NOK -> 100 * difNOK / difJPY -> 1244.14 Yen
  document.getElementById("EUR").value = ((this.value * difNOK) /difEUR).toFixed(2);
  document.getElementById("GBP").value = ((this.value * difNOK) /difGBP).toFixed(2);
  document.getElementById("RUB").value = ((this.value * difNOK) /difRUB).toFixed(2);
  document.getElementById("CNY").value = ((this.value * difNOK) /difCNY).toFixed(2);
  document.getElementById("INR").value = ((this.value * difNOK) /difINR).toFixed(2);
});

$("#USD").on("keyup", function () {
  $(".chosenCurrency").text("USD");
  Color("USD");
  $(".to_nok").text((difUSD / difNOK).toFixed(2));
  $(".to_usd").text((difUSD / difUSD).toFixed(2));
  $(".to_jpy").text((difUSD / difJPY).toFixed(2));
  $(".to_eur").text((difUSD / difEUR).toFixed(2));
  $(".to_gbp").text((difUSD / difGBP).toFixed(2));
  $(".to_rub").text((difUSD / difRUB).toFixed(2));
  $(".to_cny").text((difUSD / difCNY).toFixed(2));
  $(".to_inr").text((difUSD / difINR).toFixed(2));
  document.getElementById("NOK").value = (
    (this.value * difUSD) /
    difNOK
  ).toFixed(2);
  document.getElementById("JPY").value = (
    (this.value * difUSD) /
    difJPY
  ).toFixed(2);
  document.getElementById("EUR").value = (
    (this.value * difUSD) /
    difEUR
  ).toFixed(2);
  document.getElementById("GBP").value = (
    (this.value * difUSD) /
    difGBP
  ).toFixed(2);
  document.getElementById("RUB").value = (
    (this.value * difUSD) /
    difRUB
  ).toFixed(2);
  document.getElementById("CNY").value = (
    (this.value * difUSD) /
    difCNY
  ).toFixed(2);
  document.getElementById("INR").value = (
    (this.value * difUSD) /
    difINR
  ).toFixed(2);
});

$("#JPY").on("keyup", function () {
  $(".chosenCurrency").text("JPY");
  Color("JPY");
  $(".to_nok").text((difJPY / difNOK).toFixed(2));
  $(".to_usd").text((difJPY / difUSD).toFixed(2));
  $(".to_jpy").text((difJPY / difJPY).toFixed(2));
  $(".to_eur").text((difJPY / difEUR).toFixed(2));
  $(".to_gbp").text((difJPY / difGBP).toFixed(2));
  $(".to_rub").text((difJPY / difRUB).toFixed(2));
  $(".to_cny").text((difJPY / difCNY).toFixed(2));
  $(".to_inr").text((difJPY / difINR).toFixed(2));
  document.getElementById("NOK").value = (
    (this.value * difJPY) /
    difNOK
  ).toFixed(2);
  document.getElementById("USD").value = (
    (this.value * difJPY) /
    difUSD
  ).toFixed(2);
  document.getElementById("EUR").value = (
    (this.value * difJPY) /
    difEUR
  ).toFixed(2);
  document.getElementById("GBP").value = (
    (this.value * difJPY) /
    difGBP
  ).toFixed(2);
  document.getElementById("RUB").value = (
    (this.value * difJPY) /
    difRUB
  ).toFixed(2);
  document.getElementById("CNY").value = (
    (this.value * difJPY) /
    difCNY
  ).toFixed(2);
  document.getElementById("INR").value = (
    (this.value * difJPY) /
    difINR
  ).toFixed(2);
});
$("#EUR").on("keyup", function () {
  $(".chosenCurrency").text("EUR");
  Color("EUR");
  $(".to_nok").text((difEUR / difNOK).toFixed(2));
  $(".to_usd").text((difEUR / difUSD).toFixed(2));
  $(".to_jpy").text((difEUR / difJPY).toFixed(2));
  $(".to_eur").text((difEUR / difEUR).toFixed(2));
  $(".to_gbp").text((difEUR / difGBP).toFixed(2));
  $(".to_rub").text((difEUR / difRUB).toFixed(2));
  $(".to_cny").text((difEUR / difCNY).toFixed(2));
  $(".to_inr").text((difEUR / difINR).toFixed(2));
  document.getElementById("NOK").value = (
    (this.value * difEUR) /
    difNOK
  ).toFixed(2);
  document.getElementById("USD").value = (
    (this.value * difEUR) /
    difUSD
  ).toFixed(2);
  document.getElementById("JPY").value = (
    (this.value * difEUR) /
    difJPY
  ).toFixed(2);
  document.getElementById("GBP").value = (
    (this.value * difEUR) /
    difGBP
  ).toFixed(2);
  document.getElementById("RUB").value = (
    (this.value * difEUR) /
    difRUB
  ).toFixed(2);
  document.getElementById("CNY").value = (
    (this.value * difEUR) /
    difCNY
  ).toFixed(2);
  document.getElementById("INR").value = (
    (this.value * difEUR) /
    difINR
  ).toFixed(2);
});
$("#GBP").on("keyup", function () {
  $(".chosenCurrency").text("GBP");
  Color("GBP");
  $(".to_nok").text((difGBP / difNOK).toFixed(2));
  $(".to_usd").text((difGBP / difUSD).toFixed(2));
  $(".to_jpy").text((difGBP / difJPY).toFixed(2));
  $(".to_eur").text((difGBP / difEUR).toFixed(2));
  $(".to_gbp").text((difGBP / difGBP).toFixed(2));
  $(".to_rub").text((difGBP / difRUB).toFixed(2));
  $(".to_cny").text((difGBP / difCNY).toFixed(2));
  $(".to_inr").text((difGBP / difINR).toFixed(2));
  document.getElementById("NOK").value = (
    (this.value * difGBP) /
    difNOK
  ).toFixed(2);
  document.getElementById("USD").value = (
    (this.value * difGBP) /
    difUSD
  ).toFixed(2);
  document.getElementById("JPY").value = (
    (this.value * difGBP) /
    difJPY
  ).toFixed(2);
  document.getElementById("EUR").value = (
    (this.value * difGBP) /
    difEUR
  ).toFixed(2);
  document.getElementById("RUB").value = (
    (this.value * difGBP) /
    difRUB
  ).toFixed(2);
  document.getElementById("CNY").value = (
    (this.value * difGBP) /
    difCNY
  ).toFixed(2);
  document.getElementById("INR").value = (
    (this.value * difGBP) /
    difINR
  ).toFixed(2);
});
$("#RUB").on("keyup", function () {
  $(".chosenCurrency").text("RUB");
  Color("RUB");
  $(".to_nok").text((difRUB / difNOK).toFixed(2));
  $(".to_usd").text((difRUB / difUSD).toFixed(2));
  $(".to_jpy").text((difRUB / difJPY).toFixed(2));
  $(".to_eur").text((difRUB / difEUR).toFixed(2));
  $(".to_gbp").text((difRUB / difGBP).toFixed(2));
  $(".to_rub").text((difRUB / difRUB).toFixed(2));
  $(".to_cny").text((difRUB / difCNY).toFixed(2));
  $(".to_inr").text((difRUB / difINR).toFixed(2));
  document.getElementById("NOK").value = (
    (this.value * difRUB) /
    difNOK
  ).toFixed(2);
  document.getElementById("USD").value = (
    (this.value * difRUB) /
    difUSD
  ).toFixed(2);
  document.getElementById("JPY").value = (
    (this.value * difRUB) /
    difJPY
  ).toFixed(2);
  document.getElementById("EUR").value = (
    (this.value * difRUB) /
    difEUR
  ).toFixed(2);
  document.getElementById("GBP").value = (
    (this.value * difRUB) /
    difGBP
  ).toFixed(2);
  document.getElementById("CNY").value = (
    (this.value * difRUB) /
    difCNY
  ).toFixed(2);
  document.getElementById("INR").value = (
    (this.value * difRUB) /
    difINR
  ).toFixed(2);
});
$("#CNY").on("keyup", function () {
  $(".chosenCurrency").text("CNY");
  Color("CNY");
  $(".to_nok").text((difCNY / difNOK).toFixed(2));
  $(".to_usd").text((difCNY / difUSD).toFixed(2));
  $(".to_jpy").text((difCNY / difJPY).toFixed(2));
  $(".to_eur").text((difCNY / difEUR).toFixed(2));
  $(".to_gbp").text((difCNY / difGBP).toFixed(2));
  $(".to_rub").text((difCNY / difRUB).toFixed(2));
  $(".to_cny").text((difCNY / difCNY).toFixed(2));
  $(".to_inr").text((difCNY / difINR).toFixed(2));
  document.getElementById("NOK").value = (
    (this.value * difCNY) /
    difNOK
  ).toFixed(2);
  document.getElementById("USD").value = (
    (this.value * difCNY) /
    difUSD
  ).toFixed(2);
  document.getElementById("JPY").value = (
    (this.value * difCNY) /
    difJPY
  ).toFixed(2);
  document.getElementById("EUR").value = (
    (this.value * difCNY) /
    difEUR
  ).toFixed(2);
  document.getElementById("GBP").value = (
    (this.value * difCNY) /
    difGBP
  ).toFixed(2);
  document.getElementById("RUB").value = (
    (this.value * difCNY) /
    difRUB
  ).toFixed(2);
  document.getElementById("INR").value = (
    (this.value * difCNY) /
    difINR
  ).toFixed(2);
});
$("#INR").on("keyup", function () {
  $(".chosenCurrency").text("INR");
  Color("INR");
  $(".to_nok").text((difINR / difNOK).toFixed(2));
  $(".to_usd").text((difINR / difUSD).toFixed(2));
  $(".to_jpy").text((difINR / difJPY).toFixed(2));
  $(".to_eur").text((difINR / difEUR).toFixed(2));
  $(".to_gbp").text((difINR / difGBP).toFixed(2));
  $(".to_rub").text((difINR / difRUB).toFixed(2));
  $(".to_cny").text((difINR / difCNY).toFixed(2));
  $(".to_inr").text((difINR / difINR).toFixed(2));
  document.getElementById("NOK").value = (
    (this.value * difCNY) /
    difNOK
  ).toFixed(2);
  document.getElementById("USD").value = (
    (this.value * difCNY) /
    difUSD
  ).toFixed(2);
  document.getElementById("JPY").value = (
    (this.value * difCNY) /
    difJPY
  ).toFixed(2);
  document.getElementById("EUR").value = (
    (this.value * difCNY) /
    difEUR
  ).toFixed(2);
  document.getElementById("GBP").value = (
    (this.value * difCNY) /
    difGBP
  ).toFixed(2);
  document.getElementById("RUB").value = (
    (this.value * difCNY) /
    difRUB
  ).toFixed(2);
  document.getElementById("CNY").value = (
    (this.value * difCNY) /
    difCNY
  ).toFixed(2);
});

function Color(currency) {                                                          // Takes in the current currency to color it
  if (currency == "NOK") {                                                          // If the currency is = NOK
    document.getElementById("currency NOK").style.backgroundColor = "#264d73";      // Set NOK's background color to #264d73 (Dark moderate blue) -> https://www.colorhexa.com/264d73
  } else {                                                                          // If the current currency is not NOK
    document.getElementById("currency NOK").style.backgroundColor = "#2d2d37";      // Set it to the default color #2d2d37 (Very dark grayish blue)
  }
  if (currency == "USD") {
    document.getElementById("currency USD").style.backgroundColor = "#264d73";
  } else {
    document.getElementById("currency USD").style.backgroundColor = "#2d2d37";
  }
  if (currency == "JPY") {
    document.getElementById("currency JPY").style.backgroundColor = "#264d73";
  } else {
    document.getElementById("currency JPY").style.backgroundColor = "#2d2d37";
  }
  if (currency == "EUR") {
    document.getElementById("currency EUR").style.backgroundColor = "#264d73";
  } else {
    document.getElementById("currency EUR").style.backgroundColor = "#2d2d37";
  }
  if (currency == "GBP") {
    document.getElementById("currency GBP").style.backgroundColor = "#264d73";
  } else {
    document.getElementById("currency GBP").style.backgroundColor = "#2d2d37";
  }
  if (currency == "RUB") {
    document.getElementById("currency RUB").style.backgroundColor = "#264d73";
  } else {
    document.getElementById("currency RUB").style.backgroundColor = "#2d2d37";
  }
  if (currency == "CNY") {
    document.getElementById("currency CNY").style.backgroundColor = "#264d73";
  } else {
    document.getElementById("currency CNY").style.backgroundColor = "#2d2d37";
  }
  if (currency == "INR") {
    document.getElementById("currency INR").style.backgroundColor = "#264d73";
  } else {
    document.getElementById("currency INR").style.backgroundColor = "#2d2d37";
  }
}