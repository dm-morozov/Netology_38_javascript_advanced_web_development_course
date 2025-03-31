class Example {
  #privateMethod() {
    return 'Это приватный метод!';
  }

  publicMethod() {
    return this.#privateMethod();
  }
}

const obj = new Example();
console.log(obj.publicMethod()); // ✅ "Это приватный метод!"
