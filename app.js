const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "undefined" },
];

let invalid = 0;
function fileter(item) {
  if (Number.isFinite(item.id)) {
    return true;
  }
  invalid++;
  return false;
}
const validId = arr.filter(fileter);
console.log(validId);

console.log("Number of invalid : ", invalid);
