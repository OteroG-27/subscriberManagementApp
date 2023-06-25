export interface ListaSubcriptoresI {
  Area: string;
  PublicId:any;
  CountryCode:string;
  Name:string;
  Email:string;
  JobTitle:string;
  PhoneNumber:string;
  Topics: []
  Token:string;
  // SubscriptionDate:any;
  // SubscriptionMethod:any;
  // SubscriptionState:any;
  // SubscriptionStateDescription:string
}
export interface IResponse {
  Count: number;
  Data: ListaSubcriptoresI[];
}
