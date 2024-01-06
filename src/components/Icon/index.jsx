const Icon = ({ icon: Icon, size = 24, color }) => {
  return (
    <div className={color}>
      <Icon size={size} color={color}></Icon>
    </div>
  );
};

export default Icon;
