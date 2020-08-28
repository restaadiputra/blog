import React from 'react';
import {
  library,
  IconName as IconNameType,
  IconPrefix as IconPrefixType,
} from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faGithub,
  faLinkedin,
  faTwitter,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

library.add(
  fab,
  faTwitter,
  faMedium,
  faEnvelope,
  faGithub,
  faLinkedin,
  faLaptopCode,
  faDrawPolygon,
  faEdit,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane
);

export type IconProps = FontAwesomeIconProps['icon'];
export type IconName = IconNameType;
export type IconPrefix = IconPrefixType;

const Icon: React.FC<FontAwesomeIconProps> = props => (
  <FontAwesomeIcon {...props} />
);

export default Icon;
