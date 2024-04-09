// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

function findVolumeClicked() {
  // List the 3 dimensions we will recieve from the user as variables 
  // Use parseFloat so the user can input a decimal
  const lengthInput = parseFloat(document.getElementById("length-entered").value)
  const widthInput = parseFloat(document.getElementById("width-entered").value)
  const heightInput = parseFloat(document.getElementById("height-entered").value)
  // Create a variable named "volume" which calculates all of the users inputs
  const volume = (lengthInput * widthInput * heightInput) / 3
  // Ouput the answer to the user in the class "answer"
  document.getElementById("answer").innerHTML = "The volume is: " + volume.toFixed(2) + " mm<sup>3"
}
