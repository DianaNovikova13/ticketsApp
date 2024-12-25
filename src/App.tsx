import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import TicketsList from "./components/TicketsList/TicketsList";
import logo from "./assets/aircraft.png";
import { useEffect, useState } from "react";
import { Currency, OptionObj, TicketType } from "./utils/types";

function App() {
  const [ticketsList, setTicketsList] = useState<TicketType[]>([]);
  const [currency, setCurrency] = useState<Currency>("RUB");
  const [filterOption, setFilterOption] = useState<OptionObj>();
  const [filteredList, setFilteredList] = useState<TicketType[]>([]);

  const fetchTickets = async () => {
    const response = await fetch("tickets.json");
    const data = await response.json();
    setTicketsList(data);
  };

  useEffect(() => {
    fetchTickets();
  }, [ticketsList]);

  useEffect(() => {
    const filterTicketsList = () => {
      if (filterOption === undefined || filterOption.id === 4) {
        setFilteredList(ticketsList);
        return;
      }
      setFilteredList(
        ticketsList.filter((ticket) => ticket.transfer === filterOption.id)
      );
    };
    filterTicketsList();
  }, [ticketsList, filterOption]);

  return (
    <div className="wrapper">
      <img src={logo} alt="aircraft" className="aircraft" />
      <div className="container">
        <SideBar {...{ setCurrency, setFilterOption }} />
        <TicketsList {...{ filteredList, currency }} />
      </div>
    </div>
  );
}

export default App;
