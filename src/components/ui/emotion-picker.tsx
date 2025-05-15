import React, { useState } from 'react';
import { FaSmile, FaSadTear, FaAngry, FaSurprise, FaMeh, FaRobot, FaSkull, FaGrimace } from 'react-icons/fa';

interface EmotionOption {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface EmotionPickerProps {
  onSelect: (emotion: string) => void;
  selectedEmotion?: string;
  className?: string;
}

const EmotionPicker: React.FC<EmotionPickerProps> = ({ 
  onSelect, 
  selectedEmotion = 'auto', 
  className = '' 
}) => {
  const [selected, setSelected] = useState(selectedEmotion);

  const emotions: EmotionOption[] = [
    { id: 'auto', label: 'Auto', icon: <FaRobot /> },
    { id: 'angry', label: 'Angry', icon: <FaAngry /> },
    { id: 'disgusted', label: 'Disgusted', icon: <FaGrimace /> },
    { id: 'fearful', label: 'Fearful', icon: <FaSkull /> },
    { id: 'happy', label: 'Happy', icon: <FaSmile /> },
    { id: 'neutral', label: 'Neutral', icon: <FaMeh /> },
    { id: 'sad', label: 'Sad', icon: <FaSadTear /> },
    { id: 'surprised', label: 'Surprised', icon: <FaSurprise /> },
  ];

  const handleSelect = (emotionId: string) => {
    setSelected(emotionId);
    onSelect(emotionId);
  };

  return (
    <div className={`emotion-picker ${className}`}>
      <label className="block mb-2 font-medium">Voice Emotion</label>
      <div className="flex flex-wrap gap-3">
        {emotions.map((emotion) => (
          <button
            key={emotion.id}
            type="button"
            onClick={() => handleSelect(emotion.id)}
            className={`flex flex-col items-center p-3 border-2 text-black w-20 h-18 border-black transition-all ${
              selected === emotion.id 
                ? 'bg-primary-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' 
                : 'bg-neutral-100 hover:bg-neutral-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'
            }`}
            aria-label={emotion.label}
            aria-pressed={selected === emotion.id}
          >
            <span className="text-2xl mb-1">{emotion.icon}</span>
            <span className="text-sm">{emotion.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmotionPicker;
