import React, { useRef } from "react";

/* ───────── Shared Helpers ───────── */
const SectionHeading = ({ title, highlight, white }) => (
  <div className="mb-6">
    <h2 className={`text-3xl font-bold mb-2 ${white ? "text-white" : "text-gray-900"}`}>
      {title} {highlight && <span className="text-orange-500">{highlight}</span>}
    </h2>
    <div className="w-20 h-1 rounded-full bg-orange-500" />
  </div>
);

const CarouselArrows = ({ scrollRef, gap = 300 }) => (
  <div className="flex gap-2 mt-4">
    <button
      onClick={() => scrollRef.current?.scrollBy({ left: -gap, behavior: "smooth" })}
      className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center text-sm text-gray-600 hover:bg-[#002147] hover:text-white hover:border-[#002147] transition cursor-pointer"
      aria-label="Previous"
    >◀</button>
    <button
      onClick={() => scrollRef.current?.scrollBy({ left: gap, behavior: "smooth" })}
      className="w-9 h-9 rounded-full border border-gray-300 bg-white flex items-center justify-center text-sm text-gray-600 hover:bg-[#002147] hover:text-white hover:border-[#002147] transition cursor-pointer"
      aria-label="Next"
    >▶</button>
  </div>
);

/* ───────── 1. Overview Section ───────── */
const OverviewSection = () => {
  const achievements = [
    { value: "100%", title: "Placement Unlocked", sub: "Assured opportunities for ELCE graduates" },
    { value: "5th", title: "Consecutive 100% Batch", sub: "Strong and consistent placement track record" },
    { value: "8.40 LPA", title: "Highest Package (2024-25)", sub: "Average package: 3.89 LPA" },
    { value: "10 LPA", title: "Highest Package (2023-24)", sub: "Average package: 3.81 LPA" },
    // { value: "UAE", title: "International Placement", sub: "Global opportunities with offers in UAE" },
    // { value: "EV • Smart Cities", title: "Future-Ready Domains", sub: "EV, Smart Cities, Renewable, Automation, FinTech" },
  ];

  return (
    <section id="overview" className="py-16 px-6 bg-gray-50">
      <div className="max-w-[1140px] mx-auto bg-white rounded-2xl shadow-lg px-8 md:px-12 py-10 md:py-12">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-center">
          {/* Left – Overview Copy */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#0056b3] mb-2">
              Undergraduate Programme
            </p>
            <h1 className="text-3xl md:text-[2rem] font-bold leading-tight mb-1">
              Electrical &amp; Computer Engineering
            </h1>
            <h1 className="text-3xl md:text-[2.2rem] font-bold text-orange-500 mb-4">Department Overview</h1>
            <p className="text-[.95rem] leading-relaxed text-gray-600 mb-6">
              The Department of Electrical and Computer Engineering (ELCE) is a hub of innovation, research,
              and academic excellence. Our mission is to empower students with cutting-edge knowledge and skills,
              foster interdisciplinary research, and develop future-ready professionals who excel in solving
              real-world challenges across Power &amp; Energy Systems, Robotics &amp; Automation, AI-driven IoT,
              Electric Vehicles, and Biomedical Instrumentation.
            </p>
            <a
              href="https://admission.kiet.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-8 py-3 rounded-lg shadow-md shadow-orange-500/30 transition"
            >
              Apply Now
            </a>
          </div>

          {/* Right – Placement & Achievement Grid */}
          <div className="flex items-center">
            <div className="w-full">
              <p className="text-xl font-semibold tracking-widest uppercase text-[#0056b3] mb-3">
                Our Achievements
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {achievements.map((item, index) => (
                  <div key={index}>
                    <p className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{item.value}</p>
                    <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───────── 2. Highlights Section ───────── */
const highlightsData = [
  {
    title: "Innovative & Next-Generation Curriculum",
    desc: "A robust 160-credit B.Tech. program with a unique blend of electrical and computer engineering courses, integrated with industry trends covering Power Systems, Embedded Systems, AI, IoT, and Electric Vehicles.",
    icon: "⚡",
  },
  {
    title: "Hands-On & Project-Based Learning",
    desc: "State-of-the-art labs for practical exposure to advanced technologies through project-based learning experiences, including MATLAB, LabVIEW, CATIA, OPAL-RT simulations and real-world industry projects.",
    icon: "🔬",
  },
  {
    title: "Industry Collaboration & Research Excellence",
    desc: "Partnerships with leading organizations like Tata Power for internships, live projects, and research. Active participation in multidisciplinary research areas like AI, Industry 5.0, and sustainable energy solutions.",
    icon: "🏆",
  },
  {
    title: "Career-Ready Graduates",
    desc: "Strong focus on skill development, entrepreneurship, and employability with state-of-the-art labs including Real-time Data Acquisition, AI & IoT, Advanced Power Systems, E-Mobility, Robotics, and more.",
    icon: "🚀",
  },
];

const HighlightsSection = () => (
  <section id="highlights" className="py-16 px-6 bg-white">
    <div className="max-w-[1140px] mx-auto">
      <SectionHeading title="Key" highlight="Highlights" />
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {highlightsData.map((h, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-3xl mb-3">{h.icon}</div>
            <h3 className="text-lg font-bold text-[#002147] mb-2">{h.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───────── 3. Vision & Mission ───────── */
const VisionMissionSection = () => (
  <section id="vision-mission" className="py-16 px-6 bg-gray-50">
    <div className="max-w-[1140px] mx-auto">
      <SectionHeading title="Vision &" highlight="Mission" />
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="text-lg font-bold text-[#002147] mb-2">Vision</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            To become a leader in fostering innovation and research for sustainable electrical and
            computer engineering solutions to address global challenges and serve humanity.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="text-lg font-bold text-[#002147] mb-2">Mission</h3>
          <ul className="text-sm leading-relaxed text-gray-600 list-disc pl-5 space-y-2">
            <li>To equip students with cutting-edge technical knowledge and creativity in Electrical and Computer Engineering.</li>
            <li>To establish strong partnerships with global industries for providing practical and real-world learning.</li>
            <li>To provide a conducive environment for impactful research that addresses modern challenges and advances in AI-driven technologies and automation.</li>
            <li>To develop a sustainable ecosystem that nurtures globally competent professionals and leaders.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ───────── 4. Labs & Infrastructure ───────── */
const labsData = [
  { name: "Data Structure Lab", desc: "Hands-on implementation of fundamental data structures to build efficient and optimized algorithms." },
  { name: "Python for Engineers Lab", desc: "Practical coding sessions using Python to solve engineering problems with simplicity and efficiency." },
  { name: "Microprocessors Lab", desc: "Hands-on training in microprocessor and microcontroller programming, interfacing, and embedded system applications." },
  { name: "Power Electronics Lab", desc: "Equipped with converters, inverters, and experimental setups to study switching devices and power electronic circuits." },
  { name: "Electrical Machine Lab", desc: "Practical experiments on DC machines, induction motors, transformers, and synchronous machines." },
  { name: "Power Systems Laboratory", desc: "Simulation and analysis tools for power generation, transmission, distribution, load flow studies, and system stability." },
  { name: "Electric Drives & Control Lab", desc: "Exposure to motor drive systems, controllers, and feedback mechanisms used in industrial automation." },
  { name: "Industrial Automation & PLC Lab", desc: "Training in programmable logic controllers, SCADA systems, and industrial automation techniques." },
  { name: "IoT and Embedded Systems Lab", desc: "Sensor integration, IoT platforms, and embedded system development for smart automation and real-time applications." },
  { name: "Measurement & Embedded System Lab", desc: "Precision measurement, instrumentation experiments, and embedded system prototyping using modern tools." },
];

const LabsSection = () => {
  const scrollRef = useRef(null);
  return (
    <section id="labs" className="py-16 px-6 bg-white">
      <div className="max-w-[1140px] mx-auto">
        <SectionHeading title="Labs &" highlight="Infrastructure" />
        <p className="text-sm text-gray-600 mb-6">
          Students engage with advanced laboratories, including Power Systems, Power Electronics, Embedded Systems,
          Instrumentation and Measurement, and Computer-Aided Design. Platforms like MATLAB, LabVIEW, CATIA, OPAL-RT, MULTISIM, and PSAT
          simulate real-world scenarios, bridging theory and practice seamlessly.
        </p>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {labsData.map((lab, i) => (
            <div
              key={i}
              className="min-w-[280px] max-w-[300px] bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition snap-start flex-shrink-0"
            >
              <div className="w-12 h-12 rounded-xl bg-[#002147] flex items-center justify-center text-white text-xl mb-3">🔧</div>
              <h4 className="text-sm font-bold text-gray-900 mb-2">{lab.name}</h4>
              <p className="text-xs text-gray-600 leading-relaxed">{lab.desc}</p>
            </div>
          ))}
        </div>
        <CarouselArrows scrollRef={scrollRef} gap={310} />
      </div>
    </section>
  );
};

/* ───────── 5. Centre of Excellence ───────── */
const CoeSection = () => (
  <section id="coe" className="py-16 px-6 bg-[#002147] text-white">
    <div className="max-w-[1140px] mx-auto">
      <div className="mb-2">
        <h2 className="text-3xl font-bold text-white mb-2">
          <span className="text-orange-400">Centre of Excellence</span>
        </h2>
        <div className="w-20 h-1 rounded-full bg-orange-500 mb-6" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/10 rounded-2xl p-7 border border-white/20">
          <h3 className="text-xl font-bold text-orange-400 mb-3">Power and Energy Systems</h3>
          <p className="text-base leading-relaxed text-gray-200">
            This Center serves as a dynamic platform that bridges academic learning with real-world industrial
            applications, enabling students and faculty to engage in live projects, hands-on training modules,
            and industry-driven research. Equipped with state-of-the-art infrastructure and expert mentorship
            from Tata Power professionals, the Center empowers students to gain industry-relevant skills.
          </p>
        </div>
        <div className="bg-white/10 rounded-2xl p-7 border border-white/20">
          <h3 className="text-xl font-bold text-orange-400 mb-3">E-Mobility</h3>
          <p className="text-base leading-relaxed text-gray-200">
            This is an effort to create a platform for learning while working on the latest technology. The centre
            provides infrastructure and environment to enhance collaborative research with industry partners around
            the globe. Additionally, the centre provides the platform for students to learn through training,
            workshops, seminars, conferences, expert talks, and schools.
          </p>
        </div>
      </div>

      <a
        href="https://kiet.edu/industry-readiness/centre-of-excellence/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border-2 border-orange-400 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition mt-8"
      >
        Learn More →
      </a>
    </div>
  </section>
);

/* ───────── 6. Our Clubs ───────── */
const clubs = [
  {
    name: "Industrial Electronics and Control Club",
    desc: "This Club provides a dynamic platform for students to apply their innovative ideas and transform them into impactful real-world solutions. The club encourages creativity, hands-on learning, and practical implementation through projects, workshops, and industry-aligned activities.",
    link: "https://kiet.edu/campus-life/technical-clubs/",
    emoji: "⚙️",
  },
  {
    name: "Socio Tech Innovation Club",
    desc: "The agenda of this club is to incorporate technical innovations in the minds of the students and provide them the confidence that any idea can be accepted and worked upon. The Socio Tech Innovation Club from KIET is proud to announce that their team 'AMBU-The Life Saver' has secured the 5th rank in the prestigious Hack it Sapiens Hackathon in Jaipur.",
    link: "https://kiet.edu/campus-life/technical-clubs/",
    emoji: "💡",
  },
];

const ClubsSection = () => (
  <section id="clubs" className="py-16 px-6 bg-gray-50">
    <div className="max-w-[1140px] mx-auto">
      <SectionHeading title="Our" highlight="Clubs" />
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {clubs.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-[#002147] flex items-center justify-center text-3xl flex-shrink-0">
                {c.emoji}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#002147] mb-2">{c.name}</h3>
                <p className="text-sm leading-relaxed text-gray-600 mb-4">{c.desc}</p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-5 py-2 rounded-lg transition"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ───────── 7. Dean's Message ───────── */
const DeanMessageSection = () => (
  <section id="dean-message" className="py-16 px-6 bg-white">
    <div className="max-w-[1140px] mx-auto">
      <SectionHeading title="Dean's" highlight="Message" />
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 mt-8 items-start">
        {/* Avatar / Info */}
        <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-[#002147] to-[#0a3a6b] flex items-center justify-center text-white text-4xl font-bold mb-4">
            NK
          </div>
          <h3 className="text-lg font-bold text-[#002147]">Dr. Neeraj Kumar Gupta</h3>
          <p className="text-sm text-gray-500">Dean, ELCE Department</p>
        </div>

        {/* Message */}
        <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
          <p className="text-[.95rem] leading-relaxed text-gray-600 mb-4">
            Welcome to the Department of Electrical and Computer Engineering (ELCE) at KIET, Ghaziabad.
            It gives me immense pleasure to welcome you to a department that is dedicated to delivering
            high-quality education, fostering innovation, and nurturing excellence in the rapidly advancing
            domains of Electrical and Computer Engineering.
          </p>
          <p className="text-[.95rem] leading-relaxed text-gray-600 mb-4">
            In today's era of technological transformation driven by Artificial Intelligence, Machine Learning,
            Automation, and Digital Engineering, our mission is to prepare students who are not only technically
            proficient but also ethically grounded, innovative, and globally competent. The B.Tech. programme
            in Electrical and Computer Engineering is carefully structured to equip students with the skills,
            knowledge, and vision required to excel in both industry and academia.
          </p>
          <p className="text-[.95rem] leading-relaxed text-gray-600 mb-4">
            Our strength lies in our committed faculty members, advanced laboratories, and robust industry
            collaborations. The department proudly features AI and ML–driven Software Computational Laboratories
            that provide students with hands-on experience in next-generation technologies.
          </p>
          <p className="text-[.95rem] leading-relaxed text-gray-600">
            At ELCE, you will be part of a vibrant academic ecosystem that fosters creativity, critical thinking,
            teamwork, and lifelong learning. On behalf of the department, I warmly welcome you and wish you
            a fulfilling, inspiring, and rewarding academic journey with us.
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ───────── 8. Faculty ───────── */
const facultyData = [
  { name: "Dr. Neeraj Kumar Gupta", role: "Professor & Dean ELCE", initials: "NK" },
  { name: "Dr. Arvind Kumar Sharma", role: "Professor & Head-HCC", initials: "AK" },
  { name: "Dr. Yaduvir Singh", role: "Professor & Program Head", initials: "YS" },
  { name: "Dr. Satish Kumar", role: "Professor", initials: "SK" },
  { name: "Dr. Nitin Kumar Saxena", role: "Professor", initials: "NS" },
  { name: "Dr. Jyoti Srivastava", role: "Associate Professor", initials: "JS" },
  { name: "Dr. Rahat U Khan", role: "Associate Professor", initials: "RK" },
  { name: "Dr. Masood Rizvi", role: "Associate Professor", initials: "MR" },
  { name: "Dr. Ruchika Singh", role: "Associate Professor", initials: "RS" },
  { name: "Dr. Surendra Kumar Tripathi", role: "Associate Professor", initials: "ST" },
  { name: "Dr. Md. Shariz Ansari", role: "Associate Professor", initials: "SA" },
  { name: "Dr. Ameer Faisal", role: "Assistant Professor", initials: "AF" },
  { name: "Dr. Salim", role: "Assistant Professor", initials: "SL" },
  { name: "Dr. Sheetal", role: "Assistant Professor", initials: "SH" },
  { name: "Dr. Rajeev Kumar", role: "Assistant Professor", initials: "RK" },
  { name: "Prof. Varun Sharma", role: "Assistant Professor", initials: "VS" },
  { name: "Dr. Sourav Diwania", role: "Assistant Professor", initials: "SD" },
  { name: "Prof. Kapil Gandhi", role: "Asst. Prof. & Program Head (I Year)", initials: "KG" },
  { name: "Dr. Snigdha Chaturvedi", role: "Assistant Professor", initials: "SC" },
  { name: "Dr. Bandana", role: "Assistant Professor", initials: "BA" },
  { name: "Dr. Vanya Goel", role: "Assistant Professor", initials: "VG" },
  { name: "Dr. Ankur Maheshwari", role: "Assistant Professor", initials: "AM" },
  { name: "Dr. Bhuvan Sharma", role: "Assistant Professor", initials: "BS" },
  { name: "Dr. Sindhu Bhaskar", role: "Professor Of Practice", initials: "SB" },
  { name: "Mr. Ashish D. Thombre", role: "Adjunct Faculty", initials: "AT" },
  { name: "Mr. Arun Kumar Yadav", role: "Adjunct Faculty", initials: "AY" },
  { name: "Mr. Praveen Kumar Tyagi", role: "Sr. Lab In-charge", initials: "PT" },
  { name: "Mr. Krishna Pratap Singh", role: "Lab Instructor (II)", initials: "KS" },
  { name: "Mr. Prakash Chandra Thakur", role: "Lab Instructor (II)", initials: "PC" },
  { name: "Mr. Prempal", role: "Lab Instructor (II)", initials: "PP" },
  { name: "Mr. Pratipal Singh", role: "Lab Instructor (II)", initials: "PS" },
  { name: "Mr. Girish Dutt", role: "Lab Instructor (II)", initials: "GD" },
  { name: "Mr. Anil Kumar Kushwaha", role: "Lab Instructor (I)", initials: "AK" },
  { name: "Mr. Umesh Kumar Mishra", role: "Lab Technician (II)", initials: "UM" },
  { name: "Mr. Amit Kumar", role: "Lab Technician (II)", initials: "AK" },
  { name: "Mr. Lalit Kumar", role: "Officer", initials: "LK" },
  { name: "Mr. Sanju Singh", role: "Sr. Executive (Academic Support)", initials: "SS" },
];

const FacultySection = () => {
  const scrollRef = useRef(null);
  return (
    <section id="faculty" className="py-16 px-6 bg-gray-50">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex items-end justify-between mb-6">
          <SectionHeading title="Faculty" />
          <a
            href="https://kiet.edu/programs/undergraduate-programs/ELCE/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition whitespace-nowrap"
          >
            View All →
          </a>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {facultyData.map((f, i) => (
            <div
              key={i}
              className="min-w-[210px] max-w-[210px] bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md transition snap-start flex-shrink-0"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#002147] to-[#0a3a6b] flex items-center justify-center text-white text-xl font-bold mb-3">
                {f.initials}
              </div>
              <h4 className="text-sm font-bold text-gray-900 mb-0.5">{f.name}</h4>
              <p className="text-xs text-gray-500 leading-snug">{f.role}</p>
            </div>
          ))}
        </div>
        <CarouselArrows scrollRef={scrollRef} gap={240} />
      </div>
    </section>
  );
};

/* ───────── 9. Testimonials ───────── */
const testimonials = [
  {
    name: "Kartikey Bhardwaj",
    batch: "2020-24",
    role: "Officer at Indian Army",
    quote: "Becoming an officer in the Indian Army was a dream that required perseverance, dedication, and resilience. I started my journey with a clear goal but faced challenges along the way. The SSB interview process, known for its rigorous selection, tested every aspect of my personality.",
    initials: "KB",
  },
  {
    name: "Anoop Jain",
    batch: "2005-2009",
    role: "Assistant Professor, IIT Jodhpur",
    quote: "I recall my wonderful past four years (2005-2009) at KIET towards my undergraduate studies at the Electrical and Electronics Engineering Department. I really learnt a lot in these four years @ KIET from my teachers and friends.",
    initials: "AJ",
  },
  {
    name: "Shikha Saini",
    batch: "2008-2012",
    role: "Additional General Manager, NHSRCL",
    quote: "I joined KIET, one of the top 5 colleges in year 2008 of UPTU with great expectation and what I got after completing my journey was beyond expectations. The faculty and environment shaped my career in the best possible way.",
    initials: "SS",
  },
  {
    name: "Kunwar Abhay Singh",
    batch: "2013-2017",
    role: "Grade A Officer at SEBI",
    quote: "I am feeling privileged to tell you that I have been selected as Grade A Officer in Securities and Exchange Board of India (SEBI) Govt. of India, which is one of the top organizations of our country which regulates India's economy.",
    initials: "KA",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef(null);
  return (
    <section id="testimonials" className="py-16 px-6 bg-white">
      <div className="max-w-[1140px] mx-auto">
        <SectionHeading title="Student" highlight="Testimonials" />

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory mt-8"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[320px] max-w-[340px] bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition snap-start flex-shrink-0"
            >
              {/* Role badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium bg-orange-100 text-orange-600 px-3 py-1 rounded-full">{t.role}</span>
                <span className="text-xs font-medium bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{t.batch}</span>
              </div>

              {/* Avatar */}
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xl font-bold mb-3">
                {t.initials}
              </div>

              <h4 className="text-center text-base font-bold text-gray-900">{t.name}</h4>

              {/* Quote */}
              <div className="flex gap-2 mt-3">
                <span className="text-2xl text-orange-400 leading-none font-serif">"</span>
                <p className="text-xs leading-relaxed text-gray-600 italic">{t.quote}</p>
              </div>

              <p className="text-right mt-3">
                <span className="text-xs font-semibold text-orange-500 cursor-pointer hover:underline">Read More →</span>
              </p>
            </div>
          ))}
        </div>
        <CarouselArrows scrollRef={scrollRef} gap={360} />
      </div>
    </section>
  );
};

/* ───────── 10. Program Outcomes ───────── */
const programOutcomes = [
  { title: "Engineering Knowledge", desc: "Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization to develop solutions of complex engineering problems." },
  { title: "Problem Analysis", desc: "Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions with consideration for sustainable development." },
  { title: "Design/Development of Solutions", desc: "Design creative solutions for complex engineering problems and design/develop systems/components/processes to meet identified needs with consideration for public health, safety, and environment." },
  { title: "Conduct Investigations", desc: "Conduct investigations of complex engineering problems using research-based knowledge including design of experiments, modelling, analysis & interpretation of data." },
  { title: "Engineering Tool Usage", desc: "Create, select and apply appropriate techniques, resources and modern engineering & IT tools, including prediction and modelling, recognizing their limitations." },
  { title: "Ethics & Life-Long Learning", desc: "Apply ethical principles, commit to professional ethics, human values, diversity and inclusion; recognize the need for independent and life-long learning and adaptability." },
];

const ProgramOutcomesSection = () => (
  <section id="program-outcomes" className="py-16 px-6 bg-gray-50">
    <div className="max-w-[1140px] mx-auto">
      <SectionHeading title="Program" highlight="Outcomes" />
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {programOutcomes.map((p, i) => (
          <div
            key={i}
            className="border-l-4 border-orange-500 bg-white rounded-r-xl px-5 py-4 hover:shadow-md transition"
          >
            <h4 className="text-sm font-semibold text-gray-900 mb-1 leading-snug">{p.title}</h4>
            <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// /* ───────── Footer ───────── */
// const Footer = () => (
//   <footer className="bg-[#002147] text-white py-10 px-6">
//     <div className="max-w-[1140px] mx-auto text-center">
//       <h3 className="text-xl font-bold mb-2">KIET University</h3>
//       <p className="text-sm text-gray-300 mb-4">Delhi-NCR, Ghaziabad, UP (India)</p>
//       <p className="text-xs text-gray-400">
//         © {new Date().getFullYear()} KIET Deemed to be University. All rights reserved.
//       </p>
//     </div>
//   </footer>
// );

/* ───────── Main Composition ───────── */
const Main = () => (
  <main>
    <OverviewSection />
    <HighlightsSection />
    <VisionMissionSection />
    <LabsSection />
    <CoeSection />
    <ClubsSection />
    <DeanMessageSection />
    <FacultySection />
    <TestimonialsSection />
    <ProgramOutcomesSection />
    {/* <Footer /> */}
  </main>
);

export default Main;