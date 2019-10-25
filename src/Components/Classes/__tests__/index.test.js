import GrandFather from '../GrandFather';

describe('Mocking the 2 methods in the class prototype', () => {
  beforeEach(() => {
    jest
      .spyOn(GrandFather.prototype, 'printMyMiseries')
      .mockImplementation(() => 'My mocked miseries');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should check that printMyMiseries mock works, as the function was defined in the prototype', () => {
    const grandFather = new GrandFather();
    expect(grandFather.printMyMiseries()).toBe('My mocked miseries');
  });

  it('Should fail as printMySkills function was not defined in the prototype, so we cannot mock it', () => {
    jest
      .spyOn(GrandFather.prototype, 'printMySkills')
      .mockImplementation(() => 'My mocked skills');
    // Error!! Cannot spy the printMySkills property because it is not
    // a function; undefined given instead
    const grandFather = new GrandFather();
    expect(grandFather.printMySkills()).toBe('My mocked skills');
  });
});

describe('Mocking the 2 methods in a specific instance', () => {
  const grandFather = new GrandFather();
  beforeEach(() => {
    jest
      .spyOn(grandFather, 'printMyMiseries')
      .mockImplementation(() => 'My mocked miseries');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should check that printMyMiseries mock works, as the mock was defined in a specific instance', () => {
    expect(grandFather.printMyMiseries()).toBe('My mocked miseries');
  });

  it('Should check that printMySkills mock works, as the mock was defined in a specific instance', () => {
    jest
      .spyOn(grandFather, 'printMySkills')
      .mockImplementation(() => 'My mocked skills');
    expect(grandFather.printMySkills()).toBe('My mocked skills');
  });
});
