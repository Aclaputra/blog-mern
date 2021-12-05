import React from 'react'
import { RegisterBg } from '../../assets'
import { Gap, Link } from '../../components'
import { useHistory } from 'react-router-dom'
import './detailBlog.scss'

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className='detail-blog-wrapper'>
            <img className='img-cover' src={RegisterBg} alt="thumb"/>
            <p className='blog-title'>Title Blog</p>
            <p className='blog-author'>Author - Date Post</p>
            <p className='blog-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit consequat iaculis. Aliquam magna enim, varius vel metus vitae, hendrerit sodales tellus. Duis commodo vestibulum accumsan. Proin aliquam congue felis, at porta lorem lobortis sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed rhoncus, ante non ullamcorper blandit, nisi dui tristique ante, ac venenatis dui lacus vel purus. Mauris condimentum feugiat venenatis. Sed sodales augue neque, quis semper mauris pulvinar at. Nam pharetra dui nec augue placerat, ut blandit erat dictum. Quisque tincidunt facilisis blandit. Praesent sagittis luctus consectetur. Donec maximus mi ex, eu viverra diam laoreet vitae. Cras commodo condimentum velit vitae scelerisque. Sed ac ipsum porta, scelerisque est id, condimentum leo. Mauris eu purus vel urna lobortis ornare. Ut vitae feugiat magna, a sagittis nisl.
            <br></br>
            Phasellus condimentum tortor orci, nec tempus dui tincidunt vel. Curabitur ante est, vestibulum eu eleifend sit amet, venenatis sed mauris. Nulla facilisi. Aenean ultrices posuere turpis quis iaculis. Mauris eu dapibus odio, vitae porttitor erat. Nunc iaculis suscipit nibh, vel semper purus porttitor ac. Nulla faucibus libero at massa scelerisque, sed placerat enim gravida. Duis consectetur, urna a auctor viverra, eros quam efficitur sapien, in aliquet lorem urna at neque. Duis sollicitudin sem ac eleifend laoreet. Nulla volutpat sapien vel metus tincidunt laoreet. Integer rhoncus sapien sit amet lorem elementum pharetra. Fusce vitae porttitor elit.
            </p>
            <Gap height={20}/>
            <Link title="Kembali Ke Home" onClick={() => history.push()}/> 
        </div>
    )
}

export default DetailBlog
