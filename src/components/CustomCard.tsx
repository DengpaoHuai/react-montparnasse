type CustomCardProps = {
  title: string;
  footer: string;
  children: React.ReactNode;
};

const CustomCard: React.FC<CustomCardProps> = ({ title, footer, children }) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>{footer}</p>
      </footer>
    </div>
  );
};

export default CustomCard;
