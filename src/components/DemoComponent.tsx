type DemoComponentProps = {
  title?: string;
  children?: React.ReactNode;
};

const DemoComponent: React.FC<DemoComponentProps> = ({
  title = "default",
  children,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default DemoComponent;
