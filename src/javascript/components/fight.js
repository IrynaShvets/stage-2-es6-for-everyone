import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over

    firstFighter.healthFighter = 100 / firstFighter.health;
    secondFighter.healthFighter = 100 / secondFighter.health;

    let health = null;

    window.document.addEventListener('keydown', attackFighters);

    function attackFighters(e) {
      const press = `${e.code}`;
      console.log(press);

      if (press === controls.PlayerOneAttack) {
        getHitPower(firstFighter);
        getBlockPower(secondFighter);
        secondFighter.health -= getDamage(firstFighter, secondFighter);
        health = document.getElementById('right-fighter-indicator');
        health.style.width = secondFighter.health * secondFighter.healthFighter + '%';
      } else if (press === controls.PlayerTwoAttack) {
        getHitPower(secondFighter);
        getBlockPower(firstFighter);
        firstFighter.health -= getDamage(secondFighter, firstFighter);
        health = document.getElementById('left-fighter-indicator');
        health.style.width = firstFighter.health * firstFighter.healthFighter + '%';
      }

      if (firstFighter.health < 0) {
        resolve(secondFighter);
        health.style.width = '0';
      } else if (secondFighter.health < 0) {
        resolve(firstFighter);
        health.style.width = '0';
      }
    }
  });
}

export function getDamage(attacker, defender) {
  // return damage
  const damage = getHitPower(attacker) - getBlockPower(defender);
  return damage > 0 ? damage : 0;
}

export function getHitPower(fighter) {
  // return hit power
  return fighter.attack * Math.random();
}

export function getBlockPower(fighter) {
  // return block power
  return fighter.defense * Math.random();
}
