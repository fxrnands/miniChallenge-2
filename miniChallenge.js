const voucherCount = (voucherName, afterDiscount) => {
  let beforeDiscount;
  let discount;
  let discountPrice;

  if (voucherName === "DumbWMerchBerkah" && afterDiscount >= 50000) {
    discount = 25;
    discountPrice = (discount / 100) * afterDiscount;
    if (discountPrice > 20000) {
      beforeDiscount = afterDiscount - 20000;
      return {
        afterDiscount: afterDiscount,
        beforeDiscount: beforeDiscount,
        discount: "25%",
        discountPrice: 20000,
      };
    } else {
      return {
        voucherName: voucherName,
        afterDiscount: afterDiscount,
        beforeDiscount: afterDiscount - discountPrice,
        discount: "25%",
        discountPrice: discountPrice,
      };
    }
  } else if (voucherName === "DumbMerchMurahBanget" && afterDiscount >= 70000) {
    discount = 50;
    discountPrice = (discount / 100) * afterDiscount;
    if (discountPrice > 45000) {
      beforeDiscount = afterDiscount - 45000;
      return {
        afterDiscount: afterDiscount,
        beforeDiscount: beforeDiscount,
        discount: "50%",
        discountPrice: 45000,
      };
    } else {
      return {
        voucherName: voucherName,
        afterDiscount: afterDiscount,
        beforeDiscount: afterDiscount - discountPrice,
        discount: "50%",
        discountPrice: discountPrice,
      };
    }
  }
};

console.log(voucherCount("DumbMerchMurahBanget", 120000));
