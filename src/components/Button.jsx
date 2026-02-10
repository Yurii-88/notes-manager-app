const Button = ({ label, classes, disabled = false, handleClick, type = 'button' }) => {
  return (
    <button
      className={`text-white px-2 py-1 rounded cursor-pointer ${classes} ${
        disabled ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''
      }`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
