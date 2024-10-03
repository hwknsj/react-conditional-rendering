'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Hidden from '@/components/hidden'
import Conditional from '@/components/conditional'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section>
          <Hidden />
        </section>
        <section>
          <Conditional />
        </section>
      </main>
    </div>
  )
}
