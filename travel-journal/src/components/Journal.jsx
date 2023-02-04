import "../App.css";
import cardData from "../data";
import Card from "./Card";

export default function Journal() {
  const cards = cardData.map((data) => <Card key={data.title} {...data} />);
  return <div className="journal">{cards}</div>;
}
