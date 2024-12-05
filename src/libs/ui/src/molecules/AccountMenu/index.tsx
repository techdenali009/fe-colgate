import Home from '../../../assets/ProfileModalIcons/Home.svg';
import OrderInvoice from '../../../assets/ProfileModalIcons/OrderInvoice.svg';

import Shipping from '../../../assets/ProfileModalIcons/Shipping.svg';
import PaytmMethod from '../../../assets/ProfileModalIcons/PaytmMethod.svg';
import Favorites from '../../../assets/ProfileModalIcons/heart.svg';

export const profileMenuItems = [
  { title: "Overview", href: "/myaccount/overview", icon: Home },
  { title: "Orders", href: "/myaccount/Orders", icon: OrderInvoice },
  { title: "Invoices", href: "/myaccount/Invoices", icon: OrderInvoice },
  // { title: "Subscriptions", href: "/myaccount?tab=autoshipment", icon: Subscription },
  // { title: "Education", href: "/myaccount/Subscriptions", icon: Education },
  // { title: "Person", href: "/myaccount/Person", icon: Person },
  // { title: "Company-user", href: "/myaccount/Company-user", icon: CompanyUser },
  // { title: "Company-profile", href: "/myaccount/Company-profile", icon: CompanyProfile },
  { title: "Shipping", href: "/myaccount/Shipping", icon: Shipping },
  { title: "PaytmMethod", href: "/myaccount/PaytmMethod", icon: PaytmMethod },
  { title: "Favorites", href: "/myaccount/Favorites", icon: Favorites },
];
