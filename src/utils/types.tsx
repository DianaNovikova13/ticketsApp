export interface TicketType {
    code: string;
    from: string;
    where: string;
    departureDate: string;
    departureTime: string;
    arrivalTime: string;
    price: number;
    transfer: number;
  }
  
  export type Currency = "USD" | "EUR" | "RUB";
  
  export interface ticketsListProps {
    filteredList: TicketType[];
    currency: Currency;
  }
  
  export interface PropsTicket {
    ticket: TicketType;
    currency: Currency;
  }
  
  export interface OptionObj {
    id: number;
    label: string;
  }
  
  export interface sideBarProps {
    setCurrency: (arg0: Currency) => void;
    setFilterOption: (arg0: OptionObj | undefined) => void;
  }
  