
import React, { useState } from 'react';
import { TraditionalPanel, AiNativePanel, ShippedOutputPanel, PANEL_DETAILS } from './components/WorkflowPanels';
import ImageLab from './components/ImageLab';

const Modal: React.FC<{ isOpen: boolean, onClose: () => void, contentId: string | null }> = ({ isOpen, onClose, contentId }) => {
  if (!isOpen || !contentId) return null;
  const detail = PANEL_DETAILS[contentId];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden modal-enter"
        onClick={e => e.stopPropagation()}
      >
        <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-black text-slate-900 leading-none">{detail.title}</h3>
            <p className="text-sm text-slate-500 mt-2 font-medium">{detail.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div className="p-8">
          {detail.content}
        </div>
        <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button onClick={onClose} className="px-6 py-2 bg-slate-900 text-white rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors">
            Close Detail
          </button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [modalState, setModalState] = useState<{ open: boolean, id: string | null }>({ open: false, id: null });
  const [isCollapsing, setIsCollapsing] = useState(false);

  const handleShowDetail = (id: string) => {
    setModalState({ open: true, id });
  };

  const triggerCollapse = () => {
    setIsCollapsing(true);
    setTimeout(() => {
        setIsCollapsing(false);
    }, 2500);
  };

  return (
    <div className={`min-h-screen ${isCollapsing ? 'collapsing' : ''}`}>
      {/* Detail Modal */}
      <Modal 
        isOpen={modalState.open} 
        onClose={() => setModalState({ open: false, id: null })} 
        contentId={modalState.id} 
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
              <span className="text-gold font-black italic text-xl">X</span>
            </div>
            <span className="font-black text-xl tracking-tighter uppercase italic">FlowShift</span>
          </div>
          <div className="flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#workflow" className="hover:text-teal-600 transition-colors">Workflow</a>
            <a href="#ai-lab" className="hover:text-teal-600 transition-colors">AI Lab</a>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-20 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 leading-[1.1]">
            Collapse Time. <br />
            <span className="text-teal-500">Explode Output.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The transformation from traditional high-friction workflows to AI-native orchestration. 
            Same quality. 10x speed. Fractional cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <button 
                onClick={triggerCollapse}
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-teal-200 hover:bg-teal-700 transition-all hover:-translate-y-1 group"
             >
               <span className="flex items-center gap-2">
                 Visualize Transformation
                 <span className="group-hover:rotate-12 transition-transform">✨</span>
               </span>
             </button>
             <a href="#workflow" className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-teal-200 transition-all">
               See the Framework
             </a>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -z-10" />
      </header>

      {/* Workflow Visualizer */}
      <section id="workflow" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-2">The Transformation Map</h2>
             <p className="text-slate-500 italic text-sm">Click any panel to explore the underlying stack and challenges.</p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 relative clutter-collapse">
            
            {/* Panel 1 */}
            <div className={`flex-1 max-w-sm transition-all duration-700 ${isCollapsing ? 'translate-x-[200px] opacity-0 scale-90' : ''}`}>
                <TraditionalPanel onShowDetail={handleShowDetail} isCollapsing={isCollapsing} />
            </div>

            {/* Transition Arrow 1 */}
            <div className={`hidden lg:flex items-center transition-opacity duration-300 ${isCollapsing ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">Shift</span>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-200">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Panel 2 */}
            <div className={`flex-1 max-w-sm transition-all duration-700 ${isCollapsing ? 'scale-110 shadow-2xl z-20 ring-4 ring-teal-400 ring-offset-4' : ''}`}>
                <AiNativePanel onShowDetail={handleShowDetail} />
            </div>

            {/* Transition Arrow 2 */}
            <div className={`hidden lg:flex items-center transition-opacity duration-300 ${isCollapsing ? 'opacity-0' : 'opacity-100'}`}>
                <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest mb-2">Proof</span>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-200">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            {/* Panel 3 */}
            <div className={`flex-1 max-w-md transition-all duration-700 ${isCollapsing ? '-translate-x-[200px] opacity-0 scale-90' : ''}`}>
                <ShippedOutputPanel onShowDetail={handleShowDetail} />
            </div>

          </div>

          <div className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-200 max-w-5xl mx-auto">
            <h4 className="text-center text-xs font-black tracking-[0.3em] uppercase text-slate-400 mb-8">Performance Comparison</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-sm font-bold text-slate-700">Timeline</span>
                        <span className="text-xs text-slate-400">Lower is better</span>
                    </div>
                    <div className="relative h-12 bg-slate-200 rounded-lg overflow-hidden flex items-center px-4">
                        <div className="absolute top-0 left-0 h-full bg-slate-400 w-full opacity-20" />
                        <span className="text-xs font-bold text-slate-600 relative z-10">Traditional: 12 months</span>
                    </div>
                    <div className="relative h-12 bg-slate-200 rounded-lg overflow-hidden flex items-center px-4">
                        <div className="absolute top-0 left-0 h-full bg-teal-500 w-[5%]" />
                        <span className="text-xs font-bold text-teal-700 relative z-10">AI-Native: 18 days</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-sm font-bold text-slate-700">Cost Efficiency</span>
                        <span className="text-xs text-slate-400">Lower is better</span>
                    </div>
                    <div className="relative h-12 bg-slate-200 rounded-lg overflow-hidden flex items-center px-4">
                        <div className="absolute top-0 left-0 h-full bg-slate-400 w-full opacity-20" />
                        <span className="text-xs font-bold text-slate-600 relative z-10">Traditional: $60,000</span>
                    </div>
                    <div className="relative h-12 bg-slate-200 rounded-lg overflow-hidden flex items-center px-4">
                        <div className="absolute top-0 left-0 h-full bg-gold w-[2%]" />
                        <span className="text-xs font-bold text-gold relative z-10">AI-Native: &lt; $500</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Image Lab */}
      <ImageLab />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-slate-900 font-black italic text-2xl">X</span>
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase italic">FlowShift</span>
            </div>
            <div className="flex gap-8 text-slate-400 text-sm">
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
            <p>© 2024 TransformBy10X. All rights reserved.</p>
            <p>Built with Gemini 2.5 Flash</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
