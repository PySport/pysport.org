import {useTranslation} from "react-i18next";
import koenv from "../../members/koenv.jpg";
import {LinkedInLogo} from "../../linkedInLogo";
import koenr from "../../members/koenr.jpg";
import jorisb from "../../members/jorisb.jpg";

import {Donate} from "../../donate/donate";

export const Homepage = () => {
    const {t} = useTranslation();

    return (
        <>
            <div className="main__content">
                <div className="container pb-4">
                    <div className="row">
                        <div className="col-lg-4 pb-4">
                            <div className="block">
                                <span className={"digit"}>01.</span>
                                <h2>{t("homepage.section1.title")}</h2>
                                <p>{t("homepage.section1.description")}</p>
                                <a
                                    target={"_blank"}
                                    className={"button button-blue stretched-link"}
                                    href={"https://opensource.pysport.org"}
                                >
                                    {t("homepage.section1.button")}
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 pb-4">
                            <div className="block">
                                <span className={"digit"}>02.</span>
                                <h2>{t("homepage.section2.title")}</h2>
                                <p>{t("homepage.section2.description")}</p>
                                <a
                                    target={"_blank"}
                                    className={"button button-blue stretched-link"}
                                    href={"https://www.meetup.com/pysport/"}
                                >
                                    {t("homepage.section2.button")}
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 pb-4">
                            <div className="block">
                                <span className={"digit"}>03.</span>
                                <h2>{t("homepage.section3.title")}</h2>
                                <p>{t("homepage.section3.description")}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="quote__wrapper">
                    <div className="container py-4">
                        <div className="main__quote">
                            <h2>{t("homepage.mission.title")}</h2>
                            <blockquote>
                                <span>{t("homepage.mission.quote")}</span>
                            </blockquote>
                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-6 pb-4">
                            <div className="block">
                                <h2>{t("homepage.nonProfit.title")}</h2>
                                <p>{t("homepage.nonProfit.description")}</p>
                                <Donate/>
                            </div>
                        </div>
                        <div className="col-lg-6 pb-4">
                            <div className="block">
                                <h2>{t("homepage.meetups.title")}</h2>
                                <p>{t("homepage.meetups.description")}</p>
                                <a
                                    target={"_blank"}
                                    className={"button button-blue stretched-link"}
                                    href={"mailto:info@pysport.org"}
                                >
                                    {t("homepage.meetups.button")}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="row">
                        <h2 className={"main__heading text-center"}>
                            {t("homepage.organisation.title")}
                        </h2>
                        <div className="col-lg-4 pb-4">
                            <div className="block">
                <span style={{fontSize: "7rem"}} className={"digit"}>
                  KV
                </span>
                                <img
                                    style={{width: "150px", margin: "0 auto 12px"}}
                                    className={"img-fluid rounded-circle"}
                                    src={koenv}
                                />
                                <h2>{t("homepage.organisation.koenVossen.name")}</h2>
                                <p>{t("homepage.organisation.koenVossen.title")}</p>
                                <p>{t("homepage.organisation.koenVossen.description")}</p>
                                <a
                                    target={"_blank"}
                                    href={"https://www.linkedin.com/in/koen-vossen-85902b7/"}
                                >
                                    <LinkedInLogo/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 pb-4">
                            <div className="block">
                <span style={{fontSize: "7rem"}} className={"digit"}>
                  KR
                </span>
                                <img
                                    style={{width: "150px", margin: "0 auto 12px"}}
                                    className={"img-fluid rounded-circle"}
                                    src={koenr}
                                />
                                <h2>{t("homepage.organisation.koenRaad.name")}</h2>
                                <p>{t("homepage.organisation.koenRaad.title")}</p>
                                <p>{t("homepage.organisation.koenRaad.description")}</p>
                                <a
                                    target={"_blank"}
                                    href={"https://www.linkedin.com/in/koen-de-raad/"}
                                >
                                    <LinkedInLogo/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 pb-4">
                            <div className="block">
                <span style={{fontSize: "7rem"}} className={"digit"}>
                  JB
                </span>
                                <img
                                    style={{width: "150px", margin: "0 auto 12px"}}
                                    className={"img-fluid rounded-circle"}
                                    src={jorisb}
                                />
                                <h2>{t("homepage.organisation.jorisBekkers.name")}</h2>
                                <p>{t("homepage.organisation.jorisBekkers.title")}</p>
                                <p>{t("homepage.organisation.jorisBekkers.description")}</p>
                                <a
                                    target={"_blank"}
                                    href={"https://www.linkedin.com/in/joris-bekkers-33138288/"}
                                >
                                    <LinkedInLogo/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
