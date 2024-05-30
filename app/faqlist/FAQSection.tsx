

import FAQList from './FAQList';



const FAQSection = () => {

  return (
    <>
<div className="flex items-center mt-8">
            <div className="w-8 h-8 bg-red-500 mr-4"></div>
            <h1 className="font-tomorrow text-3xl text-left">FAQ's</h1>
        </div>
        <div className='mt-8'>
            <FAQList />
        </div>
</>
    
  );
}

export default FAQSection


