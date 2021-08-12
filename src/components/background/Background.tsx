import './Background.scss';

const Background = () => {
  return (
    <div className="wave-wrapper animation">
      <div className="wave-wrapper--inner bgTop">
        <div className="wave wave--top" />
      </div>

      <div className="wave-wrapper--inner bgMiddle">
        <div className="wave wave--middle" />
      </div>

      <div className="wave-wrapper--inner bgBottom">
        <div className="wave wave--bottom" />
      </div>
    </div>
  );
};

export default Background;
