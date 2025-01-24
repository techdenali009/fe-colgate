import React, { useEffect } from 'react';
import Modal from '@ui/atoms/Modal';
import ModalHeader from '@ui/atoms/ModalHeader';
import ModalBody from '@ui/atoms/ModalBody';
import { Image } from '@ui/atoms/Image';
import { Heading } from '@ui/atoms/Heading';
import StarRating from '@ui/atoms/StarRating';
import { Paragraph } from '@ui/molecules/Paragraph';
import Anchor from '@ui/molecules/Anchor';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from '@store/services/Slices/AddToCartSlice';
import { Button } from '@ui/atoms/Button';
import QuantityButton from '@ui/atoms/QuantityButton';
import FavoriteButton from '@ui/atoms/ProductDetailsPageFavoriteButton';

interface Product {
  price: number;
  id: string;
  name: string;
  image: string;
  rating: number;
  isBestSeller: boolean;
  description?: string;
}

interface QuickViewProps {
  closeModal: () => void;
  product: Product;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const QuickViewModal: React.FC<QuickViewProps> = ({ closeModal, product }) => {
  const dispatch = useDispatch();

  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.addtocart.items
  );

  const isLoggedIn = useSelector(
    (state: RootState) => state.authSlice.userInfo
  );

  useEffect(() => {
    console.log('Cart Items Updated:', cartItems);
  }, [cartItems]);

  const isProductInCart = cartItems.find(
    (item) => item.id === product.id.toString()
  );

  const handleAddToCart = () => {
    if (!isProductInCart || isProductInCart.quantity < 1) {
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        })
      );
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch(removeFromCart(product.id.toString()));
    } else {
      dispatch(
        updateQuantity({
          id: product.id.toString(),
          quantity: newQuantity,
        })
      );
    }
  };

  return (
    <div>
      <Modal
        onClose={closeModal}
        className="md:!px-4 !ml-0 !px-0 !my-8 !p-6 rounded-md lg:!w-[896px] md:!w-[42rem] !w-full"
      >
        <ModalHeader onClose={closeModal} className="">
          {''}
        </ModalHeader>
        <ModalBody title={''} className="!mt-0">
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 !p-6 lg:!p-0">
            <div className="bg-white sm:col-span-4 lg:col-span-5 h-full">
              <Image src={product.image} alt={product.name} />
            </div>
            <div className="w-[90%] sm:col-span-8 lg:col-span-7 gap-4">
              <Heading className="text-xl lg:text-[1.75rem] font-bold font-HeroNewBold flex text-start text-appTheme !mt-4">
                {product.name}
              </Heading>
              <div className="my-2 flex">
                <StarRating rating={product.rating} />
              </div>
              <Paragraph className="!mb-0 overflow-hidden text-ellipsis !text-[1rem] line-clamp-2 !tracking-normal">
                {product.description}
              </Paragraph>
              <div className="mb-5 mt-2">
                <Anchor
                  href={`/products/${product.id}`}
                  className="underline !tracking-[0.3px] !leading-6 !font-light !text-[1rem] !font-HeroNewLight py-1 mr-4 hover:text-[#555555]"
                >
                  See more details and subscription options
                </Anchor>
              </div>
              {isLoggedIn && (
                <>
                  <FavoriteButton
                    productId={product.id?.toString() || ''}
                  >
                  </FavoriteButton>
                  <div className="flex flex-row justify-between">
                    {!isLoggedIn.isVerified ? (
                      <div className="text-appTheme font-bold font-HeroNewBold text-xs mt-3">
                        Must be a verified professional to access wholesale
                        pricing
                      </div>
                    ) : !isProductInCart ? (
                      <Button
                        className={`py-[0.625rem] px-1 w-1/4 text-appTheme border-appTheme border-2 text-[1rem] font-bold font-HeroNewBold leading-6 tracking-[0.3px]
                        hover:bg-appBlackTheme hover:text-white hover:underline hover:border-white`}
                        type="submit"
                        onClick={handleAddToCart}
                      >
                        Add To Cart
                      </Button>
                    ) : (
                      <QuantityButton
                        initialQuantity={isProductInCart.quantity}
                        containerClassName="!border-2 !border-appTheme w-1/4"
                        decreaseButtonClassName="!rounded-none w-1/3"
                        increaseButtonClassName="!rounded-none w-1/3"
                        quantityClassName="w-1/3"
                        onQuantityChange={handleQuantityChange}
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default QuickViewModal;
