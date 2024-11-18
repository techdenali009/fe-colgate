import SwiperCarousel from '../../molecules/ProductDetailsPageSwiperCarousel';
import ResponsiveCarousel from '../../molecules/ProductDetailsPageResponsiveCarousel';

interface ProductCarouselProps {
  images: string[];
  name: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images, name }) => {
 
  return (
    <div>
      <div className='hidden lg:block'>
        <SwiperCarousel images={images} name={name} />
      </div>
      <div className='block lg:hidden'>
        <ResponsiveCarousel images={images} />
      </div>
    </div>
  );
};

export default ProductCarousel;
