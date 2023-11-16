import React from 'react';
import NavButton from '../navButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './style.css';

const Header: React.FC = () => {
    const [current, setCurrent] = React.useState<string>(window.location.pathname);
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

    React.useEffect(() => {
        setMenuOpen(false);
    }, [current]);

    return (
        <div className="header">
            <div className="header-top">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
            </div>
            <div className="header-bottom">
                <nav className="web-nav ">
                    <NavButton to="/" label="Home" current={current} setCurrent={setCurrent} />
                    <NavButton to="/missions" label="Missions" current={current} setCurrent={setCurrent} />
                    <NavButton to="/" label="Home" current={current} setCurrent={setCurrent} className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="144" height="110" viewBox="0 0 144 110" fill="none">
                            <g clip-path="url(#clip0_16_727)">
                                <path d="M56.54 52.35L68.22 52.11L66.55 30.7C66.52 28.44 66.81 26.53 67.43 24.97C68.05 23.41 68.98 22.2 70.22 21.33C71.46 20.46 72.99 19.94 74.8 19.76C75.52 19.69 76.32 19.68 77.22 19.74C78.12 19.8 78.99 19.98 79.84 20.28L79.12 7.90998C78.43 7.78998 77.82 7.72998 77.29 7.72998C76.76 7.72998 76.26 7.75998 75.78 7.80998C73.34 8.04998 71.32 8.70998 69.72 9.77998C68.11 10.86 66.96 12.45 66.25 14.57C65.54 16.69 65.19 19.49 65.2 22.96L63.84 23.09L62.33 9.99998L52.87 10.93L54.84 30.85L56.54 52.35Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M74.68 38.8699C74.68 43.7599 75.59 47.8399 77.4 51.0999C78.85 53.6999 80.75 55.7799 83.08 57.3499C83.5 57.6299 84.06 57.3899 84.19 56.91L84.36 56.2499C84.52 55.6199 84.99 55.2599 85.53 55.2599H98.48C99.28 55.2599 99.84 56.0399 99.59 56.7899L98.63 59.74C98.47 60.24 98.87 60.76 99.4 60.7C102.18 60.3899 104.75 59.68 107.12 58.56C110.38 57.01 112.96 54.5999 114.85 51.34C116.74 48.08 117.69 43.9499 117.69 38.9499C117.69 33.9499 116.78 29.9899 114.97 26.7599C113.15 23.5199 110.63 21.0899 107.4 19.4599C104.16 17.8299 100.42 17.0099 96.16 17.0099C91.9 17.0099 88.3 17.8099 85.03 19.4199C81.77 21.0299 79.23 23.4399 77.42 26.6799C75.61 29.9199 74.7 33.9799 74.7 38.8699H74.68ZM96.46 51.6499C94.19 51.6499 92.34 50.9399 90.87 49.5499H102.02C101.75 49.8299 101.46 50.0799 101.15 50.2999C99.91 51.2 98.35 51.6399 96.45 51.6399L96.46 51.6499ZM95.83 26.7199C97.88 26.7199 99.56 27.2299 100.88 28.2599C100.93 28.2999 100.98 28.3499 101.03 28.3999H90.87C91 28.2899 91.12 28.1699 91.26 28.0699C92.52 27.1799 94.05 26.7299 95.84 26.7299L95.83 26.7199ZM88.41 32.0899C88.67 31.3599 88.99 30.7199 89.36 30.1399V47.65C88.1 45.5 87.46 42.5299 87.46 38.7199C87.46 36.09 87.78 33.8799 88.41 32.0899Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M85.75 56.61L78.48 85.41H77.4L70.2 56.61H57.38L69.7 94.55H85.61L97.99 56.61H85.75Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M36.23 30.19C37.11 31.33 38.26 32.12 39.68 32.56C41.1 33 42.72 33.05 44.56 32.71C47.35 32.19 49.31 31.04 50.46 29.24C51.6 27.45 51.95 25.36 51.51 22.98C51.04 20.47 49.92 18.51 48.15 17.12C46.38 15.73 44.17 15.27 41.52 15.77C38.73 16.29 36.74 17.52 35.56 19.46C34.37 21.4 34.01 23.63 34.48 26.15C34.77 27.72 35.35 29.07 36.23 30.2V30.19Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M130.09 91.12C130.85 90.98 131.55 90.94 132.21 91.01C132.25 90.91 132.3 90.81 132.33 90.7C132.86 89.12 133.15 87.45 133.18 85.69L122.83 85.43C122.75 86.13 122.63 86.84 122.47 87.57C122.3 88.31 122 88.99 121.55 89.63C121.1 90.27 120.49 90.82 119.72 91.3C118.95 91.77 117.93 92.12 116.65 92.34C114.05 92.79 111.78 92.28 109.85 90.81C108.27 89.61 107.12 87.6 106.39 84.8L131.8 80.16C131.5 76.71 130.78 73.68 129.65 71.07C128.52 68.46 127.04 66.34 125.23 64.71C123.41 63.08 121.27 61.96 118.81 61.36C116.34 60.76 113.6 60.73 110.57 61.25C107.59 61.76 104.99 62.74 102.78 64.16C100.57 65.59 98.8 67.36 97.48 69.46C96.16 71.56 95.31 73.94 94.91 76.59C94.51 79.24 94.57 82.03 95.08 84.96C95.59 87.94 96.49 90.54 97.78 92.75C99.06 94.96 100.68 96.74 102.65 98.08C104.61 99.42 106.89 100.31 109.5 100.73C112.11 101.16 114.99 101.1 118.16 100.55C120.75 100.1 122.96 99.44 124.81 98.58C124.54 96.82 124.81 95.25 125.66 93.87C126.55 92.42 128.03 91.5 130.11 91.11L130.09 91.12ZM105.88 76.49C106.25 74.7 106.99 73.24 108.09 72.13C109.19 71.02 110.56 70.31 112.22 70.03C113.64 69.79 114.98 69.91 116.23 70.4C117.48 70.89 118.53 71.83 119.38 73.22C119.85 73.99 120.19 74.94 120.42 76.03L105.64 78.73C105.67 77.94 105.73 77.19 105.88 76.5V76.49Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M135.95 96.43C135.69 95.02 135.06 93.93 134.07 93.15C133.08 92.37 131.84 92.12 130.36 92.39C128.8 92.68 127.69 93.37 127.03 94.45C126.37 95.54 126.17 96.78 126.43 98.19C126.59 99.07 126.92 99.82 127.41 100.46C127.9 101.1 128.54 101.54 129.34 101.78C130.13 102.03 131.04 102.05 132.07 101.86C133.63 101.57 134.73 100.92 135.37 99.92C136.01 98.92 136.21 97.75 135.96 96.42L135.95 96.43Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.7944 7.49565L13.3418 8.0697L15.9299 23.636L19.3825 23.062L16.7944 7.49565Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.17 20.25C21.64 20.88 22.19 21.36 22.84 21.7C23.48 22.04 24.21 22.22 25.01 22.26C25.82 22.3 26.69 22.18 27.63 21.9C28.45 21.66 29.13 21.36 29.67 21.01C30.22 20.66 30.64 20.26 30.96 19.81C31.27 19.37 31.48 18.89 31.59 18.4C31.69 17.9 31.72 17.39 31.67 16.85L28.52 17.14C28.52 17.35 28.52 17.58 28.49 17.8C28.47 18.03 28.4 18.25 28.28 18.46C28.17 18.67 28 18.86 27.78 19.03C27.56 19.2 27.26 19.34 26.89 19.46C26.12 19.69 25.41 19.62 24.77 19.24C24.25 18.93 23.83 18.36 23.51 17.54L31.05 15.23C30.83 14.19 30.51 13.3 30.07 12.55C29.63 11.8 29.11 11.21 28.5 10.78C27.89 10.35 27.2 10.09 26.43 9.98996C25.66 9.89996 24.83 9.98996 23.93 10.25C23.04 10.51 22.29 10.9 21.67 11.41C21.05 11.92 20.58 12.52 20.25 13.21C19.92 13.9 19.75 14.65 19.72 15.47C19.69 16.29 19.81 17.13 20.07 18.01C20.33 18.9 20.7 19.65 21.17 20.28V20.25ZM23.57 13.62C23.86 13.24 24.26 12.98 24.75 12.83C25.17 12.71 25.58 12.7 25.98 12.8C26.38 12.9 26.73 13.15 27.04 13.54C27.21 13.76 27.35 14.03 27.46 14.36L23.08 15.7C23.06 15.46 23.04 15.23 23.06 15.02C23.11 14.46 23.28 13.99 23.57 13.62Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M56.38 59.7799C54.81 58.3499 53.01 57.43 51.01 57.0299C49 56.6299 47.05 56.5299 45.16 56.7299C43.26 56.93 41.74 57.1399 40.59 57.3499L26.71 59.93C26.08 60.0499 25.49 60.1 24.95 60.08C24.41 60.06 23.98 59.9599 23.65 59.79C23.32 59.61 23.13 59.38 23.07 59.09C22.98 58.63 23.15 58.0799 23.57 57.4399C23.99 56.7999 24.58 56.02 25.36 55.1C27.47 54.95 28.98 54.82 29.88 54.71C30.78 54.6 31.63 54.47 32.44 54.32C36.41 53.58 39.72 52.46 42.38 50.96C43.74 50.19 44.9 49.35 45.89 48.44V55.99H54.17V47.71H46.62C47.24 47.04 47.77 46.34 48.21 45.6C49.43 43.53 49.83 41.37 49.42 39.13C49.12 37.54 48.36 35.01 47.45 33.14C46.51 33.61 45.43 33.97 44.18 34.2C42.21 34.57 40.46 34.51 38.94 34.04C37.42 33.57 36.18 32.72 35.24 31.5C34.3 30.28 33.67 28.83 33.36 27.15C33.19 26.22 33.13 25.33 33.17 24.47C29.33 23.97 26.45 24.5 26.45 24.5C21.68 25.39 17.83 26.82 14.89 28.79C11.96 30.76 9.9 33.05 8.72 35.65C7.54 38.25 7.21 40.98 7.75 43.86C8.37 47.19 9.89 49.69 12.31 51.35C14.73 53.01 17.73 53.72 21.31 53.47L21.61 55.11C17.88 56.46 15.31 57.95 13.92 59.57C12.53 61.2 11.98 62.8099 12.28 64.4199C12.6 66.1399 13.67 67.1899 15.5 67.57C17.04 67.8899 19.05 67.86 21.51 67.5V69.3799C18.39 70.3499 16.07 71.7099 14.54 73.4599C12.75 75.52 12.1 77.84 12.58 80.4199C12.7 81.0499 12.87 81.63 13.1 82.18C13.69 80.07 15.61 75.9199 21.5 76.1699V78.98C19.17 78.31 15 77.93 13.48 82.97C14.05 83.99 14.83 84.8499 15.84 85.5599C17.62 86.8099 20.17 87.5199 23.51 87.6999C26.84 87.8799 31.07 87.5 36.18 86.55C42.16 85.44 46.98 83.9799 50.66 82.1699C54.34 80.3599 56.9 78.16 58.35 75.57C59.8 72.9799 60.21 69.96 59.57 66.51C59 63.46 57.93 61.2299 56.36 59.79L56.38 59.7799ZM42.7 64.48H29.93C30.88 64.07 31.9 63.76 32.98 63.58C36.17 63.05 39.41 63.75 42.7 64.48ZM36.07 39.29C36.44 41.3 36.15 43.07 35.18 44.58C34.21 46.1 32.55 47.08 30.19 47.51C28.64 47.8 27.26 47.76 26.06 47.38C24.86 47.01 23.89 46.34 23.15 45.38C23.12 45.34 23.1 45.3 23.07 45.26H33.69V34.76C34.91 35.9 35.72 37.39 36.07 39.28V39.29ZM27.62 33.19C29.86 32.77 31.73 33.16 33.23 34.33C33.34 34.42 33.43 34.53 33.54 34.62H24.13C25.06 33.93 26.22 33.44 27.63 33.18L27.62 33.19ZM22.58 36.31C22.72 36.08 22.88 35.86 23.04 35.66V45.23C22.36 44.3 21.9 43.22 21.66 41.96C21.27 39.83 21.57 37.95 22.57 36.31H22.58ZM24.58 80.9499H40.76C40.7 80.9999 40.65 81.0499 40.59 81.0999C35.59 84.9499 28.96 84.5699 24.59 80.9499H24.58ZM47.21 72.29V65.36C48.93 65.61 50.67 65.7299 52.43 65.54C50.23 67.43 48.67 69.84 47.21 72.29Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M56.54 52.35L54.84 30.85L52.87 10.93L62.33 9.99998L63.84 23.09L65.2 22.96C65.2 19.49 65.54 16.69 66.25 14.57C66.96 12.45 68.11 10.85 69.72 9.77998C71.33 8.70998 73.35 8.04998 75.78 7.80998C76.26 7.75998 76.76 7.73998 77.29 7.72998C77.82 7.72998 78.43 7.78998 79.12 7.90998L79.84 20.28C78.99 19.98 78.12 19.8 77.22 19.74C76.32 19.68 75.52 19.69 74.8 19.76C72.98 19.94 71.46 20.46 70.22 21.33C68.98 22.2 68.05 23.41 67.43 24.97C66.81 26.53 66.52 28.44 66.55 30.7L68.22 52.11L56.54 52.35Z" fill="#F9F2DE"/>
                                <path d="M114.96 26.76C113.14 23.52 110.62 21.09 107.39 19.46C104.15 17.83 100.41 17.01 96.15 17.01C91.89 17.01 88.29 17.81 85.02 19.42C81.76 21.03 79.22 23.44 77.41 26.68C75.6 29.92 74.69 33.98 74.69 38.87C74.69 43.76 75.6 47.84 77.41 51.1C78.86 53.7 80.76 55.78 83.09 57.35C83.51 57.63 84.07 57.39 84.2 56.91L84.37 56.25C84.53 55.62 85 55.26 85.54 55.26H98.49C99.29 55.26 99.85 56.04 99.6 56.79L98.64 59.74C98.48 60.24 98.88 60.76 99.41 60.7C102.19 60.39 104.76 59.68 107.13 58.56C110.39 57.01 112.97 54.6 114.86 51.34C116.75 48.08 117.7 43.95 117.7 38.95C117.7 33.95 116.79 29.99 114.98 26.76H114.96ZM103.95 46.29C103.32 48.08 102.38 49.42 101.15 50.31C99.91 51.21 98.35 51.65 96.45 51.65C93.61 51.65 91.4 50.56 89.82 48.38C88.24 46.2 87.45 42.97 87.45 38.71C87.45 36.08 87.77 33.87 88.4 32.08C89.03 30.29 89.98 28.95 91.24 28.06C92.5 27.17 94.03 26.72 95.82 26.72C97.87 26.72 99.55 27.23 100.87 28.26C102.18 29.29 103.18 30.76 103.87 32.68C104.55 34.6 104.9 36.95 104.9 39.74C104.9 42.32 104.58 44.5 103.95 46.29Z" fill="#C5FACC"/>
                                <path d="M69.7 94.55L57.39 56.61H70.21L77.41 85.41H78.49L85.76 56.61H98L85.62 94.55H69.71H69.7Z" fill="#F9F2DE"/>
                                <path d="M35.55 19.45C36.74 17.51 38.72 16.28 41.51 15.76C44.3 15.24 46.37 15.72 48.14 17.11C49.91 18.51 51.03 20.46 51.5 22.97C51.94 25.35 51.59 27.44 50.45 29.23C49.31 31.02 47.34 32.18 44.55 32.7C42.71 33.04 41.09 32.99 39.67 32.55C38.25 32.11 37.1 31.32 36.22 30.18C35.34 29.04 34.76 27.69 34.47 26.13C34 23.62 34.36 21.39 35.55 19.44V19.45Z" fill="#C5FACC"/>
                                <path d="M125.64 93.88C126.53 92.43 128.01 91.51 130.09 91.12C130.85 90.98 131.55 90.94 132.21 91.01C132.25 90.91 132.3 90.81 132.33 90.7C132.86 89.12 133.15 87.45 133.18 85.69L122.83 85.43C122.75 86.13 122.63 86.84 122.47 87.57C122.3 88.31 122 88.99 121.55 89.63C121.1 90.27 120.49 90.82 119.72 91.3C118.95 91.77 117.93 92.12 116.65 92.34C114.05 92.79 111.78 92.28 109.85 90.81C108.27 89.61 107.12 87.6 106.39 84.8L131.8 80.16C131.5 76.71 130.78 73.68 129.65 71.07C128.52 68.46 127.04 66.34 125.23 64.71C123.41 63.08 121.27 61.96 118.81 61.36C116.34 60.76 113.6 60.73 110.57 61.25C107.59 61.76 104.99 62.74 102.78 64.16C100.57 65.59 98.8 67.36 97.48 69.46C96.16 71.56 95.31 73.94 94.91 76.59C94.51 79.24 94.57 82.03 95.08 84.96C95.59 87.94 96.49 90.54 97.78 92.75C99.06 94.96 100.68 96.74 102.65 98.08C104.61 99.42 106.89 100.31 109.5 100.73C112.11 101.16 114.99 101.1 118.16 100.55C120.75 100.1 122.96 99.44 124.81 98.58C124.54 96.82 124.81 95.25 125.66 93.87L125.64 93.88ZM108.09 72.13C109.19 71.02 110.56 70.31 112.22 70.03C113.64 69.79 114.98 69.91 116.23 70.4C117.48 70.89 118.53 71.83 119.38 73.22C119.85 73.99 120.19 74.94 120.42 76.03L105.64 78.73C105.67 77.94 105.73 77.19 105.88 76.5C106.25 74.71 106.99 73.25 108.09 72.14V72.13Z" fill="#F9F2DE"/>
                                <path d="M127.03 94.46C127.69 93.37 128.8 92.69 130.36 92.4C131.92 92.11 133.08 92.38 134.07 93.16C135.06 93.94 135.69 95.03 135.95 96.44C136.2 97.77 136 98.94 135.36 99.94C134.72 100.94 133.62 101.59 132.06 101.88C131.03 102.07 130.12 102.04 129.33 101.8C128.54 101.55 127.89 101.11 127.4 100.48C126.91 99.84 126.58 99.09 126.42 98.21C126.16 96.8 126.36 95.56 127.02 94.47L127.03 94.46Z" fill="#FFB537"/>
                                <path d="M15.93 23.64L13.34 8.08001L16.79 7.51001L19.38 23.07L15.93 23.64Z" fill="#F9F2DE"/>
                                <path d="M27.64 21.89C26.7 22.17 25.82 22.29 25.02 22.25C24.21 22.21 23.49 22.03 22.85 21.69C22.21 21.35 21.65 20.87 21.18 20.24C20.71 19.61 20.35 18.86 20.08 17.97C19.81 17.08 19.7 16.25 19.73 15.43C19.76 14.61 19.93 13.86 20.26 13.17C20.58 12.48 21.06 11.89 21.68 11.37C22.3 10.86 23.05 10.47 23.94 10.21C24.83 9.94998 25.67 9.85998 26.44 9.94998C27.21 10.04 27.9 10.31 28.51 10.74C29.12 11.17 29.64 11.76 30.08 12.51C30.52 13.26 30.84 14.15 31.06 15.19L22.46 17.83L21.93 16.04L28.54 14.01L27.68 15.21C27.57 14.48 27.36 13.92 27.05 13.52C26.74 13.13 26.39 12.88 25.99 12.78C25.59 12.68 25.18 12.69 24.76 12.81C24.27 12.96 23.87 13.22 23.58 13.6C23.29 13.98 23.12 14.45 23.07 15C23.02 15.56 23.1 16.2 23.32 16.91C23.66 18.06 24.15 18.83 24.79 19.2C25.43 19.58 26.14 19.65 26.91 19.42C27.29 19.31 27.59 19.17 27.8 18.99C28.02 18.82 28.18 18.63 28.3 18.42C28.42 18.21 28.48 17.99 28.51 17.76C28.53 17.53 28.54 17.31 28.54 17.1L31.69 16.81C31.74 17.35 31.71 17.86 31.61 18.36C31.5 18.86 31.3 19.33 30.98 19.77C30.67 20.21 30.24 20.61 29.69 20.97C29.14 21.32 28.46 21.62 27.65 21.86L27.64 21.89Z" fill="#F9F2DE"/>
                                <path d="M59.59 66.5C59.02 63.45 57.95 61.22 56.38 59.78C54.81 58.35 53.01 57.43 51.01 57.03C49 56.63 47.05 56.53 45.16 56.73C43.26 56.93 41.74 57.14 40.59 57.35L26.71 59.93C26.08 60.05 25.49 60.1 24.95 60.08C24.41 60.06 23.98 59.96 23.65 59.79C23.32 59.61 23.13 59.38 23.07 59.09C22.98 58.63 23.15 58.08 23.57 57.44C23.99 56.8 24.58 56.02 25.36 55.1C27.47 54.95 28.98 54.82 29.88 54.71C30.78 54.6 31.63 54.47 32.44 54.32C36.41 53.58 39.72 52.46 42.38 50.96C45.04 49.46 46.99 47.67 48.21 45.6C49.43 43.53 49.83 41.37 49.42 39.13C49.12 37.54 48.36 35.01 47.45 33.14C46.51 33.61 45.43 33.97 44.18 34.2C42.21 34.57 40.46 34.51 38.94 34.04C37.42 33.57 36.18 32.72 35.24 31.5C34.3 30.28 33.67 28.83 33.36 27.15C33.19 26.22 33.13 25.33 33.17 24.47C29.33 23.97 26.45 24.5 26.45 24.5C21.68 25.39 17.83 26.82 14.89 28.79C11.96 30.76 9.9 33.05 8.72 35.65C7.54 38.25 7.21 40.98 7.75 43.86C8.37 47.19 9.89 49.69 12.31 51.35C14.73 53.01 17.73 53.72 21.31 53.47L21.61 55.11C17.88 56.46 15.31 57.95 13.92 59.57C12.53 61.2 11.98 62.81 12.28 64.42C12.6 66.14 13.67 67.19 15.5 67.57C17.32 67.95 19.79 67.84 22.89 67.27L23.19 68.91C19.21 69.89 16.32 71.4 14.54 73.46C12.75 75.52 12.1 77.84 12.58 80.42C12.7 81.05 12.87 81.63 13.1 82.18C13.71 79.99 15.74 75.61 22.13 76.2C22.1 70.23 26.47 64.69 32.98 63.61C39.27 62.57 45.7 66.3 52.44 65.57C47.31 70 45.64 77.24 40.59 81.13C35.01 85.42 27.38 84.46 23.15 79.6C23.15 79.6 15.65 75.82 13.49 82.99C14.06 84.01 14.84 84.87 15.85 85.58C17.63 86.83 20.18 87.54 23.52 87.72C26.85 87.9 31.08 87.52 36.19 86.57C42.17 85.46 46.99 84 50.67 82.19C54.35 80.38 56.91 78.18 58.36 75.59C59.81 73 60.22 69.98 59.58 66.53L59.59 66.5ZM21.68 41.97C21.29 39.84 21.59 37.96 22.59 36.32C23.59 34.68 25.27 33.64 27.63 33.2C29.87 32.78 31.74 33.17 33.24 34.34C34.74 35.52 35.68 37.17 36.08 39.3C36.45 41.31 36.16 43.08 35.19 44.59C34.22 46.11 32.56 47.09 30.2 47.52C28.65 47.81 27.27 47.77 26.07 47.39C24.87 47.02 23.9 46.35 23.16 45.39C22.42 44.43 21.92 43.29 21.68 41.96V41.97Z" fill="#F9F2DE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_16_727">
                                <rect width="143.56" height="109.49" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </NavButton>
                    <NavButton to="/doc" label="Documentation" current={current} setCurrent={setCurrent} />
                    <NavButton to="/contact" label="Contact" current={current} setCurrent={setCurrent} />
                    <button className="nav-button" onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>
                </nav>
                <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
                    <NavButton to="/" label="Home" current={current} setCurrent={setCurrent} className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="144" height="110" viewBox="0 0 144 110" fill="none">
                            <g clip-path="url(#clip0_16_727)">
                                <path d="M56.54 52.35L68.22 52.11L66.55 30.7C66.52 28.44 66.81 26.53 67.43 24.97C68.05 23.41 68.98 22.2 70.22 21.33C71.46 20.46 72.99 19.94 74.8 19.76C75.52 19.69 76.32 19.68 77.22 19.74C78.12 19.8 78.99 19.98 79.84 20.28L79.12 7.90998C78.43 7.78998 77.82 7.72998 77.29 7.72998C76.76 7.72998 76.26 7.75998 75.78 7.80998C73.34 8.04998 71.32 8.70998 69.72 9.77998C68.11 10.86 66.96 12.45 66.25 14.57C65.54 16.69 65.19 19.49 65.2 22.96L63.84 23.09L62.33 9.99998L52.87 10.93L54.84 30.85L56.54 52.35Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M74.68 38.8699C74.68 43.7599 75.59 47.8399 77.4 51.0999C78.85 53.6999 80.75 55.7799 83.08 57.3499C83.5 57.6299 84.06 57.3899 84.19 56.91L84.36 56.2499C84.52 55.6199 84.99 55.2599 85.53 55.2599H98.48C99.28 55.2599 99.84 56.0399 99.59 56.7899L98.63 59.74C98.47 60.24 98.87 60.76 99.4 60.7C102.18 60.3899 104.75 59.68 107.12 58.56C110.38 57.01 112.96 54.5999 114.85 51.34C116.74 48.08 117.69 43.9499 117.69 38.9499C117.69 33.9499 116.78 29.9899 114.97 26.7599C113.15 23.5199 110.63 21.0899 107.4 19.4599C104.16 17.8299 100.42 17.0099 96.16 17.0099C91.9 17.0099 88.3 17.8099 85.03 19.4199C81.77 21.0299 79.23 23.4399 77.42 26.6799C75.61 29.9199 74.7 33.9799 74.7 38.8699H74.68ZM96.46 51.6499C94.19 51.6499 92.34 50.9399 90.87 49.5499H102.02C101.75 49.8299 101.46 50.0799 101.15 50.2999C99.91 51.2 98.35 51.6399 96.45 51.6399L96.46 51.6499ZM95.83 26.7199C97.88 26.7199 99.56 27.2299 100.88 28.2599C100.93 28.2999 100.98 28.3499 101.03 28.3999H90.87C91 28.2899 91.12 28.1699 91.26 28.0699C92.52 27.1799 94.05 26.7299 95.84 26.7299L95.83 26.7199ZM88.41 32.0899C88.67 31.3599 88.99 30.7199 89.36 30.1399V47.65C88.1 45.5 87.46 42.5299 87.46 38.7199C87.46 36.09 87.78 33.8799 88.41 32.0899Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M85.75 56.61L78.48 85.41H77.4L70.2 56.61H57.38L69.7 94.55H85.61L97.99 56.61H85.75Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M36.23 30.19C37.11 31.33 38.26 32.12 39.68 32.56C41.1 33 42.72 33.05 44.56 32.71C47.35 32.19 49.31 31.04 50.46 29.24C51.6 27.45 51.95 25.36 51.51 22.98C51.04 20.47 49.92 18.51 48.15 17.12C46.38 15.73 44.17 15.27 41.52 15.77C38.73 16.29 36.74 17.52 35.56 19.46C34.37 21.4 34.01 23.63 34.48 26.15C34.77 27.72 35.35 29.07 36.23 30.2V30.19Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M130.09 91.12C130.85 90.98 131.55 90.94 132.21 91.01C132.25 90.91 132.3 90.81 132.33 90.7C132.86 89.12 133.15 87.45 133.18 85.69L122.83 85.43C122.75 86.13 122.63 86.84 122.47 87.57C122.3 88.31 122 88.99 121.55 89.63C121.1 90.27 120.49 90.82 119.72 91.3C118.95 91.77 117.93 92.12 116.65 92.34C114.05 92.79 111.78 92.28 109.85 90.81C108.27 89.61 107.12 87.6 106.39 84.8L131.8 80.16C131.5 76.71 130.78 73.68 129.65 71.07C128.52 68.46 127.04 66.34 125.23 64.71C123.41 63.08 121.27 61.96 118.81 61.36C116.34 60.76 113.6 60.73 110.57 61.25C107.59 61.76 104.99 62.74 102.78 64.16C100.57 65.59 98.8 67.36 97.48 69.46C96.16 71.56 95.31 73.94 94.91 76.59C94.51 79.24 94.57 82.03 95.08 84.96C95.59 87.94 96.49 90.54 97.78 92.75C99.06 94.96 100.68 96.74 102.65 98.08C104.61 99.42 106.89 100.31 109.5 100.73C112.11 101.16 114.99 101.1 118.16 100.55C120.75 100.1 122.96 99.44 124.81 98.58C124.54 96.82 124.81 95.25 125.66 93.87C126.55 92.42 128.03 91.5 130.11 91.11L130.09 91.12ZM105.88 76.49C106.25 74.7 106.99 73.24 108.09 72.13C109.19 71.02 110.56 70.31 112.22 70.03C113.64 69.79 114.98 69.91 116.23 70.4C117.48 70.89 118.53 71.83 119.38 73.22C119.85 73.99 120.19 74.94 120.42 76.03L105.64 78.73C105.67 77.94 105.73 77.19 105.88 76.5V76.49Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M135.95 96.43C135.69 95.02 135.06 93.93 134.07 93.15C133.08 92.37 131.84 92.12 130.36 92.39C128.8 92.68 127.69 93.37 127.03 94.45C126.37 95.54 126.17 96.78 126.43 98.19C126.59 99.07 126.92 99.82 127.41 100.46C127.9 101.1 128.54 101.54 129.34 101.78C130.13 102.03 131.04 102.05 132.07 101.86C133.63 101.57 134.73 100.92 135.37 99.92C136.01 98.92 136.21 97.75 135.96 96.42L135.95 96.43Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.7944 7.49565L13.3418 8.0697L15.9299 23.636L19.3825 23.062L16.7944 7.49565Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.17 20.25C21.64 20.88 22.19 21.36 22.84 21.7C23.48 22.04 24.21 22.22 25.01 22.26C25.82 22.3 26.69 22.18 27.63 21.9C28.45 21.66 29.13 21.36 29.67 21.01C30.22 20.66 30.64 20.26 30.96 19.81C31.27 19.37 31.48 18.89 31.59 18.4C31.69 17.9 31.72 17.39 31.67 16.85L28.52 17.14C28.52 17.35 28.52 17.58 28.49 17.8C28.47 18.03 28.4 18.25 28.28 18.46C28.17 18.67 28 18.86 27.78 19.03C27.56 19.2 27.26 19.34 26.89 19.46C26.12 19.69 25.41 19.62 24.77 19.24C24.25 18.93 23.83 18.36 23.51 17.54L31.05 15.23C30.83 14.19 30.51 13.3 30.07 12.55C29.63 11.8 29.11 11.21 28.5 10.78C27.89 10.35 27.2 10.09 26.43 9.98996C25.66 9.89996 24.83 9.98996 23.93 10.25C23.04 10.51 22.29 10.9 21.67 11.41C21.05 11.92 20.58 12.52 20.25 13.21C19.92 13.9 19.75 14.65 19.72 15.47C19.69 16.29 19.81 17.13 20.07 18.01C20.33 18.9 20.7 19.65 21.17 20.28V20.25ZM23.57 13.62C23.86 13.24 24.26 12.98 24.75 12.83C25.17 12.71 25.58 12.7 25.98 12.8C26.38 12.9 26.73 13.15 27.04 13.54C27.21 13.76 27.35 14.03 27.46 14.36L23.08 15.7C23.06 15.46 23.04 15.23 23.06 15.02C23.11 14.46 23.28 13.99 23.57 13.62Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M56.38 59.7799C54.81 58.3499 53.01 57.43 51.01 57.0299C49 56.6299 47.05 56.5299 45.16 56.7299C43.26 56.93 41.74 57.1399 40.59 57.3499L26.71 59.93C26.08 60.0499 25.49 60.1 24.95 60.08C24.41 60.06 23.98 59.9599 23.65 59.79C23.32 59.61 23.13 59.38 23.07 59.09C22.98 58.63 23.15 58.0799 23.57 57.4399C23.99 56.7999 24.58 56.02 25.36 55.1C27.47 54.95 28.98 54.82 29.88 54.71C30.78 54.6 31.63 54.47 32.44 54.32C36.41 53.58 39.72 52.46 42.38 50.96C43.74 50.19 44.9 49.35 45.89 48.44V55.99H54.17V47.71H46.62C47.24 47.04 47.77 46.34 48.21 45.6C49.43 43.53 49.83 41.37 49.42 39.13C49.12 37.54 48.36 35.01 47.45 33.14C46.51 33.61 45.43 33.97 44.18 34.2C42.21 34.57 40.46 34.51 38.94 34.04C37.42 33.57 36.18 32.72 35.24 31.5C34.3 30.28 33.67 28.83 33.36 27.15C33.19 26.22 33.13 25.33 33.17 24.47C29.33 23.97 26.45 24.5 26.45 24.5C21.68 25.39 17.83 26.82 14.89 28.79C11.96 30.76 9.9 33.05 8.72 35.65C7.54 38.25 7.21 40.98 7.75 43.86C8.37 47.19 9.89 49.69 12.31 51.35C14.73 53.01 17.73 53.72 21.31 53.47L21.61 55.11C17.88 56.46 15.31 57.95 13.92 59.57C12.53 61.2 11.98 62.8099 12.28 64.4199C12.6 66.1399 13.67 67.1899 15.5 67.57C17.04 67.8899 19.05 67.86 21.51 67.5V69.3799C18.39 70.3499 16.07 71.7099 14.54 73.4599C12.75 75.52 12.1 77.84 12.58 80.4199C12.7 81.0499 12.87 81.63 13.1 82.18C13.69 80.07 15.61 75.9199 21.5 76.1699V78.98C19.17 78.31 15 77.93 13.48 82.97C14.05 83.99 14.83 84.8499 15.84 85.5599C17.62 86.8099 20.17 87.5199 23.51 87.6999C26.84 87.8799 31.07 87.5 36.18 86.55C42.16 85.44 46.98 83.9799 50.66 82.1699C54.34 80.3599 56.9 78.16 58.35 75.57C59.8 72.9799 60.21 69.96 59.57 66.51C59 63.46 57.93 61.2299 56.36 59.79L56.38 59.7799ZM42.7 64.48H29.93C30.88 64.07 31.9 63.76 32.98 63.58C36.17 63.05 39.41 63.75 42.7 64.48ZM36.07 39.29C36.44 41.3 36.15 43.07 35.18 44.58C34.21 46.1 32.55 47.08 30.19 47.51C28.64 47.8 27.26 47.76 26.06 47.38C24.86 47.01 23.89 46.34 23.15 45.38C23.12 45.34 23.1 45.3 23.07 45.26H33.69V34.76C34.91 35.9 35.72 37.39 36.07 39.28V39.29ZM27.62 33.19C29.86 32.77 31.73 33.16 33.23 34.33C33.34 34.42 33.43 34.53 33.54 34.62H24.13C25.06 33.93 26.22 33.44 27.63 33.18L27.62 33.19ZM22.58 36.31C22.72 36.08 22.88 35.86 23.04 35.66V45.23C22.36 44.3 21.9 43.22 21.66 41.96C21.27 39.83 21.57 37.95 22.57 36.31H22.58ZM24.58 80.9499H40.76C40.7 80.9999 40.65 81.0499 40.59 81.0999C35.59 84.9499 28.96 84.5699 24.59 80.9499H24.58ZM47.21 72.29V65.36C48.93 65.61 50.67 65.7299 52.43 65.54C50.23 67.43 48.67 69.84 47.21 72.29Z" fill="#144D3A" stroke="#144D3A" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M56.54 52.35L54.84 30.85L52.87 10.93L62.33 9.99998L63.84 23.09L65.2 22.96C65.2 19.49 65.54 16.69 66.25 14.57C66.96 12.45 68.11 10.85 69.72 9.77998C71.33 8.70998 73.35 8.04998 75.78 7.80998C76.26 7.75998 76.76 7.73998 77.29 7.72998C77.82 7.72998 78.43 7.78998 79.12 7.90998L79.84 20.28C78.99 19.98 78.12 19.8 77.22 19.74C76.32 19.68 75.52 19.69 74.8 19.76C72.98 19.94 71.46 20.46 70.22 21.33C68.98 22.2 68.05 23.41 67.43 24.97C66.81 26.53 66.52 28.44 66.55 30.7L68.22 52.11L56.54 52.35Z" fill="#F9F2DE"/>
                                <path d="M114.96 26.76C113.14 23.52 110.62 21.09 107.39 19.46C104.15 17.83 100.41 17.01 96.15 17.01C91.89 17.01 88.29 17.81 85.02 19.42C81.76 21.03 79.22 23.44 77.41 26.68C75.6 29.92 74.69 33.98 74.69 38.87C74.69 43.76 75.6 47.84 77.41 51.1C78.86 53.7 80.76 55.78 83.09 57.35C83.51 57.63 84.07 57.39 84.2 56.91L84.37 56.25C84.53 55.62 85 55.26 85.54 55.26H98.49C99.29 55.26 99.85 56.04 99.6 56.79L98.64 59.74C98.48 60.24 98.88 60.76 99.41 60.7C102.19 60.39 104.76 59.68 107.13 58.56C110.39 57.01 112.97 54.6 114.86 51.34C116.75 48.08 117.7 43.95 117.7 38.95C117.7 33.95 116.79 29.99 114.98 26.76H114.96ZM103.95 46.29C103.32 48.08 102.38 49.42 101.15 50.31C99.91 51.21 98.35 51.65 96.45 51.65C93.61 51.65 91.4 50.56 89.82 48.38C88.24 46.2 87.45 42.97 87.45 38.71C87.45 36.08 87.77 33.87 88.4 32.08C89.03 30.29 89.98 28.95 91.24 28.06C92.5 27.17 94.03 26.72 95.82 26.72C97.87 26.72 99.55 27.23 100.87 28.26C102.18 29.29 103.18 30.76 103.87 32.68C104.55 34.6 104.9 36.95 104.9 39.74C104.9 42.32 104.58 44.5 103.95 46.29Z" fill="#C5FACC"/>
                                <path d="M69.7 94.55L57.39 56.61H70.21L77.41 85.41H78.49L85.76 56.61H98L85.62 94.55H69.71H69.7Z" fill="#F9F2DE"/>
                                <path d="M35.55 19.45C36.74 17.51 38.72 16.28 41.51 15.76C44.3 15.24 46.37 15.72 48.14 17.11C49.91 18.51 51.03 20.46 51.5 22.97C51.94 25.35 51.59 27.44 50.45 29.23C49.31 31.02 47.34 32.18 44.55 32.7C42.71 33.04 41.09 32.99 39.67 32.55C38.25 32.11 37.1 31.32 36.22 30.18C35.34 29.04 34.76 27.69 34.47 26.13C34 23.62 34.36 21.39 35.55 19.44V19.45Z" fill="#C5FACC"/>
                                <path d="M125.64 93.88C126.53 92.43 128.01 91.51 130.09 91.12C130.85 90.98 131.55 90.94 132.21 91.01C132.25 90.91 132.3 90.81 132.33 90.7C132.86 89.12 133.15 87.45 133.18 85.69L122.83 85.43C122.75 86.13 122.63 86.84 122.47 87.57C122.3 88.31 122 88.99 121.55 89.63C121.1 90.27 120.49 90.82 119.72 91.3C118.95 91.77 117.93 92.12 116.65 92.34C114.05 92.79 111.78 92.28 109.85 90.81C108.27 89.61 107.12 87.6 106.39 84.8L131.8 80.16C131.5 76.71 130.78 73.68 129.65 71.07C128.52 68.46 127.04 66.34 125.23 64.71C123.41 63.08 121.27 61.96 118.81 61.36C116.34 60.76 113.6 60.73 110.57 61.25C107.59 61.76 104.99 62.74 102.78 64.16C100.57 65.59 98.8 67.36 97.48 69.46C96.16 71.56 95.31 73.94 94.91 76.59C94.51 79.24 94.57 82.03 95.08 84.96C95.59 87.94 96.49 90.54 97.78 92.75C99.06 94.96 100.68 96.74 102.65 98.08C104.61 99.42 106.89 100.31 109.5 100.73C112.11 101.16 114.99 101.1 118.16 100.55C120.75 100.1 122.96 99.44 124.81 98.58C124.54 96.82 124.81 95.25 125.66 93.87L125.64 93.88ZM108.09 72.13C109.19 71.02 110.56 70.31 112.22 70.03C113.64 69.79 114.98 69.91 116.23 70.4C117.48 70.89 118.53 71.83 119.38 73.22C119.85 73.99 120.19 74.94 120.42 76.03L105.64 78.73C105.67 77.94 105.73 77.19 105.88 76.5C106.25 74.71 106.99 73.25 108.09 72.14V72.13Z" fill="#F9F2DE"/>
                                <path d="M127.03 94.46C127.69 93.37 128.8 92.69 130.36 92.4C131.92 92.11 133.08 92.38 134.07 93.16C135.06 93.94 135.69 95.03 135.95 96.44C136.2 97.77 136 98.94 135.36 99.94C134.72 100.94 133.62 101.59 132.06 101.88C131.03 102.07 130.12 102.04 129.33 101.8C128.54 101.55 127.89 101.11 127.4 100.48C126.91 99.84 126.58 99.09 126.42 98.21C126.16 96.8 126.36 95.56 127.02 94.47L127.03 94.46Z" fill="#FFB537"/>
                                <path d="M15.93 23.64L13.34 8.08001L16.79 7.51001L19.38 23.07L15.93 23.64Z" fill="#F9F2DE"/>
                                <path d="M27.64 21.89C26.7 22.17 25.82 22.29 25.02 22.25C24.21 22.21 23.49 22.03 22.85 21.69C22.21 21.35 21.65 20.87 21.18 20.24C20.71 19.61 20.35 18.86 20.08 17.97C19.81 17.08 19.7 16.25 19.73 15.43C19.76 14.61 19.93 13.86 20.26 13.17C20.58 12.48 21.06 11.89 21.68 11.37C22.3 10.86 23.05 10.47 23.94 10.21C24.83 9.94998 25.67 9.85998 26.44 9.94998C27.21 10.04 27.9 10.31 28.51 10.74C29.12 11.17 29.64 11.76 30.08 12.51C30.52 13.26 30.84 14.15 31.06 15.19L22.46 17.83L21.93 16.04L28.54 14.01L27.68 15.21C27.57 14.48 27.36 13.92 27.05 13.52C26.74 13.13 26.39 12.88 25.99 12.78C25.59 12.68 25.18 12.69 24.76 12.81C24.27 12.96 23.87 13.22 23.58 13.6C23.29 13.98 23.12 14.45 23.07 15C23.02 15.56 23.1 16.2 23.32 16.91C23.66 18.06 24.15 18.83 24.79 19.2C25.43 19.58 26.14 19.65 26.91 19.42C27.29 19.31 27.59 19.17 27.8 18.99C28.02 18.82 28.18 18.63 28.3 18.42C28.42 18.21 28.48 17.99 28.51 17.76C28.53 17.53 28.54 17.31 28.54 17.1L31.69 16.81C31.74 17.35 31.71 17.86 31.61 18.36C31.5 18.86 31.3 19.33 30.98 19.77C30.67 20.21 30.24 20.61 29.69 20.97C29.14 21.32 28.46 21.62 27.65 21.86L27.64 21.89Z" fill="#F9F2DE"/>
                                <path d="M59.59 66.5C59.02 63.45 57.95 61.22 56.38 59.78C54.81 58.35 53.01 57.43 51.01 57.03C49 56.63 47.05 56.53 45.16 56.73C43.26 56.93 41.74 57.14 40.59 57.35L26.71 59.93C26.08 60.05 25.49 60.1 24.95 60.08C24.41 60.06 23.98 59.96 23.65 59.79C23.32 59.61 23.13 59.38 23.07 59.09C22.98 58.63 23.15 58.08 23.57 57.44C23.99 56.8 24.58 56.02 25.36 55.1C27.47 54.95 28.98 54.82 29.88 54.71C30.78 54.6 31.63 54.47 32.44 54.32C36.41 53.58 39.72 52.46 42.38 50.96C45.04 49.46 46.99 47.67 48.21 45.6C49.43 43.53 49.83 41.37 49.42 39.13C49.12 37.54 48.36 35.01 47.45 33.14C46.51 33.61 45.43 33.97 44.18 34.2C42.21 34.57 40.46 34.51 38.94 34.04C37.42 33.57 36.18 32.72 35.24 31.5C34.3 30.28 33.67 28.83 33.36 27.15C33.19 26.22 33.13 25.33 33.17 24.47C29.33 23.97 26.45 24.5 26.45 24.5C21.68 25.39 17.83 26.82 14.89 28.79C11.96 30.76 9.9 33.05 8.72 35.65C7.54 38.25 7.21 40.98 7.75 43.86C8.37 47.19 9.89 49.69 12.31 51.35C14.73 53.01 17.73 53.72 21.31 53.47L21.61 55.11C17.88 56.46 15.31 57.95 13.92 59.57C12.53 61.2 11.98 62.81 12.28 64.42C12.6 66.14 13.67 67.19 15.5 67.57C17.32 67.95 19.79 67.84 22.89 67.27L23.19 68.91C19.21 69.89 16.32 71.4 14.54 73.46C12.75 75.52 12.1 77.84 12.58 80.42C12.7 81.05 12.87 81.63 13.1 82.18C13.71 79.99 15.74 75.61 22.13 76.2C22.1 70.23 26.47 64.69 32.98 63.61C39.27 62.57 45.7 66.3 52.44 65.57C47.31 70 45.64 77.24 40.59 81.13C35.01 85.42 27.38 84.46 23.15 79.6C23.15 79.6 15.65 75.82 13.49 82.99C14.06 84.01 14.84 84.87 15.85 85.58C17.63 86.83 20.18 87.54 23.52 87.72C26.85 87.9 31.08 87.52 36.19 86.57C42.17 85.46 46.99 84 50.67 82.19C54.35 80.38 56.91 78.18 58.36 75.59C59.81 73 60.22 69.98 59.58 66.53L59.59 66.5ZM21.68 41.97C21.29 39.84 21.59 37.96 22.59 36.32C23.59 34.68 25.27 33.64 27.63 33.2C29.87 32.78 31.74 33.17 33.24 34.34C34.74 35.52 35.68 37.17 36.08 39.3C36.45 41.31 36.16 43.08 35.19 44.59C34.22 46.11 32.56 47.09 30.2 47.52C28.65 47.81 27.27 47.77 26.07 47.39C24.87 47.02 23.9 46.35 23.16 45.39C22.42 44.43 21.92 43.29 21.68 41.96V41.97Z" fill="#F9F2DE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_16_727">
                                <rect width="143.56" height="109.49" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </NavButton>
                    <button className="nav-button" onClick={() => setMenuOpen(!menuOpen)}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>
                </nav>
                {
                    menuOpen &&
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavButton to="/" label="Home" current={current} setCurrent={setCurrent} />
                        </li>
                        <li className="nav-item">
                            <NavButton to="/missions" label="Missions" current={current} setCurrent={setCurrent} />
                        </li>
                        <li className="nav-item">
                            <NavButton to="/doc" label="Documentation" current={current} setCurrent={setCurrent} />
                        </li>
                        <li className="nav-item">
                            <NavButton to="/contact" label="Contact" current={current} setCurrent={setCurrent} />
                        </li>
                    </ul>
                }
            </div>
        </div>
    );
}

export default Header;
