import { FormEvent, useRef, useState } from "react";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Dropdown from "../Dropdown";

interface ImageFormProps {
  onSubmit: (width: string, height: string, options: string) => void;
}

export default function ImageForm(props: ImageFormProps) {
  const { onSubmit } = props;
  const formRef = useRef<HTMLFormElement | null>(null);
  const [selected, setSelected] = useState("y");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) {
      return;
    }
    const formData = new FormData(formRef.current);
    const width = String(formData.get("width"));
    const height = String(formData.get("height"));

    onSubmit(width, height, selected);
  };

  return (
    <Form innerRef={formRef} onSubmit={handleSubmit}>
      <Input type="text" name="width" required placeholder="type the desired width" />
      <Input type="text" name="height" placeholder="type the desired height" />
      <Dropdown values={['y', 'g', 'yg']} onSelect={setSelected} selected={selected} />
      <Button type="submit" disabled={false}>
        Search
      </Button>
    </Form>
  );
}