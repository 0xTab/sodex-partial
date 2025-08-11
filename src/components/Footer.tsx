import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">SoDEX</h3>
            </div>
            <p className="text-gray-600 mb-4">
              为用户提供优质的服务和产品，致力于创造更好的用户体验。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">微信</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5 12c-.83 0-1.5-.67-1.5-1.5S7.67 9 8.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5S14.17 9 15.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  <path d="M18 9.5c0-3.31-3.13-6-7-6S4 6.19 4 9.5c0 2.11 1.23 3.98 3.14 5.1L6 17l3.14-1.9C10.38 15.67 11.64 16 13 16c.34 0 .68-.03 1-.08C14.65 14.83 15.5 13.26 15.5 11.5c0-.34-.03-.68-.08-1 1.34-.85 2.58-2.1 2.58-3.5z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">微博</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              产品
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  功能介绍
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  价格方案
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  使用指南
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              支持
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  帮助中心
                </Link>
              </li>
              <li>
                <Link href="/announcement" className="text-gray-600 hover:text-gray-900">
                  公告中心
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  联系我们
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  服务条款
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 SoDEX. 保留所有权利.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                ICP备案号：京ICP备XXXXXXXX号
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
