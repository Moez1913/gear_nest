import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-10 mt-10">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* Website Name and Tagline */}
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <img src="/assets/Gear_nestLogo.png" alt="GearNest Logo" className="h-10 w-10 rounded-full shadow-lg" />
                        <h2 className="text-2xl font-bold tracking-wide">GearNest</h2>
                    </div>
                    <p className="text-sm italic text-slate-300">Empowering your game, one gear at a time.</p>
                    <p className="text-xs mt-2 text-slate-400">&copy; {new Date().getFullYear()} GearNest. All rights reserved.</p>
                </div>
                {/* Contact Info */}
                <div className="text-center">
                    <h3 className="font-semibold mb-1 text-lg">Contact Us</h3>
                    <p className="text-sm">Email: <a href="mailto:support@gearnest.com" className="underline hover:text-blue-400">support@gearnest.com</a></p>
                    <p className="text-sm">Phone: <a href="tel:+1234567890" className="underline hover:text-blue-400">+1 (234) 567-890</a></p>
                    <p className="text-xs text-slate-400 mt-2">123 Sports Ave, Dhaka, Bangladesh</p>
                </div>
                {/* Social Media Links */}
                <div className="flex flex-col items-center gap-2">
                    <h3 className="font-semibold mb-1 text-lg">Follow Us</h3>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg className="w-7 h-7 fill-current hover:text-blue-400 transition" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <svg className="w-7 h-7 fill-current hover:text-blue-300 transition" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.717 0-4.92 2.206-4.92 4.924 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634A9.936 9.936 0 0 0 24 4.557z"/></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg className="w-7 h-7 fill-current hover:text-pink-400 transition" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.392 3.678 1.373c-.98.98-1.244 2.092-1.302 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.613.058 1.281.322 2.393 1.302 3.373.981.981 2.093 1.245 3.374 1.303C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.322 3.374-1.303.98-.98 1.244-2.092 1.302-3.373.058-1.281.07-1.69.07-7.613 0-5.923-.012-6.332-.07-7.613-.058-1.281-.322-2.393-1.302-3.373-.981-.981-2.093-1.245-3.374-1.303C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                        </a>
                    </div>
                    <div className="mt-3 flex gap-2">
                        <a href="/terms" className="text-xs hover:underline text-slate-300">Terms of Service</a>
                        <span className="text-slate-500">|</span>
                        <a href="/privacy" className="text-xs hover:underline text-slate-300">Privacy Policy</a>
                    </div>
                </div>
            </div>
            <div className="text-center text-xs text-slate-500 mt-6">
                Made with <span className="text-pink-400">&hearts;</span> by the GearNest Team
            </div>
        </footer>
    );
};

export default Footer;