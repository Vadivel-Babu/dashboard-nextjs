const BlurrGraph = () => {
  return (
    <svg
      width="350"
      height="165"
      viewBox="0 0 417 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1_199)">
        <path
          d="M81.3355 140.937C73.0527 143.866 64.2827 161.439 56 167.297V211H361V56L356.615 70.6444C352.717 85.2887 343.947 114.577 335.665 120.435C326.895 126.293 318.612 108.72 310.329 94.0753C301.559 79.431 293.276 67.7155 284.506 67.7155C276.224 67.7155 267.941 79.431 259.171 91.1464C250.888 102.862 242.605 114.577 233.835 114.577C225.553 114.577 213.969 111.649 205.686 105.791L205.428 105.608C197.233 99.8117 189.123 94.0753 180.926 94.0753C180.926 94.0753 166.112 91.1464 157.829 105.791C149.059 120.435 140.776 149.724 132.006 161.439C123.724 173.155 115.441 167.297 106.671 158.51C98.3882 149.724 89.6182 138.008 81.3355 140.937Z"
          fill="url(#paint0_linear_1_199)"
        />
        <path
          d="M81.3355 140.937C73.0527 143.866 64.2827 161.439 56 167.297V211H361V56L356.615 70.6444C352.717 85.2887 343.947 114.577 335.665 120.435C326.895 126.293 318.612 108.72 310.329 94.0753C301.559 79.431 293.276 67.7155 284.506 67.7155C276.224 67.7155 267.941 79.431 259.171 91.1464C250.888 102.862 242.605 114.577 233.835 114.577C225.553 114.577 213.969 111.649 205.686 105.791L205.428 105.608C197.233 99.8117 189.123 94.0753 180.926 94.0753C180.926 94.0753 166.112 91.1464 157.829 105.791C149.059 120.435 140.776 149.724 132.006 161.439C123.724 173.155 115.441 167.297 106.671 158.51C98.3882 149.724 89.6182 138.008 81.3355 140.937Z"
          stroke="url(#paint1_radial_1_199)"
          stroke-width="2"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_199"
          x="0"
          y="0.71315"
          width="417"
          height="266.287"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="27.5"
            result="effect1_foregroundBlur_1_199"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_199"
          x1="190"
          y1="211"
          x2="186"
          y2="83"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#409BEE" stop-opacity="0.67" />
          <stop offset="1" stop-color="#409BEE" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_1_199"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(208.5 112) rotate(81.4283) scale(56.6326 154.189)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default BlurrGraph;
