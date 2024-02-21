const Line = () => {
  return (
    <svg
      width="250"
      height="1"
      viewBox="0 0 250 1"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-[-80px]"
    >
      <line
        y1="0.5"
        x2="250"
        y2="0.5"
        stroke="#686868"
        stroke-dasharray="5 5"
      />
    </svg>
  );
};

export default Line;
