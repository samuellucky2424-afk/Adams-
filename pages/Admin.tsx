import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { 
  Save, LayoutDashboard, Type, Phone, Scissors, Image as ImageIcon, 
  Palette, Layers, Settings, LogOut, Plus, Trash2, GripVertical, ChevronDown, ChevronUp
} from 'lucide-react';

const Admin: React.FC = () => {
  const { content, updateContent, resetContent } = useContent();
  const [activeTab, setActiveTab] = useState('general');
  const [notification, setNotification] = useState('');

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleSave = () => {
    // In our context, data is auto-saved to localStorage on change.
    // This button just provides feedback and could be used for an API call later.
    showNotification('Changes saved successfully!');
  };

  const SidebarItem = ({ id, icon: Icon, label }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center px-4 py-3 mb-1 text-sm font-medium rounded-lg transition-colors ${
        activeTab === id 
          ? 'bg-gold-600 text-white shadow-sm' 
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon size={18} className="mr-3" />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <LayoutDashboard className="mr-2 text-gold-600" />
            Admin Panel
          </h2>
          <p className="text-xs text-gray-500 mt-1">CMS Dashboard v1.0</p>
        </div>
        <nav className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
          <SidebarItem id="general" icon={Type} label="General Info" />
          <SidebarItem id="contact" icon={Phone} label="Contact Details" />
          <SidebarItem id="services" icon={Scissors} label="Services" />
          <SidebarItem id="gallery" icon={ImageIcon} label="Gallery" />
          <SidebarItem id="design" icon={Palette} label="Design & Theme" />
          <SidebarItem id="sections" icon={Layers} label="Page Sections" />
          <SidebarItem id="settings" icon={Settings} label="Settings" />
          
          <div className="mt-8 pt-8 border-t border-gray-200">
             <button
              onClick={() => window.location.href = '/'}
              className="w-full flex items-center px-4 py-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
             >
               <LogOut size={18} className="mr-3" />
               Exit to Website
             </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen p-4 md:p-8">
        <header className="flex justify-between items-center mb-8">
           <h1 className="text-2xl font-bold text-gray-800 capitalize">{activeTab} Manager</h1>
           <div className="flex gap-3">
             <button 
               onClick={resetContent}
               className="px-4 py-2 text-sm text-red-600 border border-red-200 rounded-lg hover:bg-red-50"
             >
               Reset Defaults
             </button>
             <button 
               onClick={handleSave}
               className="flex items-center px-6 py-2 bg-gold-600 text-white rounded-lg shadow-md hover:bg-gold-700 transition-all"
             >
               <Save size={18} className="mr-2" />
               Save Changes
             </button>
           </div>
        </header>

        {notification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
            {notification}
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-4xl">
          
          {/* GENERAL TAB */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    value={content.companyName}
                    onChange={(e) => updateContent({ companyName: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-1">Hero Title</label>
                   <textarea 
                     value={content.hero.title}
                     onChange={(e) => updateContent({ hero: { ...content.hero, title: e.target.value } })}
                     rows={2}
                     className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                   />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                  <input 
                    type="text" 
                    value={content.hero.tagline}
                    onChange={(e) => updateContent({ hero: { ...content.hero, tagline: e.target.value } })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea 
                    value={content.hero.description}
                    onChange={(e) => updateContent({ hero: { ...content.hero, description: e.target.value } })}
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hero Background Image URL</label>
                  <input 
                    type="text" 
                    value={content.hero.bgImage}
                    onChange={(e) => updateContent({ hero: { ...content.hero, bgImage: e.target.value } })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                  />
                  <img src={content.hero.bgImage} alt="Preview" className="mt-2 h-40 w-full object-cover rounded-lg border border-gray-200" />
                </div>
              </div>
            </div>
          )}

          {/* CONTACT TAB */}
          {activeTab === 'contact' && (
            <div className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (For Calls)</label>
                    <input 
                      type="text" 
                      value={content.contact.phone}
                      onChange={(e) => updateContent({ contact: { ...content.contact, phone: e.target.value } })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Display Phone Number</label>
                    <input 
                      type="text" 
                      value={content.contact.phoneDisplay}
                      onChange={(e) => updateContent({ contact: { ...content.contact, phoneDisplay: e.target.value } })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number (No +)</label>
                    <input 
                      type="text" 
                      value={content.contact.whatsapp}
                      onChange={(e) => updateContent({ contact: { ...content.contact, whatsapp: e.target.value } })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      value={content.contact.email}
                      onChange={(e) => updateContent({ contact: { ...content.contact, email: e.target.value } })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                    />
                 </div>
                 <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Physical Address</label>
                    <input 
                      type="text" 
                      value={content.contact.address}
                      onChange={(e) => updateContent({ contact: { ...content.contact, address: e.target.value } })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                    />
                 </div>
                 <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Google Maps Embed URL</label>
                    <input 
                      type="text" 
                      value={content.contact.mapUrl}
                      onChange={(e) => updateContent({ contact: { ...content.contact, mapUrl: e.target.value } })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                    />
                    <p className="text-xs text-gray-400 mt-1">Paste the 'src' attribute from Google Maps Embed code.</p>
                 </div>
               </div>
            </div>
          )}

          {/* SERVICES TAB */}
          {activeTab === 'services' && (
            <div className="space-y-8">
              {content.services.map((category, catIndex) => (
                <div key={category.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
                    <input 
                      className="text-lg font-bold bg-transparent border-none focus:ring-0 text-gray-800"
                      value={category.title}
                      onChange={(e) => {
                         const newServices = [...content.services];
                         newServices[catIndex].title = e.target.value;
                         updateContent({ services: newServices });
                      }}
                    />
                    <div className="flex gap-2">
                       {/* Icon selector placeholder */}
                       <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded border">Icon: {category.iconName}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                     {category.services.map((service, sIndex) => (
                       <div key={sIndex} className="flex gap-4 items-start bg-white p-3 rounded shadow-sm">
                         <GripVertical className="text-gray-300 mt-2 cursor-move" size={16} />
                         <div className="flex-grow space-y-2">
                            <input 
                              className="w-full font-medium border-b border-gray-100 focus:border-gold-500 outline-none"
                              placeholder="Service Name"
                              value={service.name}
                              onChange={(e) => {
                                const newServices = [...content.services];
                                newServices[catIndex].services[sIndex].name = e.target.value;
                                updateContent({ services: newServices });
                              }}
                            />
                            <textarea 
                              className="w-full text-sm text-gray-600 bg-transparent outline-none resize-none"
                              placeholder="Description"
                              rows={2}
                              value={service.description}
                              onChange={(e) => {
                                const newServices = [...content.services];
                                newServices[catIndex].services[sIndex].description = e.target.value;
                                updateContent({ services: newServices });
                              }}
                            />
                         </div>
                         <button 
                            onClick={() => {
                              const newServices = [...content.services];
                              newServices[catIndex].services.splice(sIndex, 1);
                              updateContent({ services: newServices });
                            }}
                            className="text-red-400 hover:text-red-600 p-1"
                         >
                           <Trash2 size={16} />
                         </button>
                       </div>
                     ))}
                     <button 
                       onClick={() => {
                          const newServices = [...content.services];
                          newServices[catIndex].services.push({ name: 'New Service', description: 'Description', image: '' });
                          updateContent({ services: newServices });
                       }}
                       className="w-full py-2 border-2 border-dashed border-gray-300 rounded text-gray-500 hover:border-gold-500 hover:text-gold-500 flex justify-center items-center"
                     >
                       <Plus size={16} className="mr-2" /> Add Service to {category.title}
                     </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* GALLERY TAB */}
          {activeTab === 'gallery' && (
             <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                   {content.gallery.map((url, idx) => (
                     <div key={idx} className="relative group">
                        <img src={url} alt="Gallery" className="h-32 w-full object-cover rounded-lg" />
                        <button 
                          onClick={() => {
                            const newGallery = content.gallery.filter((_, i) => i !== idx);
                            updateContent({ gallery: newGallery });
                          }}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 size={14} />
                        </button>
                     </div>
                   ))}
                   <button 
                     onClick={() => {
                       const url = prompt("Enter Image URL");
                       if (url) updateContent({ gallery: [...content.gallery, url] });
                     }}
                     className="h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-500 hover:border-gold-500 hover:text-gold-500"
                   >
                     <Plus size={24} className="mb-2" />
                     <span>Add Image URL</span>
                   </button>
                </div>
             </div>
          )}

          {/* DESIGN TAB */}
          {activeTab === 'design' && (
             <div className="space-y-6">
                <p className="text-gray-500 text-sm">Real-time color customization. Changes reflect instantly.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color (Gold)</label>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="color" 
                          value={content.theme.primaryColor}
                          onChange={(e) => updateContent({ theme: { ...content.theme, primaryColor: e.target.value } })}
                          className="h-10 w-10 border-0 rounded cursor-pointer"
                        />
                        <span className="text-sm font-mono">{content.theme.primaryColor}</span>
                      </div>
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Background Color (Light)</label>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="color" 
                          value={content.theme.secondaryColor}
                          onChange={(e) => updateContent({ theme: { ...content.theme, secondaryColor: e.target.value } })}
                          className="h-10 w-10 border-0 rounded cursor-pointer"
                        />
                        <span className="text-sm font-mono">{content.theme.secondaryColor}</span>
                      </div>
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Text Color (Dark)</label>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="color" 
                          value={content.theme.textColor}
                          onChange={(e) => updateContent({ theme: { ...content.theme, textColor: e.target.value } })}
                          className="h-10 w-10 border-0 rounded cursor-pointer"
                        />
                        <span className="text-sm font-mono">{content.theme.textColor}</span>
                      </div>
                   </div>
                </div>
                <div className="p-4 bg-gray-50 rounded border border-gray-200 mt-4">
                   <h4 className="font-bold mb-2" style={{ color: content.theme.primaryColor }}>Preview Heading</h4>
                   <p style={{ color: content.theme.textColor }}>This is how your text will look on the selected background.</p>
                   <button className="mt-2 px-4 py-2 rounded text-white" style={{ backgroundColor: content.theme.primaryColor }}>Button Preview</button>
                </div>
             </div>
          )}

          {/* SECTIONS TAB */}
          {activeTab === 'sections' && (
             <div className="space-y-4">
                <p className="text-gray-500 text-sm mb-4">Toggle visibility of homepage sections.</p>
                {Object.entries(content.settings.sections).map(([key, value]) => (
                   <div key={key} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                      <span className="font-medium capitalize text-gray-800">{key} Section</span>
                      <button 
                        onClick={() => updateContent({ 
                          settings: { 
                            ...content.settings, 
                            sections: { ...content.settings.sections, [key]: !value } 
                          } 
                        })}
                        className={`w-12 h-6 rounded-full p-1 transition-colors ${value ? 'bg-gold-600' : 'bg-gray-300'}`}
                      >
                         <div className={`w-4 h-4 bg-white rounded-full transition-transform ${value ? 'translate-x-6' : 'translate-x-0'}`}></div>
                      </button>
                   </div>
                ))}
             </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
               <h3 className="font-bold text-gray-800">SEO Configuration</h3>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Page Title</label>
                  <input 
                    type="text" 
                    value={content.settings.seo.title}
                    onChange={(e) => updateContent({ 
                      settings: { 
                        ...content.settings, 
                        seo: { ...content.settings.seo, title: e.target.value } 
                      } 
                    })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                  />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                  <textarea 
                    value={content.settings.seo.description}
                    onChange={(e) => updateContent({ 
                      settings: { 
                        ...content.settings, 
                        seo: { ...content.settings.seo, description: e.target.value } 
                      } 
                    })}
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-500 outline-none"
                  />
               </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Admin;
