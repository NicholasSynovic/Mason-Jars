import document from "document";

// Global variable
let currentScreen = "main";

// Buttons
let dateIdeas = document.getElementById("dateIdeas");
let year0 = document.getElementById("year0");
let year1 = document.getElementById("year1");
let year2 = document.getElementById("year2");
let year3 = document.getElementById("year3");
let credits = document.getElementById("credits");

// Screens

// Pagintation Buttons


function switchToMainScreen()  {
  document.replaceSync("index.gui");
  currentScreen = "main";
}

function switchToDateIdeasScreen()  {
  document.replaceSync("dateIdeas.gui");
  currentScreen = "dateIdeas";
  }

function switchToYear0Screen()  {
  document.replaceSync("year0.gui");
  currentScreen = "year0";
}

function switchToYear1Screen()  {
  document.replaceSync("year1.gui")
  currentScreen = "year1";
}

function switchToYear2Screen()  {                            
  document.replaceSync("year2.gui")
  currentScreen = "year2";
}

function switchToYear3Screen()  {
  document.replaceSync("year3.gui")
  currentScreen = "year3";
}

function switchToCreditsScreen()  {
  document.replaceSync("credits.gui")
  currentScreen = "credits";
  let container = document.getElementById("container");
  container.value = 0;
}

dateIdeas.onactivate = function(evt)  {
  switchToDateIdeasScreen()
}

year0.onactivate = function(evt)  {
  switchToYear0Screen()
}

year1.onactivate = function(evt)  {
  switchToYear1Screen()
}

year2.onactivate = function(evt)  {
  switchToYear2Screen()
}

year3.onactivate = function(evt)  {
  switchToYear3Screen()
}

credits.onactivate = function(evt)  {
  switchToCreditsScreen()
}