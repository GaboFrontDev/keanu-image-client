interface CardProps {
  children?: React.ReactNode;
}

export default function Card(props: CardProps) {
  const { children } = props;
  return (
    <div className="rounded overflow-hidden shadow-lg flex justify-center items-center min-w-[200px]">
      {children}
    </div>
  );
}
