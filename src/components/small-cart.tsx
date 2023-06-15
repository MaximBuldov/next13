import Link from 'next/link'
import React from 'react'

export function SmallCart() {
  return (
    <div className="header__cart">
      <Link href="cart" className="button button--cart">
        <span>$30</span>
        <div className="button__delimiter"></div>
        <span>4</span>
      </Link>
    </div>
  )
}
