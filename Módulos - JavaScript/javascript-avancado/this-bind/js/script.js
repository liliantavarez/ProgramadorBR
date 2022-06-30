//o THIS funcioana de maneira diferente dependendo de onde ele for chamado

let dog = {
  sound: "Au Au",
  speak: speakGeneric,
};

let cat = {
  sound: "Miaaau",
  speak: speakGeneric,
};

function speakGeneric() {
  console.log(this.sound); //criando função generica para todos os objetos
}

dog.speak(); 
cat.speak();

//o THIS depende de um contexto, logo se não tiver contexto não funcioana
speakGeneric()

let bindedFunction = speakGeneric.bind(cat); //toda função no JS tem um metado chamado BIND que funcioana para receber o contexto em que essa função esta sendo chamda 

bindedFunction();
