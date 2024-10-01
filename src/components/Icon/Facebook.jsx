import { ReactComponent as FaceSvg } from '../../assets/images/face.svg';

const WhatsIcon = () => {
  return (
    <a href="https://www.facebook.com/denabi123" target="_blank" rel="noopener noreferrer">
      <FaceSvg style={{ width: "20px", height: "20px"}} className="icon" />
    </a>
  );
};

export default WhatsIcon;