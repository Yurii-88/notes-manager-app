const Button = ({ disabled = false, label, type = 'button', onClick, classes }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`px-4 py-2 text-white rounded w-fit cursor-pointer ${classes} ${
        disabled ? 'disabled:opacity-50 disabled:cursor-not-allowed' : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
