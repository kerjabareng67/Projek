import { useState, useEffect } from 'react';

// Ganti dengan URL Web App kamu (tanpa spasi!)
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzta9-5GiaxZmY-NT-fJvxso7Fjj_q2bnLWRh7ystPrJRnemkDivefvLBkyGLQRW1l3/exec';

type Quote = {
  text: string;
  author: string;
};

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentQuote, setCurrentQuote] = useState<Quote>({ text: '', author: '' });
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Ambil data dari Google Sheets
  const fetchQuotes = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(GOOGLE_APPS_SCRIPT_URL);
      if (!res.ok) throw new Error('Gagal mengambil kutipan');
      const data = await res.json();
      if (Array.isArray(data.quotes) && data.quotes.length > 0) {
        setQuotes(data.quotes);
        setCurrentQuote(data.quotes[0]);
      } else {
        setError('Tidak ada kutipan ditemukan di Sheets.');
      }
    } catch (err) {
      console.error('Error fetching quotes:', err);
      setError('Gagal memuat kutipan. Pastikan web app di-deploy sebagai "Anyone".');
    } finally {
      setLoading(false);
    }
  };

  const getRandomQuote = () => {
    if (isAnimating || quotes.length === 0) return;

    setIsAnimating(true);
    let nextQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Hindari kutipan sama berturut-turut
    if (nextQuote.text === currentQuote.text && quotes.length > 1) {
      let attempts = 0;
      while (nextQuote.text === currentQuote.text && attempts < 10) {
        nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
        attempts++;
      }
    }

    setTimeout(() => {
      setCurrentQuote(nextQuote);
      setIsAnimating(false);
    }, 300);
  };

  // Fetch data saat komponen mount
  useEffect(() => {
    fetchQuotes();
  }, []);

  // Auto-rotate setiap 10 detik
  useEffect(() => {
    if (quotes.length === 0 || loading) return;

    const interval = setInterval(() => {
      getRandomQuote();
    }, 10000);

    return () => clearInterval(interval);
  }, [quotes, currentQuote, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-stone-50">Memuat kutipan...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchQuotes}
            className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-stone-50">
          Kutipan Inspiratif
        </h1>

        <div className="relative">
          <div
            className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 transition-all duration-300 transform ${
              isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <div className="text-gray-600 text-lg md:text-xl italic leading-relaxed mb-6 relative">
              <span className="absolute -top-6 left-0 text-4xl text-indigo-200">“</span>
              {currentQuote.text}
              <span className="absolute -bottom-6 right-0 text-4xl text-indigo-200">”</span>
            </div>
            <div className="text-right">
              <p className="text-gray-800 font-semibold text-lg">— {currentQuote.author}</p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={getRandomQuote}
              disabled={isAnimating || quotes.length <= 1}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-800 text-white font-medium rounded-full shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isAnimating ? 'Memuat...' : 'Kutipan Baru'}
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-12 text-sm">
          Kutipan berubah otomatis setiap 10 detik • Klik tombol untuk langsung ganti
        </p>
      </div>
    </div>
  );
}