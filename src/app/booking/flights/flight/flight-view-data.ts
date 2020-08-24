export interface FlightViewData {
  sourcePlace: string;
  destinationPlace: string;
  numberOfTransfers: number;
  price: number;
  departureDate: string;
  arrivalDate: string;
  flights: Array<IntermediateConnection>;
}

export class IntermediateConnection {
  departureDate: string;
  arrivalDate: string;
  srcPlace: string;
  dstPlace: string;
  airline: string;
}
