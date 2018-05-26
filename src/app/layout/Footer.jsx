import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column is-3 is-offset-2">
          <h2><strong>Find me on</strong></h2>
          <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div className="column is-3">
          <h2><strong>Contacts</strong></h2>
          <ul>
            <li>Phone +44 07745149793</li>
            <li>Email davide.crestini94@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="content has-text-centered">
        <p>
          <a className="icon" href="https://github.com/dansup/bulma-templates">
            <i className="fa fa-github" />
          </a>
        </p>
        <div className="control level-item">
          <a href="https://github.com/dansup/bulma-templates">
            <div className="tags has-addons">
              <span className="tag is-dark">Davide Crestini</span>
              <span className="tag is-info">MIT license</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
