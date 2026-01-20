
  const icons = [
    "favicon1.png",
    "favicon2.png",
    "favicon3.png"
  ];

  let index = 0;
  setInterval(() => {
    document.getElementById("favicon").href = icons[index];
    index = (index + 1) % icons.length;
  }, 500);  // change favicon every 0.5 seconds

