import { ReactComponent as Youtubesvg } from '../../assets/images/Youtube.svg';

const WhatsIcon = () => {
  return (
    <a href="https://www.youtube.com/@IBANED" target="_blank" rel="noopener noreferrer">
      <Youtubesvg style={{ width: "20px", height: "20px"}} className="icon" />
    </a>
  );
};

export default WhatsIcon;