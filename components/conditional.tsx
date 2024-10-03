'use client'

import { useState, useCallback, useMemo, useRef, useEffect } from 'react'

const Conditional = ({}) => {
  const [active, setActive] = useState(false)
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
          <li role="presentation" key={gen(i + 1)}>
            <a href="#" role="menuitem">
              {gen(i + 1)
                .toString()
                .slice(0, 4)}
            </a>
          </li>
        )),
    []
  )

  const handleClick = () => {
    setActive(() => !active)
  }

  return (
    <>
      <button
        onClick={() => setActive(() => !active)}
        type="button"
        className={active ? `active` : ``}
        id="button-conditional"
      >
        Conditional render
      </button>
      {active && (
        <nav
          aria-expanded={active}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="button-conditional"
          style={{ position: 'relative', display: 'grid' }}
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
      )}
    </>
  )
}

export default Conditional
