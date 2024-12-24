// src/constants/index.jsx

import {  
    MdDashboard,
    MdAnalytics,
    MdListAlt,
    MdPeople,
    MdGroups,
    MdMoney,
    MdProductionQuantityLimits,
    MdPriceChange,
    MdWarningAmber, 
    MdOutlineDangerous, 
    MdTaskAlt,
    MdInfoOutline,
    MdPerson, 
    MdSettings, 
    MdChecklist, 
    MdOutlineLiveHelp,
    MdLogout,
} from "react-icons/md";


// 0. NAVIGATION
export const mainList = [
  {
    id: "main-1",
    icon: <MdDashboard />,
    href: "/",
    title: "Dashboard",
  },
  {
    id: "main-2",
    icon: <MdAnalytics />,
    href: "/",
    title: "Analytics",
    submenu: true,
    submenuItems: [
      {id: "main-2-1", href: "/", title: "Users"},
      {id: "main-2-2", href: "/", title: "Loans"},
    ],
  },
  {
    id: "main-3",
    icon: <MdListAlt />,
    href: "/reports",
    title: "Reports",
    submenu: true,
    submenuItems: [
      {id: "main-3-1", href: "/acc_statement", title: "Acc Statement"},
      {id: "main-3-2", href: "/acc_balance", title: "Acc Balance"},
      {id: "main-3-3", href: "/loan_report", title: "Loan Report"},
      {id: "main-3-4", href: "/loan_due", title: "Loan Due Report"},
      {id: "main-3-5", href: "/loan_repayment", title: "Loan Repayment Report"},
      {id: "main-3-6", href: "/transaction", title: "Transaction Report"},
      {id: "main-3-7", href: "/expense", title: "Expense Report"},
      {id: "main-3-8", href: "/revenue", title: "Revenue Report"},
    ],
  },
  {
    id: "main-4",
    icon: <MdPeople />,
    href: "/users",
    title: "Users",
    spacing: true,
    submenu: true,
    submenuItems: [
      {id: "main-4-1", href: "/list", title: "View all"},
      {id: "main-4-2", href: "/create", title: "Create user"},
      {id: "main-4-3", href: "/import", title: "Bulk import"},
      {id: "main-4-4", href: "/custom", title: "Custom fields"},
      {id: "main-4-5", href: "/request", title: "Member request"},
    ],
  },
];


export const loansList = [
  {
    id: "customer-1",
    icon: <MdGroups />,
    href: "/",
    title: "Customers",
    submenu: true,
    submenuItems: [
      {id: "customer-1-1", href: "/", title: "Customer sub 1"},
      {id: "customer-1-2", href: "/", title: "Customer sub 1"},
    ],
  },
  {
    id: "customer-2",
    icon: <MdMoney />,
    href: "/",
    title: "Loans",
    spacing: true,
    submenu: true,
    submenuItems: [
      {id: "customer-2-1", href: "/list", title: "All loans"},
      {id: "customer-2-2", href: "/pending", title: "Pending loans"},
      {id: "customer-2-3", href: "/active", title: "Active loans"},
      {id: "customer-2-4", href: "/calculator", title: "Loan calculator"},
      {id: "customer-2-5", href: "/products", title: "Loan products"},
      {id: "customer-2-6", href: "/custom", title: "Custom fields"},
    ],
  },
  {
    id: "customer-3",
    icon: <MdMoney />,
    href: "/repayments",
    title: "Repayments",
  },
];

export const productsList = [
  {
    id: "product-1",
    icon: <MdProductionQuantityLimits />,
    href: "/",
    title: "Products",
    submenu: true,
    submenuItems: [
      {id: "product-1-1", href: "/", title: "Product sub 1"},
      {id: "product-1-2", href: "/", title: "Product sub 2"},
    ],
  },
  {
    id: "product-2",
    icon: <MdPriceChange />,
    href: "/",
    title: "Inventory",
    spacing: true,
    submenu: true,
    submenuItems: [
      {id: "product-2-1", href: "/", title: "Inventory sub 1"},
      {id: "product-2-2", href: "/", title: "Inventory sub 2"},
    ],
  },
];


export const settingsList = [
    {
        id: 1,
        icon: <MdSettings />,
        href: '/settings',
        title: 'Settings',
    },
    {
        id: 2,
        icon: <MdChecklist />,
        href: '/faq',
        title: 'F.A.Q',
    },
    {
        id: 3,
        icon: <MdOutlineLiveHelp />,
        href: '/help',
        title: 'Help',
    },
    {
      id: 4,
      icon: <MdLogout />,
      href: "/logout",
      title: "Logout",
      spacing: true,
    },
];


export const notificationsList = [
  {
    id: 1,
    icon: <MdWarningAmber className='icon text-warning' />,
    href: "/",
    title: "Notice 1",
    body: "Lorem ipsum dolor sit amet",
    time: "1 hours ago",
  },
  {
    id: 2,
    icon: <MdOutlineDangerous className='icon text-danger' />,
    href: "/",
    title: "Notice 2",
    body: "Lorem ipsum dolor sit amet",
    time: "2 hours ago",
  },
  {
    id: 3,
    icon: <MdTaskAlt className='icon text-success' />,
    href: "/",
    title: "Notice 3",
    body: "Lorem ipsum dolor sit amet",
    time: "3 hours ago",
  },
  {
    id: 4,
    icon: <MdInfoOutline className='icon text-info' />,
    href: "/",
    title: "Notice 4",
    body: "Lorem ipsum dolor sit amet",
    time: "4 hours ago",
  },
];


export const messagesList = [
  {
    id: 1,
    img: "",
    href: "/",
    user: "John Doe 1",
    body: "Message 1",
    time: "1 hours ago",
  },
  {
    id: 2,
    img: "",
    href: "/",
    user: "John Doe 2",
    body: "Message 2",
    time: "2 hours ago",
  },
  {
    id: 3,
    img: "",
    href: "/",
    user: "John Doe 3",
    body: "Message 3",
    time: "3 hours ago",
  },
];


export const profileList = [
  {
    id: 1,
    href: "/",
    icon: <MdPerson className='icon' />,
    title: "My Profile",
  },
  {
    id: 2,
    href: "/",
    icon: <MdSettings className='icon' />,
    title: "Account Settings",
  },
  {
    id: 3,
    href: "/",
    icon: <MdOutlineLiveHelp className='icon' />,
    title: "Need Help?",
  },
];

