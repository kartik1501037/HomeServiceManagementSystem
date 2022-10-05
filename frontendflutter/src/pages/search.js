// import axios from 'axios'
// import { useState } from 'react'
// import { toast } from 'react-toastify'
// import Button from '../components/button'
// import Input from '../components/input'
// import  config from '../pages/config'
// const Search = () => {
//     const [listings, setListings] = useState([])
//     const [searchText, setSearchText] = useState('')
  
//     const searchService = () => {
//       if (searchText.length === 0) {
//         toast.error('please enter text')
//       } else {
//           axios
//             .get(config.serverURL + '/service/get_all_my_services/' + searchText, {
//               headers: { token: sessionStorage['token'] },
//             })
//             .then((response) => {
//               const result = response.data
//               console.log(result)
//               if (result['status'] === 'success') {
//                 setListings(result['data'])
//               } else {
//                 toast.error(result['error'])
//               }
//             })
//       }
//     }
  
//     return (
//       <div className='container'>
//         <h1 style={{ textAlign: 'center', margin: 20 }}>Search</h1>
//         <Input
//           onChange={(e) => setSearchText(e.target.value)}
//           title='Search Here !'
//           />
//         <Button title='Search Service' onClick={searchService} />
  
//         {listings.map((listing) => {
//           const imageUrl = config.serverURL + '/' + listing.image
//           return (
//             <div
//               key={listing.id}
//               className='col-3'
//               style={{
//                 position: 'relative',
//                 padding: 20,
//                 display: 'inline-block',
//                 cursor: 'pointer',
//               }}>
//               <img
//                 alt='home'
//                 style={{
//                   height: 200,
//                   width: '100%',
//                   display: 'block',
//                   borderRadius: 10,
//                 }}
//                  src={imageUrl}
//               />
//               <div style={{ marginTop: 20 }}>
//                 <h5 className='card-title'>{listing.title}</h5>
//                 <p>
//                 </p>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }


// export default Search;
