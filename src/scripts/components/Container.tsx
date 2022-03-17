import React from "react";

export function Container({ params, shuffledList }: any) {
  return (
    <div>
      {params.listItems.map((x: any, y: number) => {
        return x.text;
      })}
    </div>
  );
}
