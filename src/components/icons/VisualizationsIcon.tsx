import React from 'react';
import { theme, textColor } from '../../constants/theme';
import setHighlightColor from '../../utils/setHighlightColor';

type Props = {
  highlightOnHover?: boolean,
};

const visualizationsIcon = {
  alignItems: 'center',
  display: 'flex',
  height: '30px',
  justifyContent: 'center',
  width: '30px',
};

const VisualizationsIcon = ({ highlightOnHover }: Props) => (
  <div style={visualizationsIcon}>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.438 1.03547L12.4853 5.65086C12.1303 5.47335 11.7753 5.29583 11.3315 5.20707L13.2841 0.50293L14.438 1.03547Z"
        fill={setHighlightColor(
          highlightOnHover,
          textColor,
          theme.palette.panorama.main
        )}
      />
      <path
        d="M19.0534 5.56201L14.3492 7.51468C14.5268 7.86971 14.7043 8.22473 14.793 8.66852L19.4972 6.71586L19.0534 5.56201Z"
        fill={setHighlightColor(
          highlightOnHover,
          textColor,
          theme.palette.panorama.main
        )}
      />
      <path
        d="M1.03558 5.56201L0.591797 6.71586L5.29594 8.66852C5.3847 8.22473 5.56221 7.86971 5.73973 7.51468L1.03558 5.56201Z"
        fill={setHighlightColor(
          highlightOnHover,
          textColor,
          theme.palette.panorama.main
        )}
      />
      <path
        d="M1.03558 14.4378L5.73973 12.4851C5.56221 12.1301 5.3847 11.7751 5.29594 11.3313L0.591797 13.284L1.03558 14.4378Z"
        fill={setHighlightColor(
          highlightOnHover,
          textColor,
          theme.palette.panorama.main
        )}
      />
      <path
        d="M13.2841 19.4971L14.438 19.0533L12.4853 14.3491C12.1303 14.5266 11.7753 14.7042 11.3315 14.7929L13.2841 19.4971Z"
        fill={setHighlightColor(
          highlightOnHover,
          textColor,
          theme.palette.panorama.main
        )}
      />
      <path
        d="M19.0534 14.4378L19.4972 13.284L14.793 11.3313C14.7043 11.7751 14.5268 12.1301 14.3492 12.4851L19.0534 14.4378Z"
        fill={setHighlightColor(
          highlightOnHover,
          textColor,
          theme.palette.panorama.main
        )}
      />
      <path
        d="M6.71616 0.50293L5.56232 0.946717L7.51498 5.65086C7.87001 5.47335 8.22504 5.29583 8.66883 5.20707L6.71616 0.50293Z"
        fill={setHighlightColor(
          highlightOnHover,
          textColor,
          theme.palette.panorama.main
        )}
      />
      <path
        d="M6.71616 19.4971L8.66883 14.7929C8.22504 14.7042 7.87001 14.5266 7.51498 14.3491L5.56232 19.0533L6.71616 19.4971Z"
        fill={setHighlightColor(
          highlightOnHover,
          textColor,
          theme.palette.panorama.main
        )}
      />
    </svg>
  </div>
);

export default VisualizationsIcon;
