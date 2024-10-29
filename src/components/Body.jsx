import { useState } from 'react'
import { Data } from '../../data'
import Card from './Card'
import DataModal from './DataModal'

const Body = () => {
  const [users, setUsers] = useState(Data)
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState('')

  const onSubmit = (data) => {
    users[id].name = data.name
    users[id].email = data.email
    users[id].phone = data.phone
    users[id].url = data.website
    users[id].imgurl = data.imageurl
    setShowModal(false)
    console.log(data)
  }

  const handleShowModal = (status) => {
    setShowModal(status)
  }

  const handleId = (id) => {
    setId(id)
  }

  return (
    <div className="flex flex-wrap gap-4  items-center">
      {showModal ? (
        <DataModal handleShowModal={handleShowModal} onSubmit={onSubmit} />
      ) : (
        ''
      )}

      {users.map((val) => (
        <Card
          value={val}
          handleId={handleId}
          key={val.id}
          handleShowModal={handleShowModal}
        />
      ))}
    </div>
  )
}

export default Body
