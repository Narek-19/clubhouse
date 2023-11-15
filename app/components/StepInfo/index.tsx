interface Steps {
  icon: string;
  title: string;
  description?: string;
}
export const StepInfo: React.FC<Steps> = ({ icon, title, description }) => {
  return (
    <div className = "text-center w-1/2 mx-auto">
      <span>{icon}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
