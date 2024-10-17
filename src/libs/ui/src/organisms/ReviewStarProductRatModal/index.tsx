import React from "react";

const ProductRating: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-lg font-bold">Rate the Product</h2>
            {/* Your rating input logic here */}
            <div className="flex space-x-4">
                <button onClick={onSubmit} className="btn-primary">Submit Rating</button>
                <button onClick={onSubmit} className="btn-secondary">Skip</button>
            </div>
        </div>
    );
};

export default ProductRating;
