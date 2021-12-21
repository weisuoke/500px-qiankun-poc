import store from './store/store'

const microApps = [
  {
    name: 'reactApp',
    entry: '//localhost:3001',
    container: '#subapp-viewport',
    activeRule: '/app-react'
  },
  {
    name: 'vueApp',
    entry: '//localhost:3002',
    container: '#subapp-viewport',
    activeRule: '/app-vue'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    props: {
      routerBase: item.activeRule,
      getGlobalState: store.getGlobalState,
    }
  }
})

export default apps