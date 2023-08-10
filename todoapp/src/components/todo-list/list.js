import './list.css';
import deleteImg from '../../images/delete.png'
import editImg from '../../images/edit.png' 

function List({value ,again}){

    
console.log(value)
    return <ul>{
        value.map((v, i) =>

            <li key={i}><span>{v}</span> <div> <button className='editBtn'><img src={editImg} alt='edit' /></button> <button onClick={() => {
               value.splice(i,1)
               again(value)
            }
            } className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>
        )
    }
    </ul>
}



export default List


