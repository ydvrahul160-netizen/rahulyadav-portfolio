import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const linkColumns = [
    {
      title: "Explore",
      links: [
        { name: "Home", href: "#home" },
        { name: "About Me", href: "#about" },
        { name: "My Projects", href: "#projects" },
        { name: "My Skills", href: "#skills" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.73.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.2 1.15-2.98-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.53.23 2.67.12 2.95.71.78 1.14 1.77 1.14 2.98 0 4.27-2.62 5.22-5.11 5.5.4.35.75 1.02.75 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.98V9.4h2.95v9.5ZM6.45 8.1a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.47 10.8h-2.94v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.7H9.74V9.4h2.82v1.3h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.54 1.95 3.54 4.48v5.24Z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:your-email@example.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden transition-colors duration-300 bg-gray-100 dark:bg-[#080808]`}
    >
      {/* border-gray-300/70 dark:border-white/[0.08] */}
      

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-8 pt-12 sm:px-8 sm:pb-10 sm:pt-16 lg:px-5">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Brand section */}
          <div className="sm:col-span-2 lg:col-span-4">
            <a
              href="#home"
              className={`inline-flex items-center gap-2 text-2xl font-bold tracking-tight ${
                isDark ? "text-white" : "text-gray-950"
              }`}
            >
              <span>
                Rahul<span className="">Yadav</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 opacity-75">
              Building meaningful digital experiences through clean code,
              creative ideas, and thoughtful design.
            </p>

            <a
              href="#contact"
              className={`mt-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                isDark
                  ? "border-gray-600 text-emerald-300 hover:bg-emerald-400/10"
                  : "border-emerald-700/30 text-emerald-800 hover:bg-emerald-600/10"
              }`}
            >
              Let's work together
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Navigation links */}
          {linkColumns.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h3
                className={`mb-5 text-sm font-semibold uppercase tracking-[0.16em] ${
                  isDark ? "text-white" : "text-gray-950"
                }`}
              >
                {column.title}
              </h3>

              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="inline-block text-sm opacity-75 transition-all duration-200 hover:translate-x-1 hover:opacity-100 hover:text-emerald-500"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact and social links */}
          <div className="lg:col-span-4">
            <h3
              className={`mb-5 text-sm font-semibold uppercase tracking-[0.16em] ${
                isDark ? "text-white" : "text-gray-950"
              }`}
            >
              Get in touch
            </h3>

            <p className="mb-4 max-w-sm text-sm leading-6 opacity-75">
              Have an idea or a project in mind? Feel free to reach out.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="break-all text-sm font-medium text-emerald-500 transition-colors hover:text-emerald-400"
            >
              rahulyadav40777@gmail.com
            </a>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  title={social.name}
                  target={
                    social.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "border-white/10 bg-white/[0.03] text-gray-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300"
                      : "border-gray-200 bg-white text-gray-600 hover:border-emerald-600/40 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  <span className="h-5 w-5">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-12 flex flex-col items-center justify-between gap-4 border-t pt-6 text-center sm:mt-16 md:flex-row md:text-left ${
            isDark ? "border-white/10" : "border-gray-200"
          }`}
        >
          <p className="text-xs leading-5 opacity-65">
            © {new Date().getFullYear()} Rahul Yadav. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs"></div>

          <p className="text-xs opacity-65">
            Crafted with <span className="text-red-400">♥</span> and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
