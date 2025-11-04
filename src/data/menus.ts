import type { MainMenuItem, MenuNavigation } from "~/types";

export const menuMain: MainMenuItem[] = [
  {
    id: "home",
    label: "Home",
    url: "/",
  },
  {
    id: "about",
    label: "About",
    url: "/about-us",
    submenu: [
      {
        id: "testimonials",
        label: "Testimonials",
        url: "/about-us/testimonials",
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    url: "/services",
    submenu: [
      { id: "repairs", label: "Repairs", url: "/services/repairs" },
      { id: "maintenance", label: "Maintenance", url: "/services/maintenance" },
      { id: "car-sales", label: "Car Sales", url: "/services/car-sales" },
    ],
  },
];

export const menuNavigation: MenuNavigation = {
  prettyName: "Navigation",
  items: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about-us",
    },
    {
      name: "Services",
      url: "/services",
    },
  ],
};

export const menuService: MenuNavigation = {
  prettyName: "Service",
  items: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about-us",
    },
    {
      name: "Services",
      url: "/services",
    },
  ],
};

export const menuMisc: MenuNavigation = {
  prettyName: "Miscellaneous",
  items: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about-us",
    },
    {
      name: "Services",
      url: "/services",
    },
  ],
};

export const menuLegal: MenuNavigation = {
  prettyName: "Legal",
  items: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about-us",
    },
    {
      name: "Services",
      url: "/services",
    },
  ],
};
