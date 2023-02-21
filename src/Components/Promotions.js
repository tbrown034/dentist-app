import Promotion1 from "./Promotion1"
import Promotion2 from "./Promotion2"


const Promotions = () => {
    const hrStyle = {
        border: 'none',
        borderBottom: '1px dotted black',
      };
    return (
        <div className="promotions">
            <h1 id="swiperHead"><span>2023 Deals and Promotions</span></h1>
  
        <div id="promo1"> <Promotion1   /></div>
       
        <hr style={hrStyle} /><br></br>
        <Promotion2/>
        </div>
    )



}

export default Promotions;