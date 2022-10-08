const markAsUnread = document.getElementById("markunread");
const unread = document.querySelectorAll(".unread");
const countH = document.querySelector(".number");

function removeDots(elem) {
  const dot = elem.querySelector("* > .red_dot");
  dot.remove();
}

markAsUnread.addEventListener("click", () => {
  countH.textContent = 0;
  unread.forEach((elem) => {
    elem.classList.remove("unread");
    removeDots(elem);
  });
});
unread.forEach((elem) => {
  if (countH.value !== 0) {
    console.log(countH.value);
    elem.addEventListener("click", () => {
      elem.classList.remove("unread");
      removeDots(elem);
      countH.textContent--;
    });
  }
});
