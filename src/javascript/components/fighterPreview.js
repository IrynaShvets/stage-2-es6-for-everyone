import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`
  });

  // todo: show fighter info (image, name, health, etc.)

  function createName(name) {
    const nameElement = createElement({ tagName: 'span', className: 'name' });
    nameElement.innerText = name;
    return nameElement;
  }

  function createImage(source) {
    const attributes = { src: source };
    const imgElement = createElement({
      tagName: 'img',
      className: 'fighter-image',
      attributes
    });
    if (position === 'right') {
      imgElement.style.transform = 'scale(-1, 1)';
    }
    return imgElement;
  }

  if (fighter) {
    const keyAndValueFighter = Object.entries(fighter);
    keyAndValueFighter
      .filter((keyValueAll) => keyValueAll[0] !== '_id' && keyValueAll[0] !== 'source')
      .forEach((keyValue) => fighterElement.append(createName(keyValue)));
    fighterElement.append(createImage(fighter['source']));
  }

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = {
    src: source,
    title: name,
    alt: name
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes
  });

  return imgElement;
}
