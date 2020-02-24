import React from 'react'

const Filter = ({filterInput, handleFilterChange }) => (
    <div>
        flter shown with: <input
          value={filterInput}
          onChange={handleFilterChange}
        />
    </div>
)

export default Filter