import React, { useState } from 'react';

const App = () => {
  // Common Icons (User, Email, Phone, Home, Briefcase, Open Book)
  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 = 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );

  const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
    </svg>
  );

  const BookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 = 0 0-3-3H2z"></path>
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
  );

  const AwardIcon = () => ( // Icon for Courses section
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );

  // Specific icons for skills
  const ServerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="7" y1="6" x2="7.01" y2="6"></line>
      <line x1="7" y1="18" x2="7.01" y2="18"></line>
    </svg>
  );

  const TableIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M18 10V4H6v6"></path>
      <path d="M2 14h20"></path>
      <path d="M12 2v20"></path>
      <path d="M18 10v10h-12V10"></path>
    </svg>
  );

  const FilmIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
      <line x1="7" y1="2" x2="7" y2="22"></line>
      <line x1="17" y1="2" x2="17" y2="22"></line>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <line x1="2" y1="7" x2="7" y2="7"></line>
      <line x1="2" y1="17" x2="7" y2="17"></line>
      <line x1="17" y1="17" x2="22" y2="17"></line>
      <line x1="17" y1="7" x2="22" y2="7"></line>
    </svg>
  );

  const FolderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
  );

  const CreditCardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
  );

  const NetworkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M22 12h-4"></path>
      <path d="M6 12H2"></path>
      <path d="M12 6V2"></path>
      <path d="M12 22v-4"></path>
    </svg>
  );

  const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 6.27 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 6.27a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a2 2 0 0 1 2-2v-.09A1.65 1.65 0 0 0 12.73 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82V9a2 2 0 0 1 2 2h.09A1.65 1.65 0 0 0 19.4 15z"></path>
    </svg>
  );

  const LifeBuoyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="4"></circle>
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
      <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
    </svg>
  );

  const CpuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <path d="M9 1v3"></path>
      <path d="M15 1v3"></path>
      <path d="M9 20v3"></path>
      <path d="M15 20v3"></path>
      <path d="M20 9h3"></path>
      <path d="M20 15h3"></path>
      <path d="M1 9h3"></path>
      <path d="M1 15h3"></path>
    </svg>
  );

  const PaletteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <circle cx="12" cy="7" r="5"></circle>
      <path d="M12 22V7"></path>
      <path d="M5.5 12.5l5-5"></path>
      <path d="M18.5 12.5l-5-5"></path>
    </svg>
  );

  const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );

  const BoxIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M21 8L2 12 21 16 21 8"></path>
      <path d="M21 12v9"></path>
      <path d="M12 12V2"></path>
    </svg>
  );

  const MonitorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );

  const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <line x1="10" y1="9" x2="8" y2="9"></line>
    </svg>
  );

  const LaptopIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1 3m-17 0-1 3m5-3h.01M12 16h.01"></path>
    </svg>
  );

  const HandshakeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M12.7 13.7a4.6 4.6 0 0 1-6.4 0L2 7.7"></path>
      <path d="M11 11L17 5"></path>
      <path d="M19 15l-3 3"></path>
      <path d="M22 12l-4.5 4.5a3.5 3.5 0 0 1-5 0L12 12"></path>
    </svg>
  );

  const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M18.84 9.24A6.5 6.5 0 0 0 12 3a6.5 6.5 0 0 0-6.84 6.24A4.5 4.5 0 0 0 3 13.5C3 15.43 4.57 17 6.5 17h11A4.5 4.5 0 0 0 22 12.5C22 10.57 20.43 9 18.5 9z"></path>
    </svg>
  );

  const HardDriveIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <line x1="22" y1="12" x2="2" y2="12"></line>
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
      <line x1="6" y1="16" x2="6.01" y2="16"></line>
      <line x1="10" y1="16" x2="10.01" y2="16"></line>
    </svg>
  );

  const MusicIcon = () => ( // New icon for FL Studio
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M9 18V5l12-2v13"></path>
      <circle cx="6" cy="18" r="3"></circle>
      <circle cx="18" cy="16" r="3"></circle>
    </svg>
  );

  const TruckIcon = () => ( // Icon for Carga e Descarga
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M14 18l-1.5-7h-6.75l-1.5 7"></path>
      <circle cx="10" cy="20" r="2"></circle>
      <circle cx="18" cy="20" r="2"></circle>
      <path d="M21 16V9l-3-7H6l-3 7v9l3 3h12a2 2 0 0 0 2-2v-1l-1.5-1.5"></path>
    </svg>
  );

  const WarehouseIcon = () => ( // Icon for Organização de Doca
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M22 20V8L12 2 2 8v12h5V10h10v10z"></path>
      <path d="M12 22V10"></path>
    </svg>
  );

  const KeyRoundIcon = () => ( // Icon for Abertura & Fechamento de Loja
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <path d="M2 18L5 21 21 5 18 2z"></path>
      <path d="M7 7l5-5"></path>
      <path d="M10 10l-2 2"></path>
      <circle cx="16" cy="8" r="2"></circle>
    </svg>
  );

  const LayoutGridIcon = () => ( // Icon for Alinhamento de Produtos
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="12" y1="3" x2="12" y2="21"></line>
    </svg>
  );

  // Mapping of icon names to components
  const IconComponents = {
    UserIcon, MailIcon, PhoneIcon, HomeIcon, BriefcaseIcon, BookOpenIcon, AwardIcon,
    ServerIcon, TableIcon, FilmIcon, FolderIcon, CreditCardIcon, NetworkIcon,
    SettingsIcon, LifeBuoyIcon, CpuIcon, PaletteIcon, UsersIcon, BoxIcon,
    MonitorIcon, FileTextIcon, LaptopIcon, HandshakeIcon, CloudIcon, HardDriveIcon,
    MusicIcon, TruckIcon, WarehouseIcon, KeyRoundIcon, LayoutGridIcon,
  };

  // State variables for the component
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [showPdfInCarousel, setShowPdfInCarousel] = useState(false);

  // Handler for the full resume PDF download button
  const handleDownloadPdfComplete = () => {
    window.print();
  };

  // Carousel navigation functions
  const goToPreviousCourse = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === 0 ? coursesData.length - 1 : prevIndex - 1
    );
    setShowPdfInCarousel(false); // Hide PDF when changing course
  };

  const goToNextCourse = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex === coursesData.length - 1 ? 0 : prevIndex + 1
    );
    setShowPdfInCarousel(false); // Hide PDF when changing course
  };

  // Toggle PDF visibility in carousel
  const togglePdfVisibility = () => {
    setShowPdfInCarousel(!showPdfInCarousel);
  };


  const resumeData = {
    personalInfo: {
      name: 'Caio José Maria Henriques Ribeiro', // Full name for personal info
      display_name: 'Caio Ribeiro', // Shorter name for the header
      email: 'caioj.m.h.r@gmail.com',
      phone: '+55 27 99716-3172', // Updated phone number
      address: 'Rua João José de Souza, 61, 29047-312',
      profilePicture: 'https://github.com/CaioRibeir1/ciocrr/raw/refs/heads/main/src/perfil', // User profile picture (placeholder URL)
    },
    summary: 'Estagiário na área de TI, com experiência em infraestrutura, design e programação. Possuo vivência em suporte técnico de hardware e software, gerenciamento de redes, atendimento ao público e organização administrativa.',
    experience: [
      {
        duration: 'Janeiro 2021 - Dezembro 2021',
        title: 'Estagiário T.I',
        company: 'Secretaria Estadual da Saúde - SESA',
        description: 'Trabalhos em infraestrutura, design, programação e outras áreas.',
      },
      {
        duration: 'Janeiro 2022 - Outubro 2023',
        title: 'Técnico em Infraestrutura',
        company: 'Secretaria Estadual da Saúde - SESA',
        description: 'Técnico em hardware, software, estrutura de redes, racks, switches e infraestrutura em geral.',
      },
      {
        duration: 'Novembro 2023 - Março 2024',
        title: 'Auxiliar Administrativo II',
        company: 'Secretaria Estadual da Saúde - SESA',
        description: 'Atendimento ao público, digitação, planilhas, instalação de impressoras e organização de documentos.',
      },
      {
        duration: 'Junho 2024 - Maio 2025',
        title: 'Auxiliar de Serviços Gerais II',
        company: 'Petz VTRA-ES, Vitória',
        description: 'Atendimento ao público, organização de produtos e gestão de estoque na área da doca.',
      },
    ],
    education: [
      {
        level: 'Ensino Médio completo',
      },
      {
        level: 'Ensino Superior incompleto em Análise e Desenvolvimento de Sistemas',
      },
    ],
    // Categorizing skills
    skillCategories: {
      'Todas': [
        { name: 'Infraestrutura', level: 'Especialista', icon: 'ServerIcon' },
        { name: 'Manutenção - Estruturas de Rede', level: 'Avançado', icon: 'NetworkIcon' },
        { name: 'Configuração/Instalação de Switch', level: 'Avançado', icon: 'SettingsIcon' },
        { name: 'Hardware', level: 'Avançado', icon: 'CpuIcon' },
        { name: 'Openshift Red Hat', level: 'Especialista', icon: 'CloudIcon' },
        { name: 'Instalação de Máquinas', level: 'Avançado', icon: 'HardDriveIcon' },
        { name: 'Instalação - Estruturas de Rede', level: 'Especialista', icon: 'NetworkIcon' },
        { name: 'Excel', level: 'Avançado', icon: 'TableIcon' },
        { name: 'Adobe Premiere', level: 'Especialista', icon: 'FilmIcon' },
        { name: 'Organização de Documentos', level: 'Avançado', icon: 'FolderIcon' },
        { name: 'Atendimento de Caixa', level: 'Avançado', icon: 'CreditCardIcon' },
        { name: 'Suporte ao Usuário', level: 'Especialista', icon: 'LifeBuoyIcon' },
        { name: 'Adobe Photoshop', level: 'Avançado', icon: 'PaletteIcon' },
        { name: 'Processos Seletivos', level: 'Avançado', icon: 'UsersIcon' },
        { name: 'Organização de Estoque', level: 'Avançado', icon: 'BoxIcon' },
        { name: 'Atendimento Remoto', level: 'Avançado', icon: 'MonitorIcon' },
        { name: 'Word', level: 'Avançado', icon: 'FileTextIcon' },
        { name: 'Manutenção de Computadores', level: 'Especialista', icon: 'LaptopIcon' },
        { name: 'Atendimento ao Público', level: 'Avançado', icon: 'HandshakeIcon' },
        { name: 'FL Studio', level: 'Especialista', icon: 'MusicIcon' },
        { name: 'Gerenciamento de Estoque', level: 'Avançado', icon: 'BoxIcon' }, // New skill
        { name: 'Organização de Setor', level: 'Avançado', icon: 'FolderIcon' }, // New skill
        { name: 'Alinhamento de Produtos', level: 'Avançado', icon: 'LayoutGridIcon' }, // New skill
        { name: 'Carga e Descarga', level: 'Intermediário', icon: 'TruckIcon' }, // New skill
        { name: 'Organização de Doca', level: 'Avançado', icon: 'WarehouseIcon' }, // New skill
        { name: 'Abertura & Fechamento de Loja', level: 'Avançado', icon: 'KeyRoundIcon' }, // New skill
      ],
      'TI & Redes': [
        { name: 'Infraestrutura', level: 'Especialista', icon: 'ServerIcon' },
        { name: 'Manutenção - Estruturas de Rede', level: 'Avançado', icon: 'NetworkIcon' },
        { name: 'Configuração/Instalação de Switch', level: 'Avançado', icon: 'SettingsIcon' },
        { name: 'Hardware', level: 'Avançado', icon: 'CpuIcon' },
        { name: 'Openshift Red Hat', level: 'Especialista', icon: 'CloudIcon' },
        { name: 'Instalação de Máquinas', level: 'Avançado', icon: 'HardDriveIcon' },
        { name: 'Instalação - Estruturas de Rede', level: 'Especialista', icon: 'NetworkIcon' },
        { name: 'Manutenção de Computadores', level: 'Especialista', icon: 'LaptopIcon' },
      ],
      'Administrativo': [
        { name: 'Excel', level: 'Avançado', icon: 'TableIcon' },
        { name: 'Organização de Documentos', level: 'Avançado', icon: 'FolderIcon' },
        { name: 'Word', level: 'Avançado', icon: 'FileTextIcon' },
        { name: 'Processos Seletivos', level: 'Avançado', icon: 'UsersIcon' },
        { name: 'Organização de Estoque', level: 'Avançado', icon: 'BoxIcon' },
        { name: 'Gerenciamento de Estoque', level: 'Avançado', icon: 'BoxIcon' }, // New skill
        { name: 'Organização de Setor', level: 'Avançado', icon: 'FolderIcon' }, // New skill
        { name: 'Alinhamento de Produtos', level: 'Avançado', icon: 'LayoutGridIcon' }, // New skill
        { name: 'Carga e Descarga', level: 'Intermediário', icon: 'TruckIcon' }, // New skill
        { name: 'Organização de Doca', level: 'Avançado', icon: 'WarehouseIcon' }, // New skill
        { name: 'Abertura & Fechamento de Loja', level: 'Avançado', icon: 'KeyRoundIcon' }, // New skill
      ],
      'Atendimento & Suporte': [
        { name: 'Atendimento de Caixa', level: 'Avançado', icon: 'CreditCardIcon' },
        { name: 'Suporte ao Usuário', level: 'Especialista', icon: 'LifeBuoyIcon' },
        { name: 'Atendimento Remoto', level: 'Avançado', icon: 'MonitorIcon' },
        { name: 'Atendimento ao Público', level: 'Avançado', icon: 'HandshakeIcon' },
      ],
      'Design & Mídia': [
        { name: 'Adobe Premiere', level: 'Especialista', icon: 'FilmIcon' },
        { name: 'Adobe Photoshop', level: 'Avançado', icon: 'PaletteIcon' },
        { name: 'FL Studio', level: 'Especialista', icon: 'MusicIcon' },
      ],
    },
  };

  const coursesData = [
    {
      id: 'redhat-containers-kubernetes',
      title: 'Red Hat OpenShift I: Containers & Kubernetes (DO180)',
      institution: 'Red Hat',
      date: '16 de Fevereiro de 2022',
      hours: '24 Horas',
      pdf: 'https://drive.google.com/file/d/16OIR6YeMyu0Imtn6B7PbGJtMP5-dRzHV/preview',
      description: 'Certificado de atendimento do curso Red Hat OpenShift I, focado em Contêineres e Kubernetes.',
      icon: 'CloudIcon', // Icon for Red Hat courses
    },
    {
      id: 'redhat-administration-kubernetes',
      title: 'Red Hat OpenShift Administration II: Operating a Production Kubernetes Cluster (DO280)',
      institution: 'Red Hat',
      date: '7 de Março de 2022',
      hours: '24 Horas',
      pdf: 'https://drive.google.com/file/d/1pkvE_eXASBAOogt4GSgZXEuPa4v3jM6c/preview',
      description: 'Certificado de atendimento do curso Red Hat OpenShift Administration II, sobre Operação de Clusters Kubernetes em Produção.',
      icon: 'CloudIcon', // Icon for Red Hat courses
    },
    {
      id: 'unasus-integracao-rede-nacional',
      title: 'Integração com a Rede Nacional de Dados em Saúde',
      institution: 'Universidade Federal de Goiás (UFG) via UNA-SUS',
      date: '14/04/2021',
      hours: '30 Horas',
      pdf: 'https://drive.google.com/file/d/1OBoVZGYNheJJjLE-PulqxR3pXz-kyMTg/preview',
      description: 'Curso de qualificação profissional com foco na integração de dados na área da saúde.',
      icon: 'FileTextIcon', // Icon for UNA-SUS (document/health)
    },
    {
      id: 'senai-tecnologia-informacao-comunicacao',
      title: 'Iniciação Profissional em Tecnologia da Informação e Comunicação',
      institution: 'SENAI',
      date: '24 de agosto de 2022',
      hours: '14 Horas',
      pdf: 'https://drive.google.com/file/d/1B2iqfXop6Iq2aj-gYtcFiLl1K9YAdBXQ/preview',
      description: 'Certificado de iniciação profissional em T.I. e comunicação.',
      icon: 'LaptopIcon', // Icon for SENAI (Technology/IT)
    },
    {
      id: 'fundacao-bradesco-java-basico',
      title: 'Linguagem de Programação Java - Básico',
      institution: 'Fundação Bradesco - Escola Virtual',
      date: '26.08.2022',
      hours: '5 Horas',
      pdf: 'https://drive.google.com/file/d/1gysmud8Ql1RTLnqKX87hLJcgP8d--2Ht/preview',
      description: 'Curso básico de linguagem de programação Java.',
      icon: 'BookOpenIcon', // Icon for Fundação Bradesco (Education)
    },
    {
      id: 'senai-logica-programacao',
      title: 'Lógica de Programação',
      institution: 'SENAI',
      date: '25 de agosto de 2022',
      hours: '14 Horas',
      pdf: 'https://drive.google.com/file/d/1B5o-JMH1MIOLGwLJxw93XwHQVFjDnNnj/preview', // UPDATED DRIVE LINK
      description: 'Certificado de iniciação profissional em Lógica de Programação.',
      icon: 'LaptopIcon', // Icon for SENAI (Programming)
    },
  ];

  const currentCourse = coursesData[currentCourseIndex];
  const CurrentCourseIcon = IconComponents[currentCourse.icon];


  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
          }
          .resume-section-title {
            font-weight: 600; /* Semi-bold for titles */
            color: #E0E0E0; /* Light gray for section titles */
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(112, 112, 112, 0.5); /* Medium gray border */
            margin-bottom: 1.5rem;
          }
          .icon-spacing {
            margin-right: 0.5rem;
          }
          @media print {
            .no-print {
              display: none;
            }
          }
        `}
      </style>
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 lg:p-10">
        {/* PDF Download Button - visible only on screen, not on print */}
        <div className="flex justify-end mb-6 no-print">
          <button
            onClick={handleDownloadPdfComplete}
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:bg-gray-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
          >
            Baixar PDF
          </button>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={resumeData.personalInfo.profilePicture}
            alt="Caio Ribeiro"
            className="w-32 h-32 rounded-full border-4 border-gray-600 shadow-lg object-cover"
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop if fallback fails
              e.target.src = 'https://placehold.co/128x128/333333/FFFFFF?text=CR'; // Placeholder image
            }}
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-6 sm:mb-8">{resumeData.personalInfo.display_name}</h1>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl resume-section-title flex items-center">
            <UserIcon /> Resumo Profissional
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            {resumeData.summary}
          </p>
        </section>

        {/* Personal Information */}
        <section className="mb-8">
          <h2 className="text-2xl resume-section-title flex items-center">
            <UserIcon /> Informações Pessoais
          </h2>
          <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
            <li><UserIcon /> <strong className="text-white">Nome:</strong> {resumeData.personalInfo.name}</li>
            <li><MailIcon /> <strong className="text-white">Email:</strong> {resumeData.personalInfo.email}</li>
            <li><PhoneIcon /> <strong className="text-white">Telefone:</strong> {resumeData.personalInfo.phone}</li>
            <li><HomeIcon /> <strong className="text-white">Endereço:</strong> {resumeData.personalInfo.address}</li>
          </ul>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-2xl resume-section-title flex items-center">
            <BriefcaseIcon /> Experiência Profissional
          </h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-6 last:mb-0 p-4 bg-gray-700 rounded-md shadow-inner">
              <h3 className="text-xl font-semibold text-white">{job.title}</h3>
              <p className="text-gray-400 text-sm italic">{job.company} - {job.duration}</p>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">{job.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl resume-section-title flex items-center">
            <BookOpenIcon /> Educação
          </h2>
          <ul className="text-gray-300 space-y-2 text-sm sm:text-base">
            {resumeData.education.map((edu, index) => (
              <li key={index} className="p-2 bg-gray-700 rounded-md shadow-inner"><BookOpenIcon />{edu.level}</li>
            ))}
          </ul>
        </section>

        {/* Skills by Category */}
        <section className="mb-8">
          <h2 className="text-2xl resume-section-title flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"></path>
            </svg>
            Habilidades
          </h2>
          <div className="flex flex-wrap gap-2 mb-6 no-print">
            {Object.keys(resumeData.skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition duration-300 ease-in-out
                  ${activeCategory === category
                    ? 'bg-gray-600 text-white shadow-md' // Darker gray for active button
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
            {resumeData.skillCategories[activeCategory].map((skill, index) => {
              const IconComponent = IconComponents[skill.icon];
              return (
                <div key={index} className="flex items-center bg-gray-700 p-3 rounded-md shadow-inner">
                  {IconComponent && <IconComponent />}
                  <span className="font-medium text-white">{skill.name}:</span>
                  <span className="ml-2 text-gray-300">{skill.level}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Courses - PDF Carousel */}
        <section>
          <h2 className="text-2xl resume-section-title flex items-center">
            <AwardIcon /> Cursos e Certificados
          </h2>
          {coursesData.length > 0 ? (
            <div className="relative bg-gray-700 rounded-lg shadow-md p-6 border border-gray-600">
              {currentCourse && (
                <>
                  {/* Icon in top-left corner - increased size and margin */}
                  <div className="absolute top-4 left-4 text-white" style={{ fontSize: '2.5rem' }}>
                    {CurrentCourseIcon && <CurrentCourseIcon />}
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-2 text-center">
                    {currentCourse.title}
                  </h3>
                  <p className="text-gray-300 italic mb-1 text-center">{currentCourse.institution} - {currentCourse.date}</p>
                  <p className="text-gray-400 text-sm mb-4 text-center">{currentCourse.hours}</p>
                  <p className="text-gray-300 leading-relaxed mb-4 text-center">{currentCourse.description}</p>

                  {/* Button to toggle PDF visibility */}
                  <div className="flex justify-center mb-4 no-print">
                    <button
                      onClick={togglePdfVisibility}
                      className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md shadow-lg hover:bg-gray-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
                    >
                      {showPdfInCarousel ? 'Ocultar Certificado' : 'Visualizar Certificado'}
                    </button>
                  </div>

                  {/* PDF Viewer (conditional) */}
                  {showPdfInCarousel && currentCourse.pdf && (
                    <div className="mt-4 flex justify-center w-full" style={{ height: '500px' }}>
                      <iframe
                        src={currentCourse.pdf}
                        title={`Certificado de ${currentCourse.title}`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="rounded-md shadow-md"
                        allowFullScreen
                        sandbox="allow-scripts allow-same-origin allow-presentation"
                      >
                        <p className="text-red-400">Seu navegador não suporta iframes, ou o PDF não pode ser carregado.</p>
                      </iframe>
                    </div>
                  )}
                </>
              )}
              {/* Carousel Navigation Buttons */}
              <button
                onClick={goToPreviousCourse}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-500 transition duration-300 no-print"
                aria-label="Curso Anterior"
              >
                &#10094; {/* Left arrow */}
              </button>
              <button
                onClick={goToNextCourse}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-500 transition duration-300 no-print"
                aria-label="Próximo Curso"
              >
                &#10095; {/* Right arrow */}
              </button>
              {/* Page counter */}
              <p className="text-center text-gray-400 mt-4 text-sm no-print">
                Curso {currentCourseIndex + 1} de {coursesData.length}
              </p>
            </div>
          ) : (
            <p className="text-gray-300 text-center">Nenhum curso adicionado ainda.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default App;
