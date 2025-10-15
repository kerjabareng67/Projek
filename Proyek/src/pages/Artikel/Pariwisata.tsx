// pages/pariwisata.tsx atau komponen Anda
import TextType from '../../components/TextType';

export default function Pariwisata() {
  return (
    <>
      <div className="min-h-screen py-10 px-4">
        {/* Header Typing Animation */}
        <div className="max-w-4xl mx-auto">
          <TextType 
            text={["Selamat Datang", "Di Dunia Pariwisata", "Jelajahi Keindahan Negeri"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="w-full flex justify-center text-4xl font-bold text-slate-800 text-center mb-10 mt-10" 
          />

          {/* Gambar Hero dengan Overlay Hover */}
          <div className="animate-fade-in-up relative w-full max-w-3xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Destinasi Pariwisata Indonesia"
              className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
              <h3 className="text-white text-2xl md:text-3xl font-bold text-center px-4">
                Raja Ampat, Papua
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
          <section className="mb-10 text-slate-600 leading-relaxed animate-fade-in-up">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Pendahuluan</h2>
            <p>
              Pariwisata bukan sekadar bepergian, melainkan jembatan antara budaya, alam, dan manusia. 
              Di tengah pesatnya perkembangan industri wisata, penting bagi kita untuk menjaga keseimbangan 
              antara eksplorasi dan pelestarian. Pariwisata yang bertanggung jawab menjadi kunci dalam 
              melindungi warisan alam dan budaya untuk dinikmati generasi mendatang.
            </p>
          </section>

          {/* Tujuan Pariwisata Berkelanjutan */}
          <section className="mb-10 text-slate-600 leading-relaxed animate-fade-in-up">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Tujuan Pariwisata Berkelanjutan</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-700">
              <li>Melestarikan kekayaan alam dan budaya lokal di destinasi wisata.</li>
              <li>Meningkatkan kesadaran wisatawan akan pentingnya menjaga lingkungan.</li>
              <li>Mendorong pemberdayaan ekonomi masyarakat sekitar destinasi.</li>
              <li>Mengurangi dampak negatif pariwisata terhadap ekosistem dan sosial.</li>
            </ul>
          </section>

          {/* Destinasi & Kegiatan Unggulan */}
          <section className="mb-10 text-slate-600 leading-relaxed animate-fade-in-up">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Destinasi & Pengalaman Wisata Unggulan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 animate-fade-in-up transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md">
                <h3 className="font-bold text-slate-700">Ekowisata Hutan Mangrove</h3>
                <p className="mt-2">
                  Jelajahi ekosistem mangrove yang lestari sambil belajar tentang perannya dalam melindungi garis pantai dan keanekaragaman hayati.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 animate-fade-in-up transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md">
                <h3 className="font-bold text-slate-700">Desa Wisata Budaya</h3>
                <p className="mt-2">
                  Rasakan kehidupan autentik masyarakat lokal, ikut serta dalam ritual adat, dan pelajari kerajinan tangan tradisional.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 animate-fade-in-up transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md">
                <h3 className="font-bold text-slate-700">Wisata Edukasi Pertanian Organik</h3>
                <p className="mt-2">
                  Petik langsung hasil pertanian organik, pelajari sistem pertanian ramah lingkungan, dan nikmati kuliner sehat dari kebun.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 animate-fade-in-up transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md">
                <h3 className="font-bold text-slate-700">Petualangan Alam Berkelanjutan</h3>
                <p className="mt-2">
                  Trekking, camping, dan snorkeling dengan prinsip “Leave No Trace” untuk menjaga keindahan alam tetap utuh.
                </p>
              </div>
            </div>
          </section>

          {/* Penutup */}
          <section className="text-slate-600 leading-relaxed text-center py-8 border-t border-slate-200 animate-fade-in-up transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md">
            <p className="italic">
              “Bukan seberapa jauh kita pergi, tapi seberapa dalam kita memahami dan menjaga tempat yang kita kunjungi.”
            </p>
            <p className="mt-4 font-semibold text-slate-900">
              Jadilah wisatawan yang peduli — jelajahi, hargai, dan lestarikan!
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
    </>
  );
}