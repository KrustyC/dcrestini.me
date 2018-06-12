import React from 'react'
import { Column, Footer, Icon } from 'uikit'

const CustomFooter = () => (
  <Footer>
    <div className="container columns">
      <Column columns={4}>
        <Footer.Heading>Find me on</Footer.Heading>
        <Footer.List>
          <Footer.List.Item>
            <a
              href="https://www.linkedin.com/in/davide-crestini-833aa011a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="fab fa-linkedin" /> LinkedIn
            </a>
          </Footer.List.Item>
          <Footer.List.Item>
            <a
              href="https://github.com/KrustyC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="fab fa-github" /> Github
            </a>
          </Footer.List.Item>
          <Footer.List.Item>
            <a
              href="https://www.facebook.com/davide.crestini.1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="fab fa-facebook" /> Facebook
            </a>
          </Footer.List.Item>
        </Footer.List>
      </Column>
      <Column columns={4}>
        <Footer.Heading>Contacts</Footer.Heading>
        <Footer.List>
          <Footer.List.Item>
            <Icon icon="fas fa-envelope" /> davide.crestini94@gmail.com
          </Footer.List.Item>
        </Footer.List>
      </Column>
    </div>
    <Footer.BottomContent>
      <Footer.Addons left="Davide Crestini" right="MIT License" />
    </Footer.BottomContent>
  </Footer>
)

export default CustomFooter
