'use client'
import { useState, useRef, useEffect, useCallback, useMemo } from 'react'

const Hidden = ({}) => {
  const [active, setActive] = useState(false)
  const navRef = useRef(null)

  const gen = useCallback(
    (i) =>
      Math.log(Date.now() * Math.log(i + 10))
        .toString()
        .slice(0, 4),
    []
  )

  const listItems = useMemo(
    () =>
      Array(200)
        .fill(0)
        .map((_, i) => (
          <li role="presentation" key={gen(i + 11)}>
            <a href="#" role="menuitem">
              {gen(i + 11)
                .toString()
                .slice(0, 4)}
            </a>
          </li>
        )),
    []
  )

  useEffect(() => {
    if (navRef.current) {
      let nav = navRef.current.style as CSS2Properties
      if (!active) {
        nav.setProperty('visibility', 'hidden')
        nav.setProperty('display', 'none')
      } else {
        nav.setProperty('visibility', 'visible')
        nav.setProperty('display', 'grid')
      }
    }
  }, [active, navRef.current])

  return (
    <>
      <button
        onClick={() => setActive(() => !active)}
        type="button"
        className={active ? `active` : ``}
        id="button-hide"
      >
        Hidden render
      </button>

      <nav
        ref={navRef}
        aria-expanded={active}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="button-hide"
        style={{
          position: 'relative',
          visibility: `${active ? 'visible' : 'hidden'}`,
          display: `${active ? 'grid' : 'none'}`
        }}
      >
        <ul aria-orientation="vertical" style={{ position: 'absolute' }}>
          <li role="presentation">
            <a href="#" role="menuitem">
              2min
            </a>
          </li>
          <li role="presentation">
            <a href="#" role="menuitem">
              15min
            </a>
          </li>
          <li role="presentation">
            <a href="#" role="menuitem">
              30days
            </a>
          </li>
          {listItems}
        </ul>
      </nav>
    </>
  )
}

export default Hidden
