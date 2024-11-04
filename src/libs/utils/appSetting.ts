interface NavLink {
  title: string;
  canNavigate: boolean;
  navigationPages: string[];
}

export const appSetting: NavLink[] = [
  { title: 'Shop', canNavigate: true, navigationPages: [] },
  { title: 'Academy', canNavigate: false, navigationPages: [''] },
  { title: 'Events', canNavigate: false, navigationPages: [''] },
  { title: 'About', canNavigate: true, navigationPages: ['FAQs','Shipping terms','PCA SKIN International', 'Product Excellence','Contact us','Careers' ,'Terms & Conditions', 'Our story', 'Culture', 'Our peel legacy', 'Returns & exchanges', 'Subscriptions','Do Not Sell My Personal Information' ] },
  { title: 'Business tools', canNavigate: false, navigationPages: [''] },
  { title: 'Student', canNavigate: false, navigationPages: [''] },
  { title: 'otherLinks', canNavigate: true, navigationPages: ['Terms & Conditions'] },

];
export const appSettings: NavLink[] = [
  { title: 'shop', canNavigate: false, navigationPages: [''] },
  { title: 'Academy', canNavigate: false, navigationPages: [''] },
  { title: 'Events', canNavigate: false, navigationPages: ['Shipping terms'] },
  

];
