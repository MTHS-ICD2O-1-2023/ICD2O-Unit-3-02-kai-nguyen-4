// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Mar 2024
// This file contains the JS functions for index.html
"use strict"

function findVolumeClicked() {
  const lengthInput = parseFloat(document.getElementById("length-entered").value)
  const widthInput = parseFloat(document.getElementById("width-entered").value)
  const heightInput = parseFloat(document.getElementById("height-entered").value)
  const volume = (lengthInput * widthInput * heightInput) / 3
  document.getElementById("answer").innerHTML = "The volume is: " + volume.toFixed(2) + " mm<sup>3"
}
