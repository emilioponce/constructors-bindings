import React from 'react';

// import GrandFather from './Classes/GrandFather';
// import Father from './Classes/Father';
// import Child from './Classes/Child';

import UnBoundComponent from './UnboundComponent';
import BoundComponent from './BoundComponent';
import ArrowComponent from './ArrowComponent';

// import SideEffect from './Classes/SideEffect';
// const grandFather = new GrandFather();
// const father = new Father();
// const child = new Child();

function App() {
  // printMyMiseries: Regular Function defined in GrandFather
  // grandFather.printMyMiseries();
  // father.printMyMiseries();
  // child.printMyMiseries();

  console.log('\n\n\n\n');

  // printMySkills(): an Arrow Function defined in GrandFather
  // grandFather.printMySkills();
  // father.printMySkills();
  // child.printMySkills();

  // Prototypes
  // console.log('GrandFather prototype: ', GrandFather.prototype);
  // console.log('Father prototype: ', Father.prototype);
  // console.log('Child prototype: ', Child.prototype);

  console.log('\n\n\n\n');

  // Side Effect
  // const sideEffect = new SideEffect();
  // sideEffect.printMySkills();
  // console.log('SideEffect prototype: ', SideEffect.prototype);

  return (
    <>
      <UnBoundComponent />
      <BoundComponent />
      <ArrowComponent />
    </>
  );
}

export default App;
