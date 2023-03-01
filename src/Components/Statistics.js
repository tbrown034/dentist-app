import React from 'react'
import { Icon, Statistic, Item } 
from 'semantic-ui-react'
import { MDBIcon } from "mdb-react-ui-kit";
import AGD from "./Images/AGD.png"

const Statistics = () => (
    <div className="statistics">
        <Item.Group>
    <Item>
      <Item.Image size='large' src={AGD} />

      <Item.Content>
        <Item.Header as='a'>What it Means to be Fellow</Item.Header>
       
        <Item.Description><MDBIcon fas icon="quote-left" />If your dentist is a Fellow or Master of the Academy of General Dentistry (FAGD or MAGD), they are the best of the best in the field. You can rest assured that your dentist cares about knowing the latest techniques and best practices in dentistry. Your dentist practices these techniques in a classroom setting multiple times a year — not every dentist does this.<MDBIcon fas icon="quote-right" />
        </Item.Description>
        <Item.Extra>- Academy of General Dentistry</Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
  <Statistic.Group widths='four'>
    <Statistic>
      <Statistic.Value>6%</Statistic.Value>
      <Statistic.Label>Of U.S. Dentists become a Fellow</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        500 Hours

      </Statistic.Value>
      <Statistic.Label>Required of continuing education</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        350 Hours
      </Statistic.Value>
      <Statistic.Label>Required of Live Courses</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
      <Icon name='book' />

      </Statistic.Value>
      <Statistic.Label>Must pass a board-certified exam</Statistic.Label>
    </Statistic>
  </Statistic.Group>
</div>
)

export default Statistics
