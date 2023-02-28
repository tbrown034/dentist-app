import React from 'react'
import { Image } from 'semantic-ui-react'
import CDS from "./Images/cds1.png"
import ADA from "./Images/ada-logo1.svg"
import AES from "./Images/AES1.png"
import Fellow from "./Images/Fellow.png"


const Logos = () => (
  <div className="logos">
    <Image.Group size='medium'>
    <Image src={ADA} />
      <Image src={CDS} />
      
      <Image src={AES} />
      <Image src={Fellow} />
    </Image.Group>
  </div>
)

export default Logos