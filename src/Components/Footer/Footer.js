import Social from "../Social/Social";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container container">
        <div className="footer_social">
          <a
            href="https://instagram.com/sumit_soni_21?igshid=ZDdkNTZiNTM="
            className="footer_social_link"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sumit-soni-731661201/"
            className="footer_social_link"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          {/* <a href="" className="footer_social_link" target="_blank">
            <i class="fa-brands fa-youtube"></i>
          </a> */}
        </div>

        <div className="cpyrt">
          <span className="footer_copy"> Sumit Kumar Soni &#169; 2023</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
