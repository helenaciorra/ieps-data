import React from 'react';
import { theme, textColor } from '../../constants/theme';
import setHighlightColor from '../../utils/setHighlightColor';

type Props = {
  highlightOnHover?: boolean,
};

const ProjectsGalleryIcon = ({ highlightOnHover }: Props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 14.9998C30 14.3785 29.4674 13.8459 28.8461 13.8459C28.2248 13.8459 27.6923 14.3785 27.6923 14.9998C27.6923 15.6211 28.2248 16.1536 28.8461 16.1536C29.5562 16.1536 30 15.6211 30 14.9998Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M25.6511 25.6507C26.0948 25.2069 26.0948 24.4968 25.6511 24.0531C25.2073 23.6093 24.4972 23.6093 24.0534 24.0531C23.6096 24.4968 23.6096 25.2069 24.0534 25.6507C24.4972 26.0945 25.2073 26.0945 25.6511 25.6507Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M15.0001 -0.000244141C14.3788 -0.000244141 13.8463 0.5323 13.8463 1.1536C13.8463 1.7749 14.3788 2.30745 15.0001 2.30745C15.6214 2.30745 16.1539 1.7749 16.1539 1.1536C16.1539 0.5323 15.6214 -0.000244141 15.0001 -0.000244141Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M4.43803 4.43763C3.99425 4.79266 3.99425 5.59148 4.43803 5.94651C4.88182 6.3903 5.59188 6.3903 6.03567 5.94651C6.47945 5.50272 6.47945 4.79266 6.03567 4.34888C5.59188 3.99385 4.79306 3.99385 4.43803 4.43763Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M6.10352e-05 14.9998C6.10352e-05 15.6211 0.532606 16.1536 1.15391 16.1536C1.77521 16.1536 2.30775 15.6211 2.30775 14.9998C2.30775 14.3785 1.77521 13.8459 1.15391 13.8459C0.532606 13.8459 6.10352e-05 14.3785 6.10352e-05 14.9998Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M4.43803 25.6507C4.88182 26.0945 5.59188 26.0945 6.03567 25.6507C6.47945 25.2069 6.47945 24.4968 6.03567 24.0531C5.59188 23.6093 4.88182 23.6093 4.43803 24.0531C3.99425 24.4968 3.99425 25.2069 4.43803 25.6507Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M15.0001 29.9996C15.6214 29.9996 16.1539 29.467 16.1539 28.8457C16.1539 28.2244 15.6214 27.6919 15.0001 27.6919C14.3788 27.6919 13.8463 28.2244 13.8463 28.8457C13.8463 29.5558 14.3788 29.9996 15.0001 29.9996Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M25.6511 4.43758C25.2073 3.99379 24.4972 3.99379 24.0534 4.43758C23.6096 4.88136 23.6096 5.59142 24.0534 6.03521C24.4972 6.479 25.2073 6.479 25.6511 6.03521C26.0948 5.59142 26.0948 4.79261 25.6511 4.43758Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M19.4379 6.03523L17.4853 10.6506C17.1302 10.4731 16.7752 10.2956 16.3314 10.2068L18.2841 5.50269L19.4379 6.03523Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M24.0534 10.5618L19.3492 12.5144C19.5267 12.8695 19.7042 13.2245 19.793 13.6683L24.4971 11.7156L24.0534 10.5618Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M6.03549 10.5618L5.59171 11.7156L10.2958 13.6683C10.3846 13.2245 10.5621 12.8695 10.7396 12.5144L6.03549 10.5618Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M6.03549 19.4376L10.7396 17.4849C10.5621 17.1299 10.3846 16.7748 10.2958 16.3311L5.59171 18.2837L6.03549 19.4376Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M18.2841 24.4968L19.4379 24.053L17.4853 19.3489C17.1302 19.5264 16.7752 19.7039 16.3314 19.7927L18.2841 24.4968Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M24.0534 19.4376L24.4971 18.2837L19.793 16.3311C19.7042 16.7748 19.5267 17.1299 19.3492 17.4849L24.0534 19.4376Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M11.7161 5.50269L10.5623 5.94647L12.5149 10.6506C12.8699 10.4731 13.225 10.2956 13.6688 10.2068L11.7161 5.50269Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
    <path
      d="M11.7161 24.4968L13.6688 19.7927C13.225 19.7039 12.8699 19.5264 12.5149 19.3489L10.5623 24.053L11.7161 24.4968Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.downloads.main
      )}
    />
  </svg>
);

export default ProjectsGalleryIcon;
