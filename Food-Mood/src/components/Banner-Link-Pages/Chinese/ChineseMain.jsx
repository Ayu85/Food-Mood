import ChineseHero from "./ChineseHero"
import Navbar from '../../../components/Navbar'
import useChineseAPI from "../../../hooks/useChineseAPI"
import ChineseContent from "./ChineseContent"
const ChineseMain = () => {
  useChineseAPI()
  return (
    < div >
      <Navbar/>
      <ChineseHero/>
      <ChineseContent/>
    </div >
  )
}

export default ChineseMain
