export interface Project {
  title: string
  year: string
  description: string
  stack: string[]
  image?: string
  hideOverlayTitle?: boolean
  detailsUrl?: string
  demoUrl?: string
  codeUrl?: string
}

export interface Experience {
  role: string
  company: string
  location: string
  type: string
  period: string
  summary: string
  bullets: string[]
  tags: string[]
}

export interface Certification {
  title: string
  issuer: string
  id: string
  date: string
  description?: string
  detailsUrl?: string
  certificateUrl?: string
}

export interface Project {
  title: string
  year: string
  description: string
  stack: string[]
  image?: string
  features?: string[]
  showcase?: string[]
  detailsUrl?: string
  demoUrl?: string
  codeUrl?: string
}

export const usePortfolioData = () => {
  const profile = {
    name: 'Ahmad Zidan Al Ikhsan',
    role: 'Backend Developer and SysAdmin',
    yoe: '2+',
    tagline:
      'building modern web applications, automating infrastructure through DevOps practices, and creating reliable systems that deliver exceptional user experiences.',
    location: 'Bogor, Indonesia',
    email: 'orangepoxz23@gmail.com',
    github: 'github.com/Hibakupoxzz',
    linkedin: 'linkedin.com/in/ahmad-zidan-594732365/',
    instagram: 'instagram.com/hibakupoxz_/',
    photos: ['/images/profile-2.jpeg', '/images/profile-1.jpeg'],
    resumeUrl: '#'
  }

  const projects: Project[] = [
    {
      title: 'HematCuan',
      year: '2026',
      description:
        'Widget Hemat Cuan is a simple desktop-based money manager application built with HTML, CSS, JavaScript, and Electron.',
      stack: ['HTML', 'CSS', 'JavaScript', 'SQLite', 'Elektron.JS'],
      detailsUrl: '#',
      image: ['/images/project/hematcuan.png'],
      codeUrl: 'https://github.com/Hibakupoxzz/Hemat-Cuan'
    },
    {
      title: 'ZEIN KARYA ALUMUNIUM',
      year: '2025',
      description:
        'Is the official website showcasing the company’s profile, high-quality aluminium products, and services. Designed with a modern and responsive layout, it allows customers to easily browse the portfolio, and get in touch for orders or consultations.',
      stack: ['HTML', 'CSS', 'JavaScript'],
      detailsUrl: 'https://zein-karya-alumunium.vercel.app/',
      image: ['/images/project/zeinkaryaalumunium.png'],
      codeUrl: 'https://github.com/Hibakupoxzz/Web-ZEIN-Alumunium'
    },
    {
      title: 'SPMB PENUS Website',
      year: '2025',
      description:
        'This SPMB website was built using Laravel and Blade to simplify the online registration process for new students at SMK Plus Pelita Nusantara and to assist school admins in managing the data efficiently.',
      stack: ['PHP', 'Laravel', 'Blade', 'MySQL'],
      image: ['/images/project/SPMB.png'],
      detailsUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Backend Alumni Trisakti',
      year: '2025',
      description:
        'Trisakti Alumni Management System is a web application built to manage alumni data and strengthen the alumni community of Institut Pariwisata Trisakti. It features secure authentication, email verification, role-based access control, mandatory profile completion, and an admin dashboard for managing users.',
      stack: ['PHP', 'Laravel', 'MySQL'],
      image: ['/images/project/alumnitrisakti.png'],
      detailsUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Backend Digital Forte Indonesia ',
      year: '2024',
      description:
        "Digital Forte Indonesia Website is a responsive company profile website built to strengthen the company's digital presence and effectively communicate its identity, services, and expertise. The website emphasizes accessibility, modern UI/UX principles, and clear information architecture, enabling visitors to easily explore the company's offerings and learn how its technology solutions support business growth and digital transformation.",
      stack: ['PHP', 'Laravel', 'MySQL'],
      image: ['/images/project/dfi.png'],
      detailsUrl: 'https://digitalforte.id/',
      codeUrl: '#'
    },
    {
      title: 'VERITAS',
      year: '2026',
      description:
        'Verifikasi Etika, Rekapitulasi, & Integrasi Tracking Aktivitas Siswa.',
      stack: ['PHP', 'Laravel', 'Blade', 'MySQL'],
      image: ['/images/project/veritas.png'],
      detailsUrl: '#',
      codeUrl: '#'
    }
  ]

  const experience: Experience[] = [
    {
      role: 'Website & Game Developer',
      company: 'Devaccto RPL SMK Plus Pelita Nusantara',
      location: 'Cibinong, Bogor',
      type: 'Full-time',
      period: 'Aug 2024 — Present',
      summary:
        'Berkontribusi pada seluruh siklus pengembangan fitur produk inti, mulai dari perencanaan hingga rilis produksi.',
      bullets: [
        'Merancang, mengembangkan, dan merilis 30+ fitur baru untuk platform web dan mobile.',
        'Meningkatkan stabilitas aplikasi dengan menyelesaikan lebih dari 120 bug, dari isu UI kecil hingga masalah performa kritis.',
        'Berkolaborasi dengan tim UI/UX dan produk untuk menerjemahkan kebutuhan bisnis menjadi solusi teknis.'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'Git', 'MySQL', 'Python', 'C#', 'Unity', 'Java', 'Figma']
    },
    {
      role: 'Leader of Devaccto RPL',
      company: 'Devaccto RPL SMK Plus Pelita Nusantara',
      location: 'Cibinong, Bogor',
      type: 'Full-time',
      period: 'Aug 2025 — Jul 2026',
      summary:
        'Mengembangkan dan memelihara API internal serta integrasi pihak ketiga, sambil menjaga stabilitas rilis melalui pengujian otomatis.',
      bullets: [
        'Membangun endpoint REST API baru yang digunakan lebih dari 10 tim internal.',
        'Menulis test otomatis yang menaikkan code coverage dari 40% menjadi 75%.'
      ],
      tags: ['Nest.js', 'Docker', 'REST API', 'Jest']
    },
    {
      role: 'Backend Developer, Mobile Developer, SysAdmin',
      company: 'PT. Digital Forte Indonesia',
      location: 'Grand Depok City, Depok',
      type: 'Internship',
      period: 'Aug 25 2025 — Apr 22 2026',
      summary:
        'Membantu tim membangun landing page dan komponen UI yang dapat digunakan kembali di beberapa proyek internal.',
      bullets: [
        'Mengurangi waktu pengembangan fitur baru sebesar 20% dengan membangun komponen reusable.'
      ],
      tags: ['Laravel', 'API', 'MySQL', 'Flutter', 'Git', 'Linux', 'Networking']
    }
  ]

  const certifications: Certification[] = [
    {
      title: 'Dev Certification for Web',
      issuer: 'dev.cert',
      id: '720814QV56',
      date: 'Jan 2026',
      detailsUrl: '#'
    },
    {
      title: 'Cloud Academy Graduate — Web Learning Path',
      issuer: 'Cloud Academy',
      id: 'CA24/GRAD/XXIV-07/A338D4KY3877',
      date: 'Jul 2025',
      description:
        'Cloud Academy adalah program yang dirancang untuk mencetak talenta teknis kelas dunia bagi perusahaan dan startup Indonesia.',
      detailsUrl: '#',
      certificateUrl: '#'
    },
    {
      title: 'Menjadi Frontend Developer Expert',
      issuer: 'Dicoding Indonesia',
      id: 'JLX1425JJX72',
      date: 'Oct 2025',
      detailsUrl: '#',
      certificateUrl: '#'
    },
    {
      title: 'Belajar Membuat Aplikasi Web dengan React',
      issuer: 'Dicoding Indonesia',
      id: '53XEQOK5VXRN',
      date: 'Oct 2025',
      detailsUrl: '#',
      certificateUrl: '#'
    },
    {
      title: 'Belajar Pengembangan Aplikasi Backend Intermediate',
      issuer: 'Dicoding Indonesia',
      id: 'KEXL11Y80XG2',
      date: 'May 2025',
      detailsUrl: '#',
      certificateUrl: '#'
    },
    {
      title: 'Belajar Fundamental Aplikasi Backend',
      issuer: 'Dicoding Indonesia',
      id: 'IDCAMP2024/L1-MP-022',
      date: 'Mar 2025',
      certificateUrl: '#'
    }
  ]

  return { profile, projects, experience, certifications }
}
