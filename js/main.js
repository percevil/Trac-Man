const debug = document.querySelector('.debug');
const tracmen = [...document.querySelectorAll('.tracman')];

document.addEventListener('mousemove', event => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  //   Tracks pointer co-ordinates
  // console.log(mouseX, mouseY);

  tracman.forEach(tracman => {
    const tracmanBox = tracman.getBoundingClientRect();
    const tracmanXCenter = (tracmanBox.left + tracmanBox.right) / 2;
    const tracmanYCenter = (tracmanBox.top + tracmanBox.bottom) / 2;
    // Calculating tracmans center
    const deltaX = mouseX - tracmanXCenter;
    const deltaY = mouseY - tracmanYCenter;

    const atan1 = (Math.atan(deltaY / deltaX) * 180) / Math.PI;
    const atan2 = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    // Calculating pointer angle then changing radians back to degrees

    debug.innerHTML = `
  <div> mouseX: ${mouseX} </div>
  <div> mouseY: ${mouseY} </div>
  <div> tracmanXCenter: ${tracmanXCenter} </div>
  <div> tracmanYCenter: ${tracmanYCenter} </div>
  <div> deltaX: ${deltaX} </div>
  <div> deltaY: ${deltaY} </div>
  <div> atan1: ${atan1} </div>
  <div> atan2: ${atan2} </div>
`;
    // Debug element used to visualize co-ordinates easier

    const angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
    let transform = `rotate(${angle}deg)`;
    if (Math.abs(angle) > 90) transform += 'scaleY(-1)';
    tracman.style.transform = transform;
  });
});
