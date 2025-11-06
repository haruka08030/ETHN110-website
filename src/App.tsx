import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HomePage } from './components/HomePage';
import { TheIssuePage } from './components/TheIssuePage';
import { StoriesPage } from './components/StoriesPage';
import { HistoryTheoryPage } from './components/HistoryTheoryPage';
import { TakeActionPage } from './components/TakeActionPage';
import { ReferencesPage } from './components/ReferencesPage';
import { Menu, X } from 'lucide-react';

type PageType = 'home' | 'issue' | 'stories' | 'history' | 'action' | 'references';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'issue', label: 'The Issue' },
    { id: 'stories', label: 'Stories' },
    { id: 'history', label: 'History' },
    { id: 'action', label: 'Take Action' },
    { id: 'references', label: 'References' },
  ] as const;

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'issue':
        return <TheIssuePage />;
      case 'stories':
        return <StoriesPage />;
      case 'history':
        return <HistoryTheoryPage />;
      case 'action':
        return <TakeActionPage />;
      case 'references':
        return <ReferencesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-red-950">
      {/* Decorative pattern overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      {/* Header */}
      <header className="bg-red-950 sticky top-0 z-50 shadow-xl border-b-2 border-orange-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div
              className="cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              <h1 className="text-slate-100 text-xl md:text-2xl">
                From Shame to Pride
              </h1>
              <p className="text-orange-400/80 text-sm">Food Culture & Belonging</p>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-orange-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex gap-1">
                {pages.map((page) => (
                  <li key={page.id}>
                    <button
                      onClick={() => setCurrentPage(page.id as PageType)}
                      className={`px-4 py-2 text-sm transition-colors ${currentPage === page.id
                        ? 'text-orange-400 bg-red-900/80 border-b-2 border-orange-500'
                        : 'text-slate-300 hover:text-orange-300 hover:bg-red-900/50'
                        }`}
                    >
                      {page.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                className="md:hidden pb-4 bg-red-900/50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <ul className="flex flex-col">
                  {pages.map((page) => (
                    <li key={page.id}>
                      <button
                        onClick={() => {
                          setCurrentPage(page.id as PageType);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${currentPage === page.id
                          ? 'text-orange-400 bg-red-900/80'
                          : 'text-slate-300 hover:text-orange-300 hover:bg-red-900/50'
                          }`}
                      >
                        {page.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-red-950 text-white mt-0 relative z-10 border-t-2 border-orange-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-slate-300 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Ethnic Studies Final Project<br />
              2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
