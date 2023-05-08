import Icon from '../assets/github.svg';

// let icon = new Image();
// icon.src = Icon;

function Footer() {
  return (
    <div className="footer">
      <img id="footer-logo" src={Icon}></img>
      <p id="footer-text">Copyright © 2023 || owlbeard</p>
    </div>
  );
}

export default Footer;
