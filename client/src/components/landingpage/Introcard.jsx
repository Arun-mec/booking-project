import React from "react";

const Introcard = () => {
  return (
    <div className="container flex flex-col py-8 justify-evenly items-start">
      <div className="flex items-center justify-start py-8">
        <div>
          <p className="text-4xl text-green font-bold">
            Special <br />
            Viewpoint
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-evenly">
        <div className="flex flex-row items-center justify-center">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word
        </div>
        <div className="flex flex-row items-center justify-center">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word
        </div>
      </div>
    </div>
  );
};

export default Introcard;
