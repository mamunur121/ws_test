import React from "react";

const Image = () => {
  return (
    <figure>
      <img
        src="/img/miami.jpg"
        alt="Beach work"
        className="h-full w-full border-dashed border-2 border-green-600"
      />
    </figure>
  );
};

export default React.memo(Image);
