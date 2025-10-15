// components/QuoteCard.tsx
import React from 'react';

interface QuoteCardProps {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
  closing?: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({
  quote,
  name,
  title,
  imageUrl,
  closing = "Salam hangat,",
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border-3 border-slate-400 shadow-sm max-w-4xl mx-auto mt-5 mb-10 animate-fade-in-up transition-all duration-300 ease-in-out
                    hover:scale-102 hover:shadow-md">
      {/* Tanda petik besar — menggunakan slate-500 */}
      <div className="text-slate-500 text-4xl mb-4">“</div>

      {/* Konten utama */}
      <div className="flex items-start gap-6">
        {/* Foto profil */}
        <div className="flex-shrink-0">
          <img
            src={imageUrl}
            alt={name}
            className="w-24 h-24 rounded-full object-cover border-2 border-slate-100"
          />
          <div className="mt-3 text-slate-700 font-semibold text-sm">{name}</div>
          <div className="text-xs text-slate-500">{title}</div>
        </div>

        {/* Kutipan */}
        <div className="flex-1 text-slate-700 leading-relaxed">
          <p className="italic mb-4">{quote}</p>
          {closing && (
            <>
              <hr className="my-4 border-slate-200" />
              <div className="text-sm text-slate-500 mt-4">
                {closing}
                <br />
                <strong className="block mt-1 text-slate-700">{name}</strong>
                <span className="text-xs text-slate-500">{title}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;