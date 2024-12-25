import "./TicketItem.css";
import { useEffect, useState } from "react";
import { PropsTicket } from "../../utils/types";
import arrow from "../../assets/arrow.png";

const TicketItem = ({ ticket, currency }: PropsTicket) => {
  const [transferParser, setTransferParser] = useState("");
  const [priceParser, setPriceParser] = useState("");

  useEffect(() => {
    const dependOfTransfer = () => {
      if (ticket.transfer <= 0) {
        setTransferParser("Без пересадок");
      }
      if (ticket.transfer == 1) {
        setTransferParser("1 пересадка");
      }
      if (ticket.transfer > 1) {
        setTransferParser(`${ticket.transfer} пересадки`);
      }
    };
    dependOfTransfer();
  }, [ticket]);

  useEffect(() => {
    const parsePrice = () => {
      if (currency === "USD") {
        const dollarPrice = (ticket.price / 99.99)
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        setPriceParser(`$ ${dollarPrice}`);
      }
      if (currency === "EUR") {
        const euroPrice = (ticket.price / 103.91)
          .toFixed(0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        setPriceParser(`€ ${euroPrice}`);
      }
      if (currency === "RUB") {
        const ruble = ticket.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        setPriceParser(`${ruble} руб`);
      }
    };

    parsePrice();
  }, [ticket, currency]);

  return (
    <div className="ticketBlock">
      <div className="ctaBlock">
        <img
          src="https://1000logos.net/wp-content/uploads/2020/04/Turkish_Airlines_logo.png"
          alt="airLogo"
          className="turkishLogo"
        />
        <button className="ctaBtn">Купить за {priceParser}</button>
      </div>
      <div className="flightDetails">
        <div className="departure">
          <p className="time">{ticket.departureTime}</p>
          <p className="city">{ticket.from}</p>
          <p className="date">{ticket.departureDate}</p>
        </div>
        <div className="transfer">
          {transferParser}
          <img src={arrow} alt="arrow" className="transferArrow" />
        </div>
        <div className="arrival">
          <p className="time">{ticket.arrivalTime}</p>
          <p className="city">{ticket.where}</p>
          <p className="date">{ticket.departureDate}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
