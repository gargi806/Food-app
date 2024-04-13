import { OFFER_LOGO_URL } from "../utils/constants";

const ResOffers = (props) => {
  const { restroOffer } = props;
  const { offerIds, offerLogo, header, couponCode, description } = restroOffer;
  //console.log(restroOffer);

  return (
    <div className="res-offers-wrapper">
      <div className="row2">
        <div key={offerIds} className="offer-wrapper">
          <div className="offer-box">
            <div className="offer-header">
              <img
                className="offer-logo"
                src={OFFER_LOGO_URL + offerLogo}
              ></img>

              <h3 className="offer-title">&nbsp;&nbsp;&nbsp;{header}</h3>
            </div>

            <div className="offer-footer">
              <h4 className="off-footer">
                {couponCode}|{description}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResOffers;
