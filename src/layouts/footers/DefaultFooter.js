import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";

const DefaultFooter = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
        {/* Footer */}
        <footer className="onovo-footer footer--dark">
            <div className="footer--default">
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">

                            {/* Description */}
                            <div className="onovo-text onovo-text-white">
                                <h5>Information</h5>
                                <p style={{"opacity": "0.6"}}>From the moment our company was founded, we have helped our clients find exceptional solutions <strong>for their businesses</strong>. </p>
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 offset-lg-1">

                            {/* Description */}
                            <div className="onovo-text onovo-text-white">
                                <h5>Get in Touch</h5>
                                <p style={{"opacity": "0.6"}}>The Grandsburg, 152 Kynsey Road, Colombo 7,  <br />Colombo, Sri Lanka</p>
                                <p style={{"opacity": "0.6"}}>
                                    <a href="tel:0712789983" className="onovo-lnk lnk--white" target="_blank">071 278 9983</a><br />
                                    <a href="mailto:info@innovayionchapter.com" className="onovo-lnk lnk--white" target="_blank">info@innovayionchapter.com</a>
                                </p>
                            </div>

                        </div>

						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 offset-lg-1">

							{/* Description */}
							<div className="onovo-text onovo-text-white">
								<ul className="onovo-footer-menu">
									<li>
										<Link href="/">
											<span className="onovo-lnk">Home</span>
										</Link>
									</li>
									<li>
										<Link href="/about">
											<span className="onovo-lnk">About us</span>
										</Link>
									</li>
									<li>
										<Link href="/projects">
											<span className="onovo-lnk">Projects</span>
										</Link>
									</li>
									<li>
										<Link href="/services">
											<span className="onovo-lnk">Services</span>
										</Link>
									</li>
									<li>
										<Link href="/contact">
											<span className="onovo-lnk">Contact us</span>
										</Link>
									</li>
								</ul>
							</div>

						</div>
                    </div>

                    <div className="separator"></div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">

                            {/* Copyright */}
                            <div className="copyright onovo-text-white">
                                <div dangerouslySetInnerHTML={{__html: appData.footer.copy}} />
                            </div>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">

                            {/* Social */}
                            <div className="onovo-social-1 onovo-social-active">
                                <ul>
                                    {appData.social.map((item, key) => (
                                    <li key={`fsocial-item-${key}`}>
                                        <a className="onovo-social-link onovo-hover-2" href={item.link} title={item.title} target="_blank">
                                            <i className={item.icon}></i>
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </footer>

        <ImageView />
    </>
  );
};
export default DefaultFooter;
