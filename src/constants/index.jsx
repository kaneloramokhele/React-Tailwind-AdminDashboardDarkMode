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


// **************************** SIDEBAR LISTS *********************************
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
    title: "User Management",
    submenu: true,
    submenuItems: [
      {id: "main-4-1", href: "/list", title: "All users"},
      {id: "main-4-2", href: "/roles", title: "User roles"},
      {id: "main-4-3", href: "/control", title: "Account control"},
    ],
  },
  {
    id: "main-5",
    icon: <MdGroups />,
    href: "/members",
    title: "Members",
    spacing: true,
    submenu: true,
    submenuItems: [
      {id: "main-5-1", href: "/list", title: "View all"},
      {id: "main-5-2", href: "/create", title: "Create user"},
      {id: "main-5-3", href: "/import", title: "Bulk import"},
      {id: "main-5-4", href: "/custom", title: "Custom fields"},
      {id: "main-5-5", href: "/request", title: "Member request"},
    ],
  },
];

// LOANS
export const loansList = [
  {
    id: "loan-1",
    icon: <MdMoney />,
    href: "/",
    title: "Loans",
    submenu: true,
    submenuItems: [
      {id: "loan-1-1", href: "/list", title: "All loans"},
      {id: "loan-1-2", href: "/pending", title: "Pending loans"},
      {id: "loan-1-3", href: "/active", title: "Active loans"},
      {id: "loan-1-4", href: "/calculator", title: "Loan calculator"},
      {id: "loan-1-5", href: "/products", title: "Loan products"},
      {id: "loan-1-6", href: "/custom", title: "Custom fields"},
    ],
  },
  {
    id: "customer-3",
    icon: <MdMoney />,
    href: "/repayments",
    title: "Repayments",
    spacing: true,
  },
];


// ACCOUNTS
export const acountsList = [
  {
    id: "account-1",
    icon: <MdProductionQuantityLimits />,
    href: "/accounts",
    title: "Accounts",
    submenu: true,
    submenuItems: [
      {id: "account-1-1", href: "/list", title: "All accounts"},
      {id: "account-1-2", href: "/interest", title: "Interest Calculation"},
      {id: "account-1-3", href: "/type", title: "Account type"},
    ],
  },
  {
    id: "account-2",
    icon: <MdPriceChange />,
    href: "/deposit",
    title: "Deposit",
    submenu: true,
    submenuItems: [
      {id: "account-2-1", href: "/money", title: "Deposit money"},
      {id: "account-2-2", href: "/request", title: "Deposit request"},
    ],
  },
  {
    id: "account-3",
    icon: <MdPriceChange />,
    href: "/deposit_methods",
    title: "Deposit Methods",
    submenu: true,
    submenuItems: [
      {id: "account-3-1", href: "/automatic", title: "Automatic gateway"},
      {id: "account-3-2", href: "/Manual", title: "Manual gateway"},
    ],
  },
  {
    id: "account-4",
    icon: <MdPriceChange />,
    href: "/withdraw",
    title: "Withdraw",
    submenu: true,
    submenuItems: [
      {id: "account-4-1", href: "/money", title: "Withdraw money"},
      {id: "account-4-2", href: "/request", title: "Withdraw request"},
    ],
  },
  {
    id: "account-5",
    icon: <MdPriceChange />,
    href: "/withdraw_method",
    title: "Withdraw Method",
  },
  {
    id: "account-6",
    icon: <MdPriceChange />,
    href: "/transaction",
    title: "Transaction",
    submenu: true,
    submenuItems: [
      {id: "account-6-1", href: "/new", title: "New transaction"},
      {id: "account-6-2", href: "/history", title: "Transaction history"},
      {id: "account-6-3", href: "/category", title: "Transaction category"},
    ],
  },
  {
    id: "account-7",
    icon: <MdPriceChange />,
    href: "/expense",
    title: "Expenses",
    spacing: true,
    submenu: true,
    submenuItems: [
      {id: "account-7-1", href: "/list", title: "All expenses"},
      {id: "account-7-2", href: "/history", title: "Expenses history"},
    ],
  },
];

// SETTINGS
export const settingsList = [
    {
        id: "setting-1",
        icon: <MdSettings />,
        href: '/settings',
        title: 'Settings',
        submenu: true,
        submenuItems: [
          {id: "setting-1-1", href: "/general", title: "General settings"},
          {id: "setting-1-2", href: "/suported_currency", title: "Supported currency"},
          {id: "setting-1-3", href: "/notification", title: "Notification template"},
          {id: "setting-1-4", href: "/database_backup", title: "Database backup"},
        ],
    },
    {
        id: "setting-1",
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


// **************************** HEADER LISTS *********************************
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

