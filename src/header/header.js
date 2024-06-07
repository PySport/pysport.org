import logo from '../logo.svg';
import {LinkedInLogo} from "../linkedInLogo";


export const Header = () => {
    return <div id={"header"} className={'header'}>
        <div className="jumbo">
            <div className="container">
                <div className="text-center">
                    <img src={logo}/>
                    <div className="pb-4"></div>
                    <h1 className={'main-heading'}>Uniting Passion, Knowledge and Open-Source Innovation in Sports
                        Analytics</h1>
                    <div className="pb-4"></div>
                    <div className="button-group">
                        <a className={'button button-white mx-2 mt-2'} href={"https://github.com/pysport"}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1154_289)">
                                    <path
                                        d="M9 18.9994C4 20.4994 4 16.4994 2 15.9994M16 21.9994V18.1294C16.0375 17.6526 15.9731 17.1733 15.811 16.7232C15.6489 16.2732 15.3929 15.8629 15.06 15.5195C18.2 15.1695 21.5 13.9794 21.5 8.51945C21.4997 7.12328 20.9627 5.78065 20 4.76945C20.4559 3.54796 20.4236 2.1978 19.91 0.999449C19.91 0.999449 18.73 0.649449 16 2.47945C13.708 1.85827 11.292 1.85827 9 2.47945C6.27 0.649449 5.09 0.999449 5.09 0.999449C4.57638 2.1978 4.54414 3.54796 5 4.76945C4.03013 5.78815 3.49252 7.14291 3.5 8.54945C3.5 13.9694 6.8 15.1594 9.94 15.5494C9.611 15.8894 9.35726 16.2949 9.19531 16.7394C9.03335 17.1839 8.96681 17.6575 9 18.1294V21.9994"
                                        stroke="#073A4F" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1154_289">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            Github</a>

                        <a className={'button button-white mx-2 mt-2'} href={"https://www.linkedin.com/company/pysport/"}>
                            <LinkedInLogo></LinkedInLogo>
                            LinkedIn</a>
                        <a className={'button button-white mx-2 mt-2'} target={"_blank"} href={"https://x.com/PySportOrg"}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.25577 2.07031L9.59232 13.2171L1.20312 22.2799H3.0912L10.4359 14.3453L16.3703 22.2799H22.7954L13.9898 10.5061L21.7984 2.07031H19.9104L13.1462 9.37793L7.68095 2.07031H1.25577ZM4.03232 3.46107H6.98406L20.0185 20.8889H17.0667L4.03232 3.46107Z" fill="#202C33"/>
                            </svg>
X
                        </a>



                    </div>
                </div>

            </div>
        </div>

        <div className="header__end">
            <svg viewBox="0 0 1512 324" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M-1 324L62.0417 294C125.083 264 251.167 204 377.25 192C503.333 180 629.417 216 755.5 234C881.583 252 1007.67 252 1133.75 210C1259.83 168 1385.92 84 1448.96 42L1512 0V324H1448.96C1385.92 324 1259.83 324 1133.75 324C1007.67 324 881.583 324 755.5 324C629.417 324 503.333 324 377.25 324C251.167 324 125.083 324 62.0417 324H-1Z"
                      fill="#EFEFEF"/>
            </svg>
        </div>
    </div>
}