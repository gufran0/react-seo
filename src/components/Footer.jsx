const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Footer Logo or Brand */}
          <div>
            <p className="text-lg font-semibold text-blue-500">MyWebsite</p>
          </div>

          {/* Social Media Links */}
          <div className="space-x-6">
            <link href="#" className="text-blue-400 hover:text-blue-600" />
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46c0 .98.79 1.77 1.77 1.77h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM12 18.24c-3.48 0-6.3-2.8-6.3-6.3 0-3.49 2.82-6.3 6.3-6.3 3.49 0 6.3 2.8 6.3 6.3 0 3.49-2.81 6.3-6.3 6.3zm0-10.26c-2.22 0-4.02 1.8-4.02 4.02 0 2.22 1.8 4.02 4.02 4.02 2.22 0 4.02-1.8 4.02-4.02 0-2.22-1.8-4.02-4.02-4.02zm6.36 11.47c0 .73-.59 1.32-1.32 1.32h-4.29c.04-.21.07-.43.07-.64v-7.13h4.23c.73 0 1.32.59 1.32 1.32v4.14zM7.94 12.98V9.85H4.79v3.13h3.15zm-.37 3.33H4.79V19h3.78c1.4 0 2.52-1.12 2.52-2.52s-1.12-2.52-2.52-2.52z"
              />
            </svg>
            
            <link href="#" className="text-blue-400 hover:text-blue-600" />
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm1-14.24h-2V12h2v-4.24zm-1 5.24h-2v6h2v-6z"
              />
            </svg>

            <link href="#" className="text-blue-400 hover:text-blue-600" />
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.494 12.5c0-6.111-4.886-11.006-10.984-11.006-6.087 0-11.006 4.885-11.006 11.006 0 6.088 4.885 11.006 11.006 11.006 6.098 0 10.984-4.895 10.984-11.006zm-2.47 0c0 4.855-3.942 8.798-8.798 8.798-4.856 0-8.798-3.943-8.798-8.798 0-4.856 3.942-8.798 8.798-8.798 4.856 0 8.798 3.942 8.798 8.798zm-12.707 0h3.35v6.306h-3.35v-6.306zm1.675-4.727c1.004 0 1.813.81 1.813 1.813 0 1.003-.809 1.812-1.813 1.812-.993 0-1.8-.809-1.8-1.812 0-1.003.807-1.813 1.8-1.813z"
              />
            </svg>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-gray-400 text-sm">
          &copy; 2024 MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;