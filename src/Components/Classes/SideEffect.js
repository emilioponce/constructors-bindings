import GrandFather from './GrandFather';

class SideEffect extends GrandFather {
  // Theoretically replacing the printMySkills (arrow prop) method of GrandFather... but...
  printMySkills() {
    console.log(
      `Hi ${SideEffect.name}, this is overriding the GrandFather method`
    );
  }
  // If this is defined as an arrow function, it will execute this method (of this class)
}

export default SideEffect;
