export default interface User {
  personalInfo: {
    email: string;
    name: string;
    id?: string;
  };
  isSignedIn: boolean;
  isAdmin: boolean;
  isRegistered: boolean;
  searchTerm: string;
}
