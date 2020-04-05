import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const priorityOptions = [
  {
    name: 'prioridad',
    key: 'Leve',
    text: 'Leve',
    value: 'Leve',
    image: { avatar: true, src: 'https://lh3.googleusercontent.com/proxy/Uq4NLq7JeB26Yv28QYa3vKfNdu3Mp-8beifaeN7jwlE43VWlA1N8GNT9vvb_71GW7sR6A1W489jprbuqYF2wIBN4OeJEXql3X5MXyLaT2teqNOexVb6OL4Dtk0j4Tzq8eQ' },
  },
  {
    key: 'Media',
    text: 'Media',
    value: 'Media',
    image: { avatar: true, src: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/medium-priority-3-581027.png' },
  },
  {
    key: 'Alta',
    text: 'Alta',
    value: 'Alta',
    image: { avatar: true, src: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/high-priority-2-563742.png' },
  }
]
/*
const state = {
  value: { text: 'Football', id: 2 }
};

handleChange = (event) => {
  this.setState({
      value: event.target.value
  });
}*/ç


const DropdownExampleSelection = () => (
  <Dropdown
    placeholder='Selecciona la prioridad'
    fluid
    selection
    options={priorityOptions}
  />
)

export default DropdownExampleSelection