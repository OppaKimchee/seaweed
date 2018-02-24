import React from 'react'
import './Main.css'
import logo from './logo.jpg'

const Main = (props) => {
	return (
		<div className="container">

			<div className="row row-offcanvas row-offcanvas-right">

				<div className="col-xs-12 col-sm-9">
					<p className="pull-right visible-xs">
						<button type="button" className="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
					</p>
					<div className="jumbotron">
						<img className='main-logo' src={logo} alt="logo" />
					</div>
					{/*<div className="row">
						<div>
							<h2>Black Label Gourmet’s Philosophy: Ingredient First!</h2>
							<p>Black Label Gourmet carefully selected each ingredient in order to produce a wholesome and great tasting seaweed snack.
								<br/><br/>We only use 2 colors in our package - black and white.
								<br/><br/>Black represents seaweed and white represents salt. This demonstrates our principle to exclude everything else from our product besides seaweed, salt and olive oil.</p>
							<iframe classname="iframe" src="https://docs.google.com/gview?url=https://docs.google.com/presentation/d/1YidaytEcGZWmQlAADBD_8FpCNtUtzUVc-Sj1dAE6M2c/edit#slide=id.p9&embedded=true" frameborder="0"></iframe>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
						<div className="col-xs-6 col-lg-4">
							<h2>Source of Black Label Gourmet: Seocheon Region</h2>
							<p>The optimal environment to produce high quality seaweed</p>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
						<div className="col-xs-6 col-lg-4">
							<h2>Trustworthy Production Process</h2>
							<p>A master craftsman, who has devoted the past 25 years to research and rigorous work into implementing the original flavor of healthy seaweed, is fully hands-on in maintaining the high quality of Black Label Gourmet Organic Roasted Seaweed Snack</p>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
						<div className="col-xs-6 col-lg-4">
							<h2>Product Information</h2>
							<p>∙ Product Name :  Black Label Gourmet Organic Roasted Seaweed Snack
								<br/>∙ Distributed by :  RICOLOCO INC.
								<br/>∙ Country of Origin :  Product of Korea 
								<br/>∙ Net WT :  4.5g (0.16 oz) X 16 Packs
								<br/>∙ Ingredients :  Seaweed (organic),   Olive Oil (organic), Sun-dried Sea Salt (organic)
								<br/>∙ Quality of Seaweed : Prime (highest rating)
								<br/>∙ Certification :  USDA, FDA, HACCP</p>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
						<div className="col-xs-6 col-lg-4">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
						<div className="col-xs-6 col-lg-4">
							<h2>Heading</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
							<p><a className="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
					</div>*/}
				</div>

				<div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
					<div className="product-box">
						<a target="_blank" href="https://www.amazon.com/Black-Label-ORGANIC-Roasted-Seaweed/dp/B01IEG5BBY?SubscriptionId=AKIAIPUABXASHBDZZ4JA&tag=5606eb-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01IEG5BBY">
							<img src="https://images-na.ssl-images-amazon.com/images/I/51wN%2BF7bOxL._SL160_.jpg" style={{ "height": "200px", "width": "190px" }} />
						</a>
						<div className="product-title">
							<h3>Black Label ORGANIC Roasted Seaweed (Nori) Snack, 4.5g (Pack of 16)</h3>
						</div>
						<p className="product-price">$12.56<br />
							<a target="_blank" href="https://www.amazon.com/gp/offer-listing/B01IEG5BBY?SubscriptionId=AKIAIPUABXASHBDZZ4JA&tag=5606eb-20&linkCode=xm2&camp=2025&creative=386001&creativeASIN=B01IEG5BBY"> More offers </a>
						</p>
						<div className="button-div">
							<span className="a-button a-button-primary">
								<a target="_blank" href="https://www.amazon.com/Black-Label-ORGANIC-Roasted-Seaweed/dp/B01IEG5BBY?SubscriptionId=AKIAIPUABXASHBDZZ4JA&tag=5606eb-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B01IEG5BBY">
									<span className="a-button-inner">
										<img src="http://webservices.amazon.com/scratchpad/assets/images/Amazon-Favicon-64x64.png" className="a-icon a-icon-shop-now" />
										<input className="a-button-input" type="submit" value="Add to cart" />
										<span className="a-button-text">Shop Now</span>
									</span>
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>

			<hr />

			<footer>
				<p>For further information, please contact moon@blgourmet.com</p>
			</footer>

		</div>
	)
}
export default Main