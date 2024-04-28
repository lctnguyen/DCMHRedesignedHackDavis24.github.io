let statN1 = "101";
let statN2 = "55";
let statN3 = "89%";

let statT1 = "MEALS PROVIDED... AND COUNTING";
let statT2 = "SERVICES PROVIDED TO LOW-INCOME AND HOMELESS";
let statT3 = "UNITS OF HOUSING PROVIDED TO FAMILIES AND INDIVIDUALS";

let mainPicMsg = "Monetary donations are not the only way to help us in our mission to provide low-income and\
                  homeless individuals and families with housing, food and human services to help them rebuild\
                  their lives."

let quote = "\"Instilling Hope and Saving Lives\""

function Loading() {
  document.getElementById("StatN1").innerHTML = statN1;
  document.getElementById("StatN2").innerHTML = statN2;
  document.getElementById("StatN3").innerHTML = statN3;

  document.getElementById("StatT1").innerHTML = statT1;
  document.getElementById("StatT2").innerHTML = statT2;
  document.getElementById("StatT3").innerHTML = statT3;

  document.getElementById("mainPicMsg").innerHTML = mainPicMsg;

  document.getElementById("quote").innerHTML = quote;
}