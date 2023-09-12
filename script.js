// activate menu on click eventListener

const menuBar = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".nav-menu");
const navList = document.querySelectorAll(".nav-list");

menuBar.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("active");
});

navList.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBar.classList.remove("active");
  });
});

// workout table - mobile view
const daySelector = document.getElementById("daySelector");
const workoutTable = document.querySelector(".workout-schedule");

function updateSchedule() {
  const selectedDay = daySelector.value;
  const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  if (window.innerWidth <= 680) {
    for (const day of allDays) {
      workoutTable.querySelectorAll(`th.${day}`).forEach((headerCell) => {
        headerCell.style.display = "none";
      });
      workoutTable.querySelectorAll(`td.${day}`).forEach((cell) => {
        cell.style.display = "none";
      });
    }
    workoutTable.querySelectorAll(`th.${selectedDay}`).forEach((headerCell) => {
      headerCell.style.display = "";
    });
    workoutTable.querySelectorAll(`td.${selectedDay}`).forEach((cell) => {
      cell.style.display = "";
    });
  } else {
    for (const day of allDays) {
      workoutTable.querySelectorAll(`th.${day}`).forEach((headerCell) => {
        headerCell.style.display = "";
      });
      workoutTable.querySelectorAll(`td.${day}`).forEach((cell) => {
        cell.style.display = "";
      });
    }
  }
}

function checkWidth() {
  updateSchedule();

  if (window.innerWidth >= 680) {
    navMenu.classList.remove("active");
    menuBar.classList.remove("active");
  }
}

checkWidth();
window.addEventListener("resize", checkWidth);

daySelector.addEventListener("change", updateSchedule);

// scroll
const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 70;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
