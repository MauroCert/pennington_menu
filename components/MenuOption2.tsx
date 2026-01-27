'use client';

import { useState } from 'react';
import { ChevronDown, X, Menu, ChevronRight } from 'lucide-react';

type MenuItem = {
  title: string;
  href: string;
  description?: string;
  submenu?: { title: string; href: string }[];
};

const menuData: {
  mainLinks: { title: string; href: string }[];
  services: {
    featured: MenuItem[];
    allServices: Record<string, MenuItem[]>;
  };
  otherLinks: { title: string; href: string }[];
} = {
  mainLinks: [
    { title: 'Home', href: '/' },
    { title: 'Meet The Team', href: '/meet-the-team' },
  ],
  services: {
    featured: [
      { 
        title: 'Dental Implants', 
        href: '/services/implants',
        description: 'Permanent tooth replacement solutions',
        submenu: [
          { title: 'All on 4 Dental Implants', href: '/services/all-on-4' },
          { title: 'Implant Retained Dentures', href: '/services/implant-dentures' },
          { title: 'Dentures', href: '/services/dentures' },
        ]
      },
      { 
        title: 'Smile Makeover', 
        href: '/services/smile-makeover',
        description: 'Complete smile transformation'
      },
      { 
        title: 'Invisalign', 
        href: '/services/invisalign',
        description: 'Clear aligner orthodontics'
      },
    ],
    allServices: {
      'Preventive Care': [
        { title: 'Dental Cleaning and Exams', href: '/services/cleaning-exams' },
        { title: 'Nightguards', href: '/services/nightguards' },
      ],
      'Emergency & Extractions': [
        { title: 'Dental Emergencies', href: '/services/emergencies' },
        { title: 'Tooth Extractions', href: '/services/extractions' },
        { title: 'Wisdom Teeth Removal', href: '/services/wisdom-teeth' },
      ],
      'Restorative Dentistry': [
        { title: 'Crowns', href: '/services/crowns' },
        { title: 'Dental Bridges', href: '/services/bridges' },
        { title: 'Periodontal Care', href: '/services/periodontal' },
      ],
      'Cosmetic Dentistry': [
        { title: 'Cosmetic Bonding', href: '/services/bonding' },
        { title: 'Teeth Whitening', href: '/services/whitening' },
        { title: 'Veneers', href: '/services/veneers' },
        { title: 'Sedation Dentistry', href: '/services/sedation' },
      ],
    },
  },
  otherLinks: [
    { title: 'New Patient Info', href: '/new-patient' },
    { title: 'Dental Membership Club', href: '/membership' },
    { title: 'Articles', href: '/articles' },
    { title: 'Contact Us', href: '/contact' },
  ],
};

export default function MenuOption2() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredImplant, setHoveredImplant] = useState(false);

  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            {menuData.mainLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.title}
              </a>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {/* Mega Menu with Featured Section */}
              <div className="absolute left-0 mt-2 w-[900px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="flex">
                    {/* Featured Services - Left Side */}
                    <div className="w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 p-6">
                      <h3 className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-4">
                        Featured Services
                      </h3>
                      <div className="space-y-4">
                        {menuData.services.featured.map((item) => (
                          <div 
                            key={item.title}
                            className="relative"
                            onMouseEnter={() => item.submenu && setHoveredImplant(true)}
                            onMouseLeave={() => item.submenu && setHoveredImplant(false)}
                          >
                            <a
                              href={item.href}
                              className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group/featured"
                            >
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-semibold text-gray-900 group-hover/featured:text-blue-600 transition-colors">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-gray-600 mt-1">
                                    {item.description}
                                  </p>
                                </div>
                                {item.submenu && (
                                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover/featured:text-blue-600" />
                                )}
                              </div>
                            </a>
                            {item.submenu && hoveredImplant && (
                              <div className="absolute left-full top-0 ml-2 bg-white rounded-lg shadow-xl p-4 w-64 z-10">
                                <ul className="space-y-2">
                                  {item.submenu.map((subitem) => (
                                    <li key={subitem.title}>
                                      <a
                                        href={subitem.href}
                                        className="block text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition-colors"
                                      >
                                        {subitem.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* All Services - Right Side */}
                    <div className="w-2/3 p-6">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                        All Services
                      </h3>
                      <div className="grid grid-cols-2 gap-6">
                        {Object.entries(menuData.services.allServices).map(([category, items]) => (
                          <div key={category}>
                            <h4 className="text-sm font-semibold text-gray-900 mb-3">
                              {category}
                            </h4>
                            <ul className="space-y-2">
                              {items.map((item) => (
                                <li key={item.title}>
                                  <a
                                    href={item.href}
                                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center group/item"
                                  >
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                                    {item.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {menuData.otherLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>

          <a
            href="/book"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-gray-800">Pennington Dental</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
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
                  className="block py-3 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {link.title}
                </a>
              ))}

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-gray-700 font-medium"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 space-y-4 py-3">
                    {/* Featured Services */}
                    <div className="bg-blue-50 rounded-lg p-4 -ml-4">
                      <h4 className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-3">
                        Featured Services
                      </h4>
                      <ul className="space-y-2">
                        {menuData.services.featured.map((item) => (
                          <li key={item.title}>
                            <a
                              href={item.href}
                              className="block text-sm font-medium text-gray-900 hover:text-blue-600"
                            >
                              {item.title}
                            </a>
                            {item.submenu && (
                              <ul className="ml-4 mt-1 space-y-1">
                                {item.submenu.map((subitem) => (
                                  <li key={subitem.title}>
                                    <a
                                      href={subitem.href}
                                      className="block text-xs text-gray-600 hover:text-blue-600"
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

                    {/* All Services */}
                    {Object.entries(menuData.services.allServices).map(([category, items]) => (
                      <div key={category}>
                        <h4 className="text-xs font-semibold text-gray-900 mb-2">
                          {category}
                        </h4>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item.title}>
                              <a
                                href={item.href}
                                className="block text-sm text-gray-600 hover:text-blue-600"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {menuData.otherLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="block py-3 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {link.title}
                </a>
              ))}

              <a
                href="/book"
                className="block mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium text-center"
              >
                Book Appointment
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
