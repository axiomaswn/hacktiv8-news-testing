import React from 'react'

const showList = (props) => {
  return (<span>
    {
      props.datas.map((data, index) => {
        return(
          <h3 key={index}>
              {data.name}
          </h3>
        )
      })
    }
  </span>
)
}

const emptyList = () => {
  return (<h2>Please Wait...</h2>)
}

export const ListName = (props) => {
  // console.log(props.datas.length);
  return (
    props.datas.length > 0 ? showList(props) : emptyList()

  )
}
