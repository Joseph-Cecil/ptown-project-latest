import appDownloadImage from "../../src/assets/appDownload.png";
import landingImage from "../../src/assets/landing.png";

function Homepage() {
  return (
    <div className='flex flex-col gap-12 '>
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className='text-3xl font-bold tracking-tight text-orange-600'>Delivery Fee Be Ghc3.00  P3</h1>
            <span className="text-xl">Your Item Dier Just a Click Away oh</span>
        </div>
        <div className='grid md:grid-cols-2 gap-5'>
            <img src={landingImage}/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Call 0543737012 For Delivery Services!
                </span>
                <span>
                    App No Dey Rydee, Talanku : )    
                </span> 
                <img src={appDownloadImage} /> 
            </div>
        </div>
    </div>
  )
}

export default Homepage