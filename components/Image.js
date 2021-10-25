import React from 'react';
import { Image as ImageThemed } from 'theme-ui';
const Image = ({ src, title, ...props }) => (
  <ImageThemed src={src} title={title} {...props} />
);

export default Image;
