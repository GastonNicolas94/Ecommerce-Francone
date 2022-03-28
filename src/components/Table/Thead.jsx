
const Thead = ({headers}) => {
  return (
    <thead>
        <tr>
            {headers.map((head)=> <th key={head}>{head}</th>)}
        </tr>
    </thead>
  )
}

export default Thead