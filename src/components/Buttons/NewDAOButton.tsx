interface NewDAOButtonProps {
  onClick?: () => void;
}
export const NewDAOButton: React.FC<NewDAOButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    console.log("clicked");
    onClick && onClick();
  };

  return (
    <button
      className="bg-green-500 hover:bg-green-600 active:scale-90 transform hover:scale-105 text-white py-2 px-4 rounded transition-all duration-200"
      onClick={handleClick}
    >
      New DAO
    </button>
  );
};
