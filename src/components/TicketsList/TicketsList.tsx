import "./TicketsList.css";
import TicketItem from "../TicketItem/TicketItem";
import { ticketsListProps } from "../../utils/types";

const TicketsList = ({ filteredList, currency }: ticketsListProps) => {
  return (
    <div className="ticketsList">
      {filteredList &&
        filteredList.map((ticket) => {
          return (
            <div className="listBlock" key={ticket.code}>
              <TicketItem
                {...{
                  ticket,
                  currency,
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default TicketsList;
