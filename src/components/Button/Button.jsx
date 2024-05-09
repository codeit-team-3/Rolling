import ButtonBase from "../ButtonBase"
import ButtonPrimary from "../ButtonPrimary"
import ButtonSecondary from "../ButtonSecondary"
import ButtonOutlined from "../ButtonOutlined"

const Button = Object.assign(ButtonBase, {
  Primary: ButtonPrimary,
  Secondary: ButtonSecondary,
  Outlined: ButtonOutlined,
})

export default Button
