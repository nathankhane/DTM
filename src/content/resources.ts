export type Resource = {
  name: string;
  address: string;
  email: string | null;
  phone: string | null;
  url: string;
};

export const resources: Resource[] = [
  { 
    name: "NOCD", 
    address: "225 N Michigan Suite 1430 Chicago, IL, 60601", 
    email: "care@nocdhelp.com", 
    phone: null, 
    url: "https://www.treatmyocd.com/ocd_therapy_nocd" 
  },
  { 
    name: "FHE Health", 
    address: "504 S Federal Hwy Deerfield Beach, FL 33441", 
    email: null, 
    phone: "(877) 621-4144", 
    url: "https://fherehab.com/mental-health-lp/" 
  },
  { 
    name: "StopOCD", 
    address: "—", 
    email: "support@stopocd.com", 
    phone: null, 
    url: "https://www.stopocd.com" 
  },
];

