import { useSelector } from "react-redux";
import { State } from "../../store";

export default function ImageRender() {
  const image = useSelector((state: State) => state.image);
  return <img src={image} alt="keanu-img" />;
}
