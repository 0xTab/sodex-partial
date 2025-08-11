import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-[#262626]">
      {/* Bottom Status Bar */}
      <div className="flex items-start h-6 bg-[#121212] border-t border-[#262626]">
        {/* Network Status */}
        <div className="flex justify-center items-center px-3 h-full border-r border-[#262626]">
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-end items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.75 4.5V12.5C10.75 12.6989 10.671 12.8897 10.5303 13.0303C10.3897 13.171 10.1989 13.25 10 13.25C9.80109 13.25 9.61032 13.171 9.46967 13.0303C9.32902 12.8897 9.25 12.6989 9.25 12.5V4.5C9.25 4.30109 9.32902 4.11032 9.46967 3.96967C9.61032 3.82902 9.80109 3.75 10 3.75C10.1989 3.75 10.3897 3.82902 10.5303 3.96967C10.671 4.11032 10.75 4.30109 10.75 4.5ZM12.5 1.25C12.3011 1.25 12.1103 1.32902 11.9697 1.46967C11.829 1.61032 11.75 1.80109 11.75 2V12.5C11.75 12.6989 11.829 12.8897 11.9697 13.0303C12.1103 13.171 12.3011 13.25 12.5 13.25C12.6989 13.25 12.8897 13.171 13.0303 13.0303C13.171 12.8897 13.25 12.6989 13.25 12.5V2C13.25 1.80109 13.171 1.61032 13.0303 1.46967C12.8897 1.32902 12.6989 1.25 12.5 1.25ZM7.5 6.25C7.30109 6.25 7.11032 6.32902 6.96967 6.46967C6.82902 6.61032 6.75 6.80109 6.75 7V12.5C6.75 12.6989 6.82902 12.8897 6.96967 13.0303C7.11032 13.171 7.30109 13.25 7.5 13.25C7.69891 13.25 7.88968 13.171 8.03033 13.0303C8.17098 12.8897 8.25 12.6989 8.25 12.5V7C8.25 6.80109 8.17098 6.61032 8.03033 6.46967C7.88968 6.32902 7.69891 6.25 7.5 6.25ZM5 8.75C4.80109 8.75 4.61032 8.82902 4.46967 8.96967C4.32902 9.11032 4.25 9.30109 4.25 9.5V12.5C4.25 12.6989 4.32902 12.8897 4.46967 13.0303C4.61032 13.171 4.80109 13.25 5 13.25C5.19891 13.25 5.38968 13.171 5.53033 13.0303C5.67098 12.8897 5.75 12.6989 5.75 12.5V9.5C5.75 9.30109 5.67098 9.11032 5.53033 8.96967C5.38968 8.82902 5.19891 8.75 5 8.75ZM2.5 11.25C2.30109 11.25 2.11032 11.329 1.96967 11.4697C1.82902 11.6103 1.75 11.8011 1.75 12V12.5C1.75 12.6989 1.82902 12.8897 1.96967 13.0303C2.11032 13.171 2.30109 13.25 2.5 13.25C2.69891 13.25 2.88968 13.171 3.03033 13.0303C3.17098 12.8897 3.25 12.6989 3.25 12.5V12C3.25 11.8011 3.17098 11.6103 3.03033 11.4697C2.88968 11.329 2.69891 11.25 2.5 11.25Z" fill="#18B36B"/>
              </svg>
              <span className="text-[#18B36B] text-xs font-normal leading-4">Stable Connection</span>
            </div>
          </div>
        </div>

        {/* Token Prices */}
        <div className="flex px-6 items-center gap-10 flex-1">
          <div className="flex items-start gap-2">
            <span className="text-white text-xs font-medium leading-5">BTC:</span>
            <span className="text-white text-xs font-semibold leading-5">$509.2</span>
            <span className="text-[#F24237] text-xs font-medium leading-5">-0.27%</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white text-xs font-medium leading-5">ETH:</span>
            <span className="text-white text-xs font-semibold leading-5">$0.00002624</span>
            <span className="text-[#F24237] text-xs font-medium leading-5">-3.10%</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white text-xs font-medium leading-5">LTC:</span>
            <span className="text-white text-xs font-semibold leading-5">$0.5074</span>
            <span className="text-[#18B36B] text-xs font-medium leading-5">+0.22%</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white text-xs font-medium leading-5">BCH:</span>
            <span className="text-white text-xs font-semibold leading-5">$509.2</span>
            <span className="text-[#18B36B] text-xs font-medium leading-5">+0.27%</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white text-xs font-medium leading-5">SOL:</span>
            <span className="text-white text-xs font-semibold leading-5">$509.2</span>
            <span className="text-[#18B36B] text-xs font-medium leading-5">+0.27%</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white text-xs font-medium leading-5">XRP:</span>
            <span className="text-white text-xs font-semibold leading-5">$509.2</span>
            <span className="text-[#18B36B] text-xs font-medium leading-5">+0.27%</span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center items-center px-5 gap-4 border-l border-[#262626]">
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[#A3A3A3] text-center text-xs font-normal leading-4">WhitePaper</span>
              <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#A3A3A3"/>
              </svg>
              <span className="text-[#A3A3A3] text-center text-xs font-normal leading-4">Cookie</span>
              <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#A3A3A3"/>
              </svg>
              <span className="text-[#A3A3A3] text-center text-xs font-normal leading-4">Support</span>
            </div>
            <div className="flex justify-end items-center gap-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 0.666992C12.0501 0.666992 15.333 3.94991 15.333 8C15.333 12.0501 12.0501 15.333 8 15.333C3.94991 15.333 0.666992 12.0501 0.666992 8C0.666992 3.94991 3.94991 0.666992 8 0.666992ZM10.998 5.08105C10.7222 5.08603 10.2984 5.23336 8.2627 6.08008C7.54942 6.37675 6.12414 6.99144 3.98633 7.92285C3.63918 8.0609 3.45698 8.19607 3.44043 8.32812C3.40908 8.58134 3.77439 8.66036 4.2334 8.80957C4.60778 8.93126 5.11126 9.07344 5.37305 9.0791C5.61053 9.08423 5.87534 8.98608 6.16797 8.78516C8.1654 7.43684 9.19698 6.7559 9.26172 6.74121C9.30734 6.73086 9.37023 6.71788 9.41309 6.75586C9.45597 6.79397 9.45181 6.86638 9.44727 6.88574C9.40754 7.04333 7.53464 8.74732 7.42676 8.85938C7.01421 9.28777 6.54479 9.55035 7.26855 10.0273C7.89496 10.4401 8.26002 10.703 8.90527 11.126C9.31774 11.3964 9.64152 11.7169 10.0674 11.6777C10.2633 11.6596 10.4656 11.4751 10.5684 10.9258C10.8113 9.62698 11.289 6.81395 11.3994 5.6543C11.4091 5.5527 11.3965 5.42231 11.3867 5.36523C11.3769 5.30816 11.3564 5.22717 11.2822 5.16699C11.1944 5.09573 11.0587 5.07999 10.998 5.08105Z" fill="#A3A3A3"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M10.5179 15.0834L6.97632 10.1397L2.5427 15.0834H0.666992L6.14415 8.97781L0.666992 1.33337H5.48274L8.82065 5.99276L13.0029 1.33337H14.8786L9.65562 7.15618L15.3337 15.0834H10.5179ZM12.6067 13.6896H11.3439L3.35272 2.72712H4.61569L7.81623 7.1166L8.36968 7.87829L12.6067 13.6896Z" fill="#A3A3A3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
