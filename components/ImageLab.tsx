
import React, { useState, useRef } from 'react';
import { geminiService } from '../services/geminiService';

const ImageLab: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = async () => {
    if (!image || !prompt) return;

    setIsProcessing(true);
    setError(null);
    try {
      // Remove data:image/...;base64, prefix
      const base64Data = image.split(',')[1];
      const editedImageUrl = await geminiService.editImage(base64Data, prompt);
      setResult(editedImageUrl);
    } catch (err: any) {
      setError(err.message || 'Failed to edit image');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="ai-lab" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Vision Lab</h2>
            <p className="text-slate-600">Experiment with the <span className="text-teal-600 font-semibold">AI-Native Transformation</span>. Upload an image and prompt our engine to refactor it.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Panel: Inputs */}
              <div className="p-8 border-r border-slate-100 flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Original Asset</label>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="aspect-video rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors relative group"
                  >
                    {image ? (
                      <img src={image} className="w-full h-full object-cover rounded-xl" alt="Preview" />
                    ) : (
                      <div className="text-center p-4">
                        <div className="text-slate-400 text-3xl mb-2">📁</div>
                        <p className="text-xs text-slate-500">Click to upload image</p>
                      </div>
                    )}
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      className="hidden" 
                      accept="image/*" 
                      onChange={handleFileChange} 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Transformation Prompt</label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g. 'Add a retro neon cyberpunk filter', 'Replace background with mars surface'"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm min-h-[100px] resize-none"
                  />
                </div>

                <button
                  disabled={!image || !prompt || isProcessing}
                  onClick={handleProcess}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${
                    !image || !prompt || isProcessing 
                    ? 'bg-slate-300 cursor-not-allowed shadow-none' 
                    : 'bg-teal-600 hover:bg-teal-700 active:transform active:scale-95'
                  }`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Refactoring...
                    </span>
                  ) : 'Execute Transformation'}
                </button>
                {error && <p className="text-red-500 text-xs text-center">{error}</p>}
              </div>

              {/* Right Panel: Result */}
              <div className="p-8 bg-slate-900 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-full h-full flex flex-col">
                  <label className="block text-sm font-semibold text-slate-400 mb-4 uppercase tracking-widest">Shipped Output</label>
                  <div className="flex-1 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden flex items-center justify-center relative">
                    {result ? (
                      <img src={result} className="w-full h-full object-contain" alt="Result" />
                    ) : (
                      <div className="text-center p-8">
                        <div className="text-slate-700 text-5xl mb-4">✨</div>
                        <p className="text-sm text-slate-500 italic max-w-xs">
                          {isProcessing ? 'Transformation in progress...' : 'Your AI-Native result will appear here.'}
                        </p>
                      </div>
                    )}
                  </div>
                  {result && (
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = result;
                        link.download = 'ai-transformed.png';
                        link.click();
                      }}
                      className="mt-4 text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 justify-center"
                    >
                      <span>↓</span> DOWNLOAD ASSET
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageLab;
