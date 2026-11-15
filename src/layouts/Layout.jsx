import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const isFirstRender = useRef(true)
  useEffect(() => { isFirstRender.current = false }, [])
  const changedPage = !isFirstRender.current

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-indigo-300">
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      {changedPage && (
        <div key={pathname} aria-hidden="true" className="page-wipe pointer-events-none fixed inset-0 z-30 animate-wipe bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600" />
      )}
      <main
        id="content"
        key={pathname}
        style={{ animationDelay: changedPage ? '380ms' : '0ms' }}
        className="mx-auto w-full max-w-[2800px] flex-1 animate-fade-up px-4 pb-14 pt-28 sm:px-6 lg:px-16"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
