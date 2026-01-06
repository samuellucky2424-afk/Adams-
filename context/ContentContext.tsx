import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppContent, ServiceCategory } from '../types';
import { INITIAL_CONTENT } from '../constants';
import * as LucideIcons from 'lucide-react';

interface ContentContextType {
  content: AppContent;
  updateContent: (newContent: Partial<AppContent>) => void;
  resetContent: () => void;
  getIcon: (name: string) => React.ElementType;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<AppContent>(INITIAL_CONTENT);
  const [mounted, setMounted] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('site_content');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge with initial to ensure new structure changes don't break old saves
        // Deep merge logic to ensure nested services are updated
        const mergedContent = { ...INITIAL_CONTENT, ...parsed };
        
        // Force refresh services and contact from INITIAL_CONTENT if they've changed
        mergedContent.services = INITIAL_CONTENT.services;
        mergedContent.contact = INITIAL_CONTENT.contact;
        
        setContent(mergedContent);
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }
    setMounted(true);
  }, []);

  // Save to LocalStorage on change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('site_content', JSON.stringify(content));
      applyTheme(content.theme);
      updateMeta(content.settings.seo);
    }
  }, [content, mounted]);

  const updateContent = (updates: Partial<AppContent>) => {
    setContent(prev => ({ ...prev, ...updates }));
  };

  const resetContent = () => {
    if (window.confirm("Are you sure you want to reset all content to default?")) {
      setContent(INITIAL_CONTENT);
    }
  };

  const getIcon = (name: string) => {
    // @ts-ignore
    return LucideIcons[name] || LucideIcons.Sparkles;
  };

  const applyTheme = (theme: AppContent['theme']) => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary-600', theme.primaryColor);
    root.style.setProperty('--color-primary-500', theme.primaryColor); // Approximation
    root.style.setProperty('--color-bg-50', theme.secondaryColor);
    root.style.setProperty('--color-dark-900', theme.textColor);
    // Derived colors could be calculated here with a color library, keeping simple for now
  };

  const updateMeta = (seo: AppContent['settings']['seo']) => {
    document.title = seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seo.description);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent, getIcon }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};