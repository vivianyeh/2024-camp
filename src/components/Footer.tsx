export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="wrap footer-section">
                    <div className="footer-info">
                        <div>
                            <img src="images/logo.svg" alt="Logo" />
                        </div>
                        <div>
                            <p className="fs-5 primary-700">若有數位產品設計和開發相關問題</p>
                            <p className="fs-5 primary-700">歡迎填寫表單，或直接與我聯絡！</p>
                        </div>

                        <a href="mailto:service@hexschool.com" className="fs-5 primary-500"> service@hexschool.com</a>

                    </div>
                    <ul className="footer-list">
                        <li className="contact form">
                            <img src="images/list.svg" alt="填寫表單" />
                            <p className="fs-5" >填寫表單</p>
                        </li>
                        <li className="contact">
                            <img src="images/instagram.svg" alt="instagram" />
                            <p className="fs-5">hexschool_demo</p>
                        </li>
                        <li className="contact">
                            <img src="images/facebook.svg" alt="facebook" />
                            <p className="fs-5">hexschoolTW</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

}
export default Footer;
