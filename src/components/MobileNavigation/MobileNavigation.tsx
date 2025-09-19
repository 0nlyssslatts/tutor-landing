'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import MobileNavBtn from '@/assets/icons/nav.svg'
import cls from './MobileNavigation.module.css'

export const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavigation = () => {
        setIsOpen(!isOpen)
    }

    const closeNavigation = () => {
        setIsOpen(false)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeNavigation()
        }
    }

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeNavigation()
        }
    }

    return (
        <>
            <div 
                className={cls.MobileNavigation}
                onClick={toggleNavigation}
                role="button"
                tabIndex={0}
                onKeyDown={handleKeyDown}
                aria-label="Toggle mobile navigation"
            >
                <MobileNavBtn />
            </div>

            {isOpen && createPortal(
                <div 
                    className={cls.overlay}
                    onClick={handleBackdropClick}
                    onKeyDown={handleKeyDown}
                    tabIndex={-1}
                >
                    <div className={cls.popup}>
                        <button 
                            className={cls.closeButton}
                            onClick={closeNavigation}
                            aria-label="Close navigation"
                        >
                            ×
                        </button>
                        <nav className={cls.popupNav}>
                            <a href="#intro" onClick={closeNavigation}>Главная</a>
                            <a href="#whoami" onClick={closeNavigation}>Обо мне</a>
                            <a href="#price" onClick={closeNavigation}>Стоимость</a>
                        </nav>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}