'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sidebar } from '@/app/home/components/sidebar';
import { Playground } from './components/playground';
import { Topbar } from './components/topbar';
import { Dashboard } from './components/dashboard';
import { Library } from './components/library';
import { Marketplace } from './components/marketplace';

export default function HomePage() {
  const [currentComponent, setCurrentComponent] = useState('dashboard');

  let Component = Playground; // default component
  switch (currentComponent) {
    case '/dashboard':
      Component = Dashboard;
      break;
    case '/library':
      Component = Library;
      break;
    case '/marketplace':
      Component = Marketplace;
      break;

    case '/playground':
      Component = Playground;
      break;

    default:
      Component = Dashboard; // default component
      console.log(currentComponent);
      break;
  }

  const handleNavigation = (component: string) => {
    setCurrentComponent(component);
  };

  return (
    <div className="hidden md:block">
      <Topbar />
      <div className="border-t">
        <div className="grid lg:grid-cols-7">
          <Sidebar
            className="hidden lg:block"
            navigateTo={handleNavigation}
            currentComponent={currentComponent}
          />
          <div className="col-span-6 lg:border-l">
            <Component />
          </div>
        </div>
      </div>
    </div>
  );
}
