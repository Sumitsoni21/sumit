import Social from "../Social/Social";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container container">
        {/* <ul className="footer_list">
          <li>
            <a className="footer_link" href="">
              About
            </a>
          </li>
          <li>
            <a className="footer_link" href="">
              Contact Me
            </a>
          </li>
        </ul> */}

        <div className="footer_social">
          <a href="https://instagram.com/sumit_soni_21?igshid=ZDdkNTZiNTM=" className="footer_social_link" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/sumit-soni-731661201/" className="footer_social_link" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          {/* <a href="" className="footer_social_link" target="_blank">
            <i class="fa-brands fa-youtube"></i>
          </a> */}
        </div>

        <div className="cpyrt">
          <span className="footer_copy">&#169; 2023 Sumit Kumar Soni</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
