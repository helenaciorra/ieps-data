import React from 'react';
import { theme, textColor } from '../../constants/theme';
import setHighlightColor from '../../utils/setHighlightColor';

type Props = {
  highlightOnHover?: boolean,
};

const LocalHealthPanoramaIcon = ({ highlightOnHover }: Props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 15C30 14.3787 29.4674 13.8462 28.8461 13.8462C28.2248 13.8462 27.6923 14.3787 27.6923 15C27.6923 15.6213 28.2248 16.1539 28.8461 16.1539C29.5562 16.1539 30 15.6213 30 15Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.visualization.main
      )}
    />
    <path
      d="M25.651 25.6509C26.0948 25.2071 26.0948 24.4971 25.651 24.0533C25.2072 23.6095 24.4972 23.6095 24.0534 24.0533C23.6096 24.4971 23.6096 25.2071 24.0534 25.6509C24.4972 26.0947 25.2072 26.0947 25.651 25.6509Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.visualization.main
      )}
    />
    <path
      d="M15.0001 0C14.3788 0 13.8463 0.532545 13.8463 1.15385C13.8463 1.77515 14.3788 2.30769 15.0001 2.30769C15.6214 2.30769 16.1539 1.77515 16.1539 1.15385C16.1539 0.532545 15.6214 0 15.0001 0Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.visualization.main
      )}
    />
    <path
      d="M4.43785 4.43788C3.99406 4.79291 3.99406 5.59173 4.43785 5.94676C4.88164 6.39054 5.5917 6.39054 6.03549 5.94676C6.47927 5.50297 6.47927 4.79291 6.03549 4.34912C5.5917 3.99409 4.79288 3.99409 4.43785 4.43788Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.visualization.main
      )}
    />
    <path
      d="M0 15C0 15.6213 0.532545 16.1539 1.15385 16.1539C1.77515 16.1539 2.30769 15.6213 2.30769 15C2.30769 14.3787 1.77515 13.8462 1.15385 13.8462C0.532545 13.8462 0 14.3787 0 15Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.visualization.main
      )}
    />
    <path
      d="M4.43785 25.6509C4.88164 26.0947 5.5917 26.0947 6.03549 25.6509C6.47927 25.2071 6.47927 24.4971 6.03549 24.0533C5.5917 23.6095 4.88164 23.6095 4.43785 24.0533C3.99406 24.4971 3.99406 25.2071 4.43785 25.6509Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.visualization.main
      )}
    />
    <path
      d="M15.0001 29.9998C15.6214 29.9998 16.1539 29.4673 16.1539 28.846C16.1539 28.2247 15.6214 27.6921 15.0001 27.6921C14.3788 27.6921 13.8463 28.2247 13.8463 28.846C13.8463 29.556 14.3788 29.9998 15.0001 29.9998Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.visualization.main
      )}
    />
    <path
      d="M25.651 4.43782C25.2072 3.99403 24.4972 3.99403 24.0534 4.43782C23.6096 4.88161 23.6096 5.59167 24.0534 6.03546C24.4972 6.47924 25.2072 6.47924 25.651 6.03546C26.0948 5.59167 26.0948 4.79285 25.651 4.43782Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.visualization.main
      )}
    />
  </svg>
);

export default LocalHealthPanoramaIcon;
