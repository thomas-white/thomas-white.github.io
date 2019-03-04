'use strict';

(function () {
  function nodeListToArray(nodeList) {
    if (Array.from) {
      return Array.from(nodeList);
    }
    const nodes = [];
    for (let index = 0; index < nodeList.length; index++) {
      nodes.push(nodeList[index]);
    }
    return nodes;
  }

  const banner = document.getElementById('banner');
  const glyphs = nodeListToArray(banner.querySelectorAll('path'));

  function onClickGlyph (clickIndex) {
    event.preventDefault();
    glyphs.forEach(function (glyph, index) {
      const distance = index <= clickIndex ? clickIndex - index : index - clickIndex;
      setTimeout(function () {
        glyph.style.opacity = 0;
        setTimeout(function () {
          glyph.style.opacity = 1;
        }, 250);
      }, 50 * distance);
    });
  }

  glyphs.forEach(function (glyph, index) {
    glyph.addEventListener('click', onClickGlyph.bind(this, index));
  });
})();
