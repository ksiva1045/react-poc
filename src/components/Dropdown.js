import axios from 'axios'
import { React, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function Dropdown ({ selectServer }) {
    const [selected, setSelected] = useState('')
    const [optionList, setOptionList] = useState([])

    const handleSelect = (val) => {
        setSelected(val)
        selectServer(val)
    }

    const fetchData = () => {
        // http://localhost:8080/smvalidation/server/all/os
          axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const { data } = response
                if (response.status === 200) {
                    setOptionList(data)
                } else {
                    //
                }
             })
             .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <select
        disabled={false}
        value={selected}
        defaultValue={'select'}
        onChange={ (e) => handleSelect(e.currentTarget.value) }>
        {optionList.map((item) => (
            <option key={item.id}>
                {item.name}
            </option>
        ))}
    </select>
  )
}
Dropdown.propTypes = {
    selectServer: PropTypes.func
}

export default Dropdown
