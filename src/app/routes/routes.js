import loadable from 'loadable-components'

export const Home = loadable(() => import(/* webpackChunkName: "home" */ 'pages/home'))
export const About = loadable(() => import(/* webpackChunkName: "about" */ 'pages/about'))
export const Portfolio = loadable(() => import(/* webpackChunkName: "portfolio" */ 'pages/portfolio'))
export const Contact = loadable(() => import(/* webpackChunkName: "contact" */ 'pages/contact'))
export const NotFound = loadable(() => import(/* webpackChunkName: "not-found" */ 'pages/not-found'))
