import defaultSettings from '@/settings'

const {showSettings,fixedHeader,sidebarLogo}  = defaultSettings

const state = {
    showSettings:showSettings,
    fixedHeader:fixedHeader,
    sidebarLogo:sidebarLogo
}

const mutations = {
    //改变设置
    CHANGE_SETTING:(state,{key,value}) => {
        if(state.hasOwnProperty(key)){
            state[key] = value
        }
    }
}

const actions = {
    //commit CHANGE_SETTING
    changeSetting({commit},data){
       commit('CHANGE_SETTING',data)
    }

}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}