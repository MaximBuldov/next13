import Link from 'next/link';
import { SmallCart } from './small-cart';
import Image from 'next/image';
import logoSrc from '../images/pizza-logo.svg';

export function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link href='/'>
          <div className="header__logo">
            <Image width="38" height="38" src={logoSrc} alt="Pizza logo" />
            <div>
              <h1>Online shop</h1>
              <p>The best pizza in world</p>
            </div>
          </div>
        </Link>
        <SmallCart />
      </div>
    </div>
  )
}
