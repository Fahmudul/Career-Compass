import React from "react";
import "./FAQ.css";
const FAQs = () => {
  return (
    <div className="lg:mt-[100px]">
      <div>
        <h2 className="hdetails font-bold text-5xl">
          Frequently Asked Questions
        </h2>
        <div
          style={{
            visibility: "hidden",
            position: "absolute",
            width: 0,
            height: 0,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol viewBox="0 0 24 24" id="expand-more">
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="close">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </symbol>
          </svg>
        </div>
        <details open="">
          <summary>
            How can I contact customer support?
            <svg
              className="control-icon control-icon-expand"
              width={24}
              height={24}
              role="presentation"
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#expand-more"
              />
            </svg>
            <svg
              className="control-icon control-icon-close"
              width={24}
              height={24}
              role="presentation"
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#close"
              />
            </svg>
          </summary>
          <p>
            You can contact our customer support team by emailing
            support@example.com or by filling out the contact form on our
            website. Our support team is available [insert hours of
            availability] to assist you with any questions or concerns you may
            have
          </p>
        </details>
        <details>
          <summary>
            What payment methods do you accept?
            <svg
              className="control-icon control-icon-expand"
              width={24}
              height={24}
              role="presentation"
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#expand-more"
              />
            </svg>
            <svg
              className="control-icon control-icon-close"
              width={24}
              height={24}
              role="presentation"
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#close"
              />
            </svg>
          </summary>
          <p>
            We accept various payment methods, including credit/debit cards
            (Visa, Mastercard, American Express), PayPal, and bank transfers.
            During the checkout process, you'll have the option to select your
            preferred payment method and complete your purchase securely.
          </p>
        </details>
        <details>
          <summary>
            What is your return policy?
            <svg
              className="control-icon control-icon-expand"
              width={24}
              height={24}
              role="presentation"
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#expand-more"
              />
            </svg>
            <svg
              className="control-icon control-icon-close"
              width={24}
              height={24}
              role="presentation"
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#close"
              />
            </svg>
          </summary>
          <p>
            We want you to be completely satisfied with your purchase. If for
            any reason you're not happy with your order, you can return it
            within [insert number of days] days for a full refund or exchange.
            Please ensure that the item is unused and in its original packaging.
            For more information on our return policy, please visit our Returns
            & Exchanges page or contact our customer support team.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FAQs;
