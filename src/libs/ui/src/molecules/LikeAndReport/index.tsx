import { Button } from '@ui/atoms/Button';
import { BiDislike, BiLike } from 'react-icons/bi';

interface LikeAndReportProps {
  className?: string;
}

const LikeAndReport: React.FC<LikeAndReportProps> = ({ className }) => {
  return (
    <div className={`my-[10px] flex ${className}`}>
      <div className='py-[3px] mr-[10px] text-[14px]'> Helpful? </div>
      <div className='mr-[5px] flex space-x-2'>
        <Button className='flex  items-center'>
          <span className=''><BiLike className='text-blue-600 !w-5 !h-5' /></span>
          <span className='mx-[10px]'>(2)</span>
        </Button>

        <Button className='flex items-center'>
          <span className=''><BiDislike className='text-blue-600 !w-5 !h-5' /></span>
          <span className='mx-[10px]'>(2)</span>
        </Button>
        <div className='flex items-center'>
          <Button className='ml-10 text-blue-600 px-[5px] text-[16px] font-HeroNewRegular'>Report</Button>
        </div>
      </div>
    </div>
  );
};

export default LikeAndReport;