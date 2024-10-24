import { Button } from '@ui/atoms/Button'

interface QuickViewProps {
    onClick?:()=>void
}

export const  QuickViewButton:React.FC<QuickViewProps> = ({onClick=()=>console.log('')}) => {
  return (
    <div>
      <div className="absolute flex inset-0 bg-[#1e293b82] invisible group-hover:visible w-[310px] justify-center items-center h-[320px]">
        <Button
          onClick={onClick}
          className="w-2/3 absolute bg-appTheme text-[1rem] p-[.344rem ,.118rem] py-[0.625rem] px-[2.313rem] text-white leading-6 font-bold font-HeroNewBold hover:bg-[#555555] justify-center"
        >
              Quick View
        </Button>
      </div>
    </div>
  )
}

export default QuickViewButton
