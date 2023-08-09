import './list.css';
 import deleteImg from '../../images/delete.png'
 import editImg from '../../images/edit.png'
const List = ()=>{
    return<ul>
        <li><span>Apple</span> <div> <button className='editBtn'><img src={editImg} alt='edit' /></button> <button className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>
        <li><span>Mango</span> <div> <button className='editBtn'><img src={editImg} alt='edit' /></button> <button className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>
        <li><span>Banana</span> <div> <button className='editBtn'><img src={editImg} alt='edit' /></button> <button className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>
        <li><span>Pineapple</span> <div> <button className='editBtn'><img src={editImg} alt='edit' /></button> <button className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>
        <li><span>Orange</span> <div> <button className='editBtn'><img src={editImg} alt='edit' /></button> <button className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>
        <li><span>Cherry</span> <div> <button className='editBtn'><img src={editImg} alt='edit' /></button> <button className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>
        <li><span>Papaya</span> <div> <button className='editBtn'><img src={editImg} alt='edit' /></button> <button className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>
        <li><span>Raspberries</span> <div> <button className='editBtn'><img src={editImg} alt='edit' /></button> <button className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>
        <li><span>Strawberries</span> <div> <button className='editBtn'><img src={editImg} alt='edit' /></button> <button className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>
        <li><span>Apricot</span> <div> <button className='editBtn'><img src={editImg} alt='edit' /></button> <button className='dltBtn'><img src={deleteImg} alt='delete' /></button></div></li>

    </ul>
}



export default List


