import type { Member } from "./types";

export const mockMembers: Member[] = [
  {
    id: "M001",
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@example.com",
    plan: "Gold",
    status: "Active",
  },
  {
    id: "M002",
    firstName: "Priya",
    lastName: "Reddy",
    email: "priya.reddy@example.com",
    plan: "Silver",
    status: "Pending",
  },
  {
    id: "M003",
    firstName: "David",
    lastName: "Johnson",
    email: "david.johnson@example.com",
    plan: "Platinum",
    status: "Inactive",
  },
];