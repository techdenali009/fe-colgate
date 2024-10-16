interface NavLink {
  title: string;
  canNavigate: boolean;
  navigationPages: string[];
}

export const appSetting: NavLink[] = [
  { title: 'shop', canNavigate: false, navigationPages: [''] },
  { title: 'Academy', canNavigate: false, navigationPages: [''] },
  { title: 'Events', canNavigate: false, navigationPages: [''] },
  { title: 'About', canNavigate: true, navigationPages: ['FAQs','Shipping terms'] },
  { title: 'Business tools', canNavigate: false, navigationPages: [''] },
  { title: 'Student', canNavigate: false, navigationPages: [''] },
];
