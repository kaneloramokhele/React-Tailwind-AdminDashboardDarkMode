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
  },
  {
    id: "main-3",
    icon: <MdListAlt />,
    href: "/",
    title: "Reports",
  },
  {
    id: "main-4",
    icon: <MdPeople />,
    href: "/",
    title: "Users",
    spacing: true,
    submenu: true,
    submenuItems: [
      {id: "main-4-1", href: "/", title: "User sub 1"},
      {id: "main-4-2", href: "/", title: "User sub 2"},
    ],
  },
];


export const customersList = [
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
      {id: "customer-2-1", href: "/", title: "Loan sub 1"},
      {id: "customer-2-2", href: "/", title: "Loan sub 2"},
    ],
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


export const noticeList = [
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


export const messageList = [
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

