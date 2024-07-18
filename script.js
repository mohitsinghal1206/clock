setInterval(() => {
  const d = new Date();
  const htime = d.getHours();
  const mtime = d.getMinutes();
  const stime = d.getSeconds();
  const hrotation = 30 * htime + mtime / 2; // formula
  const mrotation = 6 * mtime;
  const srotation = 6 * stime;

  const hour = document.getElementById("hour");
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;

  // Play the ticking sound
  const tickSound = document.getElementById("tickSound");
  tickSound.currentTime = 0;
  tickSound.play();

  // Play the chime sound when the second hand reaches 12
  if (stime === 0) {
    const chimeSound = document.getElementById("chimeSound");
    chimeSound.currentTime = 12;
    chimeSound.play();
  }
}, 1000);
