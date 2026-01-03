import { ROUTES } from "../Constants";
import Dashboard from "../Pages/Dashboard";
import GeneralSetting from "../Pages/Settings/GeneralSetting";
import SignInForm from "../Pages/Auth/SignInForm";
import { Navigate } from "react-router-dom";
import { CompanyForm, UserForm } from "../Components/Settings/GeneralSetting";
import Employees from "../Pages/Employee";
import EmployeeForm from "../Pages/Employee/EmployeeForm";
import Branch from "../Pages/Branch";
import BranchForm from "../Pages/Branch/BranchForm";
import Product from "../Pages/Inventory/Product";
import ProductForm from "../Pages/Inventory/Product/ProductForm";
import Stocks from "../Pages/Inventory/Stock";
import Contact from "../Pages/Contacts";
import ContactForm from "../Pages/Contacts/ContactForm";
import Bank from "../Pages/Bank/Bank";
import BankForm from "../Pages/Bank/Bank/BankForm";
import BankTransaction from "../Pages/Bank/BankTransaction";
import PaymentList from "../Pages/Bank/Payment";
import PaymentForm from "../Pages/Bank/Payment/PaymentForm";
import NewPos from "../Pages/POS/New";
import BrandForm from "../Pages/Inventory/Brand/BrandForm";
import Brand from "../Pages/Inventory/Brand";

export const PageRoutes = [
  { path: ROUTES.HOME, element: <Dashboard /> },

  { path: ROUTES.DASHBOARD, element: <Dashboard /> },

  { path: ROUTES.SETTINGS.GENERAL, element: <GeneralSetting /> },
  { path: ROUTES.COMPANY.EDIT, element: <CompanyForm /> },
  { path: ROUTES.USER.EDIT, element: <UserForm /> },

  { path: ROUTES.EMPLOYEE.BASE, element: <Employees /> },
  { path: ROUTES.EMPLOYEE.ADD_EDIT, element: <EmployeeForm /> },

  { path: ROUTES.BRANCH.BASE, element: <Branch /> },
  { path: ROUTES.BRANCH.ADD_EDIT, element: <BranchForm /> },

  { path: ROUTES.PRODUCT.BASE, element: <Product /> },
  { path: ROUTES.PRODUCT.ADD_EDIT, element: <ProductForm /> },

  
  { path: ROUTES.BRAND.BASE, element: <Brand /> },
  { path: ROUTES.BRAND.ADD_EDIT, element: <BrandForm /> },

  { path: ROUTES.STOCK.BASE, element: <Stocks /> },

  { path: ROUTES.CONTACT.BASE, element: <Contact /> },
  { path: ROUTES.CONTACT.ADD_EDIT, element: <ContactForm /> },

  { path: ROUTES.BANK.BASE, element: <Bank />},
  { path: ROUTES.BANK.ADD_EDIT, element:<BankForm/>},

  { path: ROUTES.TRANSACTION.BASE, element: <BankTransaction />},

  { path: ROUTES.PAYMENT.BASE, element: <PaymentList />},
  { path: ROUTES.PAYMENT.ADD_EDIT, element: <PaymentForm />},
  
  { path: ROUTES.POS.NEW, element: <NewPos />},
];

export const AuthRoutes = [
  { path: ROUTES.HOME, element: <Navigate to={ROUTES.AUTH.SIGNIN} replace /> },
  { path: ROUTES.AUTH.SIGNIN, element: <SignInForm /> },
];
