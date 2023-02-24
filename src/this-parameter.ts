// to ensure this has proper parameter
function calculate(this: { value: number }) {
  return this.value * this.value;
}

const data = {
  value: 10,
  calculate,
};

console.log(data.calculate());

export {};
