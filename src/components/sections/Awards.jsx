import Data from "@data/sections/awards.json";

const AwardsSection = () => {
    return (
      <>
        {/* Onovo Awards */}
		<section className="awards-contaier onovo-section gap-bottom-140">
			<div className="container">

				{/* Heading */}
				<div className="onovo-heading">
					<h2 className="onovo-title-2 pt-6">
						<span dangerouslySetInnerHTML={{__html: Data.title}} />
					</h2>
					<h5 className="onovo-subtitle-1 pt-4">
                        <span dangerouslySetInnerHTML={{__html : Data.subtitle}} />
					</h5>
				</div>

				{/* Awards items */}
				<div className="row gap-row">

                    {Data.items.map((item, key) => (
					<div key={`awards-item-${key}`} className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div className="awards image">
							<img  className="awards-img" src={item.image} alt={item.alt} />
							</div>
						<p className="onovo-subtitle-1">{item.value}</p>
						<span dangerouslySetInnerHTML={{__html : item.label}} />
					</div>
                    ))}

				</div>
				
			</div>
		</section>
      </>
    );
};

export default AwardsSection;