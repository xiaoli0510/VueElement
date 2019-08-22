import Cookies from 'js-cookie'

const state = {
  sidebar: {
    //默认是展开侧边栏
    opened:true,
    // opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    widthoutAnimation: false
  },
  device: 'desktop'
}

const mutations = {
  //pc切换展开收缩侧边栏
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.widthoutAnimation = false;
    if (state.sidebar.opened) {
      //1是展开侧边栏
      Cookies.set('sidebarStatus', 1);
    } else {
      //0是收缩侧边栏
      Cookies.set('sidebarStatus', 0)
    }
  },
  //   移动端关闭侧边栏，即收缩侧边栏
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation
  },
  //切换设备
  TOGGLE_DEVICE:(state,device) => {
    state.device = device;
  }
}

const actions = {
    //提交TOGGLE_SIDEBAR
    toggleSideBar({commit}){
       commit('TOGGLE_SIDEBAR');
    },
    //提交CLOSE_SIDEBAR
    closeSideBar({commit},{widthoutAnimation}){
      commit('CLOSE_SIDEBAR',widthoutAnimation);
    },
    //提交TOGGLE_DEVICE
    toggleDevice({commit},device){
     commit('TOGGLE_DEVICE',device);
    }

}

export default {
  namespaces: true,
  state,
  mutations,
  actions
}
