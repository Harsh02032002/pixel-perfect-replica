import {
  BarChart3,
  Building2,
  CalendarCheck,
  CircleDollarSign,
  Headphones,
  LayoutGrid,
  type LucideIcon,
  MessageSquare,
  Home,
  Star,
  Users,
  UserSquare,
  BadgeCheck,
} from "lucide-react";

export type NavChild = { label: string; to?: string; children?: NavChild[] };

export type NavItem = {
  index?: number;
  label: string;
  icon: LucideIcon;
  to?: string;
  children?: NavChild[];
};

/** Sidebar structure taken from the Roomhy Superadmin reference screens. */
export const NAV_ITEMS: NavItem[] = [
  { index: 0, label: "Dashboard", icon: LayoutGrid, to: "/dashboard" },
  {
    index: 1,
    label: "Home",
    icon: Home,
    children: [
      { label: "Overview", to: "/overview" },
      { label: "Total Properties" },
      { label: "Total Tenants" },
      { label: "Revenue Overview" },
      { label: "Alerts (Pending Rent)" },
    ],
  },
  {
    index: 2,
    label: "User Management",
    icon: Users,
    children: [
      { label: "Overview" },
      { label: "Team Management" },
      { label: "Roles & Permission" },
      { label: "Attendance" },
      { label: "Property Owners" },
      { label: "Tenants" },
    ],
  },
  {
    index: 3,
    label: "Property Management",
    icon: Building2,
    children: [
      { label: "Overview" },
      { label: "Add Properties" },
      { label: "Approve / Reject Properties" },
      { label: "Pending Properties" },
      { label: "All Properties List" },
      { label: "Online Leads" },
    ],
  },
  {
    index: 4,
    label: "Accounting",
    icon: CircleDollarSign,
    children: [
      { label: "Overview" },
      { label: "Transaction Management (Tenants)" },
      { label: "Transaction Management (Owners)" },
      { label: "Owner Payout" },
      { label: "Invoice System" },
      { label: "Analytics" },
    ],
  },
  { index: 5, label: "Chats", icon: MessageSquare },
  { index: 6, label: "Reports", icon: BarChart3 },
  { index: 7, label: "Booking & Leads", icon: CalendarCheck },
  { index: 8, label: "Review", icon: Star },
  { index: 9, label: "CRM", icon: UserSquare },
  { index: 10, label: "Support", icon: Headphones },
  { index: 11, label: "Subscription Control", icon: BadgeCheck },
];
