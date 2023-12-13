// import { useEffect, useState } from 'react'

// import axios from 'axios'

// function App() {
//   const [file, setFile] = useState(0);
// const [image,setImage]=useState()

//   const handleClick=(e)=>{
//     // e.preventDefault;
//     // console.log(file);
//     const formdata = new FormData()
//     formdata.append('file', file)
//     axios.post('http://localhost:2000/upload',formdata)
//     .then(res => console.log(res))
//     // .then(res=> setImage(res.data[0].image))
//     .catch(err => console.log(err))


//   }

//   useEffect(()=>{
//     axios.get('http://localhost:2000/getimage')
//     // .then(res => console.log(res))
//     .then(res=> setImage(res.data[1].image))
//     .catch(err => console.log(err))
//   },[])

//   return (
//     <>
// <input type='file' onChange={(e)=>setFile(e.target.files[0])}/>
// <button onClick={handleClick}>upload</button>
    
//     <img src={`http://localhost:2000/images/`+image}></img>
    
//     </>
//   )
// }

// export default App


import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState('');

  const handleClick = () => {
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:2000/upload', formData)
      .then((res) => {
        console.log(res.data);
        // Assuming the response contains the filename or image data
        setImage(res.data.image);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get('http://localhost:2000/getimage')
      .then((res) => {
        console.log(res.data);
        // Assuming res.data is an array of image objects, and you want the first one
        setImage(res.data[0].image);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleClick}>Upload</button>

      {image && <img src={`http://localhost:2000/images/${image}`} alt="Uploaded" />}
    </>
  );
}

export default App;
