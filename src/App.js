import Header from "./components/Header";
import ItemCard from "./components/ItemCard";
import React from "react";

const imgLocation = process.env.PUBLIC_URL;

const dataObj = [
  {
    title: "Iteam title",
    text:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    footer: "Last updated 3 mins ago",
    imgur: imgLocation + "logo192.png",
    id: 0,
  },
  {
    title: "Iteam title",
    text:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    footer: "Last updated 3 mins ago",
    imgur: imgLocation + "logo192.png",
    id: 1,
  },
  {
    title: "Iteam title",
    text:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    footer: "Last updated 3 mins ago",
    imgur: imgLocation + "logo192.png",
    id: 2,
  },
  {
    title: "Iteam title",
    text:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    footer: "Last updated 3 mins ago",
    imgur: imgLocation + "logo192.png",
    id: 4,
  },
];

function Body(props) {
  // return props.data.map((data) => <ItemCard cardData={data} />);
  return <ItemCard cardData={props.data} />;
}

function Footer(props) {
  return null;
}

function App() {
  return (
    <>
      <Header />
      <Body data={dataObj} />
      <Footer />
    </>
  );
}

export default App;
// from ashish
