
import React from 'react';

const Box: React.FC<{ children: React.ReactNode; className?: string; delay?: string }> = ({ children, className = "", delay = "0ms" }) => (
  <div 
    style={{ transitionDelay: delay }}
    className={`px-4 py-2 border rounded-md shadow-sm text-sm font-semibold transition-all duration-700 clutter-box ${className}`}
  >
    {children}
  </div>
);

const Arrow: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex justify-center items-center py-1 clutter-box ${className}`}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  </div>
);

interface PanelProps {
  onShowDetail: (id: string) => void;
  isCollapsing?: boolean;
}

export const TraditionalPanel: React.FC<PanelProps> = ({ onShowDetail, isCollapsing }) => (
  <div 
    onClick={() => onShowDetail('traditional')}
    className={`flex flex-col items-center gap-2 p-6 bg-white rounded-xl shadow-lg border border-slate-200 cursor-pointer hover:border-slate-400 transition-all duration-300 group ${isCollapsing ? 'opacity-50 grayscale' : ''}`}
  >
    <div className="flex justify-between w-full items-center mb-1">
        <h3 className="text-xl font-bold text-slate-700 group-hover:text-slate-900">Traditional Workflow</h3>
        <span className="text-xs text-slate-400 group-hover:text-slate-600">ⓘ Details</span>
    </div>
    <p className="text-sm text-slate-500 mb-6 w-full">6-12 months | $40,000-$60,000</p>
    
    <Box className="bg-slate-50 text-slate-700 border-slate-300" delay="0ms">VISION</Box>
    <Arrow />
    <Box className="bg-slate-50 text-slate-700 border-slate-300" delay="50ms">BRIEF</Box>
    <Arrow />
    
    <div className="flex items-center gap-4 w-full clutter-box" style={{ transitionDelay: '100ms' }}>
        <Box className="bg-slate-50 text-slate-700 border-slate-300 flex-1">CREATIVE TEAM</Box>
        <div className="text-slate-400 text-xs flex flex-col items-center">
            <span>⇄</span>
            <span>REVISIONS</span>
        </div>
    </div>
    <Arrow />
    <Box className="bg-slate-50 text-slate-700 border-slate-300" delay="150ms">PRODUCTION TEAM</Box>
    <Arrow />
    
    <div className="flex items-center gap-4 w-full clutter-box" style={{ transitionDelay: '200ms' }}>
        <Box className="bg-slate-50 text-slate-700 border-slate-300 flex-1">APPROVALS</Box>
        <div className="text-slate-400 text-xs flex flex-col items-center">
            <span>⇄</span>
            <span>REVISIONS</span>
        </div>
    </div>
    <Arrow />
    <Box className="bg-slate-50 text-slate-700 border-slate-300" delay="250ms">VENDOR MGMT</Box>
    <Arrow />
    <Box className="bg-slate-800 text-white border-slate-900 px-8 py-3 mt-2" delay="300ms">DELIVERY</Box>

    <div className="mt-6 grid grid-cols-2 gap-2 w-full text-[10px] italic text-slate-400 clutter-box" style={{ transitionDelay: '350ms' }}>
        <div>• Coordination meetings</div>
        <div>• Context switching</div>
        <div>• Translation layers</div>
        <div>• Status updates</div>
    </div>
  </div>
);

export const AiNativePanel: React.FC<PanelProps> = ({ onShowDetail }) => (
  <div 
    onClick={() => onShowDetail('ai-native')}
    className="flex flex-col items-center gap-4 p-6 bg-white rounded-xl shadow-xl border-t-4 border-teal-500 relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 group"
  >
    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
       <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded">ⓘ CLICK FOR STACK</span>
    </div>
    <div className="absolute top-0 right-0 p-2">
       <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 animate-pulse">
         ✨
       </div>
    </div>
    <h3 className="text-xl font-bold text-slate-800">AI-Native Workflow</h3>
    <p className="text-sm font-semibold text-teal-600 mb-6">18 days | Under $500</p>
    
    <Box className="bg-teal-50 text-teal-700 border-teal-200 w-3/4 text-center border-2">VISION (Human)</Box>
    <Arrow className="text-teal-500 opacity-100" />
    
    <div className="w-full p-4 border-2 border-dashed border-teal-200 rounded-xl bg-teal-50/30 orchestration-system transition-all duration-500">
        <div className="text-[10px] font-bold text-teal-600 uppercase mb-2 text-center">Orchestration System (F.L.O.W.)</div>
        <div className="grid grid-cols-3 gap-2">
            <div className="p-2 bg-white rounded border border-teal-100 text-[10px] text-center shadow-sm">Voice Gen</div>
            <div className="p-2 bg-white rounded border border-teal-100 text-[10px] text-center shadow-sm">Audio Mix</div>
            <div className="p-2 bg-white rounded border border-teal-100 text-[10px] text-center shadow-sm">Visual Gen</div>
        </div>
        <div className="flex justify-center my-2">
            <Arrow className="text-teal-500" />
        </div>
        <div className="flex justify-center">
            <div className="p-2 bg-white rounded border border-teal-100 text-[10px] text-center w-1/2 shadow-sm">Video Assembly</div>
        </div>
        <div className="mt-3 text-[9px] text-teal-500 text-center italic">Human checkpoints at each stage →</div>
    </div>
    
    <Arrow className="text-teal-500 opacity-100" />
    <Box className="bg-teal-600 text-white border-teal-700 px-10 py-4 shadow-teal-200 shadow-lg text-lg animate-float">OUTPUT</Box>

    <div className="mt-8 flex flex-col gap-1 w-full text-[10px] font-medium text-teal-600 uppercase tracking-wider text-center">
        <div>Friction Removed</div>
        <div>Execution Automated</div>
        <div className="text-slate-400">Human Judgment Retained</div>
    </div>
  </div>
);

export const ShippedOutputPanel: React.FC<PanelProps> = ({ onShowDetail }) => (
  <div 
    onClick={() => onShowDetail('shipped')}
    className="flex flex-col p-6 bg-slate-900 rounded-xl shadow-2xl text-white border border-slate-800 h-full cursor-pointer hover:border-slate-500 transition-all duration-300 group"
  >
    <div className="flex justify-between items-center mb-1">
        <h3 className="text-xl font-bold">Shipped Output</h3>
        <span className="text-[10px] text-slate-500 group-hover:text-slate-300">ⓘ STATS</span>
    </div>
    <p className="text-xs text-slate-400 mb-6">Operational Proof</p>
    
    <div className="space-y-4 flex-1">
        <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url('https://picsum.photos/seed/tpds/800/450')` }} />
            <div className="z-10 text-center">
                <div className="text-xs font-bold tracking-[0.2em] mb-1">THE AI SHOWRUNNER</div>
                <div className="text-3xl font-black italic text-gold">TPDS</div>
            </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-video rounded bg-slate-800 border border-slate-700 overflow-hidden">
                    <img src={`https://picsum.photos/seed/thumb${i}/200/112`} alt="Thumbnail" className="w-full h-full object-cover opacity-80" />
                </div>
            ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-slate-800/50 p-3 rounded border border-slate-700 group-hover:bg-slate-800 transition-colors">
                <div className="text-gold font-black text-2xl">4</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest">Episodes</div>
            </div>
            <div className="bg-slate-800/50 p-3 rounded border border-slate-700 group-hover:bg-slate-800 transition-colors">
                <div className="text-gold font-black text-2xl">60</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest">Minutes</div>
            </div>
            <div className="bg-slate-800/50 p-3 rounded border border-slate-700 group-hover:bg-slate-800 transition-colors">
                <div className="text-gold font-black text-2xl">11</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest">Characters</div>
            </div>
            <div className="bg-slate-800/50 p-3 rounded border border-slate-700 group-hover:bg-slate-800 transition-colors">
                <div className="text-gold font-black text-2xl uppercase text-sm mt-2">Quality</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest">Broadcast</div>
            </div>
        </div>
    </div>

    <div className="mt-8 pt-4 border-t border-slate-800 flex justify-between items-end">
        <div>
            <div className="text-[8px] text-slate-500 uppercase mb-1">Available On</div>
            <div className="text-[10px] font-bold text-slate-300">YouTube | Spotify | Gumroad</div>
        </div>
        <div className="text-right">
             <div className="text-[10px] font-black italic tracking-tighter text-gold">TRANSFORMBY10X</div>
        </div>
    </div>
  </div>
);

export const PANEL_DETAILS: Record<string, { title: string, subtitle: string, content: React.ReactNode }> = {
  'traditional': {
    title: "Traditional Workflow Analysis",
    subtitle: "High Friction, High Cost, High Risk",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">The "Old Way" relies on horizontal translation layers. Every step requires a handoff, a meeting, and a revision cycle.</p>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <h4 className="font-bold text-slate-800 text-sm uppercase mb-2">Primary Tools</h4>
                <ul className="text-xs text-slate-500 space-y-1">
                    <li>• Jira / Asana / ClickUp</li>
                    <li>• Physical Recording Studios</li>
                    <li>• Multi-layered Revision Sheets</li>
                    <li>• Agency Vendor Portals</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-slate-800 text-sm uppercase mb-2">Core Challenges</h4>
                <ul className="text-xs text-slate-500 space-y-1">
                    <li>• 40% "Coordination Tax"</li>
                    <li>• Creative Translation Loss</li>
                    <li>• 6-12 Month GTM Cycle</li>
                    <li>• Prohibitive Entry Costs</li>
                </ul>
            </div>
        </div>
      </div>
    )
  },
  'ai-native': {
    title: "AI-Native Orchestration (F.L.O.W.)",
    subtitle: "Zero Friction, Integrated Execution",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">The "New Way" collapses the production team into an automated engine. The Human Visionary talks directly to the Orchestrator.</p>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <h4 className="font-bold text-teal-700 text-sm uppercase mb-2">The Stack</h4>
                <ul className="text-xs text-slate-500 space-y-1">
                    <li>• <strong>Brain:</strong> Gemini 3 Pro</li>
                    <li>• <strong>Voice:</strong> ElevenLabs API</li>
                    <li>• <strong>Visuals:</strong> Gemini 2.5 Flash</li>
                    <li>• <strong>Assembly:</strong> MoviePy/FFmpeg</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-teal-700 text-sm uppercase mb-2">The Advantages</h4>
                <ul className="text-xs text-slate-500 space-y-1">
                    <li>• Integrated Workflows</li>
                    <li>• 18-Day Full Cycle</li>
                    <li>• &lt; 1% Previous Cost</li>
                    <li>• Perfect Context Retention</li>
                </ul>
            </div>
        </div>
      </div>
    )
  },
  'shipped': {
    title: "Operational Proof: TPDS",
    subtitle: "The Proof is in the Broadcast",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">"The Patient Docent Society" (TPDS) isn't a demo. It's a shipped product available across major platforms, produced entirely via F.L.O.W.</p>
        <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <h4 className="font-bold text-slate-800 text-sm uppercase mb-2">Metrics of Success</h4>
            <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2">
                    <div className="text-xl font-bold text-gold">100%</div>
                    <div className="text-[10px] text-slate-400">Quality</div>
                </div>
                <div className="p-2">
                    <div className="text-xl font-bold text-gold">Solo</div>
                    <div className="text-[10px] text-slate-400">Operators</div>
                </div>
                <div className="p-2">
                    <div className="text-xl font-bold text-gold">4/wk</div>
                    <div className="text-[10px] text-slate-400">Velocity</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
};
