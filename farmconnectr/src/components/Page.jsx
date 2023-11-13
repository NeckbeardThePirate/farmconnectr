import Posts from './Posts';
import Menu from './Menu'
const Page = () => {
    
    

    return (
        <>
        <div className='container'>
        <Menu />

                {/* <h1>Welcome @Guest</h1> */}
                <Posts />
            </div>
        </>
    )
}

export default Page