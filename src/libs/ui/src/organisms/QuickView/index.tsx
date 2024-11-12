import React from 'react';
import Modal from '@ui/atoms/Modal';
import ModalHeader from '@ui/atoms/ModalHeader';
import ModalBody from '@ui/atoms/ModalBody';
import { Image } from '@ui/atoms/Image';
import { Heading } from '@ui/atoms/Heading';
import StarRating from '@ui/atoms/StarRating';
import { Paragraph } from '@ui/molecules/Paragraph';
import Anchor from '@ui/molecules/Anchor';

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  isBestSeller: boolean;
  discription?: string;
}

interface QuickViewProps {
  closeModal: () => void;
  product: Product;
}

const 

  QuickViewModal: React.FC<QuickViewProps> = ({ closeModal, product }) => {
    return (
      <div className="">
        <Modal
          onClose={closeModal}
          className=" md:!px-4  !ml-0 !px-0 !my-8 !p-6  rounded-md  lg:!w-[896px]  md:!w-[42rem] !w-full"
        >
          <ModalHeader
            onClose={closeModal}
          
            className=""
          >{' '}
          </ModalHeader>
          <ModalBody title={''} className=" !mt-0">
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
                  <p className="mx-1">{product.rating}(2)</p>
                </div>

                <Paragraph className="!mb-0 overflow-hidden text-ellipsis !text-[1rem] line-clamp-2 !tracking-normal">
                  {product.discription}
                </Paragraph>
                <div className="mb-5 mt-2">

                  <Anchor
                    href={`/products/${product.id}`}
                    className="underline !tracking-[0.3px] !leading-6 !font-light !text-[1rem] !font-HeroNewLight py-1   mr-4  hover:text-[#555555]"
                  >
                  See more details and subscription options
                  </Anchor>
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-appTheme font-bold font-HeroNewBold text-xs mt-3 ">
                  Must be a verified professional to access wholesale pricing
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  };

export default QuickViewModal;
