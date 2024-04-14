import { OFFER_LOGO_URL } from "../utils/constants";

const ResOffers = (props) => {
  const { restroOffer } = props;
  const { offerIds, header, couponCode, description } = restroOffer;
  //console.log(restroOffer);

  return (
    <div className="border-1 border-gray-400 border-solid rounded-lg  shadow-lg shadow-slate-400 p-2 m-8 text-center max-w-md ">
      <div key={offerIds} className="flex justify-center">
        <img className="w-11 h-11 " src={OFFER_LOGO_URL}></img>

        <h3 className="pl-4 pt-2">{header}</h3>
      </div>

      <div>
        <h4 className="pb-1 pl-6 leading-tight ">{description}</h4>
      </div>
    </div>
  );
};

/*  <div className="res-offers-wrapper">
      <div className="row2">
        <div key={offerIds} className="offer-wrapper">
          <div className="offer-box">
            <div className="offer-header">
              <img className="w-8 h-8" src={OFFER_LOGO_URL}></img>

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
};*/

export default ResOffers;
