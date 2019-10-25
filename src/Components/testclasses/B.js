import A from './A';

class B extends A {
  holaB() {
    super.hola();
  }
  holaBArrow() {
    super.holaArrow();
  }
}

export default B;
