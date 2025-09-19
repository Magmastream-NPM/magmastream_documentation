import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import css from "../../css/Landing/QuickLinks.module.css";
import React from "react";
import Link from "@docusaurus/Link";

function QuickLinks() {

    const { siteConfig: {customFields} } = useDocusaurusContext();

    return (
        <section className={clsx(css.expertsContainer)}>
            <div className={clsx(css.expertsLeft)}>
                <h1 className={clsx(css.heading)}>
                    Speak with our team &nbsp;
                    <span className={clsx(css.avatars)}>
                        <img src="https://avatars.githubusercontent.com/u/47192617?v=4" alt="vexi" />
                        <img src="https://avatars.githubusercontent.com/u/58607083?v=4" alt="darek" />
                        <img src="https://avatars.githubusercontent.com/u/90580222?v=4" alt="abel" />
                    </span>{" "}
                    about <br /> contributing to <a>🔥 Magmastream</a>
                </h1>
                <p className={clsx(css.description)}>
                    If you have any ideas or notice anything that could be improved, we’d love your input!
                </p>
                <Link
                    className={clsx(css.gettingStartedButton)}
                    to={customFields.discord}
                >
                    <i className="fa-brands fa-discord fa-sm" style={{ marginRight: "2px"}}/> Discord
                </Link>
            </div>

            <div className={clsx(css.expertsRight)}>
                <Link
                    to={"/docs/contributing"}
                    className={clsx(css.card)}
                >
                    <div>
                        <h3 className={clsx(css.cardTitle)}>Contributing guide</h3>
                        <p className={clsx(css.cardText)}>
                            Go through our guide to find out how you can contribute to the project.
                        </p>
                    </div>
                    <span className={clsx(css.arrow)}><i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i></span>
                </Link>
                <Link
                    to={customFields.repo}
                    className={clsx(css.card)}
                >
                    <div>
                        <h3 className={clsx(css.cardTitle)}>Github repository</h3>
                        <p className={clsx(css.cardText)}>
                            Curious to see what it all looks like? Take a peek at our repository on GitHub.
                        </p>
                    </div>
                    <span className={clsx(css.arrow)}><i className="fa-solid fa-arrow-up-right-from-square fa-xs"></i></span>
                </Link>
            </div>
        </section>
    );
}

export default QuickLinks;