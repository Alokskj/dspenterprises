import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AddReviewButton = () => {
  return (
    <a className='' href="reviews/add-review">
    <div className="flex flex-col z-2 gap-2 justify-center  group items-center fixed  bottom-12 right-8">
    <p className='hidden group-hover:block text-sm duration-500 transition-all font-semibold bg-gray-400 rounded-xl p-2 text-white '>Add Review</p>
    <div className='flex  justify-center items-center  p-8 mx-4 cursor-pointer rounded-full bg-theme focus:bg-indigo-700 hover:bg- focus:outline-none text-white shadow-2xl w-12 h-12'>
        <FontAwesomeIcon icon={faAdd} color='white' fontSize={22}/>
    </div>
    </div>
    </a>
  )
}

export default AddReviewButton