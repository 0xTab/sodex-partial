import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Announcement } from '@/types/announcement';

// Mock data - replace with actual API call
async function getAnnouncements(): Promise<Announcement[]> {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [
    {
      id: '1',
      title: 'New listing: PUMP-USD hyperps',
      content: 'Long or short the unlaunched PUMP (Pump.fun) token with up to 3x leverage',
      publishDate: '2025/7/10',
      type: 'notice',
      priority: 'high',
      status: 'published',
      author: 'SoDEX Team',
      excerpt: 'Long or short the unlaunched PUMP (Pump.fun) token with up to 3x leverage'
    },
    {
      id: '2',
      title: 'Phantom wallet perps integration',
      content: 'Phantom added support for perps trading by using Hyperliquid as their infrastructure layer',
      publishDate: '2025/7/9',
      type: 'update',
      priority: 'medium',
      status: 'published',
      author: 'SoDEX Team',
      excerpt: 'Phantom added support for perps trading by using Hyperliquid as their infrastructure layer'
    },
    {
      id: '3',
      title: 'Validator vote to delist Al, BADGER, CATI, CYBER, LISTA, PIXEL, RDNT perps',
      content: 'Following community vote, these tokens will be delisted from perpetual trading',
      publishDate: '2025/7/9',
      type: 'notice',
      priority: 'high',
      status: 'published',
      author: 'SoDEX Team',
      excerpt: ''
    }
  ];
}

export const metadata: Metadata = {
  title: 'Announcements - SoDEX',
  description: 'Stay updated with the latest announcements, updates, and listings on SoDEX trading platform.',
  keywords: 'SoDEX, announcements, updates, listings, delistings, trading, crypto',
  openGraph: {
    title: 'Announcements - SoDEX',
    description: 'Stay updated with the latest announcements, updates, and listings on SoDEX trading platform.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Announcements - SoDEX',
    description: 'Stay updated with the latest announcements, updates, and listings on SoDEX trading platform.',
  }
};

export default async function AnnouncementPage() {
  const announcements = await getAnnouncements();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'notice':
        return 'Listings';
      case 'update':
        return 'Updates';
      default:
        return 'Delistings';
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white font-[Lato]">
      <Navigation />
      
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center h-[100px] border-b border-[#262626] bg-[#121212] px-6">
        <div className="w-full max-w-[1000px]">
          <h1 className="text-2xl font-normal text-white">Announcements</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center px-6 py-8">
        <div className="w-full max-w-[1000px] flex gap-4">
          {/* Sidebar */}
          <div className="w-[260px] bg-[#121212] p-2 flex-shrink-0">
            <div className="space-y-2">
              <div className="flex items-center justify-center h-10 px-2 rounded-lg bg-[#171717]">
                <span className="text-[#FF7637] text-sm font-bold">All Announcements</span>
              </div>
              <div className="flex items-center justify-center h-10 px-2 rounded-lg hover:bg-[#171717] transition-colors">
                <span className="text-[#A3A3A3] text-sm font-normal">Updates</span>
              </div>
              <div className="flex items-center justify-center h-10 px-2 rounded-lg hover:bg-[#171717] transition-colors">
                <span className="text-[#A3A3A3] text-sm font-normal">Listings</span>
              </div>
              <div className="flex items-center justify-center h-10 px-2 rounded-lg hover:bg-[#171717] transition-colors">
                <span className="text-[#A3A3A3] text-sm font-normal">Delistings</span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-[#121212] p-2">
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={announcement.id}>
                  <div className="flex items-start gap-3 p-2">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-white text-sm font-normal leading-normal">
                        {announcement.title}
                      </h3>
                      {announcement.excerpt && (
                        <p className="text-[#A3A3A3] text-xs font-normal leading-normal">
                          {announcement.excerpt}
                        </p>
                      )}
                      <p className="text-[#A3A3A3] text-xs font-normal leading-normal">
                        {announcement.publishDate}
                      </p>
                    </div>
                    <div className="flex items-center justify-center px-2 py-1 rounded bg-[rgba(255,118,55,0.1)]">
                      <span className="text-[#FF7637] text-sm font-normal">
                        {getTypeColor(announcement.type)}
                      </span>
                    </div>
                  </div>
                  {index < announcements.length - 1 && (
                    <div className="h-px bg-[#262626] my-4"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between h-14 px-6 border-t border-[#262626] mt-4">
              <div className="flex-1 text-right">
                <span className="text-[#A3A3A3] text-sm font-normal">Rows per page: 10</span>
              </div>
              <svg className="w-4 h-4 mx-3" fill="none" viewBox="0 0 16 16">
                <path d="M11.354 10.6463C11.4005 10.6927 11.4374 10.7479 11.4626 10.8086C11.4877 10.8693 11.5007 10.9343 11.5007 11C11.5007 11.0657 11.4877 11.1308 11.4626 11.1915C11.4374 11.2522 11.4005 11.3073 11.354 11.3538L8.35403 14.3538C8.30759 14.4003 8.25245 14.4371 8.19175 14.4623C8.13105 14.4875 8.06599 14.5004 8.00028 14.5004C7.93457 14.5004 7.86951 14.4875 7.80881 14.4623C7.74811 14.4371 7.69296 14.4003 7.64653 14.3538L4.64653 11.3538C4.55271 11.26 4.5 11.1327 4.5 11C4.5 10.8673 4.55271 10.7401 4.64653 10.6463C4.74035 10.5525 4.8676 10.4997 5.00028 10.4997C5.13296 10.4997 5.26021 10.5525 5.35403 10.6463L8.00028 13.2932L10.6465 10.6463C10.693 10.5998 10.7481 10.5629 10.8088 10.5377C10.8695 10.5126 10.9346 10.4996 11.0003 10.4996C11.066 10.4996 11.131 10.5126 11.1917 10.5377C11.2524 10.5629 11.3076 10.5998 11.354 10.6463ZM5.35403 5.35378L8.00028 2.7069L10.6465 5.35378C10.7403 5.4476 10.8676 5.50031 11.0003 5.50031C11.133 5.50031 11.2602 5.4476 11.354 5.35378C11.4478 5.25996 11.5006 5.13271 11.5006 5.00003C11.5006 4.86735 11.4478 4.7401 11.354 4.64628L8.35403 1.64628C8.30759 1.59979 8.25245 1.56291 8.19175 1.53775C8.13105 1.51258 8.06599 1.49963 8.00028 1.49963C7.93457 1.49963 7.86951 1.51258 7.80881 1.53775C7.74811 1.56291 7.69296 1.59979 7.64653 1.64628L4.64653 4.64628C4.55271 4.7401 4.5 4.86735 4.5 5.00003C4.5 5.13271 4.55271 5.25996 4.64653 5.35378C4.74035 5.4476 4.8676 5.50031 5.00028 5.50031C5.13296 5.50031 5.26021 5.4476 5.35403 5.35378Z" fill="white"/>
              </svg>
              <div>
                <span className="text-[#A3A3A3] text-sm font-normal">1-10 of 300</span>
              </div>
              <svg className="w-4 h-4 mx-3 opacity-50" fill="none" viewBox="0 0 16 16">
                <path d="M10.3541 12.6462C10.4006 12.6927 10.4374 12.7478 10.4626 12.8085C10.4877 12.8692 10.5007 12.9343 10.5007 13C10.5007 13.0657 10.4877 13.1307 10.4626 13.1914C10.4374 13.2521 10.4006 13.3073 10.3541 13.3537C10.3077 13.4002 10.2525 13.437 10.1918 13.4622C10.1311 13.4873 10.0661 13.5003 10.0004 13.5003C9.9347 13.5003 9.86964 13.4873 9.80895 13.4622C9.74825 13.437 9.6931 13.4002 9.64664 13.3537L4.64664 8.35372C4.60015 8.30729 4.56328 8.25214 4.53811 8.19144C4.51295 8.13074 4.5 8.06568 4.5 7.99997C4.5 7.93427 4.51295 7.8692 4.53811 7.8085C4.56328 7.7478 4.60015 7.69266 4.64664 7.64622L9.64664 2.64622C9.74046 2.5524 9.86771 2.49969 10.0004 2.49969C10.1331 2.49969 10.2603 2.5524 10.3541 2.64622C10.448 2.74004 10.5007 2.86729 10.5007 2.99997C10.5007 3.13265 10.448 3.2599 10.3541 3.35372L5.70727 7.99997L10.3541 12.6462Z" fill="white"/>
              </svg>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M11.354 8.35372L6.35403 13.3537C6.30757 13.4002 6.25242 13.437 6.19173 13.4622C6.13103 13.4873 6.06598 13.5003 6.00028 13.5003C5.93458 13.5003 5.86953 13.4873 5.80883 13.4622C5.74813 13.437 5.69298 13.4002 5.64653 13.3537C5.60007 13.3073 5.56322 13.2521 5.53808 13.1914C5.51294 13.1307 5.5 13.0657 5.5 13C5.5 12.9343 5.51294 12.8692 5.53808 12.8085C5.56322 12.7478 5.60007 12.6927 5.64653 12.6462L10.2934 7.99997L5.64653 3.35372C5.55271 3.2599 5.5 3.13265 5.5 2.99997C5.5 2.86729 5.55271 2.74004 5.64653 2.64622C5.74035 2.5524 5.8676 2.49969 6.00028 2.49969C6.13296 2.49969 6.26021 2.5524 6.35403 2.64622L11.354 7.64622C11.4005 7.69266 11.4374 7.7478 11.4626 7.8085C11.4877 7.8692 11.5007 7.93427 11.5007 7.99997C11.5007 8.06568 11.4877 8.13074 11.4626 8.19144C11.4374 8.25214 11.4005 8.30729 11.354 8.35372Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
