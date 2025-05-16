import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CharacterOption {
  id: string;
  label: string;
  description: string
}

interface CharacterPickerProps {
  onSelect: (character: string) => void;
  selectedCharacter?: string;
  className?: string;
}

const CharacterPicker: React.FC<CharacterPickerProps> = ({ 
  onSelect, 
  selectedCharacter = 'Lovely_Girl', 
  className = '' 
}) => {
  const [selected, setSelected] = useState(selectedCharacter);

  const characters: CharacterOption[] = [
    { id: 'Abbess', label: 'Abbess', description: 'Good emotion, may need speed adjustment' },
    { id: 'Calm_Woman', label: 'Calm Woman', description: 'Relaxed, soothing voice' },
    { id: 'Decent_Boy', label: 'Decent Boy', description: 'Sounds like radio' },
    { id: 'Deep_Voice_Man', label: 'Deep Voice Man', description: 'Deep masculine voice (1.32x recommended)' },
    { id: 'Determined_Man', label: 'Determined Man', description: 'Moderate emotion, masculine voice' },
    { id: 'Elegant_Man', label: 'Elegant Man', description: 'Good emotion for baby boy' },
    { id: 'Exuberant_Girl', label: 'Exuberant Girl', description: 'Valley girl style' },
    { id: 'Imposing_Manner', label: 'Imposing Manner', description: 'Authoritative voice' },
    { id: 'Inspirational_girl', label: 'Inspirational Woman', description: 'Motivational tone with energy' },
    { id: 'Lively_Girl', label: 'Lively Girl', description: 'Anime voice with high emotion, perfect for child voice' },
    { id: 'Lovely_Girl', label: 'Lovely Girl', description: 'Baby-like voice (1.38x recommended)' },
    { id: 'Patient_Man', label: 'Patient Man', description: 'Steady, measured voice' },
    { id: 'Sweet_Girl_2', label: 'Sweet Girl', description: 'Anime-like voice with lots of emotion' },
    { id: 'Wise_Woman!', label: 'Wise Woman', description: 'Cartoon-like with high emotion' },
  ];

  const handleSelect = (characterId: string) => {
    setSelected(characterId);
    onSelect(characterId);
  };

  return (
    <div className={`character-picker ${className}`}>
      <div className="mb-4">
        <Label className="block mb-2 font-medium">Voice Character</Label>
        <div className="flex items-center gap-4">
          <Select value={selected} onValueChange={handleSelect}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select character" />
            </SelectTrigger>
            <SelectContent>
              {characters.map((character) => (
                <SelectItem key={character.id} value={character.id}>
                  <div className="flex text-left gap-2">
                    <div>
                      <span className="font-medium">{character.label}</span>
                      <p className="text-xs text-muted-foreground">{character.description}</p>
                    </div>
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

export default CharacterPicker;
