import "./App.css";
import React, { useState, useEffect } from "react"
import axios from "axios"


function App() {

  const [file, setFile] = useState(null)
  const [message, setMessage] = useState("")
  const [arrayOfFiles, setArrayOfFiles] = useState([])

  const fileHandler = (e)=>{
    e.preventDefault()
    setFile(e.target.files[0])

  }

  //////// UPLOADING FILE ///////////////////////////////////
  const saveFile = async (e)=>{

      const formData = new FormData()
      formData.append("tags", message)
      formData.append("File", file)

      const response = await axios ({
        method: 'post',
        url:'http://localhost:3099/api/uploadImage',
        data: formData,
        headers:{
          'Content-Type': `multipart/form-data`
        }
      })
      console.log(response, 'responseeeeeee')
  }


  /////// FILES FROM LAST 5 DOCUMENTS ///////////////////////
  const lastFiles = async () => {

    const formData = new FormData()
    formData.append("tags", message)
    formData.append("File", file)

    const res = await axios ({
      method: 'get',
      url:'http://localhost:3099/api/recentUploads',
      data: formData,
      headers:{
        'Content-Type': `multipart/form-data`
      }
    })
    
    console.log("this is data",res.data)
    setArrayOfFiles(res.data)

  }

  console.log(arrayOfFiles.data)


  //////// DELETE DB /////////////////////////////////

  const deleteAllHandler = async () => {
    
    const response = await axios({
      method: 'delete',
      url: 'http://localhost:3099/api/delete'
    })
    console.log(response)
  }

  console.log(arrayOfFiles)


  return (

        <div className="App">

          <h1>Multer Application</h1> 
          
          <div className='tag'>
          
            <input placeholder='Image description' type="text" value={message} onChange={e => setMessage(e.target.value)}/>
          </div> 

          <div className='fileInputAndButton'>
            <input id='fileInput' type="file" name="uploaded_file" onChange={fileHandler}/>
            <button onClick={saveFile}>SUBMIT</button>
          </div>

          <button className='button' onClick={lastFiles}>Get Images</button>
          <button className='button' onClick={deleteAllHandler}>Delete All</button>

          <div className='images'>
            {
              arrayOfFiles &&
              arrayOfFiles.map((item,index) => 
                 <img 
                 key={index}
                 width="100"
                 src={`http://localhost:3099/api/images/${item._id} `} />
              )
              
            }
            </div>

          

        
        </div>)

}


export default App;
