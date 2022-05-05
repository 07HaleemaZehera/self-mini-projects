import React from "react";
import "./Cart.css"

export default function Cart() {
  return (
    <div>
        <div className="addCart">
            <img src="https://cdn4.vectorstock.com/i/1000x1000/24/13/shopping-cart-icon-vector-12712413.jpg" />

        </div>
      <h1>Cart component</h1>
      <div className="cartRap" >
        <div className="img-tag items">
          <img className="image"
            src="https://cdn.vox-cdn.com/thumbor/SJcmPEheS_cbdujd4zbIPTpuXfg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315959/akrales_181019_3014_0770.jpg"
            style={{ width: "100px" }}
          />
        </div>
        <div className="text-tag items">
<span>
    I-Phone
</span>
<span>
    Price :$1000.00
</span>
        </div>
        <button className="btn-tag items">
            Add Cart
        </button>
      </div>
    </div>
  );
}
