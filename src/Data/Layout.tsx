import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { PAGE_TITLE, ROUTES } from "../Constants";
import PeopleIcon from "@mui/icons-material/People";
import type { NavItem } from "../Types";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

export const NavItems: NavItem[] = [
  { icon: <GridViewRoundedIcon />, name: PAGE_TITLE.DASHBOARD, path: ROUTES.DASHBOARD },
  { icon: <PeopleIcon />, name: PAGE_TITLE.EMPLOYEE.BASE, path: ROUTES.EMPLOYEE.BASE },
  { icon: <GridViewRoundedIcon />, name: PAGE_TITLE.BRANCH.BASE, path: ROUTES.BRANCH.BASE },
  { icon: <PersonRoundedIcon />, name: "Contact", path: ROUTES.CONTACT.BASE },
  {
    name: PAGE_TITLE.INVENTORY.BASE,
    icon: <SettingsIcon />,
    subItems: [
      { name: PAGE_TITLE.INVENTORY.PRODUCT.BASE, path: ROUTES.PRODUCT.BASE, pro: false },
      { name: PAGE_TITLE.INVENTORY.STOCK, path: ROUTES.STOCK.BASE, pro: false },
      { name: PAGE_TITLE.INVENTORY.BRAND.BASE, path: ROUTES.BRAND.BASE, pro: false },
    ],
  },
  {
    name: PAGE_TITLE.BANK.BANK.BASE,
    icon: <AccountBalanceIcon />,
    subItems: [
      { name: PAGE_TITLE.BANK.BANK.BASE, path: ROUTES.BANK.BASE },
      { name: PAGE_TITLE.TRANSACTION.BASE, path: ROUTES.TRANSACTION.BASE },
      { name: PAGE_TITLE.PAYMENT.BASE, path: ROUTES.PAYMENT.BASE },
    ],
  },
  {
    name: PAGE_TITLE.POS.BASE,
    icon: <PointOfSaleIcon />,
    subItems: [{ name: PAGE_TITLE.POS.NEW, path: ROUTES.POS.NEW }],
  },
  {
    name: PAGE_TITLE.SETTINGS.BASE,
    icon: <SettingsIcon />,
    subItems: [{ name: PAGE_TITLE.SETTINGS.GENERAL, path: ROUTES.SETTINGS.GENERAL, pro: false }],
  },
];
