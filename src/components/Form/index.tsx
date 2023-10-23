interface FormProps {
  classes?: string;
  children?: React.ReactNode;
  innerRef: React.LegacyRef<HTMLFormElement>
}

export default function Form(
  props: FormProps &
    React.DetailedHTMLProps<
      React.FormHTMLAttributes<HTMLFormElement>,
      HTMLFormElement
    >
) {
  const { children, classes, onSubmit, innerRef } = props;
  return (
    <form onSubmit={onSubmit} className={classes} ref={innerRef}>
      {children}
    </form>
  );
}
