import React from "react";
import { Tooltip, Button } from "@nextui-org/react";

export default function ToolTipWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Tooltip
      content={
        <div className="px-1 py-2">
          <div className="text-small font-bold">CLICK ME </div>
          <div className="text-tiny">to Download Resume</div>
        </div>
      }
      className="dark  text-foreground  "
      placement="top-start"
      showArrow={true}
      shadow="lg"
      delay={50}
      closeDelay={500}
      offset={-7}
    >
      {children}
    </Tooltip>
  );
}
