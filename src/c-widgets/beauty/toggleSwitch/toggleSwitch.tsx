import './toggleSwitch.scss';

export function ToggleSwitch() {
  return (
    <label className="toggle">
      <div className="toggle__wrapper">
        <input type="checkbox" role="switch" />
        <div className="toggle__bg">
          <div className="toggle__sphere">
            <div className="toggle__sphere-bg"/>
          </div>
        </div>
      </div>
    </label>
  );
}
