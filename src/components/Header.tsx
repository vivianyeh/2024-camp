import { useState } from 'react';

export const Header = ({ title }: any) => {

    const links = [
        { name: '首頁', href: '#' },
        { name: '作品集', href: '#' },
        { name: '服務項目', href: '#' },
        { name: '部落格', href: '#' },
        { name: '聯絡我', href: '#' },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (<>
        <header className="sticky-top">
            <div className="wrap">
                <a className="d-flex" href="#">
                    <img src="images/logo.svg" alt="Logo" />
                </a>
                <div className="menu-btn" onClick={toggleMenu}>
                    {isOpen ? <span className="material-icons">
                        close
                    </span> : <span className="material-icons">
                        menu
                    </span>}
                </div>
                <ul className={`menu d-flex ${isOpen ? 'open' : 'close'}`}>
                    {links.map(({ name, href }) => (
                        <li key={name} >
                            <a className={`fs-6 ${title === name ? 'active' : ''}`} href={href}>
                                {name}</a>
                        </li>
                    ))}
                </ul>
                <div className="logo-block"></div>
            </div>
        </header></>
    )
}
export default Header;
