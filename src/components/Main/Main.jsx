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
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />

			<footer>
				<hr />
				<p>For further information, please contact moon@blgourmet.com</p>
			</footer>

		</div>
	)
}
export default Main