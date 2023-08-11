import './footer.css'
const Footer = (props) => {
return <div className='footer'>
    <button onClick={()=>{
        props.clrAll()
    }}>Clear All</button>
</div>
}
export default Footer