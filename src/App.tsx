import "./App.css";
import ImageForm from "./components/ImageForm";
import ImageRender from "./components/ImageRender";
import { State, getImage } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Card from "./components/Card";
import Error from "./components/Error";

const FLEX_CONTAINER_CLASSES = "flex flex-col-reverse md:flex-row items-center justify-center"

function App() {
  const [width, setWidth] = useState("200");
  const [height, setHeight] = useState("200");
  const [options, setOptions] = useState<string | null>("y");
  const dispatch = useDispatch();

  const loading = useSelector((state: State) => state.loading);
  const error = useSelector((state: State) => state.error);

  const handleSubmit = (
    width: string,
    height: string,
    options: string | null
  ) => {
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

  if (error) {
    return (
      <div className={`${FLEX_CONTAINER_CLASSES} w-screen h-screen`}>
        <Error message="A server side error happened" />
      </div>
    );
  }

  return (
    <div className={`${FLEX_CONTAINER_CLASSES} w-screen h-screen`}>
      <div className={`${FLEX_CONTAINER_CLASSES} my-2 md:my-0 md:w-1/3`}>
        <Card>
          <ImageForm onSubmit={handleSubmit} />
        </Card>
      </div>
      <div className={`${FLEX_CONTAINER_CLASSES} my-2 md:my-0 md:w-2/3`}>
        {loading ? (
          <Loading />
        ) : (
          <Card>
            <ImageRender />
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
