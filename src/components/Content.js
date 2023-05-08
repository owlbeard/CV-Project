import Input from './Input';
import Image from '../assets/57275.jpg';

function Content() {
  return (
    <div className="content">
      <div className="hero">
        <img id="hero-image" src={Image} alt="Hero"></img>
        <div className="instruct">
          <h1 id="hero-text">Create your CV in 4 steps!</h1>
          <ul>
            <li>
              <h3>
                Type in your personal and educational information and press
                'submit'
              </h3>
            </li>
            <li>
              <h3>
                Add as many work experiences you want, (not too much though :P)
              </h3>
            </li>
            <li>
              <h3>Click the portrait to add your photo to your CV</h3>
            </li>
            <li>
              <h3>
                {`Click the print button that will appear
                at the bottom right of the page!`}
              </h3>
            </li>
          </ul>
        </div>
      </div>
      <Input />
    </div>
  );
}

export default Content;
