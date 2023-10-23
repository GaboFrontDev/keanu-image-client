import { twMerge } from "tailwind-merge";

interface FormProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  classes?: string;
  children?: React.ReactNode;
}

export default function Button(props: FormProps) {
  const { classes, children, type } = props;
  const className = twMerge([
    "my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    classes,
  ]);
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}
