import { useState, useEffect } from 'react'
import { RouterLink } from '@/components'
import { addEventListener } from '@/utils'
import cls from 'classnames'

export function HeaderComponent() {
  // __STATE <React.Hooks>
  const [sticky, setSticky] = useState(false)

  // __MOUNTED <React.Hooks>
  useEffect(() => {
    function listener(): void {
      setSticky(window.scrollY > 100)
    }

    addEventListener('scroll', listener)
  }, [])

  // __RENDER
  return (
    <header className={cls('ui--header', { 'is-sticky': sticky })}>
      <div className='ui--header-logo'>
        unset <span className='color'>logo</span>
      </div>

      <div className='ui--header-menu'>
        <RouterLink href='/'>
          <span className='text'>index</span>
        </RouterLink>

        <RouterLink href='/collects'>
          <span className='text'>collects</span>
        </RouterLink>

        <div className='ui--header-menu-contact'>
          <a className='contact btn-icon' href='tel:+66946040222'>
            <svg className='icon bi bi-phone' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z'
              />
              <path fillRule='evenodd' d='M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z' />
            </svg>
          </a>

          <a className='contact btn-icon' href='mailto:pinn.project@outlook.com'>
            <svg className='icon bi bi-envelope-open' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z'
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
