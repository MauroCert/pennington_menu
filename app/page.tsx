import MenuOption1 from '@/components/MenuOption1';
import MenuOption2 from '@/components/MenuOption2';
import MenuOption3 from '@/components/MenuOption3';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto space-y-16 py-12">
        
        {/* Option 1 */}
        <section className="space-y-4">
          <div className="px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Option 1: Clean Mega Menu</h2>
              <p className="text-gray-600 mb-4">
                Categorized grid layout with clear sections. Services are grouped by type with visual indicators.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg">
            <MenuOption1 />
          </div>
          <div className="px-8">
            <div className="max-w-7xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Features:</strong> 4 service categories in a 2-column grid, Dental Implants submenu shown inline, 
                hover animations with dot indicators
              </p>
            </div>
          </div>
        </section>

        {/* Option 2 */}
        <section className="space-y-4">
          <div className="px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Option 2: Featured Services Layout</h2>
              <p className="text-gray-600 mb-4">
                Two-column design with featured services highlighted on the left and all services categorized on the right.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg">
            <MenuOption2 />
          </div>
          <div className="px-8">
            <div className="max-w-7xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Features:</strong> Featured services in blue gradient cards, Dental Implants submenu appears on hover to the right, 
                clean two-section layout
              </p>
            </div>
          </div>
        </section>

        {/* Option 3 */}
        <section className="space-y-4">
          <div className="px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Option 3: Interactive Tabbed Menu</h2>
              <p className="text-gray-600 mb-4">
                Sidebar navigation with icons and tab-based content. Each category has its own icon and color scheme.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg">
            <MenuOption3 />
          </div>
          <div className="px-8">
            <div className="max-w-7xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>Features:</strong> Icon-based category tabs, color-coded sections with gradients, 
                popular services highlighted with badges, Dental Implants submenu shown below the main item
              </p>
            </div>
          </div>
        </section>

        {/* Instructions */}
        <section className="px-8 pb-12">
          <div className="max-w-7xl mx-auto bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Deployment Instructions</h3>
            <div className="space-y-3 text-gray-700">
              <p>To deploy this project to Vercel:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Push this project to a GitHub repository</li>
                <li>Go to <a href="https://vercel.com" className="text-blue-600 hover:underline">vercel.com</a> and sign in</li>
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
