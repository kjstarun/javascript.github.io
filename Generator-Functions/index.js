function* generator() {
  console.log("Before 1");
  yield 1;
  console.log("After 1");
  console.log("Before 2");
  yield 2;
  console.log("After 2");
  console.log("Before 3");
  yield 3;
  console.log("After 3");
}

const Obj = generator();
// const Obj2 = generator();

console.log(Obj.next());
console.log(Obj.next());
console.log(Obj.next());
console.log(Obj.next());

function* idGenerator() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

console.log("ID's");

const id = idGenerator();

console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());
console.log(id.next());

console.log("returns");

function* returnGenerator() {
  let id = 1;
  while (true) {
    const nextVal = yield id;
    if (nextVal) {
      id += nextVal;
    } else {
      id++;
    }
  }
}

let check = returnGenerator();

console.log(check.next());
console.log(check.next(2));
console.log(check.next(4));
console.log(check.next());
console.log(check.return(10));
// console.log(check.throw(new Error("failed")));
console.log(check.next());

console.log("Arrays");

function* arrayGenerator(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

const array = arrayGenerator([1,2,3])

console.log(array.next());
console.log(array.next());
console.log(array.return("end"));
console.log(array.next());
