import React from 'react'
import { Button, Gap, Input, TextArea, Upload, Link } from '../../components'
import { useHistory } from 'react-router-dom'
import './createBlog.scss'

const CreateBlog = () => {
    const history = useHistory()
    return (
        <div className='blog-post'>
            <Link title="kembali" onClick={() => history.push('/')} />
            <p className='title'>Create Mew Blog Post</p>
            <Input label="Post Title"/>
            <Upload/>
            <TextArea/>
            <Gap height={20}/>
            <div className='button-action'>
                <Button title="Save" />
            </div>
            <Gap height={20}/>
        </div>
    )
}

export default CreateBlog
