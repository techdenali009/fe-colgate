import React, { useState } from 'react';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Label } from '@ui/atoms/Label';
import { Input } from '@ui/atoms/Input';

interface ShippingAddress {
    address: string;
    city: string;
    postalCode: string;
    country: string;
}

interface PaymentInfo {
    method: string;
    status: string;
}
interface Order {
    _id: string;
    userId: {
        _id: string;
        email: string;
        firstName: string;
        lastName: string;
    };
    shippingAddress: ShippingAddress;
    billingAddress: ShippingAddress;
    paymentInfo: PaymentInfo;
    products: Array<{
        product: {
            name: string;
            price: number;
        };
        quantity: number;
    }>;
    orderStatus: string;
    totalAmount: number;
    orderId: string;
    taxAmount: number;
    shippingCost: number;
    estimatedDelivery: string;
    createdAt: string;
    updatedAt: string;

}
 
interface OrderDetailsProps {
    order: Order;
    onClose: () => void;
}
declare module 'jspdf' {
     
    interface jsPDF {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        autoTable: (options: any) => jsPDF;
    }
}
const OrderHistoryInvoice: React.FC<OrderDetailsProps> = ({ order, onClose }) => {

  const [invoiceData] = useState({
    orderNumber: order?.orderId || '',
    orderDate: new Date(order?.createdAt || '').toISOString().split('T')[0],
    customerName: `${order?.userId.firstName || ''} ${order?.userId.lastName || ''}`,
    shippingAddress: {
      street: order?.shippingAddress.address || '',
      city: order?.shippingAddress.city || '',
      postalCode: order?.shippingAddress.postalCode || '',
      country: order?.shippingAddress.country || '',
    },
    paymentMethod: order?.paymentInfo.method || '',
    orderStatus: order?.orderStatus || '',
    paymentStatus: order?.paymentInfo.status || '',
    products: order?.products || [],
    totalAmount: order?.totalAmount || 0,
    taxAmount: order?.taxAmount || 0,
    shippingCost: order?.shippingCost || 0,
  });

  const handleDownload = () => {
    const doc = new jsPDF();

    // Set default font
    doc.setFont('helvetica');

    // Add border to match modal UI
    doc.setDrawColor(156, 163, 175); // gray-400 equivalent
    doc.setLineWidth(0.5);
    doc.rect(10, 10, 190, 277); // Add border with 10mm padding from edges

    // Title Section with matching style
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text('SALES INVOICE', 105, 30, { align: 'center' });

    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('SkinGlow', 105, 40, { align: 'center' });

    // Two-column layout matching the modal
    const leftColumnX = 20;
    const rightColumnX = 110;
    let currentY = 60;

    // Invoice Details Section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(107, 114, 128); // text-gray-500 equivalent
    doc.text('INVOICE DETAILS', leftColumnX, currentY);

    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    currentY += 10;
    doc.text('Invoice Number:', leftColumnX, currentY);
    doc.setFont('helvetica', 'bold');
    doc.text(`#${invoiceData.orderNumber}`, leftColumnX + 33, currentY);

    currentY += 8;
    doc.setFont('helvetica', 'normal');
    doc.text('Order Date:', leftColumnX, currentY);
    doc.setFont('helvetica', 'bold');
    doc.text(invoiceData.orderDate, leftColumnX + 30, currentY);

    currentY += 8;
    doc.setFont('helvetica', 'normal');
    doc.text('Payment:', leftColumnX, currentY);
    doc.setFont('helvetica', 'bold');
    doc.text(invoiceData.paymentMethod, leftColumnX + 30, currentY);

    currentY += 8;
    doc.setFont('helvetica', 'normal');
    doc.text('OrderStatus:', leftColumnX, currentY);
    doc.setFont('helvetica', 'bold');
    doc.text(invoiceData.orderStatus, leftColumnX + 30, currentY);

    // Customer Details Section
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(107, 114, 128); // text-gray-500 equivalent
    doc.text('CUSTOMER DETAILS', rightColumnX, 60);

    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text('Customer Name:', rightColumnX, 70);
    doc.setFont('helvetica', 'bold');
    doc.text(invoiceData.customerName, rightColumnX + 33, 70);

    doc.setFont('helvetica', 'normal');
    doc.text('Email:', rightColumnX, 78);
    doc.setFont('bold');
    doc.text(order?.userId.email || '', rightColumnX + 12, 78);

    // Shipping Address Section
    currentY += 20;
    doc.setTextColor(107, 114, 128);
    doc.setFont('helvetica', 'bold');
    doc.text('SHIPPING ADDRESS', leftColumnX, currentY);

    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    currentY += 10;

    // Grid layout for address matching modal

    // Set the label text color to gray and normal font
    doc.setTextColor(128, 128, 128); // Gray color
    doc.setFont('helvetica', 'normal');

    // Add labels
    doc.text('Street:', leftColumnX, currentY);

    // Set the font to bold and reset text color to black for data
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0); // Black color
    doc.text(invoiceData.shippingAddress.street, leftColumnX + 15, currentY);

    // Set the label text color to gray and normal font
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(128, 128, 128);
    doc.text('City:', rightColumnX, currentY);

    // Set the font to bold and reset text color to black for data
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(invoiceData.shippingAddress.city, rightColumnX + 10, currentY);

    currentY += 8;

    // Set the label text color to gray and normal font
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(128, 128, 128);
    doc.text('Pin Code:', leftColumnX, currentY);

    // Set the font to bold and reset text color to black for data
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(invoiceData.shippingAddress.postalCode, leftColumnX + 20, currentY);

    // Set the label text color to gray and normal font
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(128, 128, 128);
    doc.text('Country:', rightColumnX, currentY);

    // Set the font to bold and reset text color to black for data
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(invoiceData.shippingAddress.country, rightColumnX + 20, currentY);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Thank you for Shopping', 105, 290, { align: 'center' }); // Place at the bottom
    // Products Table matching modal styling
    currentY += 20;
    doc.autoTable({
      startY: currentY,
      head: [['Product', 'Quantity', 'Price', 'Total']],
      body: invoiceData.products.map(item => [
        item.product.name,
        item.quantity,
        `${item.product.price.toFixed(2)}`,
        `${(item.quantity * item.product.price).toFixed(2)}`,
      ]),
      styles: {
        fontSize: 10,
        cellPadding: 3,
      },
      headStyles: {
        fillColor: [41, 128, 186], // bg-[#2980ba] equivalent
        textColor: [255, 255, 255],
        fontStyle: 'normal',
        halign: 'left',
      },
      columnStyles: {
        0: { halign: 'left' },
        1: { halign: 'left' },
        2: { halign: 'left' },
        3: { halign: 'left' },
      },
      theme: 'grid', // Use 'grid' to add lines to the table
    });


    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const finalY = (doc as any).lastAutoTable.finalY + 10;
    const summaryX = 130;
    const valueX = 180;

    doc.setFont('helvetica', 'normal');
    doc.text('Subtotal:', summaryX, finalY);
    doc.setFont('helvetica', 'bold');
    doc.text(`${invoiceData.totalAmount - invoiceData.taxAmount - invoiceData.shippingCost}`,
      valueX, finalY, { align: 'right' });

    doc.setFont('helvetica', 'normal');
    doc.text('Shipping:', summaryX, finalY + 8);
    doc.setFont('helvetica', 'bold');
    doc.text(`${invoiceData.shippingCost}`, valueX, finalY + 8, { align: 'right' });

    doc.setFont('helvetica', 'normal');
    doc.text('Tax:', summaryX, finalY + 16);
    doc.setFont('helvetica', 'bold');
    doc.text(`${invoiceData.taxAmount}`, valueX, finalY + 16, { align: 'right' });

    // Draw line before total
    doc.line(summaryX, finalY + 20, valueX, finalY + 20);

    // Total with extra bold styling
    doc.setFont('helvetica', 'bold');
    doc.text('Total:', summaryX, finalY + 28);
    doc.text(`${invoiceData.totalAmount}`, valueX, finalY + 28, { align: 'right' });

    // Save PDF
    doc.save(`Invoice-${invoiceData.orderNumber}.pdf`);

    // Adjust the position of the Thank You text


  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full max-w-4xl p-8 bg-white overflow-y-auto max-h-[90vh]">
        <div className='border-2 border-gray-400 p-8 rounded-md'>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2 font-HeroNewExtraBold">SALES INVOICE</h1>
              <p className="text-gray-600">Skin glow</p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 p-2 bg-appTheme text-white rounded-md"
              >
                <Download className="w-4 h-4 " />
                <h1 className='font-HeroNewRegular'>Download PDF</h1>
              </button>
              <button
                onClick={onClose}
                className="p-2 bg-gray-300 text-black rounded-md"
              >
                <h1 className='font-HeroNewRegular'>Close</h1>
              </button>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="font-HeroNewSemiBold text-gray-500 mb-4">INVOICE DETAILS</h2>
              <div className="space-y-2">
                <div className='flex gap-1'>
                  <Label className='text-gray-500'>Invoice Number:</Label>
                  <div className=" font-HeroNewBold" >#{invoiceData.orderNumber} </div>
                </div>
                <div className='flex gap-1'>
                  <Label className='text-gray-500 font-HeroNewLight'>Order Date:</Label>
                  <div className='font-HeroNewBold'>{invoiceData.orderDate} </div>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div>
              <h2 className="font-HeroNewSemiBold text-gray-500 mb-4">CUSTOMER DETAILS</h2>
              <div className="space-y-2">
                <div>
                  <Label className='text-gray-500 font-HeroNewLight'>Customer Name:</Label>
                  <Input className="font-HeroNewBold" value={invoiceData.customerName} readOnly type="text" />
                </div>
                <div className='flex gap-1'>
                  <Label className='text-gray-500 font-HeroNewLight'>Email:</Label>
                  <div className='font-HeroNewBold'>{order?.userId.email || ''} </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="mb-8">
            <h2 className="font-HeroNewSemiBold text-gray-500 mb-4">SHIPPING ADDRESS</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="font-HeroNewRegular flex gap-1"><h1 className='text-gray-500 font-HeroNewRegular'>street:</h1><div className='font-HeroNewBold' >{invoiceData.shippingAddress.street} </div> </div>
              <div className="font-HeroNewRegular flex gap-1"><h1 className='text-gray-500 font-HeroNewRegular'>City:</h1><div className='font-HeroNewBold' > {invoiceData.shippingAddress.city}</div></div>
              <div className="font-HeroNewRegular flex gap-1"><h1 className='text-gray-500 font-HeroNewRegular'>pin code:</h1><div className='font-HeroNewBold' > {invoiceData.shippingAddress.postalCode} </div></div>
              <div className="font-HeroNewRegular flex gap-1"><h1 className='text-gray-500 font-HeroNewRegular'>Country:</h1><div className='font-HeroNewBold' >{invoiceData.shippingAddress.country} </div></div>

            </div>
          </div>

          {/* Products Table */}
          <div className="mb-8">
            <h2 className="font-semibold mb-4">PRODUCTS</h2>
            <table className="w-full">
              <thead>
                <tr className="bg-[#2980ba] text-white font-HeroNewRegular ">
                  <th className="text-left font-light p-2">Product</th>
                  <th className="text-right font-light p-2">Quantity</th>
                  <th className="text-right font-light p-2">Price</th>
                  <th className="text-right font-light p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.products.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{item.product.name}</td>
                    <td className="text-right p-2">{item.quantity}</td>
                    <td className="text-right p-2">₹{item.product.price}</td>
                    <td className="text-right p-2">₹{item.quantity * item.product.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="space-y-2 text-right">
            <div className="flex justify-end">
              <span className="w-32">Subtotal:</span>
              <span className="w-32 font-black font-heroNewBold">₹{invoiceData.totalAmount - invoiceData.taxAmount - invoiceData.shippingCost}</span>
            </div>
            <div className="flex justify-end">
              <span className="w-32">Shipping:</span>
              <span className="w-32 font-black font-heroNewBold">₹{invoiceData.shippingCost}</span>
            </div>
            <div className="flex justify-end">
              <span className="w-32">Tax:</span>
              <span className="w-32 font-black font-heroNewBold">₹{invoiceData.taxAmount}</span>
            </div>
            <hr></hr>
            <div className="flex justify-end font-HeroNewExtraBold ">
              <span className="w-32">Total:</span>
              <span className="w-32 font-black font-heroNewBold">₹{invoiceData.totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryInvoice;
