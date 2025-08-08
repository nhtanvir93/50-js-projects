const followers = document.querySelectorAll(".followers");

const steps = 500;

followers.forEach((processingFollowers) => {
  const totalFollowers = parseInt(
    processingFollowers.getAttribute("data-followers")
  );
  const count = totalFollowers / steps;
  let currentFollowers = 0;

  const intervalId = setInterval(() => {
    currentFollowers += count;
    processingFollowers.textContent = currentFollowers;

    if (currentFollowers >= totalFollowers) clearInterval(intervalId);
  }, 1);
});
