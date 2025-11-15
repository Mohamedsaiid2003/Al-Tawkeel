import React from 'react';
import { FaPhone, FaWhatsapp, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';

const services = [
  {
    title: 'صيانة الشاشات',
    img: '/images/TV.jpg',
    desc: 'إصلاح جميع أنواع الشاشات والتلفزيونات'
  },
  {
    title: 'صيانة الميكروويف',
    img: '/images/micro.webp',
    desc: 'حل مشاكل التسخين والدوائر الإلكترونية'
  },
  {
    title: 'صيانة الخلاطات',
    img: '/images/mixer.png',
    desc: 'إصلاح الموتور والشفرات'
  },
  {
    title: 'صيانة مراوح',
    img: '/images/fan.jpg',
    desc: 'إصلاح الموتور والتحكم الإلكتروني'
  },
  {
    title: 'صيانة المكانس',
    img: '/images/vacuom.png',
    desc: 'إصلاح قوة الشفط والموتور'
  },
  {
    title: 'جميع الأجهزة الصغيرة',
    img: '/images/alectrec.png',
    desc: 'غلايات، مكاوي، فرن الكهربائي ، وغيرها'
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-100 font-arabic" dir="rtl">
      {/* Header + Logo Only */}
      <header className="text-center py-12 px-6">
        {/* اللوجو الكبير بدون برواز */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/logo.png"
            alt="شعار مركز التوكيل"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* أزرار التواصل */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <a
            href="tel:+201557646808"
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-full text-white font-bold shadow-lg hover:shadow-red-600/50 transform hover:scale-110 transition-all duration-300 animate-pulse"
          >
            <FaPhone className="animate-bounce" /> 01557646808
          </a>
          <a
            href="https://wa.me/201557646808"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 rounded-full text-white font-bold shadow-lg hover:shadow-green-600/50 transform hover:scale-110 transition-all duration-300 animate-pulse"
          >
            <FaWhatsapp className="animate-bounce" /> واتساب
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61572399954792"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 rounded-full text-white font-bold shadow-lg hover:shadow-blue-600/50 transform hover:scale-110 transition-all duration-300 animate-pulse"
          >
            <FaFacebook className="animate-bounce" /> Face Book
          </a>
        </div>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          صيانة احترافية لجميع الأجهزة المنزلية الصغيرة
        </p>
      </header>

      {/* Services */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-100 mb-10">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-slate-800/70 rounded-2xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 overflow-visible"
            >
              <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-32 h-32 transition-all duration-500 group-hover:-translate-x-12 group-hover:scale-[2.2] group-hover:z-10">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full border-4 border-slate-700 shadow-xl"
                />
              </div>

              <div className="pr-16">
                <h3 className="text-xl font-bold text-purple-300 mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location + Address + Map */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-100 mb-8 flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-red-500" /> موقعنا
          </h2>

          <p className="text-center text-lg text-slate-300 mb-6">
            <strong>العنوان:</strong> 18 شارع زغلول متفرع من شارع الهرم بجوار مدرسه المشير احمد اسماعيل 
          </p>
          <p className="text-center text-lg text-slate-300 mb-6">
            <strong>المواعيد :</strong> من الساعه 10 صباحا حتي 11 مسا 
          </p>

          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4490.729299898421!2d31.147016023537557!3d29.98541617495334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145845005f13b699%3A0x7408328640bbb808!2z2YXYsdmD2LIg2KfZhNiq2YjZg9mK2YQg2YTZhNi12YrYp9mG2Kk!5e1!3m2!1sar!2seg!4v1763209643306!5m2!1sar!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع مركز التوكيل - الجيزة"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 text-sm">
        <p>© 2025 مركز التوكيل. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
};

export default HomePage;