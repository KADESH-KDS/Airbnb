import React from 'react'

function Footer() {
    return (
       <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p> How Airbnb works</p>
                <p> Newroom</p>
                <p>Investers</p>
                <p>Airbnb Plus</p>
                <p>AirbnbLuxe</p>
            </div>


            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p> Accessibility</p>
                <p> This is not a real site</p>
                <p>Its a preety awesome clone</p>
                <p>Referrals accepted</p>
                <p>Papafam</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">PROJECTS</h5>
                <p> Netflix clone</p>
                <p> Form-validation</p>
                <p>Visiting cards</p>
                <p>Airbnb</p>
                <p>Airbnb2021</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p> Help Center</p>
                <p> Trust & Safety</p>
                <p>Say Hi</p>
                <p>Pofessor-Code</p>
                <p>For the win</p>
            </div>
       </div>


    )
}

export default Footer
