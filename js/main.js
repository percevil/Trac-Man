const debug = document.querySelector('.debug');
const pacmen = [...document.querySelectorAll('.pacman')];

document.addEventListener('mousemove', event => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  //   Tracks pointer co-ordinates
  // console.log(mouseX, mouseY);

  pacmen.forEach(pacman => {
    const pacmanBox = pacman.getBoundingClientRect();
    const pacmanXCenter = (pacmanBox.left + pacmanBox.right) / 2;
    const pacmanYCenter = (pacmanBox.top + pacmanBox.bottom) / 2;
    // Calculating tracmans center
    const deltaX = mouseX - pacmanXCenter;
    const deltaY = mouseY - pacmanYCenter;

    const atan1 = (Math.atan(deltaY / deltaX) * 180) / Math.PI;
    const atan2 = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    // Calculating pointer angle then changing radians back to degrees

    debug.innerHTML = `
  <div> mouseX: ${mouseX} </div>
  <div> mouseY: ${mouseY} </div>
  <div> pacmanXCenter: ${pacmanXCenter} </div>
  <div> pacmanYCenter: ${pacmanYCenter} </div>
  <div> deltaX: ${deltaX} </div>
  <div> deltaY: ${deltaY} </div>
  <div> atan1: ${atan1} </div>
  <div> atan2: ${atan2} </div>
`;
    // Debug element used to visualize co-ordinates easier

    // const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI
    //   pacman.style.transform = `rotate(${angle}deg)`

    const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    let transform = `rotate(${angle}deg)`;
    if (Math.abs(angle) > 90) transform += 'scaleY(-1)';
    pacman.style.transform = transform;
  });
});
