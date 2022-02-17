module.exports = {
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth:375,
      viewportHeight:667,
      unitPrecision:5,
      viewportUnit:'vw',
      selectorBlankList:['ignore','tabBar','tabbar-item'],
      minPixelValue:1,
      mediaQuery:false,
      exclude:[/TabBar/]
    }
  }
}
