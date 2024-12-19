import Home from '@ui/atoms/SvgAtoms/Home';
import OrderInvoice from '@ui/atoms/SvgAtoms/OrderInvoice';
import PaytmMethod from '@ui/atoms/SvgAtoms/PaytmMethod';
import Shipping from '@ui/atoms/SvgAtoms/Shipping';
import Heart from '@ui/atoms/SvgAtoms/Heart';
import PreviewPerson from '@ui/atoms/SvgAtoms/PreviewPerson';



export const profileMenuItems = [
  { title: 'Overview', href: '/myaccount/overview', icon: <Home></Home>},
  { title: 'Orders', href: '/myaccount/Orders', icon:<OrderInvoice></OrderInvoice> },
  { title: 'Invoices', href: '/myaccount/Invoices', icon:<OrderInvoice></OrderInvoice> },
  // { title: "Subscriptions", href: "/myaccount?tab=autoshipment", icon: Subscription },
  // { title: "Education", href: "/myaccount/Subscriptions", icon: Education },
  { title: 'PersonalProfile', href: '/myaccount/PersonalProfile', icon: <PreviewPerson/> },
  // { title: "Company-user", href: "/myaccount/Company-user", icon: CompanyUser },
  // { title: "Company-profile", href: "/myaccount/Company-profile", icon: CompanyProfile },
  { title: 'Shipping', href: '/myaccount/Shipping', icon: <Shipping/> },
  { title: 'PaytmMethod', href: '/myaccount/PaytmMethod', icon: <PaytmMethod/> },
  { title: 'Favorites', href: '/myaccount/Favorites', icon: <Heart/> },
];
