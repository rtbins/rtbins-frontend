import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer
      className="site-footer
                d-flex
                justify-content-center"
    >
      <section className="layout-social py-5">
        <a
          className="text-light px-2"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.facebook.com/rohitgupta.yo"
        >
          <FontAwesomeIcon className="layout-icon py-2" icon={['fab', 'facebook']} />
        </a>
        <a
          className="text-light px-2"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.facebook.com/rohitgupta.yo"
        >
          <FontAwesomeIcon className="layout-icon py-2" icon={['fab', 'linkedin']} />
        </a>
        <a
          className="text-light px-2"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.facebook.com/rohitgupta.yo"
        >
          <FontAwesomeIcon className="layout-icon py-2" icon={['fab', 'github']} />
        </a>
        <a
          className="text-light px-2"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.facebook.com/rohitgupta.yo"
        >
          <FontAwesomeIcon className="layout-icon py-2" icon={['fab', 'youtube']} />
        </a>
      </section>
    </footer>
  )
}

export default Footer
