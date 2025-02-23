import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function Categories() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  async function getCategories(){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    console.log(data);
    setCategories(data.data);
  }

  useEffect(() => {
    getCategories();
  }, [])

  function openModal(category) {
    setSelectedCategory(category);
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
    setSelectedCategory(null);
  }
  
  return <>
    <div className='flex flex-col md:flex-row flex-wrap justify-center p-4 '>

    {categories.map((category) => (
      <div onClick={() => openModal(category)} key={category.id} className='w-full md:w-1/6 shadow-md text-center rounded-lg mb-4'>
        <div className='flex flex-col gap-4 p-4 object-top'> 

      <img className='w-full h-[200px]'  src={category.image}/>
       <h3>{category.name}</h3> 
        </div>
      </div>
    ))}
    </div>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      >
        {selectedCategory && (
          <div className='text-center'>
            <h2 className='text-xl font-bold mb-4'>{selectedCategory.name}</h2>
            <img className='w-full h-[400px] object-cover rounded' src={selectedCategory.image} alt={selectedCategory.name} />
            <button
              onClick={closeModal}
              className='mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700'
            >
              Close
            </button>
          </div>
        )}
      </Modal>  
  </>
}
