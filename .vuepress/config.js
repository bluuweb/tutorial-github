module.exports = {
  title: 'Tutorial GIT / GITHUB',
  description: 'Aprende a utilizar GIT / GITHUB',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Guia', link: '/guia/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
    ],
    sidebar:{
      '/guia/':[
        '',
        'fundamentos',
        'github'
      ]
    }
  }
 
}