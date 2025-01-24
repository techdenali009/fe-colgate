import React from 'react';

import { AiOutlineFilePdf } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import Popover from '../Popover/Popover';

interface OrderPopoverProps {
  onDownloadPDF: () => void;
  onAddComment: () => void;
}

const OrderPopover: React.FC<OrderPopoverProps> = ({
  onDownloadPDF,
  onAddComment,
}) => (
  <Popover className="float-right right-[-10px] top-3 !p-0 !py-2 boxshadow shadow-lg shadow-[#626161] !min-w-10">
    {/* Download PDF */}
    <div
      className="flex hover:bg-slate-100 p-2 dark:hover:bg-slate-700"
      onClick={onDownloadPDF}
    >
      <AiOutlineFilePdf className="text-xl text-red-500 cursor-pointer hover:text-red-700" />
      <p className="text-appTextColor cursor-pointer mx-2">Download PDF</p>
    </div>
    <hr />

    {/* Add Comments */}
    <div
      className="flex hover:bg-slate-100 p-2 dark:hover:bg-slate-700"
      onClick={onAddComment}
    >
      <BiCommentAdd className="text-xl text-green-500 cursor-pointer hover:text-green-700" />
      <p className="text-appTextColor cursor-pointer mx-2">Add Comment</p>
    </div>
    <hr />
  </Popover>
);

export default OrderPopover;
