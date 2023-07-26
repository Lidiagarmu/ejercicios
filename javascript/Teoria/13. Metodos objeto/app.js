function pokemonAttackParams(name, attack) {
  console.log(`¡${name} ${attack}!`);
}

pokemonAttackParams("bulbasaur");
function pokemonAttackParamsDefault(name, attack = "Ataque arena") {
  console.log(` ¡${name} ${attack}! `);
}

pokemonAttackParamsDefault("Onix"); // ¡Onix Ataque arena!
