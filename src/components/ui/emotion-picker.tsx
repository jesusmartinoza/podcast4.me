import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
      <div className="mb-4">
        <Label className="block mb-2 font-medium">Voice Emotion</Label>
        <div className="flex items-center gap-4">
          <Select value={selected} onValueChange={handleSelect}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select emotion" />
            </SelectTrigger>
            <SelectContent>
              {emotions.map((emotion) => (
                <SelectItem key={emotion.id} value={emotion.id}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{emotion.icon}</span>
                    <span>{emotion.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default EmotionPicker;
