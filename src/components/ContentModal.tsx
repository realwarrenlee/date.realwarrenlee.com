import React from 'react';

interface ModalData {
  source?: {
    from: string;
    to: string;
    subject: string;
    date: string;
  };
  title?: string;
  content: string[];
}

interface ContentModalProps {
  onClose: () => void;
  data: ModalData | null;
}

const ContentModal: React.FC<ContentModalProps> = ({ onClose, data }) => {
  if (!data) return null;

  const hasHeaderContent = data.source || data.title;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="relative bg-gradient-to-br from-white/20 via-white/10 to-white/5 rounded-3xl p-8 md:p-10 border border-white/30 backdrop-blur-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.2)] transform transition-all duration-300 animate-in scrollbar-hide">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 rounded-3xl pointer-events-none"></div>
        <div className="relative z-10">
          {hasHeaderContent && (
            <div className="mb-8">
              {data.source ? (
                <div className="text-lg text-white/90 mb-6 leading-relaxed">
                  <strong>From:</strong> {data.source.from}<br/>
                  <strong>To:</strong> {data.source.to}<br/>
                  <strong>Subject:</strong> {data.source.subject}<br/>
                  <strong>Date:</strong> {data.source.date}
                </div>
              ) : (
                data.title && <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">{data.title}</h2>
              )}
            </div>
          )}
          <div className="space-y-6 text-white/90 text-lg leading-relaxed mb-8">
            {data.content.map((paragraph, index) => (
              <p key={index} className="drop-shadow-sm">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl px-10 py-5 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;