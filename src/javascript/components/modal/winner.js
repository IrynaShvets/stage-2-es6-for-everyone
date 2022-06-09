import { showModal } from './modal';

export function showWinnerModal(fighter) {
  // call showModal function

  showModal({
    title: 'WINNER!',
    bodyElement: fighter.name
  });
}
