const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const ampmEl = document.getElementById('ampm');
const toggleFormatBtn = document.getElementById('toggleFormat');
const toggleSecondsBtn = document.getElementById('toggleSeconds');

let use24 = true;
let showSeconds = true;

function pad(n){ return n.toString().padStart(2,'0'); }

function updateClock(){
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  if(!use24){
    ampmEl.textContent = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    if(h === 0) h = 12;
  } else {
    ampmEl.textContent = '';
  }

  const hh = pad(h);
  const mm = pad(m);
  const ss = pad(s);

  timeEl.textContent = showSeconds ? `${hh}:${mm}:${ss}` : `${hh}:${mm}`;
  const day = pad(now.getDate());
  const month = pad(now.getMonth() + 1);
  const year = now.getFullYear();
  dateEl.textContent = `${day}/${month}/${year}`;
}

toggleFormatBtn.addEventListener('click', () => {
  use24 = !use24;
  toggleFormatBtn.textContent = use24 ? '24h' : '12h';
  updateClock();
});

toggleSecondsBtn.addEventListener('click', () => {
  showSeconds = !showSeconds;
  toggleSecondsBtn.textContent = `Seconds: ${showSeconds ? 'on' : 'off'}`;
  updateClock();
});

// update every 250ms for smoother second transitions
setInterval(updateClock, 250);
updateClock();