interface FormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  classes?: string;
  children?: React.ReactNode;
  innerRef: React.LegacyRef<HTMLFormElement>;
}

export default function Form(props: FormProps) {
  const { children, classes, onSubmit, innerRef } = props;
  return (
    <form onSubmit={onSubmit} className={classes} ref={innerRef}>
      {children}
    </form>
  );
}
