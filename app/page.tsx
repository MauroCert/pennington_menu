import MenuSubmenuOption1 from '@/components/MenuSubmenuOption1';
import MenuSubmenuOption2 from '@/components/MenuSubmenuOption2';
import MenuSubmenuOption3 from '@/components/MenuSubmenuOption3';
import MenuSubmenuOption4 from '@/components/MenuSubmenuOption4';
import MenuSubmenuOption5 from '@/components/MenuSubmenuOption5';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto space-y-16 py-12">
        
        {/* Submenu Option 1 */}
        <section className="space-y-4">
          <div className="px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'rgb(55, 68, 109)' }}>
                Submenu Option 1: Categorized Grid
              </h2>
              <p className="mb-4" style={{ color: 'rgb(55, 68, 109)', opacity: 0.8 }}>
                Services organized in 4 categories with a 2-column layout. Clean and easy to scan.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg">
            <MenuSubmenuOption1 />
          </div>
          <div className="px-8">
            <div className="max-w-7xl mx-auto rounded-lg p-4" style={{ backgroundColor: 'rgb(55, 68, 109, 0.05)', border: '1px solid rgb(55, 68, 109, 0.2)' }}>
              <p className="text-sm" style={{ color: 'rgb(55, 68, 109)' }}>
                <strong>Features:</strong> 4 service categories (General Dentistry, Restorative, Cosmetic, Specialized Care) in a 2-column grid. 
                Dental Implants submenu shown inline with arrow indicators.
              </p>
            </div>
          </div>
        </section>

        {/* Submenu Option 2 */}
        <section className="space-y-4">
          <div className="px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'rgb(55, 68, 109)' }}>
                Submenu Option 2: Alphabetical List
              </h2>
              <p className="mb-4" style={{ color: 'rgb(55, 68, 109)', opacity: 0.8 }}>
                All services in a 2-column alphabetical list. Dental Implants submenu appears on hover to the right.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg">
            <MenuSubmenuOption2 />
          </div>
          <div className="px-8">
            <div className="max-w-7xl mx-auto rounded-lg p-4" style={{ backgroundColor: 'rgb(55, 68, 109, 0.05)', border: '1px solid rgb(55, 68, 109, 0.2)' }}>
              <p className="text-sm" style={{ color: 'rgb(55, 68, 109)' }}>
                <strong>Features:</strong> Simple 2-column alphabetical list without categories. 
                Dental Implants submenu appears in a floating panel on hover with chevron indicator.
              </p>
            </div>
          </div>
        </section>

        {/* Submenu Option 3 */}
        <section className="space-y-4">
          <div className="px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'rgb(55, 68, 109)' }}>
                Submenu Option 3: Three Column Layout
              </h2>
              <p className="mb-4" style={{ color: 'rgb(55, 68, 109)', opacity: 0.8 }}>
                Services distributed across 3 columns with vertical dividers. Balanced and organized.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg">
            <MenuSubmenuOption3 />
          </div>
          <div className="px-8">
            <div className="max-w-7xl mx-auto rounded-lg p-4" style={{ backgroundColor: 'rgb(55, 68, 109, 0.05)', border: '1px solid rgb(55, 68, 109, 0.2)' }}>
              <p className="text-sm" style={{ color: 'rgb(55, 68, 109)' }}>
                <strong>Features:</strong> 3 equal columns with vertical dividers for visual separation. 
                Dental Implants submenu shown inline in the middle column with bullet points.
              </p>
            </div>
          </div>
        </section>

        {/* Submenu Option 4 */}
        <section className="space-y-4">
          <div className="px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'rgb(55, 68, 109)' }}>
                Submenu Option 4: Single Column - Minimal & Spacious
              </h2>
              <p className="mb-4" style={{ color: 'rgb(55, 68, 109)', opacity: 0.8 }}>
                One wide column with generous spacing. Clean, modern, and easy to scan with expandable sections.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg">
            <MenuSubmenuOption4 />
          </div>
          <div className="px-8">
            <div className="max-w-7xl mx-auto rounded-lg p-4" style={{ backgroundColor: 'rgb(55, 68, 109, 0.05)', border: '1px solid rgb(55, 68, 109, 0.2)' }}>
              <p className="text-sm" style={{ color: 'rgb(55, 68, 109)' }}>
                <strong>Features:</strong> Single column (420px width) with large padding and spacing. 
                Dental Implants submenu expands inline with plus icon animation. Very clean and minimal design.
              </p>
            </div>
          </div>
        </section>

        {/* Submenu Option 5 */}
        <section className="space-y-4">
          <div className="px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-2" style={{ color: 'rgb(55, 68, 109)' }}>
                Submenu Option 5: Compact 4-Column Grid
              </h2>
              <p className="mb-4" style={{ color: 'rgb(55, 68, 109)', opacity: 0.8 }}>
                Space-efficient 4-column grid. Fits all services in a compact, organized layout.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg">
            <MenuSubmenuOption5 />
          </div>
          <div className="px-8">
            <div className="max-w-7xl mx-auto rounded-lg p-4" style={{ backgroundColor: 'rgb(55, 68, 109, 0.05)', border: '1px solid rgb(55, 68, 109, 0.2)' }}>
              <p className="text-sm" style={{ color: 'rgb(55, 68, 109)' }}>
                <strong>Features:</strong> 4 equal columns with compact cards. 
                Dental Implants submenu shown inline below the main item. Space-efficient for viewing all services at once.
              </p>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="px-8 pb-12">
          <div className="max-w-7xl mx-auto bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'rgb(55, 68, 109)' }}>
              Deployment Instructions
            </h3>
            <div className="space-y-3" style={{ color: 'rgb(55, 68, 109)' }}>
              <p>To deploy this project to Vercel:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Push this project to a GitHub repository</li>
                <li>Go to <a href="https://vercel.com" className="underline">vercel.com</a> and sign in</li>
                <li>Click "Add New Project" and import your repository</li>
                <li>Vercel will automatically detect Next.js and configure the build settings</li>
                <li>Click "Deploy" and your site will be live in minutes!</li>
              </ol>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
