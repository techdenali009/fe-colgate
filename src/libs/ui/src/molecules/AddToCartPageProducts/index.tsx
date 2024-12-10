import { removeFromCart, selectCartDetails, updateQuantity } from '@store/services/Slices/AddToCartSlice';
import { RootState } from '@store/store';
import QuantityButton from '@ui/atoms/QuantityButton';
import CartDetails from '@ui/atoms/SvgAtoms/CartDetails';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button } from '@ui/atoms/Button';

interface ViewCartModalProps {
  handleLogoutClick?: () => void; // Optional prop for future extensibility
  showCartDetails : boolean;
  setShowCartDetails: React.Dispatch<React.SetStateAction<boolean>>;
}


const AddToCartPageProducts: React.FC<ViewCartModalProps> =({
  showCartDetails,
  
}) => {
  const cartItems = useSelector((state: RootState) => selectCartDetails(state));
  
  const dispatch = useDispatch();
  // Handle quantity change
  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }));
  };

  // Handle remove item
  const handleRemoveItem = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  // Calculate total price
  const totalCartPrice = cartItems.reduce((acc, item) => {
    const price = item.price || 0;
    const quantity = item.quantity || 0;
    return acc + price * quantity;
  }, 0);

  // Calculate total items count
  const totalItemsCount = cartItems.reduce((acc, item) => {
    return acc + (item.quantity || 0);
  }, 0);

  return (
    <div className="">

      {cartItems.length === 0 ? (
        <div className="cart-item-section ">
          <div className="h-[var(--cart-empty-height)] bg-[#f2f2f2] lg:flex lg:justify-center lg:items-center text-center py-20 mb-14 empty-cart">
            <div>
              <div className="text-base font-bold leading-6 lg:mr-2 empty-cart-message">
                <p>
                  <strong>Your cart is currently empty.</strong>
                </p>
              </div>
              <div>
                <a
                  className="text-primary-400 text-sm text-blue-500 font-bold hover:text-secondary-400 focus-visible:text-brand-white-100 focus-visible:bg-primary-400 focus-visible:rounded-3xl link inline-block leading-24 tracking-[0.3px] py-1 px-4 -ml-4 mr-4 light primary anchor-wrapper"
                  title="Shop Products"
                  target="_self"
                  href="/products"
                >
                  Shop Products
                  <span className="arrow-icon right w-4 h-4 ml-2 align-middle inline-block"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-item-section ">
          {showCartDetails && 
          <div className='flex items-center justify-between'>
            <div className='flex '>
              <div className='mr-2'>
                <CartDetails></CartDetails>
              </div>
              <h1 className="text-[16px] font-HeroNewBold">Cart Details</h1>
            </div>

            <div className='flex  items-end text-[14px] font-HeroNewLight space-y-2 mb-2'>
              <div className=''>
                <p >Total Items: <span className='font-HeroNewSemiBold'>{totalItemsCount}</span></p>
              </div>
              <div className='ml-1 mr-1'>|</div>
              <div className="total-price-section text-[14px] font-HeroNewLight mb-6 !mt-0">
                <p>Total Price: <span className='font-HeroNewSemiBold'>&#8377; {totalCartPrice.toFixed(2)}</span></p>
              </div>
            </div>
          </div> }
          
          {cartItems.map((item) => {
            // Safely handle undefined values for price and quantity
            const quantity = item.quantity || 0;
            return (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white py-4  rounded-md   mb-4 border-b"
                
              >
                <div className="flex items-center ">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[5rem] h-[5rem] object-cover mr-4 border border-[rgb(219,219,219)] rounded-[4px]"
                  />
                  <div className='flex flex-col justify-start mb-auto py-2'>
                    <h2 className="font-HeroNewRegular text-[14px] break-words whitespace-normal">{item.name}</h2>
                    <h2 className="font-HeroNewRegular text-[14px] mt-4">&#8377; {item.price}</h2>
                  </div>
                </div>
                <div className='flex flex-row items-center'>
                  <QuantityButton
                    initialQuantity={quantity}
                    containerClassName="mr-[10px] !border-2 !border-appTheme"
                    decreaseButtonClassName="!py-0 h-[35px]"
                    increaseButtonClassName="!py-0 h-[35px]"
                    
                    quantityClassName="text-sm h-[35px]  px-[1rem] !content-center"
                    onQuantityChange={(newQuantity) =>
                      handleQuantityChange(item.id, newQuantity)}
                  />
                  
                  <Button onClick={() => handleRemoveItem(item.id)}>
                    <RiDeleteBin6Line  className="!text-red-500 mr-2 "/>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AddToCartPageProducts;
