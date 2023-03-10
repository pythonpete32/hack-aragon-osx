import React from "react";

export default function DefaultLayout({
  sidebar,
  children,
}: {
  sidebar: React.ReactElement;
  children?: React.ReactElement | React.ReactElement[];
}) {
  return (
    <div className="flex mx-auto bg-n3bg font-display">
      <div className="h-screen">{sidebar}</div>
      <div className="flex flex-col w-full h-screen p-4 pt-20 overflow-y-scroll items-center">
        {children}
      </div>
    </div>
  );
}
