function enableSectionFade() {
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let windowHeight = window.innerHeight;

    sections.forEach((section, i) => {
      if (i === sections.length - 1) return;

      let current = sections[i];
      let next = sections[i + 1];

      let distanceIntoFade = Math.min(
        Math.max((scrollY - current.offsetTop) / windowHeight, 0),
        1
      );

      let blend = 1 - distanceIntoFade;

      let fromWhite = i % 2 === 0;
      let toWhite = (i + 1) % 2 === 0;

      let fromGrey = fromWhite ? 255 : 0;
      let toGrey = toWhite ? 255 : 0;

      let grey = Math.round(fromGrey + (toGrey - fromGrey) * distanceIntoFade);
      current.style.backgroundColor = `rgb(${grey}, ${grey}, ${grey})`;
      current.style.color = grey > 127 ? 'black' : 'white';
    });
  });
}
