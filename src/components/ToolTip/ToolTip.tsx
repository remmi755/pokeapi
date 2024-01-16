import * as React from "react";
import { ReactElement, useState } from "react";
export interface ToolTipProps {
  text: string;
  children: ReactElement;
}

const ToolTip: React.FC<ToolTipProps> = ({ text, children }) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };
  return (
    <div
      className="flex relative text-gray-500 group"
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {children}
      {showToolTip && (
        <div className="absolute rounded-md bg-gray-100 px-2.5 py-0.5 -top-6 left-3">
          {text}
        </div>
      )}
    </div>
  );
};

export default ToolTip;
