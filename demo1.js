const demo = [
  {
    title: "toto",
  },
  {
    title: "tata",
  },
  {
    title: "bruno",
  },
];

const filteredTab = demo.filter((item) => item.title[0] === "t");

console.log(filteredTab);
