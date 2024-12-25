import "./SideBar.css";
import { useState } from "react";
import Checkbox from "../../utils/checkbox/Checkbox";
import { Currency, OptionObj, sideBarProps } from "../../utils/types";

const SideBar = ({ setCurrency, setFilterOption }: sideBarProps) => {
  const optionList: OptionObj[] = [
    { id: 4, label: "Все" },
    { id: 0, label: "Без пересадок" },
    { id: 1, label: "1 пересадка" },
    { id: 2, label: "2 пересадка" },
    { id: 3, label: "3 пересадка" },
  ];

  const [selectCurrency, setSelectCurrency] = useState<Currency>();

  return (
    <div className="sideBar">
      <h3 className="title">Валюта</h3>

      <div className="currencyBox">
        <span
          className={
            selectCurrency === "USD" ? "selected currency" : "currency"
          }
          onClick={() => {
            setCurrency("USD");
            setSelectCurrency("USD");
          }}
        >
          USD
        </span>

        <span
          className={
            selectCurrency === "EUR"
              ? "selected currency"
              : "currency currencyMid"
          }
          onClick={() => {
            setCurrency("EUR");
            setSelectCurrency("EUR");
          }}
        >
          EUR
        </span>

        <span
          className={
            selectCurrency === "RUB" ? "selected currency" : "currency"
          }
          onClick={() => {
            setCurrency("RUB");
            setSelectCurrency("RUB");
          }}
        >
          RUB
        </span>
      </div>

      <div>
        <h3 className="title">Количество пересадок</h3>
        <div className="checkboxBlock">
          {optionList.map((option) => {
            return (
              <div className="listBlock" key={option.id}>
                <Checkbox
                  {...{
                    option,
                    setFilterOption,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
