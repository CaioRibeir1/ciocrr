import React, { useState, useEffect, useRef } from 'react';

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
    // Corrected PhoneIcon: Removed duplicate strokeLinecap
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

  // New Copy Icon
  const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
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
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 = 0 1 2 2z"></path>
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 = 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
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
      <path d="M18.84 9.24A6.5 6.5 0 0 0 12 3a6.5 6.5 0 0 0-6.84 6.24A4.5 4.5 0 0 0 3 13.5C3 15.43 4.57 17 6.5 = 17h11A4.5 4.5 0 0 0 22 12.5C22 10.57 20.43 9 18.5 9z"></path>
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
    CopyIcon, // Added CopyIcon to the map
    ServerIcon, TableIcon, FilmIcon, FolderIcon, CreditCardIcon, NetworkIcon,
    SettingsIcon, LifeBuoyIcon, CpuIcon, PaletteIcon, UsersIcon, BoxIcon,
    MonitorIcon, FileTextIcon, LaptopIcon, HandshakeIcon, CloudIcon, HardDriveIcon,
    MusicIcon, TruckIcon, WarehouseIcon, KeyRoundIcon, LayoutGridIcon,
  };

  // State variables for the component
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [showPdfInCarousel, setShowPdfInCarousel] = useState(false);
  const [isAnimatingCarousel, setIsAnimatingCarousel] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');

  // Ref for Tone.js synth
  const synthRef = useRef(null);
  const audioContextReady = useRef(false);

  // Notes for sound variation
  const notes = ['C5', 'E5', 'G5'];

  // Load Tone.js dynamically and initialize synth
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js'; // Tone.js CDN
    script.async = true;
    script.onload = () => {
      // Ensure Tone.js is loaded before trying to use it
      if (window.Tone) {
        synthRef.current = new window.Tone.Synth({
          oscillator: {
            type: 'square' // For a classic 8-bit sound
          },
          envelope: {
            attack: 0.001,
            decay: 0.1,
            sustain: 0.01,
            release: 0.1
          },
          volume: -10 // Reduced volume (in dB) even further
        }).toDestination();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Clean up on component unmount
      if (synthRef.current) {
        synthRef.current.dispose();
      }
      document.body.removeChild(script);
    };
  }, []);

  // Function to play sound on button click
  const playSound = () => {
    // Start Tone.js context on first user interaction
    if (window.Tone && !audioContextReady.current) {
      window.Tone.start();
      audioContextReady.current = true;
    }

    if (synthRef.current) {
      const randomNote = notes[Math.floor(Math.random() * notes.length)];
      synthRef.current.triggerAttackRelease(randomNote, '8n'); // Play a random note for an 8th note duration
    }
  };

  // Handler for the full resume PDF download button
  const handleDownloadPdfComplete = () => {
    playSound(); // Play sound on click
    window.print();
  };

  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    playSound(); // Play sound on click
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // Optionally, provide user feedback (e.g., a small temporary message)
    alert('Copiado para a área de transferência!'); // Changed alert to a simple message
  };

  // Carousel navigation functions
  const goToPreviousCourse = () => {
    playSound(); // Play sound on click
    setIsAnimatingCarousel(true);
    setSlideDirection('prev');
    setTimeout(() => {
      setCurrentCourseIndex((prevIndex) =>
        prevIndex === 0 ? coursesData.length - 1 : prevIndex - 1
      );
      setIsAnimatingCarousel(false);
    }, 300); // Match CSS transition duration
  };

  const goToNextCourse = () => {
    playSound(); // Play sound on click
    setIsAnimatingCarousel(true);
    setSlideDirection('next');
    setTimeout(() => {
      setCurrentCourseIndex((prevIndex) =>
        prevIndex === coursesData.length - 1 ? 0 : prevIndex + 1
      );
      setIsAnimatingCarousel(false);
    }, 300); // Match CSS transition duration
  };

  // Toggle PDF visibility in carousel
  const togglePdfVisibility = () => {
    playSound(); // Play sound on click
    setShowPdfInCarousel(!showPdfInCarousel);
  };

  // Function to handle skill category button click
  const handleSkillCategoryClick = (category) => {
    playSound(); // Play sound on click
    setActiveCategory(category);
  };


  const resumeData = {
    personalInfo: {
      name: 'Caio José Maria Henriques Ribeiro', // Full name for personal info
      display_name: 'Caio Ribeiro', // Shorter name for the header
      email: 'caioj.m.h.r@gmail.com',
      phone: '+55 27 99716-3172', // Updated phone number
      address: 'Rua João José de Souza, 61, 29047-312',
      profilePicture: 'https://github.com/CaioRibeir1/ciocrr/raw/refs/heads/main/src/perfil', // Updated profile picture URL
    },
    summary: 'Profissional de TI versátil e proativo, com experiência consolidada em infraestrutura, design e programação. Possuo um histórico comprovado em suporte técnico de hardware e software, gerenciamento eficiente de redes, e expertise em atendimento ao público, combinada com sólida organização administrativa. Busco aplicar minhas habilidades multifacetadas para otimizar processos e impulsionar resultados em um ambiente desafiador.',
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
        level: 'Ensino Médio completo - EEM Irmã Maria Horta',
      },
      {
        level: 'Análise e Desenvolvimento de Sistemas - Incompleto',
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
    <div className="relative min-h-screen font-inter flex flex-col items-center justify-center overflow-hidden">
      {/* Imagem de Fundo Borrada */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://github.com/CaioRibeir1/ciocrr/blob/main/backgroundsite.png?raw=true")', // URL da imagem de fundo
          filter: 'blur(8px)', // Ajuste o valor para mais ou menos desfoque
          WebkitFilter: 'blur(8px)', // Para compatibilidade com navegadores Webkit (Chrome, Safari)
          zIndex: -2, // Abaixo do overlay e do conteúdo principal
          transform: 'scale(1.05)', // Pequeno zoom para evitar bordas brancas após o blur
        }}
      ></div>

      {/* Overlay para suavizar o fundo e melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-indigo-950 opacity-50 z-[-1]"></div> {/* Opacidade ajustada para 50% para escurecer em no máximo 10% */}

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Press+Start+2P&family=Orbitron:wght@400;500;600;700;800;900&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            margin: 0; /* Garante que não haja margens extras no body */
          }
          .resume-section-title {
            font-weight: 600; /* Semi-bold for titles */
            color: #E0E0E0; /* Light gray for section titles */
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(100, 50, 150, 0.5); /* Tom de roxo mais claro para a borda do título */
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

          /* Keyframes para a animação de slide/fade do carrossel */
          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideOutToLeft {
            from {
              opacity: 1;
              transform: translateX(0);
            }
            to {
              opacity: 0;
              transform: translateX(-100%);
            }
          }

          @keyframes slideInFromLeft {
            from {
              opacity: 0;
              transform: translateX(-100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideOutToRight {
            from {
              opacity: 1;
              transform: translateX(0);
            }
            to {
              opacity: 0;
              transform: translateX(100%);
            }
          }

          .carousel-slide-enter-active {
            animation: slideInFromRight 0.3s forwards ease-out; /* Duração ajustada para mais fluidez */
          }

          .carousel-slide-exit-active {
            animation: slideOutToLeft 0.3s forwards ease-out; /* Duração ajustada para mais fluidez */
          }

          .carousel-slide-prev-enter-active {
            animation: slideInFromLeft 0.3s forwards ease-out; /* Duração ajustada para mais fluidez */
          }

          .carousel-slide-prev-exit-active {
            animation: slideOutToRight 0.3s forwards ease-out; /* Duração ajustada para mais fluidez */
          }

          /* Animação para o visualizador de PDF (transição de altura e opacidade) */
          .pdf-viewer-transition {
            transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
          }
          .pdf-viewer-hidden {
            max-height: 0;
            opacity: 0;
            overflow: hidden; /* Oculta conteúdo que ultrapassa durante o colapso */
          }
          .pdf-viewer-visible {
            max-height: 500px; /* Altura máxima para o PDF */
            opacity: 1;
            overflow: visible; /* Permite que o conteúdo seja visível */
          }

          .pixel-font {
            font-family: 'Press Start 2P', cursive;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4); /* Sombra sutil */
          }

          .gamified-title-font {
            font-family: 'Orbitron', sans-serif;
            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6); /* Sombra mais destacada */
            font-weight: 700; /* Pode ser ajustado conforme a necessidade, 700 é bold */
          }

          .pixel-button {
            position: relative;
            border: none;
            background-color: #facc15; /* yellow-500 */
            color: black;
            font-weight: bold;
            padding: 0.75rem 1.5rem; /* px-4 py-2 */
            border-radius: 0.25rem; /* rounded-md */
            box-shadow:
              2px 2px 0px 0px black,    /* Bottom-right shadow (black border effect) */
              -2px -2px 0px 0px rgba(255,255,255,0.5); /* Top-left highlight (lighter pixel effect) */
            transition: transform 0.1s ease-out, box-shadow 0.1s ease-out; /* Smooth transition for interaction */
          }

          .pixel-button:hover {
            transform: scale(1.05); /* Slight scale on hover */
          }

          .pixel-button:active {
            transform: translate(2px, 2px); /* Simulates pressing the button down */
            box-shadow:
              0px 0px 0px 0px black,   /* Remove bottom-right shadow */
              0px 0px 0px 0px rgba(255,255,255,0.5), /* Remove top-left highlight */
              inset 2px 2px 0px 0px rgba(0,0,0,0.5); /* Inner shadow for pressed effect */
          }

          @keyframes pixel-pulse {
            0% {
              box-shadow: 4px 4px 0px 0px black, -4px -4px 0px 0px rgba(255,255,255,0.5);
            }
            50% {
              box-shadow: 4px 4px 0px 0px black, -4px -4px 0px 0px rgba(255,255,255,0.8), 0 0 10px rgba(168, 85, 247, 0.7); /* Purple glow */
            }
            100% {
              box-shadow: 4px 4px 0px 0px black, -4px -4px 0px 0px rgba(255,255,255,0.5);
            }
          }

          .eight-bit-frame {
            box-shadow: 4px 4px 0px 0px black, -4px -4px 0px 0px rgba(255,255,255,0.5);
            border-radius: 8px; /* Slight rounding for the pixel art block itself */
            animation: pixel-pulse 2s infinite alternate; /* Apply animation */
          }

          /* New styles for gray gradient arrows */
          .gray-gradient-arrow {
            background: linear-gradient(145deg, #a0a0a0, #606060); /* Medium to dark gray gradient */
            color: white; /* White arrow color for contrast */
          }
          .gray-gradient-arrow:hover {
            background: linear-gradient(145deg, #b0b0b0, #707070); /* Slightly lighter on hover */
          }
          .gray-gradient-arrow:active {
            background: linear-gradient(145deg, #707070, #404040); /* Darker on active */
          }
        `}
      </style>
      {/* Conteúdo Principal do Currículo */}
      <div className="relative w-full max-w-4xl bg-indigo-900 border-4 border-purple-500 eight-bit-frame p-6 sm:p-8 lg:p-10 z-10"> {/* Fundo do currículo em índigo escuro, com borda 8-bit e animação */}
        {/* PDF Download Button - visible only on screen, not on print */}
        <div className="flex justify-end mb-6 no-print">
          <button
            onClick={handleDownloadPdfComplete}
            className="pixel-button"
          >
            Baixar PDF
          </button>
        </div>

        {/* Profile Picture with 8-bit Frame and Hover Animation */}
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32 border-4 border-purple-500 eight-bit-frame">
            <img
              src={resumeData.personalInfo.profilePicture}
              alt="Caio Ribeiro"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105" // Image now fills the square container and has hover
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop if fallback fails
                e.target.src = 'https://placehold.co/128x128/333333/FFFFFF?text=CR'; // Placeholder image
              }}
            />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-6 sm:mb-8">{resumeData.personalInfo.display_name}</h1>

        {/* Personal Information */}
        <section className="mb-8">
          <h2 className="text-2xl resume-section-title flex items-center pixel-font"> {/* Aplicando a nova fonte e sombra aqui */}
            <UserIcon /> Informações Pessoais
          </h2>
          <ul className="text-indigo-200 space-y-2 text-sm sm:text-base">
            <li><UserIcon /> <strong className="text-white">Nome:</strong> {resumeData.personalInfo.name}</li>
            <li><HomeIcon /> <strong className="text-white">Endereço:</strong> {resumeData.personalInfo.address}</li> {/* Endereço movido */}
            <li className="flex items-center">
              <MailIcon /> <strong className="text-white">Email:</strong> {resumeData.personalInfo.email}
              <a
                href={`mailto:${resumeData.personalInfo.email}`}
                onClick={playSound} // Play sound on click
                className="ml-3 bg-yellow-500 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm hover:bg-yellow-400 transition duration-300 ease-in-out flex items-center"
                aria-label="Enviar E-mail"
              >
                <MailIcon className="mr-1" /> Enviar E-mail
              </a>
            </li>
            <li className="flex items-center">
              <PhoneIcon /> <strong className="text-white">Telefone:</strong> {resumeData.personalInfo.phone}
              <button
                onClick={() => copyToClipboard(resumeData.personalInfo.phone)}
                className="ml-3 bg-yellow-500 text-black px-2 py-1 rounded-md text-xs font-bold shadow-sm hover:bg-yellow-400 transition duration-300 ease-in-out flex items-center"
                aria-label="Copiar Telefone"
              >
                <CopyIcon className="mr-1" /> Copiar Telefone
              </button>
            </li>
          </ul>
        </section>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl resume-section-title flex items-center pixel-font"> {/* Aplicando a nova fonte e sombra aqui */}
            <UserIcon /> Resumo Profissional
          </h2>
          <p className="text-indigo-200 leading-relaxed text-sm sm:text-base font-bold">
            {resumeData.summary}
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-2xl resume-section-title flex items-center pixel-font"> {/* Aplicando a nova fonte e sombra aqui */}
            <BriefcaseIcon /> Experiência Profissional
          </h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-6 last:mb-0 p-4 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-md shadow-lg shadow-purple-600/20 border-2 border-black transition-transform duration-300 ease-in-out hover:scale-105">
              <h3 className="text-xl font-semibold text-black gamified-title-font">{job.title}</h3> {/* Aplicado gamified-title-font aqui */}
              <p className="text-yellow-800 text-sm italic">{job.company} - {job.duration}</p>
              <p className="text-yellow-900 mt-2 text-sm sm:text-base">{job.description}</p>
            </div>
          ))}
        </section>

        {/* Courses - PDF Carousel */}
        <section className="mb-8">
          <h2 className="text-2xl resume-section-title flex items-center pixel-font"> {/* Aplicando a nova fonte e sombra aqui */}
            <AwardIcon /> Cursos e Certificados
          </h2>
          {coursesData.length > 0 ? (
            <div className="relative bg-indigo-800 rounded-lg shadow-md p-6 border border-indigo-700 overflow-hidden">
              {currentCourse && (
                <div key={currentCourse.id} className={`
                  ${isAnimatingCarousel
                    ? (slideDirection === 'next' ? 'carousel-slide-exit-active' : 'carousel-slide-prev-exit-active')
                    : (slideDirection === 'next' ? 'carousel-slide-enter-active' : 'carousel-slide-prev-enter-active')
                  }
                `}>
                  {/* Conteúdo principal do curso (onde as setas se centralizarão) */}
                  <div className="relative"> {/* Este div é o novo wrapper para o conteúdo do curso e as setas */}
                    {/* Removido o Icon para cada curso individualmente. O ícone principal da seção permanece. */}
                    <h3 className="text-3xl font-semibold text-white mb-2 text-center gamified-title-font"> {/* Aplicado gamified-title-font aqui */}
                      {currentCourse.title}
                    </h3>
                    <p className="text-indigo-300 italic mb-1 text-center">{currentCourse.institution} - {currentCourse.date}</p>
                    <p className="text-indigo-400 text-sm mb-4 text-center">{currentCourse.hours}</p>
                    <p className="text-indigo-200 leading-relaxed mb-4 text-center">{currentCourse.description}</p>

                    {/* Button to toggle PDF visibility */}
                    <div className="flex justify-center mb-4 no-print">
                      <button
                        onClick={togglePdfVisibility}
                        className="pixel-button"
                      >
                        {showPdfInCarousel ? 'Ocultar Certificado' : 'Visualizar Certificado'}
                      </button>
                    </div>

                    {/* Carousel Navigation Buttons - Agora posicionados absolutamente dentro deste wrapper interno */}
                    <button
                      onClick={goToPreviousCourse}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-xl shadow-purple-600/50 border-2 border-black transition-all duration-150 ease-in-out hover:scale-110 active:scale-95 no-print gray-gradient-arrow"
                      aria-label="Curso Anterior"
                    >
                      &#10094; {/* Left arrow */}
                    </button>
                    <button
                      onClick={goToNextCourse}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-xl shadow-purple-600/50 border-2 border-black transition-all duration-150 ease-in-out hover:scale-110 active:scale-95 no-print gray-gradient-arrow"
                      aria-label="Próximo Curso"
                    >
                      &#10095; {/* Right arrow */}
                    </button>
                  </div> {/* Fim do course-content-wrapper */}

                  {/* PDF Viewer (conditional rendering changed to class-based for animation) */}
                  <div className={`mt-4 flex justify-center w-full pdf-viewer-transition
                    ${showPdfInCarousel ? 'pdf-viewer-visible' : 'pdf-viewer-hidden'}`}
                  >
                    <iframe
                      src={currentCourse.pdf}
                      title={`Certificado de ${currentCourse.title}`}
                      width="100%"
                      height="500px" // Fixed height for the iframe content
                      frameBorder="0"
                      className="rounded-md shadow-md"
                      allowFullScreen
                      sandbox="allow-scripts allow-same-origin allow-presentation"
                    >
                      <p className="text-pink-300">Seu navegador não suporta iframes, ou o PDF não pode ser carregado.</p>
                    </iframe>
                  </div>
                </div>
              )}
              {/* Page counter (ainda dentro do container principal da seção de cursos) */}
              <p className="text-center text-indigo-400 mt-4 text-sm no-print">
                Curso {currentCourseIndex + 1} de {coursesData.length}
              </p>
            </div>
          ) : (
            <p className="text-indigo-200 text-center">Nenhum curso adicionado ainda.</p>
          )}
        </section>

        {/* Education (AGORA ABAIXO DE CURSOS E CERTIFICADOS) */}
        <section className="mb-8">
          <h2 className="text-2xl resume-section-title flex items-center pixel-font"> {/* Aplicando a nova fonte e sombra aqui */}
            <BookOpenIcon /> Educação
          </h2>
          <ul className="text-indigo-200 space-y-2 text-sm sm:text-base">
            {resumeData.education.map((edu, index) => (
              <li key={index} className="p-2 bg-indigo-800 rounded-md shadow-inner">
                <span className="text-indigo-200 font-bold">{edu.level}</span> {/* Adicionado font-bold aqui */}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills by Category */}
        <section className="mb-8">
          <h2 className="text-2xl resume-section-title flex items-center pixel-font"> {/* Aplicando a nova fonte e sombra aqui */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"></path>
            </svg>
            Habilidades
          </h2>
          <div className="flex flex-wrap gap-2 mb-6 no-print">
            {Object.keys(resumeData.skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => handleSkillCategoryClick(category)} // Use new handler
                className={`px-4 py-2 rounded-full font-medium shadow-md shadow-purple-600/50 border-2 border-black transition-all duration-150 ease-in-out hover:scale-105 active:scale-95
                  ${activeCategory === category
                    ? 'bg-yellow-500 text-black' // Amarelo para botão ativo
                    : 'bg-yellow-600 text-black hover:bg-yellow-500' // Amarelo para botões inativos e hover
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
                <div key={index} className="flex items-center justify-between bg-gradient-to-r from-gray-200 to-gray-400 p-3 rounded-md shadow-inner"> {/* Fundo cinza claro degradê com animação */}
                  <div className="flex items-center">
                    {IconComponent && <IconComponent className="text-black" />} {/* Ícone preto */}
                    <span className="font-bold text-black">{skill.name}:</span> {/* Texto preto e negrito */}
                  </div>
                  <span className="ml-2 text-gray-700">{skill.level}</span> {/* Texto cinza escuro, alinhado à direita */}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;
