function Items(id: string) {
  return (target: Function) => {
    target.prototype.id = id;
  };
}

@Items("hello")
class Burger {
  id: string;
}

const burger = new Burger();
console.log(burger.id);
