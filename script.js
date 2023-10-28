const hamburgerOpen = () =>
  (document.getElementById("navbarLinks").style.display = "flex");
const hamburgerClose = () =>
  (document.getElementById("navbarLinks").style.display = "none");

const data1 = {
   label: ["94% in liquidity",'6% not Stacked'],
  datasets: [
    {
      label: ["94% in liquidity",'6% not Stacked'],
      data: [400, 50],
      backgroundColor: ["rgb(35, 169, 222)", "rgb(57, 35, 222)"],
      hoverBorderWidth: 5, // Increase the border width on hover
      hoverBorderColor: ["rgb(35, 169, 222)", "rgb(57, 35, 222)"],
      hoverOffset: 4,
      borderWidth: 0,
    },
  ],
};

const configure1 = {
  type: "doughnut",
  data: data1,
  options: {
    cutout: 90,
    plugins: {
      legend: false,
      centerText: {
        display: true,
        text: "Distribution",
        color: "white",
        font: {
          size: 16,
        },
      },
    },
  },
};
let myDoughnutChart1;
// Get the canvas element
const cntx1 = document.getElementById("myDoughnutChart1").getContext("2d");
if (myDoughnutChart1) myDoughnutChart1.destroy();

// Create and display the Doughnut chart
myDoughnutChart1 = new Chart(cntx1, configure1);

const data2 = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: ["49.5% USDC","50.49% ETH",],
      data: [50, 50],
      backgroundColor: ["rgb(57, 35, 222)","rgb(35, 169, 222)", ],
      hoverBorderWidth: 5, // Increase the border width on hover
      hoverBorderColor:  ["rgba(57, 35, 222,.5)","rgba(35, 169, 222,.5)", ], // Set a shadow color on hover
      hoverOffset: 4,
      borderWidth: 0,
    },
  ],
};

const configure2 = {
  type: "doughnut",
  data: data2,
  options: {
    cutout: 90,
    plugins: {
      legend: false,
      centerText: {
        display: true,
        text: "Distribution",
        color: "white",
        font: {
          size: 16,
        },
      },
    },
  },
};
let myDoughnutChart2;
// Get the canvas element
const cntx2 = document.getElementById("myDoughnutChart2").getContext("2d");
if (myDoughnutChart2) myDoughnutChart2.destroy();

// Create and display the Doughnut chart
myDoughnutChart2 = new Chart(cntx2, configure2);
