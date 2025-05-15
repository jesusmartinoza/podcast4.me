import { useState } from 'react';
import EmotionPicker from '@/components/ui/emotion-picker';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const TextToSpeech = () => {
  const [text, setText] = useState('');
  const [emotion, setEmotion] = useState('auto');
  const [pitch, setPitch] = useState(0);
  const [speed, setSpeed] = useState(1.0);
  const [volume, setVolume] = useState(10);
  const [language, setLanguage] = useState('Automatic');
  const [isProcessing, setIsProcessing] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Here you would implement the actual API call to your TTS service
    // For example:
    // try {
    //   const response = await fetch('/api/text-to-speech', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ text, emotion, pitch, speed, volume, language }),
    //   });
    //   const data = await response.json();
    //   // Handle the response
    // } catch (error) {
    //   console.error('Error:', error);
    // }
    
    setTimeout(() => setIsProcessing(false), 1000); // Simulating API call
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-neutral-800 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-2xl font-bold mb-6">Text to Audio</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="text" className="block mb-2 font-medium">Your Text</label>
          <Textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter the text you want to convert to speech..."
            required
          />
        </div>
        <EmotionPicker onSelect={setEmotion} selectedEmotion={emotion} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">

          <div>
            <label htmlFor="language" className="block mb-2 font-medium">Language</label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Automatic">Automatic</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Chinese">Chinese</SelectItem>
                <SelectItem value="Chinese,Yue">Chinese (Yue)</SelectItem>
                <SelectItem value="Spanish">Spanish</SelectItem>
                <SelectItem value="Arabic">Arabic</SelectItem>
                <SelectItem value="Russian">Russian</SelectItem>
                <SelectItem value="French">French</SelectItem>
                <SelectItem value="Portuguese">Portuguese</SelectItem>
                <SelectItem value="German">German</SelectItem>
                <SelectItem value="Turkish">Turkish</SelectItem>
                <SelectItem value="Dutch">Dutch</SelectItem>
                <SelectItem value="Ukrainian">Ukrainian</SelectItem>
                <SelectItem value="Vietnamese">Vietnamese</SelectItem>
                <SelectItem value="Indonesian">Indonesian</SelectItem>
                <SelectItem value="Japanese">Japanese</SelectItem>
                <SelectItem value="Italian">Italian</SelectItem>
                <SelectItem value="Korean">Korean</SelectItem>
                <SelectItem value="Thai">Thai</SelectItem>
                <SelectItem value="Polish">Polish</SelectItem>
                <SelectItem value="Romanian">Romanian</SelectItem>
                <SelectItem value="Greek">Greek</SelectItem>
                <SelectItem value="Czech">Czech</SelectItem>
                <SelectItem value="Finnish">Finnish</SelectItem>
                <SelectItem value="Hindi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="volume" className="block mb-2 font-medium">
              Volume: {volume}
            </label>
            <Slider
              id="volume"
              min={0}
              max={100}
              step={1}
              value={[volume]}
              onValueChange={(values) => setVolume(values[0])}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="pitch" className="block mb-2 font-medium">
              Pitch: {pitch}
            </label>
            <Slider
              id="pitch"
              min={-10}
              max={10}
              step={1}
              value={[pitch]}
              onValueChange={(values) => setPitch(values[0])}
              className="w-full"
            />
          </div>
          
          <div>
            <label htmlFor="speed" className="block mb-2 font-medium">
              Speed: {speed}x
            </label>
            <Slider
              id="speed"
              min={0.5}
              max={2.0}
              step={0.1}
              value={[speed]}
              onValueChange={(values) => setSpeed(values[0])}
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isProcessing}
          className="px-6 py-3 bg-primary-400 hover:bg-primary-600 border-4 border-black font-black uppercase tracking-wider text-black transition-all hover:-translate-y-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? 'Processing...' : 'Generate Speech'}
        </button>
      </form>
      
      {/* Audio player would go here once the speech is generated */}
      {/* <div className="mt-6">
        <audio controls className="w-full" src="[generated audio URL]"></audio>
      </div> */}
    </div>
  );
};

export default TextToSpeech;
