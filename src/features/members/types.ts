export type Member = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  plan: string;
  status: "Active" | "Pending" | "Inactive";
};