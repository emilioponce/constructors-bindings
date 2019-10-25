class GrandFather {
  info = {
    name: 'GrandFather',
    usingDiaper: true,
    skills: ['card games', 'dancing', 'train observing'],
  };

  printMyMiseries() {
    console.log(
      `Hi ${this.info.name}, are you using diapers? %c${this.info.usingDiaper}`,
      'color: #bada55'
    );
  }

  printMySkills = () => {
    console.log(
      `Hi ${this.info.name}, this are your skills: %c${this.info.skills}`,
      'color: #ff9900'
    );
  };
}

export default GrandFather;
