export const CloseButton = ({ action }) => {
  return (
    <svg className="button closeButton" onClick={action}>
      <circle cx="12" cy="12" r="12" />
      <path
        style={{ fill: 'white' }}
        d="M17.8,15.9c0.5,0.5,0.5,1.4,0,1.9c-0.3,0.3-0.6,0.4-0.9,0.4s-0.7-0.1-0.9-0.4L12,13.9l-3.9,3.9
	c-0.3,0.3-0.6,0.4-0.9,0.4c-0.3,0-0.7-0.1-0.9-0.4c-0.5-0.5-0.5-1.4,0-1.9l3.9-3.9L6.2,8.1c-0.5-0.5-0.5-1.4,0-1.9s1.4-0.5,1.9,0
	l3.9,3.9l3.9-3.9c0.5-0.5,1.4-0.5,1.9,0c0.5,0.5,0.5,1.4,0,1.9L13.9,12L17.8,15.9z"
      />
    </svg>
  );
};

export default CloseButton;
