export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over

    const healthBars = document.getElementsByClassName('arena___health-bar');
    const healthBar = [...healthBars];
    const statusViews = document.getElementsByClassName('arena___health-indicator');
    const statusView = [...statusViews];

    const oneFighter = {
      ...firstFighter,
      healthBar: healthBar[0],
      statusView: statusView[0],
      position: 'left'
    };

    const twoFighter = {
      ...secondFighter,
      healthBar: healthBar[1],
      statusView: statusView[1],
      position: 'right'
    };

    console.log(oneFighter);
    console.log(twoFighter);
  });
}

export function getDamage(attacker, defender) {
  // return damage
}

export function getHitPower(fighter) {
  // return hit power
}

export function getBlockPower(fighter) {
  // return block power
}
