import ButtonOutlined from "./components/ButtonOutlined"
import ButtonPrimary from "./components/ButtonPrimary"
import ButtonSecondary from "./components/ButtonSecondary"
import ButtonCircleAdd from "./components/ButtonCircleAdd"
import GlobalHeader from "./components/GlobalHeader"
import RollingPaperHeader from "./components/RollingPaperHeader"
import { useEffect } from "react"
import { getRecipient } from "./services/api"
import { useState } from "react"

function App() {
  // const { recipientId } = useParams()
  const [recipient, setRecipient] = useState()

  useEffect(() => {
    const fetchData = async () => {
      // getRecipient(recipientId)
      const { data } = await getRecipient(805)
      setRecipient(data)
    }

    fetchData()
  }, [])

  return (
    <>
      <GlobalHeader />
      {recipient && <RollingPaperHeader recipient={recipient} />}
      <ButtonOutlined size="56">Size56</ButtonOutlined>
      <ButtonOutlined size="40">Size40</ButtonOutlined>
      <ButtonOutlined size="36">Size36</ButtonOutlined>
      <ButtonOutlined icon="add" size="40">
        Size40
      </ButtonOutlined>
      <ButtonOutlined size="36" icon="add">
        Size36
      </ButtonOutlined>
      <ButtonOutlined size="28" icon="add">
        Size28
      </ButtonOutlined>
      <ButtonOutlined size="28" icon="add" disabled={true}>
        Size28
      </ButtonOutlined>
      <ButtonOutlined icon="delete" />
      <ButtonOutlined icon="delete" disabled={true} />
      <ButtonPrimary size="56">Primary56</ButtonPrimary>
      <ButtonPrimary size="56" disabled={true}>
        Primary56
      </ButtonPrimary>
      <ButtonPrimary size="40">Primary40</ButtonPrimary>
      <ButtonSecondary>Secondary</ButtonSecondary>
      <ButtonSecondary disabled={true}>Secondary</ButtonSecondary>
      <ButtonCircleAdd />
    </>
  )
}

export default App
