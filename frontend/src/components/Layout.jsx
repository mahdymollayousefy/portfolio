import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useEffect } from 'react';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-50">
      <Header />
      
      {/* Background ambient effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] rounded-full bg-blue-500/10 blur-3xl opacity-50 dark:opacity-20 animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute -bottom-1/2 -right-1/2 w-[100vw] h-[100vw] rounded-full bg-purple-500/10 blur-3xl opacity-50 dark:opacity-20 animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 animate-fade-in">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
