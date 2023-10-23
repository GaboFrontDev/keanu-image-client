import "./App.css";
import ImageForm from "./components/ImageForm";
import ImageRender from "./components/ImageRender";
import { State, getImage } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";

function App() {
  const [width, setWidth] = useState("200");
  const [height, setHeight] = useState("200");
  const [options, setOptions] = useState("y");
  const dispatch = useDispatch();

  const image = useSelector((state: State) => state.image);
  const loading = useSelector((state: State) => state.loading);

  const handleSubmit = (width: string, height: string, options: string) => {
    setWidth(width);
    setHeight(height);
    setOptions(options);
  };

  useEffect(() => {
    dispatch(
      getImage({
        width,
        height,
        options,
      })
    );
  }, [dispatch, width, height, options]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <>
        <div className="flex items-center justify-center w-1/3">
          <ImageForm onSubmit={handleSubmit} />
        </div>
        <Card>
          <div className="flex items-center justify-center w-2/3">
            {loading ? <Loading /> : <ImageRender imageSrc={image} />}
          </div>
        </Card>
      </>
    </div>
  );
}

export default App;
