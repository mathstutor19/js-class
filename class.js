// ES6 class IntBuilder:
class IntBuilder {
  constructor(is) {
    this.is = is;
  }
  log(type) {
    console.log(type, this.is);
  }
  plus(...n) {
    let a = n.reduce((sum, element) => sum + element, 0);
    this.is += a;
    this.log("plus");
    return this;
  }
  minus(...n) {
    let a = n.reduce((sum, element) => sum + element, 0);
    this.is -= a;
    this.log("minus");
    return this;
  }
  multiply(n) {
    this.is *= n;
    this.log("multiply");
    return this;
  }
  divide(n) {
    this.is /= n;
    this.log("divide");
    return this;
  }
  mod(n) {
    this.is %= n;
    this.log("mod");
    return this;
  }
  get() {
    this.log("get");
    return this;
  }
  static random(from, to) {
    return Math.floor(Math.random() * (from - to + 1)) + to;
  }
}
const intBuilder = new IntBuilder(10);
console.log("random", IntBuilder.random(10, 100));
intBuilder.plus(2, 3, 2).minus(1, 2).multiply(2).divide(4).mod(3).get();

// ES5 class StringBuilder
function StringBuilder(str = " ") {
  this.str = str;
}

StringBuilder.prototype.log = function (type) {
  console.log(type, this.str);
};
StringBuilder.prototype.plus = function (...n) {
  this.str = this.str + " " + n.join("").trim();
  this.log("plus");
  return this;
};
StringBuilder.prototype.minus = function (n) {
  this.str = this.str.slice(0, -n);
  this.log("minus");
  return this;
};
StringBuilder.prototype.multiply = function (n) {
  this.str = this.str.repeat(n);
  this.log("multiply");
  return this;
};
StringBuilder.prototype.divide = function (n) {
  let k = Math.floor(this.str.length / n);
  this.str = this.str.slice(0, k);
  this.log("divide");
  return this;
};
StringBuilder.prototype.remove = function (n) {
  this.str = this.str.replaceAll("l", "");
  this.log("remove");
  return this;
};
StringBuilder.prototype.sub = function (a, b) {
  this.str = this.str.substr(a, b);
  this.log("sub");
  return this;
};
StringBuilder.prototype.get = function () {
  this.str = this.str;
  this.log("get");
  return this;
};
let strBuilder = new StringBuilder("Hello");
strBuilder
  .plus(" all", "!")
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove("l")
  .sub(1, 1)
  .get();
