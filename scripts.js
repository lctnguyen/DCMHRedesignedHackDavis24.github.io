let statN1 = "101";
let statN2 = "55";
let statN3 = "89%";

let statT1 = "MEALS PROVIDED... AND COUNTING";
let statT2 = "SERVICES PROVIDED TO LOW-INCOME AND HOMELESS";
let statT3 = "UNITS OF HOUSING PROVIDED TO FAMILIES AND INDIVIDUALS";

let mainPicMsg = "Monetary donations are not the only way to help us in our mission to provide low-income and\
                  homeless individuals and families with housing, food and human services to help them rebuild\
                  their lives.";

let quote = "\"Instilling Hope and Saving Lives\"";

let storyN1 = "Ricardo";
let storyC1 = "\"DCMH gave me the structure to help me rebuild... it helped me releanre \
              how to live,\" said Ricardo, who now lives in permanent supported housing \
              at Paul's Place. \"Everyone at DCMH invested in me, they saved my life.\"";

              "\"DCM gave me the opportunity to do things around here that I found I actually have skills with \
              like organization. DCM pushed me when I was becoming too comfortable even if I didn't feel like \
              it was time!\"";

let storyN2 = "Vanessa";
let storyC2 = "\"DCM gave me the opportunity to do things around here that I found I actually have skills with \
              like organization. DCM pushed me when I was becoming too comfortable even if I didn't feel like \
              it was time!\"";
let newsTitle = "Bill Pride Announces Retirement From DCMH";
let newsContent = "Davis Community Meals and Housing (DCMH) executive director Bill Pride \
                  has announced he will retire after leading the nonprofit organization for \
                  more than 22 years, the last five being years of exponential growth. \n \
                  \“I am humbled by what we, as a community, have accomplished since our \
                  founding in 1991, and particularly by what we have done in the last \
                  five years,\” Pride said in announcing his retirement.";

let volunteer = "Davis Community Meals & Housing needs your help! We provide \
                more than 700 meals a month to those in need of assistance \
                through our programs. It could not have been done without our \
                wonderful community and volunteers. Sign up to become a volunteer!"

let endInfo = "2024 Davis Community Meals and Housing";

function Loading() {
  document.getElementById("StatN1").innerHTML = statN1;
  document.getElementById("StatN2").innerHTML = statN2;
  document.getElementById("StatN3").innerHTML = statN3;

  document.getElementById("StatT1").innerHTML = statT1;
  document.getElementById("StatT2").innerHTML = statT2;
  document.getElementById("StatT3").innerHTML = statT3;

  document.getElementById("mainPicMsg").innerHTML = mainPicMsg;

  document.getElementById("quote").innerHTML = quote;

  document.getElementById("storyN1").innerHTML = storyN1;
  document.getElementById("storyC1").innerHTML = storyC1;

  document.getElementById("storyN2").innerHTML = storyN2;
  document.getElementById("storyC2").innerHTML = storyC2;

  document.getElementById("newsTitle").innerHTML = newsTitle;
  document.getElementById("newsContent").innerHTML = newsContent;

  document.getElementById("volunteer").innerHTML = volunteer;

  document.getElementById("endInfo").innerHTML = endInfo;
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}