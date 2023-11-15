interface AvatarProps {
  src: string;
  width: string;
  height: string;
  className?: string;
  isVoice?: string;
}
export const Avatar: React.FC<AvatarProps> = ({
  src,
  width,
  height,
  className,
  isVoice,
}) => {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        backgroundImage: `url(${src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};