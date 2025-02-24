import React from 'react';
import {
  InstagramIcon,
  LinkedInIcon,
  LogoSocialMedia,
  TwitterIcon,
} from '../../../../components/icons';
import * as S from './SocialMedia.css';

type Props = {
  secondary: boolean,
  showIepsLink?: boolean,
  isFooterVersion?: boolean,
};

const SocialMedia = ({
  secondary,
  showIepsLink = true,
  isFooterVersion,
}: Props) => {
  return (
    <S.SocialMedia isFooterVersion={isFooterVersion}>
      <a href="https://ieps.org.br/" target="blank">
        <LogoSocialMedia secondary={secondary} />
      </a>
      <a href="https://twitter.com/IEPSoficial" target="blank">
        <TwitterIcon secondary={secondary} />
      </a>
      <a href="https://www.linkedin.com/company/iepsoficial" target="blank">
        <LinkedInIcon secondary={secondary} />
      </a>
      <a href="https://www.instagram.com/iepsoficial/" target="blank">
        <InstagramIcon secondary={secondary} />
      </a>
    </S.SocialMedia>
  );
};

export default SocialMedia;
