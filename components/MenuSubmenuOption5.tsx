'use client';

import { useState } from 'react';
import { ChevronDown, X, Menu } from 'lucide-react';

type MenuItem = {
  title: string;
  href: string;
  submenu?: { title: string; href: string }[];
};

const menuData: {
  mainLinks: { title: string; href: string }[];
  services: MenuItem[];
  otherLinks: { title: string; href: string }[];
} = {
  mainLinks: [
    { title: 'HOME', href: '/' },
    { title: 'MEET THE TEAM', href: '/meet-the-team' },
  ],
  services: [
    { title: 'Dental Cleaning and Exams', href: '/services/cleaning-exams' },
    { title: 'Dental Emergencies', href: '/services/emergencies' },
    { title: 'Tooth Extractions', href: '/services/extractions' },
    { title: 'Wisdom Teeth Removal', href: '/services/wisdom-teeth' },
    { 
      title: 'Dental Implants', 
      href: '/services/implants',
      submenu: [
        { title: 'All on 4 Dental Implants', href: '/services/all-on-4' },
        { title: 'Implant Retained Dentures', href: '/services/implant-dentures' },
        { title: 'Dentures', href: '/services/dentures' },
      ]
    },
    { title: 'Crowns', href: '/services/crowns' },
    { title: 'Dental Bridges', href: '/services/bridges' },
    { title: 'Periodontal Care and Treatment', href: '/services/periodontal' },
    { title: 'Sedation Dentistry', href: '/services/sedation' },
    { title: 'Smile Makeover', href: '/services/smile-makeover' },
    { title: 'Invisalign', href: '/services/invisalign' },
    { title: 'Cosmetic Bonding', href: '/services/bonding' },
    { title: 'Teeth Whitening', href: '/services/whitening' },
    { title: 'Veneers', href: '/services/veneers' },
    { title: 'Nightguards', href: '/services/nightguards' },
  ],
  otherLinks: [
    { title: 'NEW PATIENT INFO', href: '/new-patient' },
    { title: 'DENTAL MEMBERSHIP CLUB', href: '/membership' },
    { title: 'ARTICLES', href: '/articles' },
    { title: 'CONTACT US', href: '/contact' },
  ],
};

export default function MenuSubmenuOption5() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="w-full bg-white" style={{ borderBottom: '1px solid #e5e7eb' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-center h-16 space-x-8">
          {menuData.mainLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-semibold tracking-wide transition-colors"
              style={{ color: 'rgb(55, 68, 109)' }}
            >
              {link.title}
            </a>
          ))}
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button 
              className="flex items-center text-sm font-semibold tracking-wide transition-colors"
              style={{ color: 'rgb(55, 68, 109)' }}
            >
              SERVICES
              <ChevronDown className="ml-1 w-3 h-3" style={{ strokeWidth: 3 }} />
            </button>
            
            {/* Submenu Option 5: Simple Two-Column Clean - Modern & Minimal */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-[520px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white rounded-lg shadow-2xl border border-gray-100 py-6 px-8 mt-2">
                <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                  {menuData.services.map((item) => (
                    <div key={item.title}>
                      <a
                        href={item.href}
                        className="block py-2 transition-colors hover:opacity-60"
                        style={{ color: 'rgb(55, 68, 109)', fontWeight: 400 }}
                      >
                        <span className="text-sm">{item.title}</span>
                      </a>
                      {item.submenu && (
                        <ul className="ml-3 mt-1 space-y-1">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.title}>
                              <a
                                href={subitem.href}
                                className="block text-xs py-0.5 transition-colors hover:opacity-60"
                                style={{ color: 'rgb(55, 68, 109)', opacity: 0.6, fontWeight: 400 }}
                              >
                                {subitem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {menuData.otherLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-semibold tracking-wide transition-colors"
              style={{ color: 'rgb(55, 68, 109)' }}
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between h-16">
            <span className="text-lg font-bold" style={{ color: 'rgb(55, 68, 109)' }}>Pennington Dental</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: 'rgb(55, 68, 109)' }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isOpen && (
            <div className="pb-4">
              {menuData.mainLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block py-3 text-sm font-semibold tracking-wide"
                  style={{ color: 'rgb(55, 68, 109)' }}
                >
                  {link.title}
                </a>
              ))}

              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-sm font-semibold tracking-wide"
                  style={{ color: 'rgb(55, 68, 109)' }}
                >
                  SERVICES
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 py-3">
                    <ul className="space-y-2">
                      {menuData.services.map((item) => (
                        <li key={item.title}>
                          <a
                            href={item.href}
                            className="block text-sm py-2"
                            style={{ color: 'rgb(55, 68, 109)', opacity: 0.8, fontWeight: 400 }}
                          >
                            {item.title}
                          </a>
                          {item.submenu && (
                            <ul className="ml-4 mt-1 space-y-1">
                              {item.submenu.map((subitem) => (
                                <li key={subitem.title}>
                                  <a
                                    href={subitem.href}
                                    className="block text-xs py-1"
                                    style={{ color: 'rgb(55, 68, 109)', opacity: 0.6, fontWeight: 400 }}
                                  >
                                    {subitem.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {menuData.otherLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block py-3 text-sm font-semibold tracking-wide"
                  style={{ color: 'rgb(55, 68, 109)' }}
                >
                  {link.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
