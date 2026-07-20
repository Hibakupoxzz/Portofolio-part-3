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
    photos: ['/images/profile-2.jpeg', '/images/profile-1.png'],
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bullets: [
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bullets: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bullets: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ],
      tags: ['Laravel', 'API', 'MySQL', 'Flutter', 'Git', 'Linux', 'Networking']
    }
  ]

  const certifications: Certification[] = [
    {
      title: 'Webinar "Introduction to Capture the Flag"',
      issuer: 'ID-Networkers',
      id: 'Lorem ipsum',
      date: '02 Agustus 2025',
      detailsUrl: '#'
    },
    {
      title: 'Google I_O Extended',
      issuer: 'Google Developer Group',
      id: 'Lorem ipsum',
      date: 'July 19, 2025',
      detailsUrl: '#',
      certificateUrl: '#'
    },
    {
      title: 'Google Cloud Roadshows x Build with AI Bogor 2025',
      issuer: 'Google Developer Group',
      id: 'Lorem Ipsum',
      date: 'May 3, 2025',
      detailsUrl: '#',
      certificateUrl: '#'
    },
    {
      title: 'Webinar “From Vision to Version 1.0: Roadmapping Your Game Effectively”',
      issuer: 'CodeLamp Indonesia',
      id: 'Lorem Ipsum',
      date: '17 Agustus 2025',
      detailsUrl: '#',
      certificateUrl: '#'
    },
    // {
    //   title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   issuer: 'Lorem ipsum dolor sit amet',
    //   id: 'Lorem Ipsum',
    //   date: 'Lorem Ipsum',
    //   detailsUrl: '#',
    //   certificateUrl: '#'
    // },
    // {
    //   title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   issuer: 'Lorem ipsum dolor sit amet',
    //   id: 'Lorem Ipsum',
    //   date: 'Lorem Ipsum',
    //   certificateUrl: '#'
    // }
  ]

  return { profile, projects, experience, certifications }
}
