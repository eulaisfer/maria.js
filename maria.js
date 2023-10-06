// Classe base para personagens de The Hundred
class Character {
    constructor(name, group) {
      this.name = name;
      this.group = group;
    }
  
    introduce() {
      console.log(`Oi, eu sou ${this.name} e sou um ${this.group} em The Hundred.`);
    }
  }
  
  // Subclasse que herda de Character para representar um Grounder
  class Grounder extends Character {
    constructor(name, clan) {
      super(name, 'Grounder');
      this.clan = clan;
    }
  
    introduce() {
      console.log(`Oi, eu sou ${this.name}, um Grounder do clan ${this.clan} em The Hundred.`);
    }
  }
  
  // Subclasse que herda de Character para representar um Sky Person
  class SkyPerson extends Character {
    constructor(name, position) {
      super(name, 'Sky Person');
      this.position = position;
    }
  
    introduce() {
      console.log(`Oi, eu sou ${this.name}, um Sky Person com a posição de ${this.position} em The Hundred.`);
    }
  }
  
  // Função para demonstrar o polimorfismo
  function introduceCharacter(character) {
    character.introduce();
  }
  
  // Criando instâncias das classes
  const clarke = new SkyPerson('Clarke Griffin', 'Médica');
  const bellamy = new SkyPerson('Bellamy Blake', 'Líder');
  const lexa = new Grounder('Lexa', 'Coalition');
  const octavia = new Grounder('Octavia Blake', 'Treekru');
  
  // Chamando a função com diferentes personagens
  introduceCharacter(clarke);
  introduceCharacter(bellamy);
  introduceCharacter(lexa);