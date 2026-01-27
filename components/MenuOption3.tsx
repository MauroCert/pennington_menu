'use client';

import { useState } from 'react';
import { ChevronDown, X, Menu, Sparkles, Shield, Smile, Stethoscope } from 'lucide-react';

const menuData = {
  mainLinks: [
    { title: 'Home', href: '/' },
    { title: 'Meet The Team', href: '/meet-the-team' },
  ],
  services: [
    {
      category: 'Preventive & Emergency',
      icon: Shield,
      color: 'from-green-50 to-emerald-50',
      iconColor: 'text-green-600',
      items: [
        { title: 'Dental Cleaning and Exams', href: '/services/cleaning-exams' },
        { title: 'Dental Emergencies', href: '/services/emergencies' },
        { title: 'Nightguards', href: '/services/nightguards' },
      ]
    },
    {
      category: 'Extractions',
      icon: Stethoscope,
      color: 'from-orange-50 to-amber-50',
      iconColor: 'text-orange-600',
      items: [
        { title: 'Tooth Extractions', href: '/services/extractions' },
        { title: 'Wisdom Teeth Removal', href: '/services/wisdom-teeth' },
      ]
    },
    {
      category: 'Implants & Restorations',
      icon: Sparkles,
      color: 'from-blue-50 to-cyan-50',
      iconColor: 'text-blue-600',
      items: [
        { 
          title: 'Dental Implants', 
          href: '/services/implants',
          highlight: true,
          submenu: [
            { title: 'All on 4 Dental Implants', href: '/services/all-on-4' },
            { title: 'Implant Retained Dentures', href: '/services/implant-dentures' },
            { title: 'Dentures', href: '/services/dentures' },
          ]
        },
        { title: 'Crowns', href: '/services/crowns' },
        { title: 'Dental Bridges', href: '/services/bridges' },
        { title: 'Periodontal Care', href: '/services/periodontal' },
      ]
    },
    {
      category: 'Cosmetic Dentistry',
      icon: Smile,
      color: 'from-purple-50 to-pink-50',
      iconColor: 'text-purple-600',
      items: [
        { title: 'Smile Makeover', href: '/services/smile-makeover', highlight: true },
        { title: 'Invisalign', href: '/services/invisalign', highlight: true },
        { title: 'Cosmetic Bonding', href: '/services/bonding' },
        { title: 'Teeth Whitening', href: '/services/whitening' },
        { title: 'Veneers', href: '/services/veneers' },
        { title: 'Sedation Dentistry', href: '/services/sedation' },
      ]
    },
  ],
  otherLinks: [
    { title: 'New Patient Info', href: '/new-patient' },
    { title: 'Dental Membership Club', href: '/membership' },
    { title: 'Articles', href: '/articles' },
    { title: 'Contact Us', href: '/contact' },
  ],
};

export default function MenuOption3() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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
              
              {/* Tabbed Mega Menu */}
              <div className="absolute left-0 mt-2 w-[850px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="flex">
                    {/* Tab Sidebar */}
                    <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
                        Categories
                      </h3>
                      <div className="space-y-1">
                        {menuData.services.map((service, index) => {
                          const Icon = service.icon;
                          return (
                            <button
                              key={service.category}
                              onMouseEnter={() => setActiveTab(index)}
                              className={`w-full text-left px-3 py-3 rounded-lg transition-all flex items-center space-x-3 ${
                                activeTab === index
                                  ? 'bg-white shadow-sm text-blue-600'
                                  : 'text-gray-700 hover:bg-white/50'
                              }`}
                            >
                              <Icon className={`w-5 h-5 ${activeTab === index ? service.iconColor : 'text-gray-400'}`} />
                              <span className="text-sm font-medium">{service.category}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6">
                      {menuData.services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                          <div
                            key={service.category}
                            className={activeTab === index ? 'block' : 'hidden'}
                          >
                            <div className="flex items-center space-x-3 mb-6">
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                                <Icon className={`w-6 h-6 ${service.iconColor}`} />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {service.category}
                                </h3>
                                <p className="text-xs text-gray-500">
                                  {service.items.length} services available
                                </p>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-3">
                              {service.items.map((item) => (
                                <div key={item.title}>
                                  <a
                                    href={item.href}
                                    className={`block p-3 rounded-lg transition-all ${
                                      item.highlight
                                        ? 'bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 hover:shadow-md'
                                        : 'bg-gray-50 hover:bg-gray-100'
                                    }`}
                                  >
                                    <span className={`text-sm font-medium ${
                                      item.highlight ? 'text-blue-700' : 'text-gray-700'
                                    }`}>
                                      {item.title}
                                      {item.highlight && (
                                        <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                                          Popular
                                        </span>
                                      )}
                                    </span>
                                  </a>
                                  {item.submenu && (
                                    <ul className="ml-3 mt-2 space-y-1">
                                      {item.submenu.map((subitem) => (
                                        <li key={subitem.title}>
                                          <a
                                            href={subitem.href}
                                            className="block text-xs text-gray-600 hover:text-blue-600 py-1 px-3 hover:bg-blue-50 rounded transition-colors"
                                          >
                                            • {subitem.title}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
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
                  <div className="space-y-4 py-3">
                    {menuData.services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div key={service.category} className="pl-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Icon className={`w-4 h-4 ${service.iconColor}`} />
                            <h4 className="text-sm font-semibold text-gray-900">
                              {service.category}
                            </h4>
                          </div>
                          <ul className="space-y-2 ml-6">
                            {service.items.map((item) => (
                              <li key={item.title}>
                                <a
                                  href={item.href}
                                  className={`block text-sm ${
                                    item.highlight
                                      ? 'text-blue-600 font-medium'
                                      : 'text-gray-600'
                                  } hover:text-blue-600`}
                                >
                                  {item.title}
                                  {item.highlight && ' ⭐'}
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
                      );
                    })}
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
