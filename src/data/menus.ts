import type { MainMenuItem, MenuNavigation } from "~/types";

export const menuMain: MainMenuItem[] = [
  {
    id: "home",
    label: "Home",
    url: "/",
  },
  {
    id: "about",
    label: "Nosotros",
    url: "/nosotros",
  },
  {
    id: "services",
    label: "Servicios",
    url: "/servicios",
    submenu: [
      { id: "repairs", label: "Reparaciones", url: "/servicios/repairs" },
      {
        id: "maintenance",
        label: "Mantenimiento",
        url: "/servicios/maintenance",
      },
      {
        id: "car-sales",
        label: "Ventas de Autos",
        url: "/servicios/car-sales",
      },
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
      name: "Nosotros",
      url: "/nosotros",
    },
    {
      name: "Servicios",
      url: "/servicios",
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
      name: "Nosotros",
      url: "/nosotros",
    },
    {
      name: "Servicios",
      url: "/servicios",
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
      name: "Nosotros",
      url: "/nosotros",
    },
    {
      name: "Servicios",
      url: "/servicios",
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
      name: "Nosotros",
      url: "/nosotros",
    },
    {
      name: "Servicios",
      url: "/servicios",
    },
  ],
};
