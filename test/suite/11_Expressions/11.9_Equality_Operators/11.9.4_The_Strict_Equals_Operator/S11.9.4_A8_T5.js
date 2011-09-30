// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(x) is different from Type(y), return false
 *
 * @path 11_Expressions/11.9_Equality_Operators/11.9.4_The_Strict_Equals_Operator/S11.9.4_A8_T5.js
 * @description Checking with such x and y that either x or y is primitive string and the other is primitive number
 */

//CHECK#1
try {
  throw 1;
} catch(e) {
  if (e === "1") {
    $ERROR('#1: throw 1 !== "1"');
  }
}

//CHECK#2
try {
  throw "1";
} catch(e) {
  if (1 === e) {
    $ERROR('#2: 1 !== throw "1"');
  }
} 
