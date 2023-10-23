import { twMerge } from "tailwind-merge";

interface FormProps {
  classes?: string;
}

export default function Input(
  props: FormProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
) {
  const { classes, type, name, placeholder } = props;
  const className = twMerge([
    "my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    classes,
  ]);
  return <input className={className} type={type} name={name} placeholder={placeholder} />;
}
