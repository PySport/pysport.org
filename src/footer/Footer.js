import React from 'react';
import { Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import logo from "../logo.svg";
import { LinkedInLogo } from "../linkedInLogo";

export const Footer = () => {
    const { t } = useTranslation(); // Get the translation function

    return (
        <>
            <div className="pre__footer">
                <svg width="100%" viewBox="0 0 1512 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0 103.27L63 82.3153C126 61.3604 252 19.4505 378 5.48049C504 -8.48948 630 5.48049 756 33.4204C882 61.3604 1008 103.27 1134 117.24C1260 131.21 1386 117.24 1449 110.255L1512 103.27V229H1449C1386 229 1260 229 1134 229C1008 229 882 229 756 229C630 229 504 229 378 229C252 229 126 229 63 229H0V103.27Z"
                          fill="url(#paint0_linear_0_1)"/>
                    <path
                        d="M989 69C990.815 69.7434 992.99 70.5381 995.502 71.375C1035.98 83.3121 1185.17 93 1237 93C1301 93 1411 87.3333 1485 81C1438 90.3333 1291 107.191 1237 106C1135.34 103.757 1031.29 83.2958 995.502 71.375C992.848 70.5923 990.661 69.7999 989 69Z"
                        fill="url(#paint1_linear_0_1)"/>
                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="-5.12733e-06" y1="133.349" x2="1564.58" y2="207.88"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4D97CA"/>
                            <stop offset="0.438632" stopColor="#469BC7"/>
                            <stop offset="0.588787" stopColor="#469FC9"/>
                            <stop offset="0.738942" stopColor="#54A5BE"/>
                            <stop offset="0.89587" stopColor="#6FA9A8"/>
                            <stop offset="1" stopColor="#91AE8A"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_0_1" x1="989" y1="90.5803" x2="1498.66" y2="139.793"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4D97CA"/>
                            <stop offset="0.438632" stopColor="#469BC7"/>
                            <stop offset="0.588787" stopColor="#469FC9"/>
                            <stop offset="0.738942" stopColor="#54A5BE"/>
                            <stop offset="0.89587" stopColor="#6FA9A8"/>
                            <stop offset="1" stopColor="#91AE8A"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="footer">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-4 py-4">
                            <p className={'text-white'}>{t('footer.helpMessage')}</p>
                            <a className={'text-white'} href={"mailto:info@pysport.org"}>{t('footer.contactEmail')}</a>
                        </div>

                        <div className="col-md-4 py-4">
                            <p className={'text-white'}>
                                {t('footer.visionMessage')}
                            </p>
                        </div>

                        <div className="col-md-4 py-4">
                            <Image className={'img-responsive'} src={logo} fluid/>
                            <div className={'social-icons mt-4'}>
                                <a target={"_blank"} className={'mx-2'} href={"https://github.com/pysport"}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1154_289)">
                                            <path
                                                d="M9 18.9994C4 20.4994 4 16.4994 2 15.9994M16 21.9994V18.1294C16.0375 17.6526 15.9731 17.1733 15.811 16.7232C15.6489 16.2732 15.3929 15.8629 15.06 15.5195C18.2 15.1695 21.5 13.9794 21.5 8.51945C21.4997 7.12328 20.9627 5.78065 20 4.76945C20.4559 3.54796 20.4236 2.1978 19.91 0.999449C19.91 0.999449 18.73 0.649449 16 2.47945C13.708 1.85827 11.292 1.85827 9 2.47945C6.27 0.649449 5.09 0.999449 5.09 0.999449C4.57638 2.1978 4.54414 3.54796 5 4.76945C4.03013 5.78815 3.49252 7.14291 3.5 8.54945C3.5 13.9694 6.8 15.1594 9.94 15.5494C9.611 15.8894 9.35726 16.2949 9.19531 16.7394C9.03335 17.1839 8.96681 17.6575 9 18.1294V21.9994"
                                                stroke="#073A4F" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1154_289">
                                                <rect width="24" height="24" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                <a className={'mx-2'} target={"_blank"} href={"https://www.linkedin.com/company/pysport/"}>
                                    <LinkedInLogo />
                                </a>
                                <a className={'mx-2'} target={"_blank"} href={"https://x.com/PySportOrg"}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.25577 2.07031L9.59232 13.2171L1.20312 22.2799H3.0912L10.4359 14.3453L16.3703 22.2799H22.7954L13.9898 10.5061L21.7984 2.07031H19.9104L13.1462 9.37793L7.68095 2.07031H1.25577ZM4.03232 3.46107H6.98406L20.0185 20.8889H17.0667L4.03232 3.46107Z" fill="white"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
