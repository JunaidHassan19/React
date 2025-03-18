import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        className="w-full 
                    h-screen 
                    duration-200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex fles-wrap 
                        justify-center
                        bottom-12
                        inset-x-0 
                        px-2"
        >
          <div
            className="fixed flex fles-wrap
                          justify-center
                          gap-2
                          shadow-lg
                          bg-white
                          rounded-full
                          px-2
                          py-2"
          >
            <button
              className="outline-none
                               px-4
                               bg-red-800
                               text-white
                               rounded-full
                               font-semibold
                               shadow-md
                               transition
                               duration-200
                               hover:bg-red-600"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none
                               px-4
                               bg-green-800
                               text-white
                               rounded-full
                               font-semibold
                               shadow-md
                               transition
                               duration-200
                               hover:bg-green-600"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none
                               px-4
                               bg-blue-800
                               text-white
                               rounded-full
                               font-semibold
                               shadow-md
                               transition
                               duration-200
                               hover:bg-blue-600"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none
                               px-4
                               bg-purple-800
                               text-white
                               rounded-full
                               font-semibold
                               shadow-md
                               transition
                               duration-200
                               hover:bg-purple-600"
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button
              className="outline-none
                               px-4
                               bg-white-800
                               text-black
                               rounded-full
                               font-semibold
                               shadow-md
                               transition
                               duration-200
                               hover:bg-white-600"
              onClick={() => setColor("white")}
            >
              White
            </button>
            <button
              className="outline-none
                               px-4
                               bg-gray-800
                               text-white
                               rounded-full
                               font-semibold
                               shadow-md
                               transition
                               duration-200
                               hover:bg-gray-600"
              onClick={() => setColor("gray")}
            >
              Gray
            </button>
            <button
              className="outline-none
                               px-4
                               bg-yellow-300
                               text-black
                               rounded-full
                               font-semibold
                               shadow-3xl
                               transition
                               duration-200
                               hover:bg-yello-500"
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none
                               px-4
                               bg-pink-300
                               text-black
                               rounded-full
                               font-semibold
                               shadow-3xl
                               transition
                               duration-200
                               hover:bg-pink-600"
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
