import './list.css';
import deleteImg from '../../images/delete.png'
import editImg from '../../images/edit.png' 

function List(props){

    
    return <ul>{
        props.value.map((v, i) =>

            <li key={i}><span>{v}</span> <div> <button onClick={()=>{
                props.edittodo(i)
            }} className='editBtn'><img src={editImg} alt='edit' /></button> <button onClick={() => {
            props.value.splice(i,1)

             props.dlttodo(props.value)
            }
            } className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>
        )
    }
    </ul>
}



export default List