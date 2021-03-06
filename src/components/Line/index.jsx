import { StyledLine } from "./styles";

const Line = () => {
  return (
    <StyledLine
      viewBox="0 0 1280 181"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_19)">
        <path
          d="M0 147.848C975.827 220.791 1259.93 87.6755 1280 12"
          stroke="#55734B"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_19"
          x="-11.5001"
          y="0.499634"
          width="1303"
          height="180"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.14 0 0 0 0 1 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_19"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_19"
            result="shape"
          />
        </filter>
      </defs>
    </StyledLine>
  );
};

export default Line;
