interface NavLink {
  title: string;
  canNavigate: boolean;
  navigationPages: string[];
}

export const appSetting: NavLink[] = [
  { title: 'Shop', canNavigate: true, navigationPages: ['Best Seller','View All'] },
  { title: 'Academy', canNavigate: false, navigationPages: [''] },
  { title: 'Events', canNavigate: false, navigationPages: [''] },
  { title: 'About', canNavigate: true, navigationPages: ['FAQs','Shipping terms', 'Contact us', 'Our story', 'Culture', 'Our peel legacy', 'Returns & exchanges', 'Subscriptions'] },
  { title: 'Business tools', canNavigate: false, navigationPages: [''] },
  { title: 'Student', canNavigate: false, navigationPages: [''] },

];
