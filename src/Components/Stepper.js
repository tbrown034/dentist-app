import React from 'react'
import { Icon, Step } from 'semantic-ui-react'

const AppointmentStepper = () => (
    <div className="stepper">
  <Step.Group>
    <Step active>
      <Icon name='write square' />
      <Step.Content>
        <Step.Title>Request Appointment</Step.Title>
        <Step.Description>Just fill out the form below and indicate if you a preferred appointment time.</Step.Description>
      </Step.Content>
    </Step>

    <Step >
      <Icon name='phone' />
      <Step.Content>
        <Step.Title>We'll Confirm</Step.Title>
        <Step.Description>We will give you a call to confirm and set up your appointment and answer any questions you have.</Step.Description>
      </Step.Content>
    </Step>

    <Step >
      <Icon name='calendar' />
      <Step.Content>
        <Step.Title>Appointment </Step.Title>
        <Step.Description>Let's Brighten Your Smile!</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
  </div>
)

export default AppointmentStepper