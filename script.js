function isSameType(value1, value2) {
  //your js code here
	const isNaN1 = Number.isNaN(value1);
  const isNaN2 = Number.isNaN(value2);

  // If one is NaN and the other is not -> false
  if (isNaN1 !== isNaN2) {
    return false;
  }

  // If both are NaN -> true
  if (isNaN1 && isNaN2) {
    return true;
  }

  // Otherwise check type equality
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
