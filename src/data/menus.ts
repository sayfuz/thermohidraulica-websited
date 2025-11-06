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
      {
        id: "mantenimiento",
        label: "Mantenimiento",
        url: "/servicios/mantenimiento",
      },
      {
        id: "diseno-e-instalacion",
        label: "Diseño e instalación",
        url: "/servicios/diseno-e-instalacion",
      },
      {
        id: "sistema-agua-helada",
        label: "Sistema de agua helada",
        url: "/servicios/sistema-agua-helada",
      },
      {
        id: "soluciones-industriales-confort",
        label: "Soluciones para procesos industriales o de confort",
        url: "/servicios/soluciones-industriales-confort",
      },
      {
        id: "mediciones-equipos-hvac",
        label: "Mediciones energéticas de equipos HVAC",
        url: "/servicios/mediciones-equipos-hvac",
      },
      {
        id: "rutinas-mantenimiento-preventivo",
        label: "Rutinas de mantenimiento preventivo",
        url: "/servicios/rutinas-mantenimiento-preventivo",
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
