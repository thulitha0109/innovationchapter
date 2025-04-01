import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";

const Footer2 = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
        {/* Footer */}
        <footer className="onovo-footer footer--white">
			<div className="footer--default">
				<div className="container">

					<div className="row gap-bottom-40">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

							{/* Heading */}
							<div className="onovo-heading">
								<h2 className="onovo-title-2">
									<span>Let’s Chat! Let’s Build Something <br/>Awesome Together</span>
								</h2>
								<p><Link href="/contact" className="onovo-footer-lnk onovo-lnk lnk--revert">Lets Start Project</Link></p>
							</div>

						</div>
					</div>

					<div className="row gap-bottom-40">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">

							{/* Logo */}
							<div className="onovo-f-logo gap-bottom-40" style={{"maxWidth": "100px"}}>
								<Link href="/">
									<img src={appData.footer.logo.image} alt={appData.footer.logo.alt} />
								</Link>
							</div>

						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">

							{/* Description */}
							<div className="onovo-text">
								From the moment our company was founded, we have helped our clients find exceptional solutions <strong>for their businesses</strong>.
							</div>

						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 offset-lg-1">

							{/* Description */}
							<div className="onovo-text">
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
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-2">

							{/* Description */}
							<div className="onovo-text">
							The Grandsburg, 152 Kynsey Road, Colombo 7,  <br />Colombo, Sri Lanka
								<p>
									<a className="onovo-lnk" href="tel:+94712789983" target="blank">+94 71 278 9983</a>
									<br />
									<a className="onovo-lnk" href="mailto:info@innovationchapter.com" target="blank">info@innovationchapter.com</a>
								</p>
							</div>

						</div>
					</div>

					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">

							{/* Copyright */}
							<div className="copyright">
								<div dangerouslySetInnerHTML={{__html: appData.footer.copy}} />
							</div>

						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">

							{/* Social*/}
							<div className="onovo-social-1 onovo-social-active">
								<ul>
									{appData.social.map((item, key) => (
									<li key={`fsocial-item-${key}`}>
										<a className="onovo-social-link onovo-hover-2" href={item.link} title={item.title} target="_blank">
											<i className={item.icon} />
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
export default Footer2;
