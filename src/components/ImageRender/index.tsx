interface ImageRenderProps {
  imageSrc?: string
}

export default function ImageRender(props: ImageRenderProps) {
  const {imageSrc} = props;
  return <img src={imageSrc} alt="keanu-img" />;
}
