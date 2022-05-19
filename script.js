const nav = document.querySelector("nav");
const heroOffset = document.querySelector(".hero").offsetHeight;
const nightSwitch = document.getElementById("switch");
const rootElement = document.documentElement;
const gb = document.getElementById("gb");
const gm = document.getElementById("gm");
const gs = document.getElementById("gs");
const animatedElements = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 0);
  nav.classList.toggle("hide", window.scrollY > heroOffset - 60);
  gb.style.transform = `rotate(${window.scrollY * 0.3}deg)`;
  gm.style.transform = `rotate(${window.scrollY * 0.5}deg)`;
  gs.style.transform = `rotate(-${window.scrollY * 1.3}deg)`;
});

const setColorScheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    rootElement.classList.add("dark");
    nightSwitch.src = "./icons/sun.svg";
  } else {
    nightSwitch.src = "./icons/moon.svg";
    rootElement.classList.add("light");
  }
};

const toggleDarkMode = () => {
  if (rootElement.classList.contains("light")) {
    rootElement.classList.remove("light");
    rootElement.classList.add("dark");
    nightSwitch.src = "./icons/sun.svg";
  } else if (document.documentElement.classList.contains("dark")) {
    rootElement.classList.remove("dark");
    rootElement.classList.add("light");
    nightSwitch.src = "./icons/moon.svg";
  }
};

nightSwitch.addEventListener("click", (e) => {
  toggleDarkMode();
});

const timelineData = [
  {
    time: "2022",
    events: ["Journey continues. Alive till 2022 May"],
  },
  {
    time: "2021",
    events: [
      "Started my career as Structural designer in Friends Steel & Aluminum Works, Abu Dhabi, UAE",
    ],
  },
  {
    time: "2020",
    events: [
      "Joined as a volunteer in Covid & Flood control cell IT Suport team, Kasaragod dist.",
      "Covid v1.0. Couldn't join the company due to lockdown",
      "Abu dhabi! Got hired by a company in Abu Dhabi UAE",
    ],
  },
  {
    time: "2019",
    events: [
      "Built and delivered client projects as a freelancer that includes e-commerce apps, websites, APIs etc",
      "Worked as a freelance software developer",
      "GOT REJECTED BY NUMEROUS COMPANIES!",
    ],
  },
  {
    time: "2018",
    events: [
      "Started my career as Technical Trainee in John Deere India Private LTD.",
      "Completed Diploma in Mechanical Engineering with a CGPA of 8.4 (First class with distinction)",
    ],
  },
  {
    time: "2017",
    events: [
      "Volunteered SPACE on setting up linux machines and servers on several Govt organizations",
    ],
  },
  {
    time: "2016",
    events: [
      "Participated 3 days hackathon organized by ICFOSS and SPACE",
      "Became IEDC Student co-ordinator of Swami Nithyananda Polytechnic College, Kanhangad",
    ],
  },
  {
    time: "2015",
    events: [
      "Published my first android app to Google Play. A simple WebView app then took down by google themselves",
      "Completed Highersecondary education from Govt HSS Balla East, Kanhangad",
    ],
  },
  {
    time: "2013",
    events: ["Completed High school education from GHSS Thayannur"],
  },
  {
    time: "2010",
    events: [
      "Built my first web site (WAP). A great year and time to start a great, but a crazy journey",
    ],
  },
];

const timelineConfig = {
  lineColor: "#0099ff",
  dotColor: "#0c0f16",
  eventBackground: "#191f2e",
  eventText: "#acc",
};

let timeline = new TimeLine(
  "timeline", //id selector
  timelineConfig, //pass empty object if you want to use default styling
  timelineData //timeline data
);

setColorScheme();
timeline.draw();
