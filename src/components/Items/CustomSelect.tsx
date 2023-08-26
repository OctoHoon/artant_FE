import { useState } from "react";
import { useNavigate } from "react-router-dom";

const options = [
  { value: "order_desc", label: "판매량순" },
  { value: "price_asc", label: "낮은가격순" },
  { value: "price_desc", label: "높은가격순" },
  { value: "discount_desc", label: "할인율순" },
  { value: "created_at", label: "신상품순" },
  { value: "review_desc", label: "리뷰많은순" },
];

const optionStyle = {
  fontFamily: "Spoqa Han Sans Neo",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "18px",
  letterSpacing: "-0.3px",
  /* Add any additional text styles here */
};

function CustomSelect({ onSelectionChange }) {
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("sort", selectedValue);
    window.history.pushState({}, "", newUrl.toString());
    onSelectionChange(selectedValue);
  };

  return (
    <select
      onChange={handleOptionChange}
      style={{
        display: "inline-flex",
        height: "36px",
        padding: "0px 15px",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "5px",
        flexShrink: 0,
        border: "1px solid #FFF ",
      }}
      placeholder="추천순"
    >
      <option value={"relevance"}>추천순</option>
      {options.map((option) => (
        <option key={option.value} value={option.value} style={optionStyle}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default CustomSelect;
