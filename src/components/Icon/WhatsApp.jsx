import { ReactComponent as WhatsSvg } from '../../assets/images/Whats.svg';

const WhatsIcon = () => {
  return (
    <a href="https://wa.me/553125264248" target="_blank" rel="noopener noreferrer">
      <WhatsSvg style={{ width: "20px", height: "20px" }} className="icon" />
    </a>
  );
};

export default WhatsIcon;
