import React from 'react'

const showList = (props) => {
  return (<span>
    {
      props.datas.map((data, index) => {
        return(
          <p key={index}>
            <a href={data.url} target="_blank">
              {data.title}
            </a>
          </p>
        )
      })
    }
  </span>
  )
}

const emptyList = () => {
  return (<h2>Please Wait...</h2>)
}

export const List = (props) => {
  console.log(props.datas.length);
  return (
    props.datas.length > 0 ? showList(props) : emptyList()
  )
}
