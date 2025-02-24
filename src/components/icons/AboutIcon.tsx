import React from 'react';
import { theme, textColor } from '../../constants/theme';
import setHighlightColor from '../../utils/setHighlightColor';

type Props = {
  highlightOnHover?: boolean,
};

const AboutIcon = ({ highlightOnHover }: Props) => (
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
        theme.palette.about.main
      )}
    />
    <path
      d="M25.6509 25.6507C26.0947 25.2069 26.0947 24.4968 25.6509 24.0531C25.2071 23.6093 24.4971 23.6093 24.0533 24.0531C23.6095 24.4968 23.6095 25.2069 24.0533 25.6507C24.4971 26.0945 25.2071 26.0945 25.6509 25.6507Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M15.0001 -0.000244141C14.3788 -0.000244141 13.8463 0.5323 13.8463 1.1536C13.8463 1.7749 14.3788 2.30745 15.0001 2.30745C15.6214 2.30745 16.1539 1.7749 16.1539 1.1536C16.1539 0.5323 15.6214 -0.000244141 15.0001 -0.000244141Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M4.43788 4.43763C3.99409 4.79266 3.99409 5.59148 4.43788 5.94651C4.88167 6.3903 5.59173 6.3903 6.03552 5.94651C6.4793 5.50272 6.4793 4.79266 6.03552 4.34888C5.59173 3.99385 4.79291 3.99385 4.43788 4.43763Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M0 14.9998C0 15.6211 0.532544 16.1536 1.15385 16.1536C1.77515 16.1536 2.30769 15.6211 2.30769 14.9998C2.30769 14.3785 1.77515 13.8459 1.15385 13.8459C0.532544 13.8459 0 14.3785 0 14.9998Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M4.43788 25.6507C4.88167 26.0945 5.59173 26.0945 6.03552 25.6507C6.4793 25.2069 6.4793 24.4968 6.03552 24.0531C5.59173 23.6093 4.88167 23.6093 4.43788 24.0531C3.99409 24.4968 3.99409 25.2069 4.43788 25.6507Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M15.0001 29.9998C15.6214 29.9998 16.1539 29.4673 16.1539 28.846C16.1539 28.2247 15.6214 27.6921 15.0001 27.6921C14.3788 27.6921 13.8463 28.2247 13.8463 28.846C13.8463 29.556 14.3788 29.9998 15.0001 29.9998Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M25.6509 4.43758C25.2071 3.99379 24.4971 3.99379 24.0533 4.43758C23.6095 4.88136 23.6095 5.59142 24.0533 6.03521C24.4971 6.479 25.2071 6.479 25.6509 6.03521C26.0947 5.59142 26.0947 4.79261 25.6509 4.43758Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M19.438 6.03523L17.4853 10.6506C17.1303 10.4731 16.7753 10.2956 16.3315 10.2068L18.2841 5.50269L19.438 6.03523Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M24.0534 10.5618L19.3492 12.5144C19.5268 12.8695 19.7043 13.2245 19.793 13.6683L24.4972 11.7156L24.0534 10.5618Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M6.03558 10.5618L5.5918 11.7156L10.2959 13.6683C10.3847 13.2245 10.5622 12.8695 10.7397 12.5144L6.03558 10.5618Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M6.03558 19.4376L10.7397 17.4849C10.5622 17.1299 10.3847 16.7748 10.2959 16.3311L5.5918 18.2837L6.03558 19.4376Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M18.2841 24.4968L19.438 24.053L17.4853 19.3489C17.1303 19.5264 16.7753 19.7039 16.3315 19.7927L18.2841 24.4968Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M24.0534 19.4376L24.4972 18.2837L19.793 16.3311C19.7043 16.7748 19.5268 17.1299 19.3492 17.4849L24.0534 19.4376Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M11.7162 5.50269L10.5623 5.94647L12.515 10.6506C12.87 10.4731 13.225 10.2956 13.6688 10.2068L11.7162 5.50269Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M11.7162 24.4968L13.6688 19.7927C13.225 19.7039 12.87 19.5264 12.515 19.3489L10.5623 24.053L11.7162 24.4968Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M14.3788 10.0294C14.5563 10.0294 14.8226 10.0294 15.0001 10.0294C15.1776 10.0294 15.4439 10.0294 15.6214 10.0294C15.6214 6.30159 17.3078 3.01757 19.9705 0.887391C19.5267 0.709876 18.9942 0.621118 18.5504 0.443604C16.9527 1.95248 15.7101 3.90514 15.0001 6.03532C14.29 3.90514 13.0474 1.95248 11.4498 0.443604C11.006 0.532361 10.4735 0.709876 10.0297 0.887391C12.6924 3.01757 14.3788 6.30159 14.3788 10.0294Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M18.1065 11.0056C18.3727 11.2719 18.7278 11.6269 18.9941 11.8932C21.568 9.31922 25.1183 8.16538 28.5799 8.43165C28.4023 7.98786 28.1361 7.54407 27.8698 7.10029C25.6509 7.01153 23.4319 7.54407 21.3905 8.52041C22.4556 6.47899 22.8994 4.26005 22.8106 2.04111C22.3668 1.77484 21.923 1.50857 21.4793 1.33105C21.8343 4.88135 20.6804 8.43165 18.1065 11.0056Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M18.9941 18.1062C18.7278 18.3725 18.3727 18.7275 18.1065 18.9938C20.6804 21.5677 21.8343 25.118 21.568 28.5796C22.0118 28.4021 22.4556 28.1358 22.8994 27.8695C22.9881 25.6506 22.4556 23.4316 21.4793 21.3902C23.5207 22.4553 25.7396 22.8991 27.9585 22.8103C28.2248 22.3666 28.4911 21.9228 28.6686 21.479C25.1183 21.834 21.568 20.6802 18.9941 18.1062Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M11.8936 18.9938C11.6274 18.7275 11.2723 18.3725 11.0061 18.1062C8.43209 20.6802 4.8818 21.834 1.42026 21.5677C1.59777 22.0115 1.86404 22.4553 2.13032 22.8991C4.34925 22.9879 6.56819 22.4553 8.60961 21.479C7.54452 23.5204 7.10073 25.7393 7.18949 27.9583C7.63328 28.2245 8.07706 28.4908 8.52085 28.6683C8.16582 25.118 9.31967 21.5677 11.8936 18.9938Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M24.0534 14.9997C26.1836 14.2897 28.1363 13.047 29.6451 11.4494C29.5564 11.0056 29.3789 10.4731 29.2013 10.0293C26.9824 12.692 23.6984 14.3784 20.0593 14.3784C20.0593 14.5559 20.0593 14.8222 20.0593 14.9997C20.0593 15.1772 20.0593 15.4435 20.0593 15.621C23.7871 15.621 27.0712 17.3074 29.2013 19.9701C29.3789 19.5263 29.4676 18.9938 29.6451 18.55C28.1363 16.9524 26.1836 15.7098 24.0534 14.9997Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M15.6214 20.059C15.6214 19.9702 15.6214 19.9702 15.6214 20.059C15.4439 20.059 15.1776 20.059 15.0001 20.059C14.8226 20.059 14.5563 20.059 14.3788 20.059C14.3788 23.7868 12.6924 27.0708 10.0297 29.201C10.4735 29.3785 11.006 29.4673 11.4498 29.6448C13.0474 28.1359 14.29 26.1833 15.0001 24.0531C15.7101 26.1833 16.9527 28.1359 18.5504 29.6448C18.9942 29.556 19.5267 29.3785 19.9705 29.201C17.3078 26.9821 15.6214 23.6981 15.6214 20.059Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M10.0296 15.621C10.0296 15.4435 10.0296 15.1772 10.0296 14.9997C10.0296 14.8222 10.0296 14.5559 10.0296 14.3784C6.30178 14.3784 3.01775 12.692 0.887574 10.0293C0.710059 10.4731 0.621301 11.0056 0.443787 11.4494C1.95266 13.047 3.90533 14.2897 6.0355 14.9997C3.90533 15.7098 1.95266 16.9524 0.443787 18.55C0.532544 18.9938 0.710059 19.5263 0.887574 19.9701C3.01775 17.3074 6.30178 15.621 10.0296 15.621Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
    <path
      d="M11.0059 11.8932C11.2722 11.6269 11.6272 11.2719 11.8935 11.0056C9.3195 8.43162 8.16566 4.88133 8.52069 1.50854C8.0769 1.68606 7.63311 1.95233 7.18933 2.2186C7.10057 4.43754 7.63311 6.65648 8.60944 8.60914C6.65678 7.63281 4.43784 7.10026 2.21891 7.18902C1.95264 7.63281 1.68636 8.07659 1.50885 8.52038C4.88163 8.16535 8.43193 9.3192 11.0059 11.8932Z"
      fill={setHighlightColor(
        highlightOnHover,
        textColor,
        theme.palette.about.main
      )}
    />
  </svg>
);
export default AboutIcon;
