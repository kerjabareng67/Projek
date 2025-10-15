// pages/adiwiyata.tsx
import TextType from '../../components/TextType';

export default function Adiwiyata() {
  return (
    <div className="min-h-screen py-10 px-4">
      {/* Header Typing Animation */}
      <div className="max-w-4xl mx-auto">
        <TextType
          text={[
            "Adiwiyata",
            "Sekolah Peduli & Berbudaya Lingkungan",
            "Menuju Generasi Hijau",
          ]}
          typingSpeed={80}
          pauseDuration={2000}
          showCursor={true}
          cursorCharacter="|"
          className="w-full flex justify-center text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12 mt-4"
        />

        <div className="animate-fade-in-up relative w-full max-w-3xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg group">
          <img
            src="https://www.smknegeri1mimika.sch.id/images/news/resize_42263pelestarianlingkungan.jpg"
            alt="Program Adiwiyata"
            className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
            <h3 className="text-white text-2xl md:text-3xl font-bold text-center px-4">
              Adiwiyata
            </h3>
          </div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
            <div 
              className="absolute top-0 left-[-50%] w-[200%] h-full"
              style={{ 
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                transform: 'rotate(12deg)',
                animation: 'glare 1.5s ease-out'
              }}
            />
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-10 text-slate-600 leading-relaxed">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 animate-fade-in-up">Pendahuluan</h2>
          <p className="animate-fade-in-up">
            Program Adiwiyata merupakan upaya pemerintah dalam mendorong terciptanya
            sekolah-sekolah yang peduli dan berbudaya lingkungan. Melalui program ini,
            siswa, guru, dan seluruh warga sekolah diajak untuk menerapkan perilaku ramah
            lingkungan dalam kehidupan sehari-hari.
          </p>
        </section>

        {/* Tujuan Program */}
        <section className="mb-10 text-slate-600 leading-relaxed animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4 animate-fade-in-up">Tujuan Program Adiwiyata</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 animate-fade-in-up">
            <li>Membangun kesadaran lingkungan sejak dini di kalangan pelajar.</li>
            <li>Mendorong partisipasi aktif warga sekolah dalam pelestarian lingkungan.</li>
            <li>Menciptakan lingkungan sekolah yang bersih, hijau, dan sehat.</li>
            <li>Menanamkan nilai-nilai keberlanjutan dan tanggung jawab ekologis.</li>
          </ul>
        </section>

        {/* Kegiatan Unggulan */}
        <section className="mb-10 text-slate-600 leading-relaxed animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Kegiatan Unggulan Sekolah Adiwiyata</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md">
              <h3 className="font-bold text-slate-700">Bank Sampah Sekolah</h3>
              <p className="mt-2">
                Siswa mengumpulkan sampah daur ulang dan menukarnya dengan tabungan lingkungan.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md">
              <h3 className="font-bold text-slate-700">Taman Edukasi Lingkungan</h3>
              <p className="mt-2">
                Area hijau yang digunakan untuk pembelajaran praktik pertanian organik dan keanekaragaman hayati.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md">
              <h3 className="font-bold text-slate-700">Pengomposan Organik</h3>
              <p className="mt-2">
                Mengolah sampah organik dari kantin menjadi pupuk kompos untuk taman sekolah.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md">
              <h3 className="font-bold text-slate-700">Energi Terbarukan</h3>
              <p className="mt-2">
                Pemasangan panel surya untuk mendukung penggunaan energi bersih di lingkungan sekolah.
              </p>
            </div>
          </div>
        </section>

        {/* Penutup */}
        <section className="text-slate-600 leading-relaxed text-center py-8 border-t border-slate-200 transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md">
          <p className="italic">
            “Merawat bumi bukan hanya tanggung jawab, tapi warisan untuk generasi mendatang.”
          </p>
          <p className="mt-4 font-semibold text-slate-900">
            Mari bersama wujudkan sekolah Adiwiyata yang lestari!
          </p>
        </section>
      </div>

      {/* CSS untuk animasi glare */}
      <style>{`
        @keyframes glare {
          0% { transform: translateX(-100%) rotate(12deg); }
          100% { transform: translateX(100%) rotate(12deg); }
        }
        .group:hover .absolute > div {
          animation: glare 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}