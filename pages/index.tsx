import { FaUser } from 'react-icons/fa6';
import { ImLab } from 'react-icons/im';
import { HiOutlinePlus } from 'react-icons/hi2';
import { MdOutlineSearch } from 'react-icons/md';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import Apps from '../components/Apps';
export default function Home() {
  const router = useRouter();
  const toggleSwitch = useRef(null);
  const appDiv = useRef(null);
  const sidebarRef = useRef(null);
  const searchInput = useRef(null);
  const searchBox = useRef(null);

  const toggleTheme = (e: any) => {
    e.preventDefault();
    appDiv.current.classList.toggle('dark');
    toggleSwitch.current.classList.toggle('dark');
  };

  const openSidebar = (e: any) => {
    e.preventDefault();
    sidebarRef.current.classList.add('open');
  };

  const search = (e: any) => {
    e.preventDefault();
    const query = searchInput.current.value;
    if (!query) {
      searchInput.current.focus();
    } else {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <div className="app" ref={appDiv}>
      <Head>
        <title>Google-Clone</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/160px-Google_%22G%22_Logo.svg.png"
        />
      </Head>

      <header>
        {/* <Sidebar ref={sidebarRef} /> */}
        {/* <span> */}
        {/* <button className="sidebarToggle icon" onClick={openSidebar}>
            <MenuAlt1Icon />
          </button> */}
        {/* <ul className="nav">
            <li>Images</li>
            <li>Videos</li>
            <li>News</li>
            <li>Explore</li>
          </ul> */}
        {/* </span> */}
        <div className="header">
          {/* <div className="themeToggle icon" ref={toggleSwitch} onClick={toggleTheme}>
            <SunIcon className="sun" />
            <MoonIcon className="moon" />
          </div> */}
          <ul className="nav">
            <li>
              <a href="https://mail.google.com/mail">Gmail</a>
            </li>
            <li>
              <a href="https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl">Images</a>
            </li>
          </ul>
          <a href="https://labs.google.com/search" className="lab_icon icon">
            <ImLab size={20} />
          </a>
          <Apps />
          <a href="#" className="user_icon icon">
            <FaUser size={20} />
          </a>
        </div>
      </header>

      <main>
        <div className="logo">
          <img src="/google.svg" alt="google logo" />
        </div>
        <div className="searchContainer">
          <form onSubmit={search} className="search" ref={searchBox}>
            <MdOutlineSearch className="searchIcon" size={22} />
            <input
              type="text"
              placeholder="Search Google or type a URL"
              ref={searchInput}
              onFocus={() => searchBox.current.classList.add('focus')}
              onBlur={() => searchBox.current.classList.remove('focus')}
            />
            <div className="input_icon">
              <span className="mic_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="#4285F4"
                    d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"
                  />
                  <path fill="#34A853" d="M11 18.92h2V22h-2z" />
                  <path
                    fill="#F4B400"
                    d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0 0 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"
                  />
                </svg>
              </span>
            </div>
          </form>
          <button className="shortcut">
            <span className="plus_icon">
              <HiOutlinePlus size={22} />
            </span>
            Add shortcut
          </button>
        </div>
      </main>
    </div>
  );
}
