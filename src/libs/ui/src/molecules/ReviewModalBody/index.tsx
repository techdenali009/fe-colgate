import ModalBody from '@ui/atoms/ModalBody';

const ReviewModalBody: React.FC = () => {
  return (
    <div>
      <ModalBody title={''} >
        <ul className="flex flex-wrap bg-[rgb(245, 247, 249)]  my-2.5 py-2.5 px-5">
          <li className="my-[5px] mr-[5px] pr-[36px]">
            <p className="flex  text-center mb-[5px] text-[rgb(51, 51, 51)] text-[15px]">Age</p>
            <h2 className="text-[15px]">35 to 44</h2>
          </li>
        </ul>
      </ModalBody>
    </div>
  )
}
export default ReviewModalBody;