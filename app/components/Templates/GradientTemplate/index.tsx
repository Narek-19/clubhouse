interface TemplateProps {
    children: React.ReactNode;
}

export const GradientTemplate: React.FC<TemplateProps> = ({children}) => {
    const backgroundImageUrl =
      "https://img.freepik.com/free-vector/winter-blue-pink-gradient-background-vector_53876-117276.jpg";
  return (
    <div
      className="h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      {children}
    </div>
  );
};
