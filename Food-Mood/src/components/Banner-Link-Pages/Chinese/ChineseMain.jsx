import ChineseHero from "./ChineseHero"
import Navbar from '../../../components/Navbar'
import useChineseAPI from "../../../hooks/useChineseAPI"
const ChineseMain = () => {
  useChineseAPI()
  return (
    < div >
      <Navbar/>
      <ChineseHero/>
    </div >
  )
}

export default ChineseMain
