'use client';

import { useState } from 'react';
import { ChevronDown, X, Menu } from 'lucide-react';

const menuData = {
  mainLinks: [
    { title: 'Home', href: '/' },
    { title: 'Meet The Team', href: '/meet-the-team' },
  ],
  services: {
    'General Dentistry': [
      { title: 'Dental Cleaning and Exams', href: '/services/cleaning-exams' },
      { title: 'Dental Emergencies', href: '/services/emergencies' },
      { title: 'Tooth Extractions', href: '/services/extractions' },
      { title: 'Wisdom Teeth Removal', href: '/services/wisdom-teeth' },
    ],
    'Restorative': [
      { title: 'Dental Implants', href: '/services/implants', submenu: [
        { title: 'All on 4 Dental Implants', href: '/services/all-on-4' },
        { title: 'Implant Retained Dentures', href: '/services/implant-dentures' },
        { title: 'Dentures', href: '/services/dentures' },
      ]},
      { title: 'Crowns', href: '/services/crowns' },
      { title: 'Dental Bridges', href: '/services/bridges' },
    ],
    'Cosmetic': [
      { title: 'Smile Makeover', href: '/services/smile-makeover' },
      { title: 'Invisalign', href: '/services/invisalign' },
      { title: 'Cosmetic Bonding', href: '/services/bonding' },
      { title: 'Teeth Whitening', href: '/services/whitening' },
      { title: 'Veneers', href: '/services/veneers' },
    ],
    'Specialized Care': [
      { title: 'Periodontal Care and Treatment', href: '/services/periodontal' },
      { title: 'Sedation Dentistry', href: '/services/sedation' },
      { title: 'Nightguards', href: '/services/nightguards' },
    ],
  },
  otherLinks: [
    { title: 'New Patient Info', href: '/new-patient' },
    { title: 'Dental Membership Club', href: '/membership' },
    { title: 'Articles', href: '/articles' },
    { title: 'Contact Us', href: '/contact' },
  ],
};

export default function MenuOption1() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [expandedImplants, setExpandedImplants] = useState(false);

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
              
              {/* Mega Menu */}
              <div className="absolute left-0 mt-2 w-[720px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-lg shadow-2xl border border-gray-100 p-8">
                  <div className="grid grid-cols-2 gap-8">
                    {Object.entries(menuData.services).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
                          {category}
                        </h3>
                        <ul className="space-y-3">
                          {items.map((item) => (
                            <li key={item.title}>
                              <a
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors text-sm flex items-center group/item"
                              >
                                <span className="w-1 h-1 bg-blue-600 rounded-full mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                                {item.title}
                              </a>
                              {item.submenu && (
                                <ul className="ml-4 mt-2 space-y-2">
                                  {item.submenu.map((subitem) => (
                                    <li key={subitem.title}>
                                      <a
                                        href={subitem.href}
                                        className="text-gray-500 hover:text-blue-600 transition-colors text-xs"
                                      >
                                        → {subitem.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
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
                    {Object.entries(menuData.services).map(([category, items]) => (
                      <div key={category}>
                        <h4 className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
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
                              {item.submenu && (
                                <ul className="ml-4 mt-1 space-y-1">
                                  {item.submenu.map((subitem) => (
                                    <li key={subitem.title}>
                                      <a
                                        href={subitem.href}
                                        className="block text-xs text-gray-500 hover:text-blue-600"
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
