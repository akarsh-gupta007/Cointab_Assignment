import React from 'react'
import { TableContainer,  Th, Table, Tr, Thead, Tbody } from '@chakra-ui/react'
import UserTable from './UserTable'
import "./Style.css"
const UserProfileTable = ({ page, setPage, data, number }) => {
  return (
    <>

    
      <TableContainer>
        <Table variant='striped' colorScheme='pink'>
          <Thead>
            <Tr>
              <Th>Avatar</Th>
              <Th>Name</Th>
              <Th>Location</Th>
              <Th>Gender</Th>
              <Th>Mail</Th>
              <Th >Phone</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              data.map(elem => (
                <UserTable data={elem} />
              ))
            }

          </Tbody>

        </Table>
      </TableContainer>
      <div className='datachangebtn' >
        <div className='datachangebtn2'>
          <button className='prevandnextbtn'  disabled={page == 1} onClick={() => setPage(page - 1)}>PREV</button>
          <button className='pagenumberbtn'>{page}</button>

          <button className='prevandnextbtn' disabled={page == number} onClick={() => { setPage(page + 1) }}>NEXT</button>
        </div>

      </div>
    </>
  )
}

export default UserProfileTable