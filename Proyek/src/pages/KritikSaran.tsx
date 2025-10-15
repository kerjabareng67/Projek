import React, { useState, useEffect } from 'react';

type Submission = {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: Date;
};

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyeU-AuPXFa1_vlq3FmfZYhZC27HUCDJwPw4D8LC-PqXcjTU3cq_l3hq4NsZjFv0sFrMA/exec';

export default function KritikSaran() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(true);

  // --- Fetch submissions ---
  const fetchSubmissions = async () => {
    setLoadingSubmissions(true);
    try {
      const res = await fetch(GOOGLE_APPS_SCRIPT_URL);
      if (!res.ok) throw new Error('Gagal mengambil data');
      const data = await res.json();
      if (Array.isArray(data.submissions)) {
        const formatted = data.submissions
          .map((item: any) => ({
            id: item.id || Date.now().toString(),
            name: item.name || '',
            email: item.email || '',
            message: item.message || '',
            timestamp: new Date(item.timestamp),
          }))
          .sort((a: Submission, b: Submission) => b.timestamp.getTime() - a.timestamp.getTime());
        setSubmissions(formatted);
      }
    } catch (err) {
      console.error('Gagal memuat data dari Sheets:', err);
    } finally {
      setLoadingSubmissions(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  // --- Form logic ---
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nama tidak boleh kosong';
    if (!formData.email.trim()) {
      newErrors.email = 'Email tidak boleh kosong';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.message.trim()) newErrors.message = 'Pesan tidak boleh kosong';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Respons tidak OK');

      setFormData({ name: '', email: '', message: '' });
      alert('Terima kasih! Masukan Anda telah dikirim.');
      fetchSubmissions();
    } catch (err) {
      console.error('Error saat kirim:', err);
      alert('Gagal mengirim. Pastikan web app di-deploy sebagai "Anyone".');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Duplikasi data untuk efek infinite
  const duplicatedSubmissions = submissions.length > 0 ? [...submissions, ...submissions] : [];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-50 mb-3">Kritik & Saran</h1>
          <p className="text-stone-50">Kirim masukan Anda — setiap suara penting!</p>
        </div>

        {/* Form */}
        <div className="rounded-2xl z-3 bg-slate-200 shadow-md p-6 mb-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                placeholder="Nama Anda"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                placeholder="email@contoh.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2.5 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
                placeholder="Apa saran Anda untuk kami?"
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2.5 rounded-lg font-medium text-white ${
                isSubmitting ? 'bg-slate-400' : 'bg-slate-600 hover:bg-slate-700'
              } transition`}
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim'}
            </button>
          </form>
        </div>

        {/* Infinite Scroll dengan CSS Animation (Smooth!) */}
        {submissions.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Masukan Terkini</h2>
            <div className="overflow-hidden whitespace-nowrap">
              <div className="inline-block animate-scroll-loop">
                {duplicatedSubmissions.map((sub, i) => (
                  <div
                    key={`${sub.id}-${i}`}
                    className="inline-block w-64 mx-2 bg-white rounded-xl shadow-sm border border-gray-200 p-4 align-top"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-sm text-gray-800">{sub.name}</h3>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                        {sub.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 italic">"{sub.message}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CSS untuk animasi infinite smooth */}
      <style jsx>{`
        @keyframes scroll-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-loop {
          display: inline-flex;
          animation: scroll-loop 20s linear infinite;
        }
        .animate-scroll-loop:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}