export const PlusButton = ({ action }) => {
  return (
    <svg className="plusButton" onClick={action}>
      <circle style={{ fill: '#FFCE01' }} cx="7.5" cy="7.5" r="7.5" />
      <path
        d="M10.4,6.4H8.6V4.6c0-0.6-0.5-1.1-1.1-1.1C6.9,3.5,6.4,4,6.4,4.6v1.8H4.6C4,6.4,3.5,6.9,3.5,7.5c0,0.6,0.5,1.1,1.1,1.1h1.8
	v1.8c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1V8.6h1.8c0.6,0,1.1-0.5,1.1-1.1C11.5,6.9,11,6.4,10.4,6.4z"
      />
    </svg>
  );
};

export default PlusButton;
