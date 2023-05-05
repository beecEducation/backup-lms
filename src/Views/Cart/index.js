import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import { Button, Form, InputGroup } from "react-bootstrap";
import Moment from "react-moment";
import { toast } from "react-toastify";
import { Images } from "../../components";
import { useNavigate } from "react-router-dom";
import { BsCartX } from "react-icons/bs";
import WithNavBar from "../../Layouts/WithNavBar";
import CustomFooter from "../../components/CustomFooter";
function Cart() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserCart, setCurrentUserCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [promoResult, setPromoResult] = useState([]);
  const [promoCodeResult, setPromoCodeResult] = useState({});

  const [currentUserState, cartItemsState, couponData] = useSelector(
    (state) => {
      return [
        state.auth.cognito,
        state.cart.listCartItems,
        state.cart.couponResponse,
      ];
    }
  );

  useEffect(() => {
    if (currentUserState) {
      dispatch(Actions.dispatchCartItems(currentUserState.username));
    }
  }, [currentUserState]);

  useEffect(() => {
    if (cartItemsState) {
      setCurrentUserCart(cartItemsState);
    }
  }, [cartItemsState]);

  useEffect(() => {
    if (currentUserCart.length > 0) {
      var temp = 0;
      currentUserCart.map((item) => {
        temp = temp + item.package.price;
      });
      setTotalPrice(temp);
    }
  }, [currentUserCart]);

  useEffect(() => {
    if (couponData) {
      setPromoCodeResult(couponData);
    }
  }, [couponData]);

  useEffect(() => {
    if (promoCodeResult) {
      setPromoCode(promoCodeResult.code);
      if (promoCodeResult.type === "FIX") {
        setDiscount(promoCodeResult.amount);
      } else if (promoCodeResult.type === "PERCENTAGE") {
        const percentOff = (totalPrice * promoCodeResult.amount) / 100;
        setDiscount(percentOff);
      }
    }
  }, [promoCodeResult]);
  

  const deleteCartItem = (id) => {
    const cartItem = {
      id: id,
    };
    const userID = currentUserState?.username;
    dispatch(Actions.dispatchDeleteCartItem(cartItem, userID));
  };

  const verifyCouponCode = () => {
    const couponCodeVerification = {
      code: promoCode,
    };
    dispatch(Actions.dispatchVerifyCoupon(couponCodeVerification));
  };

  const checkoutNow = () => {
    const proceedCheckout = {
      userId: currentUserState?.username,
      subTotal: totalPrice,
      total: totalPrice - discount,
      discount: discount,
      itemsCount: currentUserCart?.length,
      couponCode: promoCode,
    };
    dispatch(Actions.dispatchCheckout(proceedCheckout));
  };

  return (
    <WithNavBar IsLoggedIn={true}>
      <div className="signup-screen">
        <div className="signup-section cart-section">
          <img src={Images.cartBg} alt="" className="img-fluid w-100 cartBg" />
          <div className="col-xxl-4 col-md-6 mx-auto py-5 mt-4">
            <div className="row mx-0 signup-inner">
              <div className="col px-0 py-4 py-md-0">
                {currentUserCart?.length == 0 ? (
                  <div className="text-center p-5 emptyCart">
                    <img
                      src={Images.cartEmpty}
                      alt=""
                      className="img-fluid mb-4"
                    />
                    <h4 className="heading-4">Your Cart is Empty</h4>
                    <h5 className="heading-5 my-4">
                      Add something to make me happy :)
                    </h5>
                    <a
                      href="#myCoursesSection"
                      className="blue-button col"
                      onClick={() => navigate("/courses")}
                    >
                      Find a Course
                    </a>
                  </div>
                ) : (
                  <div className="d-flex align-items-center">
                    <div className="w-100 py-5">
                      <div className="px-3">
                        <h3 className="heading-3 mb-1">Shopping Cart</h3>
                        <p className="signup-summary body-1">
                          Prices shown in USD
                        </p>
                      </div>
                      <div className="mt-4">
                        <p className="signup-summary body-2 px-3">
                          Course Info
                        </p>
                        {currentUserCart?.map((data, key) => (
                          <div key={key} className="cart-details pb-5 mb-5">
                            <div className="d-flex px-3">
                              <div className="">
                                <img
                                  src={data?.package?.image}
                                  alt=""
                                  className="cart-course-img"
                                />
                              </div>
                              <div className="ms-3 me-5">
                                <h6 className="heading-6">
                                  {data?.package?.title}
                                </h6>
                                <p className="body-2 signup-summary">
                                  Student: {data?.student?.firstName} {data?.student?.lastName}
                                </p>
                                <p className="body-2 signup-summary">
                                  Expiry: {data?.package?.duration} Days
                                </p>

                                <div className="mt-4">
                                  <button
                                    className=" p-0 m-0 bg-transparent border-0 body-2 cart-links"
                                    onClick={() => {
                                      deleteCartItem(data.id);
                                    }}
                                  >
                                    Remove <BsCartX className="ms-1" />
                                  </button>
                                  {/* <button
                                    className=" p-0 m-0 bg-transparent border-0 body-2 cart-links ms-5"
                                    onClick={() => {
                                      navigate("/edit-cart");
                                    }}
                                  >
                                    Edit{" "}
                                    <img
                                      src={Images.pencil}
                                      alt=""
                                      className="ms-1"
                                    />
                                  </button> */}
                                </div>
                              </div>
                              <div className="ms-auto">
                                <h6 className="heading-6">
                                  ${data?.package?.price}
                                </h6>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="discount-promo px-3 py-4 mx-3">
                        <img src={Images.promo} alt="" className="promo-icon" />
                        <span className="ms-2 body-2">
                          Have a promo code, refferal code or a voucher?
                        </span>
                        <InputGroup className="mt-3">
                          <Form.Control
                            className="signup-input body-2"
                            required
                            type="text"
                            placeholder="Enter promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                          />
                          <Button
                            id="promo"
                            className="blue-button ms-3"
                            onClick={() => verifyCouponCode()}
                          >
                            Apply
                          </Button>
                        </InputGroup>
                      </div>
                      <div className="promo-details me-4 ms-5 mt-4">
                        <div className="row mx-0">
                          <div className="col-md-6 discount-code pt-4">
                            <p className="body-1 mb-0">
                              Discount Code : {promoCodeResult?.code}
                            </p>
                            <p className="body-1 mb-0">
                              {promoCodeResult?.description}
                            </p>
                          </div>
                          <div className="col-md-6 shopping-total pt-4">
                            <div className="d-flex align-items-baseline">
                              <span className="body-1 subtotal">Subtotal</span>
                              <span className="body-1 subtotal-amount ms-auto">
                                ${totalPrice}
                              </span>
                            </div>
                            <div className="d-flex align-items-baseline mt-3">
                              <span className="body-1 discount">Discount</span>
                              <h6 className="heading-6 mb-0 discount-amount ms-auto">
                                ${discount} USD
                              </h6>
                            </div>
                            <div className="d-flex align-items-baseline mt-3">
                              <h6 className="heading-6 mb-0 grand">
                                Grand Total:
                              </h6>
                              <h6 className="heading-6 mb-0 grand-amount ms-auto">
                                ${totalPrice - discount} USD
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart-checkout mx-3 pt-4">
                        <div className="d-flex justify-content-between align-items-center gap-4">
                          <a
                            href="#myCoursesSection"
                            onClick={() => navigate("/courses")}
                            className="btn blue-button-outline col mt-4"
                          >
                            Continue Shopping
                          </a>
                          <Button
                            className="blue-button col mt-4"
                            onClick={() => {
                              checkoutNow();
                            }}
                          >
                            Checkout
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter/>
    </WithNavBar>
  );
}

export default Cart;
