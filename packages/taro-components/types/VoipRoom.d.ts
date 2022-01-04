import { ComponentType } from 'react'
import { StandardProps } from './common'
import { StyleProp, ViewStyle } from 'react-native'

interface VoipRoomProps extends StandardProps {
  /** 进入房间用户的 openid
   * @default none
   * @supported weapp, swan, alipay, tt, h5
   */
  openId?: string

  /** 对话窗口类型，自身传入 camera，其它用户传入 video
   * @default camera
   * @supported weapp, swan, alipay, tt, h5
   */
  mode?: keyof VoipRoomProps.mode

  /** 仅在 mode 为 camera 时有效，前置或后置，值为front, back
   * @default front
   * @supported weapp, swan, alipay, tt, h5
   */
  devicePosition?: keyof VoipRoomProps.devicePosition

  /** 创建对话窗口失败时触发
   * @supported weapp
   */
  onError?: CommonEventFunction
}

namespace VoipRoomProps {
  /** 对话窗口类型 */
  interface mode {
    camera
    video
  }

  /** 摄像头类型 */
  interface devicePosition {
    front
    back
  }
}

/** 多人音视频对话
 *
 * 需用户授权 `scope.camera`、`scope.record`。相关接口： [Taro.joinVoIPChat](https://developers.weixin.qq.com/miniprogram/dev/api/media/voip/wx.joinVoIPChat.html)
 * 开通该组件权限后，开发者可在 joinVoIPChat 成功后，获取房间成员的 openid，传递给 voip-room 组件，以显示成员画面。
 * @classification media
 * @supported weapp
 * @example
 * ```tsx
 * export default class PageView extends Component {
 *   constructor() {
 *     super(...arguments)
 *   }
 *
 *   render() {
 *     return (
 *       <VoipRoom
 *         openId="{{item}}"
 *         mode="{{selfOpenId === item ? 'camera' : 'video'}}">
 *       </VoipRoom>
 *     )
 *   }
 * }
 * ```
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/voip-room.html
 */
declare const VoipRoom: ComponentType<VoipRoomProps>

export { VoipRoom, VoipRoomProps }