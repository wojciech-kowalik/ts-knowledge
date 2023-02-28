export type SubmitRequest = {
  transactionId: string;
  personal: {
    title: string;
    driverFirstName: string;
    driverMiddleName: string;
    driverLastName: string;
    email: string;
    phone: string;
    previousAliases: {
      firstName: string;
      middleName: string;
      lastName: string;
    };
    gender: string;
    dob: string;
    birthCountry: string;
  };
  driver: {
    licenceNumber: string;
    expiryDate: string;
    hasLicenceForMin6Months: boolean;
    hasTerritoryLicence: boolean;
    territoryLicenceStates?: string[];
    hasDriverAccreditation: boolean;
    driverAccreditationNumber?: string;
    vehicleClasses: string[];
    tandc: true;
  };
  consent: {
    understandInformation: boolean;
    informationTrue: boolean;
    informationConsidered: boolean;
    medicalVicRoadsPoliceCheckConsent: boolean;
    consentToDisclosing: boolean;
    indemnifyAgainstLiability: boolean;
    acicCheckConsent: boolean;
    childrenCheckConsent: boolean;
    personalInfoCheckConsent: boolean;
    trafficOffences: boolean;
    assessAcicCheckConsent: boolean;
    criminalOffences: boolean;
    licenceCancelledSuspended: boolean;
    sexOffendersReporting: boolean;
    ausWorkRights: boolean;
    additionalInformation: string;
  };
  payment: {
    creditCardToken: string;
  };
};

type PaymentRequest = SubmitRequest["payment"];
type PersonalRequest = SubmitRequest["personal"]["previousAliases"];

const processing = (request: PaymentRequest & PersonalRequest) => {
  return `${request.creditCardToken} ${request.firstName}`;
};

const logWithValue = <T extends PersonalRequest, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K] // lookup type
) => {
  console.log("Settings", key, value);
  obj[key] = value;
};

logWithValue(
  {
    firstName: "john",
    middleName: "aka",
    lastName: "doe",
  },
  "firstName",
  "antony"
);
