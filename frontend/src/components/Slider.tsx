import React, { useState, useRef, useEffect } from 'react';

const PriceSlider: React.FC = () => {
  const pricePerTool = 120;
  const maxTools = 100;
  const [toolCount, setToolCount] = useState<number>(1);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const sliderRef = useRef<HTMLInputElement | null>(null);
  const [tooltipLeft, setTooltipLeft] = useState<string>('0%');

  const totalPrice = toolCount * pricePerTool;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setToolCount(value);

    if (sliderRef.current) {
      const percent = (value - 1) / (maxTools - 1);
      setTooltipLeft(`${percent * 100}%`);
    }
  };

  useEffect(() => {
    // Set initial position
    handleSliderChange({ target: { value: toolCount } } as any);
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <label htmlFor="tools" className="block text-lg font-medium text-gray-700 mb-4">
        Price per Tool : <span className="font-bold text-blue-600">₹{totalPrice.toLocaleString()}</span>
      </label>

      <div className="relative w-full">
        {/* Tooltip */}
        {isHovering && (
          <div
            className="absolute -top-8 transform -translate-x-1/2 bg-blue-600 text-white text-sm px-2 py-1 rounded shadow transition"
            style={{ left: tooltipLeft }}
          >
            Tools: {toolCount}
          </div>
        )}

        {/* Slider */}
        <input
          ref={sliderRef}
          id="tools"
          type="range"
          min={1}
          max={maxTools}
          step={1}
          value={toolCount}
          onChange={handleSliderChange}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
      </div>
    </div>
  );
};

export default PriceSlider;
