export interface GeneralData {
  account:             string;
  unconfirmed_balance: string;
  balance:             string;
  hashrate:            string;
  avgHashrate:         AvgHashrate;
  workers:             Worker[];
}

export interface AvgHashrate {
  [h1: string]:  string;
  h3:  string;
  h6:  string;
  h12: string;
  h24: string;
}

export interface Worker {
  id:        string;
  uid:       number;
  hashrate:  string;
  lastshare: number;
  rating:    number;
  h1:        string;
  h3:        string;
  h6:        string;
  h12:       string;
  h24:       string;
}