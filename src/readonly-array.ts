const input = [1, 2, 3, 4, 5];

function reverse(input: readonly number[]) {
  //return input.sort().reverse(); // mutable version with error
  return input.slice().sort().reverse();
}

const sorted = reverse(input);

// without readonly
// input => 5,4,3,2,1

// input => 1,2,3,4,5
// sorted => 5,4,3,2,1
