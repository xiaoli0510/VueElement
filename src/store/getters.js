const getters = {
  sidebar:state=> state.app.sidebar,
  device:state=>state.app.device,
  opened:state=>state.app.sidebar.opened,
  widthoutAnimation:state=>state.app.widthoutAnimation
}
export default getters