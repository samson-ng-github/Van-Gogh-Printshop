export const MinusButton = ({ action }) => {
  return (
    <svg className="minusButton" onClick={action}>
      <circle style={{ fill: '#FFCE01' }} cx="7.5" cy="7.5" r="7.5" />
      <path d="M10.4,8.6H4.6C4,8.6,3.5,8.1,3.5,7.5c0-0.6,0.5-1.1,1.1-1.1h5.8c0.6,0,1.1,0.5,1.1,1.1C11.5,8.1,11,8.6,10.4,8.6z" />
    </svg>
  );
};

export default MinusButton;
