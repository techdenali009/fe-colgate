export interface Order {
  id: number;
  customer: string;
  product: string;
  status: string;
  amount: string;
}

export const recentOrders: Order[] = [
  {
    id: 1,
    customer: 'John Doe',
    product: 'Product A',
    status: 'Delivered',
    amount: '$150',
  },
  {
    id: 2,
    customer: 'Jane Smith',
    product: 'Product B',
    status: 'Pending',
    amount: '$280',
  },
  {
    id: 3,
    customer: 'Mike Johnson',
    product: 'Product C',
    status: 'Processing',
    amount: '$95',
  },
  {
    id: 4,
    customer: 'Sarah Williams',
    product: 'Product D',
    status: 'Delivered',
    amount: '$420',
  },
];

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Delivered':
      return 'text-green-600';
    case 'Pending':
      return 'text-yellow-600';
    case 'Processing':
      return 'text-blue-600';
    default:
      return 'text-gray-600';
  }
};

export const performanceData = [
  { name: 'Jan', sales: 4000, users: 2400, orders: 1800 },
  { name: 'Feb', sales: 3000, users: 1398, orders: 2800 },
  { name: 'Mar', sales: 2000, users: 9800, orders: 3200 },
  { name: 'Apr', sales: 2780, users: 3908, orders: 2500 },
  { name: 'May', sales: 1890, users: 4800, orders: 3300 },
  { name: 'Jun', sales: 2390, users: 3800, orders: 2900 },
];
