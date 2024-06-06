import './App.scss';
import {Header} from "./header/header";

import koenv from './members/koenv.jpg';
import koenr from './members/koenr.jpg';
import jorisb from './members/jorisb.jpg';
import {LinkedInLogo} from "./linkedInLogo";
import logo from "./logo.svg";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="main__content">
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-lg-4 pb-4">
                            <div className="block">
                                <span className={'digit'}>01.</span>
                                <h2>Building Together</h2>
                                <p>Did you build something cool? Share it with the world! Look for related projects to
                                    integrate your work, or start a new open-source project.
                                </p>
                                <a target={"_blank"} className={'button button-blue stretched-link'}
                                   href={"https://opensource.pysport.org"}>Open source</a>
                            </div>
                        </div>
                        <div className="col-lg-4 pb-4">
                            <div className="block">
                                <span className={'digit'}>02.</span>
                                <h2>Bringing the community together</h2>

                                <p>We believe collaboration sparks the best ideas. That's why we host regular meetups
                                    for our sports analytics community. Join us to connect, learn from experts, and
                                    share your insights and projects.
                                </p>
                                <a target={"_blank"} className={'button button-blue stretched-link'}
                                   href={"https://www.meetup.com/pysport/"}>Meetups</a>
                            </div>
                        </div>
                        <div className="col-lg-4 pb-4">
                            <div className="block">
                                <span className={'digit'}>03.</span>
                                <h2>Bringing sports together</h2>
                                <p>Our vision emphasizes collaboration across all sports. We believe in the power of
                                    working together to drive cross-sport innovation, applying solutions from one sport
                                    to another to maximize impact. From soccer to NFL tracking data and adapting
                                    Expected Threat from soccer to hockey.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="quote__wrapper">
                    <div className="container py-4">
                        <div className="main__quote">
                            <h2>Our mission</h2>
                            <blockquote>
                                <span>UNITE</span>{' '}<span className={'text-green-light'}>PRACTITIONERS</span>{' '}
                                <span className={'text-blue-light-400'}>RESEARCHERS</span>{' '}<span
                                className={'text-blue-light'}>LEARNERS</span>
                                {' '}<span>AND</span> <span
                                className={'text-green'}>ENTHUSIASTS</span>{' '}<span>TO</span>{' '}
                                <span>SHARE</span>{' '}
                                <span>INDUSTRY</span>{' '}<span>BEST</span>{' '}<span>PRACTICES</span>{' '}
                                <span>AND</span>{' '}<span>EXCHANGE</span>{' '}<span>IDEAS</span>{' '}<span>TO</span>{' '}
                                <span>ADVANCE</span>{' '}<span className={'text-blue'}>OPEN-SOURCE</span>{' '}
                                <span className={'text-blue'}>SPORTS</span>{' '}<span
                                className={'text-blue'}>ANALYTICS</span>{' '}
                                <span>COMMUNITY</span>

                            </blockquote>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-6 pb-4">
                        <div className="block">
                            {/*<span className={'digit'}>03.</span>*/}
                            <h2>Non Profit</h2>
                            <p>Support adoption, (paid)
                                development, maintenance
                                and improving documentation
                                of open-source sports analytics
                                packages
                                Support researchers with
                                improving and open-sourcing
                                their code
                                Increase overall reach of
                                PySport by growing the
                                community
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 pb-4">
                        <div className="block">
                            {/*<span className={'digit'}>03.</span>*/}
                            <h2>Meetups & conferences</h2>
                            <p>Interested in organising a meetup or hosting a PySport conference?</p>
                            <a target={"_blank"} className={'button button-blue stretched-link'}
                               href={"mailto:info@pysport.org"}>contact us</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4">
                <div className="row">
                    <h2 className={"main__heading text-center"}>Organisation</h2>
                    <div className="col-lg-4 pb-4">
                        <div className="block">
                            <span style={{fontSize: '7rem'}} className={'digit'}>KV</span>
                            <img style={{width: '150px', margin: "0 auto 12px"}} className={'img-fluid rounded-circle'}
                                 src={koenv}/>
                            <h2>Koen Vossen</h2>
                            <p>Founder & President of PySport</p>
                            <p>Co-Founder & CTO at TeamTV<br/>
                                Kloppy Maintainer<br/>
                                Head-coach of a Korfball team</p>
                            <a target={"_blank"} href={'https://www.linkedin.com/in/koen-vossen-85902b7/'}><LinkedInLogo/></a>
                        </div>
                    </div>
                    <div className="col-lg-4 pb-4">
                        <div className="block">
                            <span style={{fontSize: '7rem'}} className={'digit'}>KR</span>
                            <img style={{width: '150px', margin: "0 auto 12px"}} className={'img-fluid rounded-circle'}
                                 src={koenr}/>
                            <h2>Koen de Raad</h2>
                            <p>Treasurer at PySport</p>
                            <p>Co-Founder at Eyedle & SPADE<br/>
                                PyData Organiser
                            </p>
                            <a target={"_blank"} href={'https://www.linkedin.com/in/koen-de-raad/'}><LinkedInLogo/></a>
                        </div>
                    </div>
                    <div className="col-lg-4 pb-4">
                        <div className="block">
                            <span style={{fontSize: '7rem'}} className={'digit'}>JB</span>
                            <img style={{width: '150px', margin: "0 auto 12px"}} className={'img-fluid rounded-circle'}
                                 src={jorisb}/>
                            <h2>Joris bekkers</h2>
                            <p>Secretary at PySport</p>
                            <p>Sports Analytics Consultant &<br/>
                                Start-up Advisor at UnravelSports <br/>
                                Data Analytics at U.S. Soccer Federatio
                            </p>
                            <a target={"_blank"} href={'https://www.linkedin.com/in/joris-bekkers-33138288/'}><LinkedInLogo/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pre__footer">
                <svg width="100%" viewBox="0 0 1512 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0 103.27L63 82.3153C126 61.3604 252 19.4505 378 5.48049C504 -8.48948 630 5.48049 756 33.4204C882 61.3604 1008 103.27 1134 117.24C1260 131.21 1386 117.24 1449 110.255L1512 103.27V229H1449C1386 229 1260 229 1134 229C1008 229 882 229 756 229C630 229 504 229 378 229C252 229 126 229 63 229H0V103.27Z"
                          fill="url(#paint0_linear_0_1)"/>
                    <path
                        d="M989 69C990.815 69.7434 992.99 70.5381 995.502 71.375C1035.98 83.3121 1185.17 93 1237 93C1301 93 1411 87.3333 1485 81C1438 90.3333 1291 107.191 1237 106C1135.34 103.757 1031.29 83.2958 995.502 71.375C992.848 70.5923 990.661 69.7999 989 69Z"
                        fill="url(#paint1_linear_0_1)"/>
                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="-5.12733e-06" y1="133.349" x2="1564.58" y2="207.88"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4D97CA"/>
                            <stop offset="0.438632" stop-color="#469BC7"/>
                            <stop offset="0.588787" stop-color="#469FC9"/>
                            <stop offset="0.738942" stop-color="#54A5BE"/>
                            <stop offset="0.89587" stop-color="#6FA9A8"/>
                            <stop offset="1" stop-color="#91AE8A"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_0_1" x1="989" y1="90.5803" x2="1498.66" y2="139.793"
                                        gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4D97CA"/>
                            <stop offset="0.438632" stop-color="#469BC7"/>
                            <stop offset="0.588787" stop-color="#469FC9"/>
                            <stop offset="0.738942" stop-color="#54A5BE"/>
                            <stop offset="0.89587" stop-color="#6FA9A8"/>
                            <stop offset="1" stop-color="#91AE8A"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="footer">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-4 py-4">
                            <p className={'text-white'}>If you want to help us reach our goals, either by donating,
                                hosting a meetup or contributing please reach out to us!</p>
                            <a className={'text-white'} href={"mailto:info@pysport.org"}>Info@pysport.org</a>
                        </div>

                        <div className="col-md-4 py-4">
                            <p className={'text-white'}>
                                Our vision doesn’t say anything about a type of sports. That’s by intention. We believe we should keep looking for opportunities to apply a solution from sport A to sport B. When we start being creative and think about how to apply solutions from one sport to another the impact of those innovations is way bigger. As a result the audience is bigger and the chances are higher someone will come up with smart applications.
                            </p>
                        </div>

                        <div className="col-md-4 py-4">
                            <img src={logo}/>
                            <div className={'social-icons mt-4'}>
                                <a target={"_blank"} className={'mx-2'} href={"https://github.com/pysport"}>
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
                                </a>
                                <a className={' mx-2'} target={"_blank"} href={"https://www.linkedin.com/company/pysport/"}>
                                    <LinkedInLogo></LinkedInLogo>
                                </a>
                                <a className={' mx-2'} target={"_blank"} href={"https://x.com/PySportOrg"}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.25577 2.07031L9.59232 13.2171L1.20312 22.2799H3.0912L10.4359 14.3453L16.3703 22.2799H22.7954L13.9898 10.5061L21.7984 2.07031H19.9104L13.1462 9.37793L7.68095 2.07031H1.25577ZM4.03232 3.46107H6.98406L20.0185 20.8889H17.0667L4.03232 3.46107Z" fill="white"/>
                                </svg>

                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
