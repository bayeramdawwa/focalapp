import './Blog.css';
import bigboy from './../assets/img/Bigboy.svg'
import userone from './../assets/img/Ellipse 57.svg'
import usertwo from './../assets/img/Ellipse 2.svg'
import userthree from './../assets/img/Ellipse 3.svg'
import Vectorone from './../assets/img/Vector.svg'
import Vectortwo from './../assets/img/Vector (2).svg'
import robot from './../assets/img/card3.svg'
import book from './../assets/img/book.svg'
import laptop from './../assets/img/Card2.svg'
import hand from './../assets/img/hand.svg'
import paint from './../assets/img/paint.svg'
import write from './../assets/img/write.svg'
import sky from './../assets/img/sky.svg'
import plant from './../assets/img/plant.svg'
export default function BlogM()
{
    return (
        <section className='MI-SavedBlog'>
            <div className="container">
                {/* Start Title it contains header, paragraph,Search Bar and lista  */}
                <div className='MI-Title row d-flex justify-content-center mb-3'>
                    <h1>Blog</h1>
                    <p className='mb-0'>One blog brings together a lot....</p>
                    <p className='mb-0'> Be a part of this blog and write your opinions.</p>
                    <div className="my-3 MI-Search col-lg-6 col-md-8 col-sm-12 d-flex ">
                        <div className="MI_SearchBarContainer ">
                            <input className='MI_SearchBarInput' type="text" placeholder="Search to View More" />
                        </div>
                        <div className="MI_SearchBarDivIcons">
                            <a href="/">
                                <svg className='MI_SearchBarIcon1' xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                                    <path d="M7.72471 2.57146C8.66816 2.57003 9.59377 2.82854 10.4 3.31861C11.2061 3.80868 11.8617 4.51138 12.2948 5.34958C12.7278 6.18778 12.9216 7.12907 12.8548 8.07016C12.788 9.01124 12.4633 9.91574 11.9162 10.6844L11.4083 11.398L10.6947 11.9058C10.0349 12.3734 9.27404 12.6787 8.47401 12.7969C7.67398 12.9151 6.85735 12.8429 6.09048 12.5861C5.32362 12.3293 4.62817 11.8952 4.06064 11.3191C3.49312 10.7429 3.06954 10.041 2.82434 9.27035C2.57913 8.49971 2.51922 7.68208 2.64946 6.88392C2.77971 6.08576 3.09644 5.3296 3.57392 4.67688C4.05139 4.02416 4.67613 3.49331 5.39737 3.12748C6.11861 2.76164 6.91599 2.57114 7.72471 2.57146ZM7.72471 6.95274e-06C6.51026 -0.00162341 5.31258 0.283498 4.22913 0.83217C3.14568 1.38084 2.20708 2.17756 1.4897 3.15749C0.772326 4.13743 0.296444 5.27289 0.10078 6.47148C-0.094883 7.67006 -0.00479883 8.89791 0.363702 10.0551C0.732203 11.2123 1.36871 12.2662 2.22142 13.1309C3.07414 13.9956 4.11897 14.6468 5.27089 15.0315C6.42282 15.4162 7.64929 15.5234 8.8505 15.3446C10.0517 15.1657 11.1937 14.7058 12.1836 14.0022L15.8061 17.6254C16.3063 18.1249 17.1176 18.1249 17.6171 17.6254L17.6357 17.6067C17.7627 17.4925 17.8643 17.3529 17.9338 17.1969C18.0034 17.0409 18.0393 16.872 18.0393 16.7013C18.0393 16.5305 18.0034 16.3616 17.9338 16.2056C17.8643 16.0496 17.7627 15.91 17.6357 15.7958L14.0125 12.1733C14.8328 11.0199 15.3197 9.66293 15.4197 8.25116C15.5197 6.83939 15.229 5.42735 14.5795 4.16988C13.9299 2.91242 12.9467 1.8581 11.7375 1.12254C10.5284 0.38699 9.14001 -0.00138561 7.72471 6.95274e-06Z" fill="#938C8C" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center gap-4 MI-list'>
                        <a href='#' className='MI-Linkss'>All Blogs</a>
                        <a href='#' className='MI-Linkss'>Design</a>
                        <a href='#' className='MI-Linkss'>Ui&Ux</a>
                        <a href='#' className='MI-Linkss'>AI</a>
                    </div>
                </div>
                {/* End Title */}
                {/* Start Top Section it contains Big card and fowr small cards */}
                <div className="row ">
                    <p className='MI-Latest text-start mb-0'>Latest Additions</p>
                    {/* Start Big card  */}
                        <div className="MI-BigCard d-flex col-lg-8 col-md-12 col-sm-12 my-3">
                                <img className="" src={bigboy} alt="Boy" />
                            <div className='MI-Box'>
                                <div className="MI-BottomText d-flex  align-items-center justify-content-between">
                                    <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                        <img className="" src={userone} alt='not found' />
                                        <p className="flex-shrink-0 mb-0">User Name</p>
                                    </div>
                                    <div className="d-flex justify-space-between MI-Date">
                                        <p className="MI-LeftSection mb-0">2022-12-12</p>
                                        <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                    </div>
                                </div>
                                <div>
                                    <p className=" MI-TopText text-start mb-0">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                                    
                            </div>
                            <div><p className='MI-BigText mb-0'>You might find workflow interviews to be your best friend when designing more complex interfaces. Workflow interviews aren’t a prominent user research method because they’re usually not done as stand alone research. They’re usually a part of user interviews, but they don’t necessarily have to be. I’ve often found that they are great as ......</p></div>
                            <div className="MI-Icon d-flex ">
                                <a href="#" className='MI-ReadMore'>Readmore...</a>
                                <img src={Vectorone} alt="Icon" />
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                            </div>
                        </div>
                    {/* End Big card  */}
                    {/* Start Small Card it Contains Fowr Cards */}
                    {/* Start First card */}
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={robot} alt="Boy" />
                            <p className=" MI-TopText text-start mb-4">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectortwo} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={userthree} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    {/* End First card */}
                    {/* Start Second card */}
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={book} alt="Boy" />
                            <p className=" MI-TopText text-start mb-4">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectorone} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={userone} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    {/* End Second card */}
                    {/* Start Third card */}
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={laptop} alt="Boy" />
                            <p className=" MI-TopText text-start mb-4">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectorone} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={usertwo} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    {/* End Third card */}
                    {/* Start Fourth  card */}
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={hand} alt="Boy" />
                            <p className=" MI-TopText text-start mb-4">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectortwo} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={userthree} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    <p className='MI-View text-center  mb-5'>View more</p>
                </div>
                {/* End Fourth card */}
                {/* End Samall Cards */}
                {/* End Top Section */}
                {/* Start Bottom Section it contains Big card and fowr small cards */}
                <div className="row">
                    <p className='MI-Latest text-start mb-0'>Most Views</p>
                    {/* Start Big Card */}
                    <div className="MI-BigCard d-flex col-lg-8 col-md-12 col-sm-12 my-3">
                            <img className="" src={paint} alt="Boy" />
                        <div className='MI-Box'>
                            <div className="MI-BottomText d-flex  align-items-center justify-content-between">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={userone} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div>
                                <p className=" MI-TopText text-start mb-0">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                        </div>
                            <div>
                                <p className='MI-BigText mb-0'>You might find workflow interviews to be your best friend when designing more complex interfaces. Workflow interviews aren’t a prominent user research method because they’re usually not done as stand alone research. They’re usually a part of user interviews, but they don’t necessarily have to be. I’ve often found that they are great as ......</p>
                            </div>
                        <div className="MI-Icon d-flex ">
                            <a href="#" className='MI-ReadMore'>Readmore...</a>
                            <img src={Vectorone} alt="Icon" />
                        </div>
                        <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                        </div>
                        </div>
                    </div>
                    {/* End Big card  */}
                    {/* Start Small Card it Contains Fowr Cards */}
                    {/* Start First card */}
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={write} alt="Boy" />
                            <p className=" MI-TopText text-start mb-4">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectortwo} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={userthree} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    {/* End First card */}
                    {/* Start Second card */}
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={sky} alt="Boy" />
                            <p className=" MI-TopText text-start mb-4">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectorone} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={userone} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    {/* End Second card */}
                    {/* Start Third card */}
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={plant} alt="Boy" />
                            <p className=" MI-TopText text-start mb-4">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectorone} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={usertwo} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    {/* End Third card */}
                    {/* Start Fourth  card */}
                    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                        <div className="MI-FirstCard">
                            <img className="MI-FirstLogo" src={hand} alt="Boy" />
                            <p className=" MI-TopText text-start mb-4">Understanding workflow interviews, one of the best 5-minute reality checks from users</p>
                            <div className="MI-Icon text-end">
                                <img className="" src={Vectortwo} alt="Icon" />
                            </div>
                            <div className="MI-BottomText d-flex  align-items-center ">
                                <div className="MI-RightSection d-flex justify-space-between align-items-center">
                                    <img className="" src={userthree} alt='not found' />
                                    <p className="flex-shrink-0 mb-0">User Name</p>
                                </div>
                                <div className="d-flex justify-space-between MI-Date">
                                    <p className="MI-LeftSection mb-0">2022-12-12</p>
                                    <p className="MI-LeftSection mb-0"> 03:35 pm</p>
                                </div>
                            </div>
                            <div className="MI-Links text-start">
                                <a href="#" className="MI-bottomlink">#UI,</a>
                                <a href="#" className="MI-bottomlink">#Ux,</a>
                                <a href="#" className="MI-bottomlink">#Design,</a>
                                <a href="#" className="MI-bottomlink">#VR,</a>
                                <a href="#" className="MI-bottomlink">#AI,</a>
                                <a href="#" className="MI-bottomlink">#Gaming,</a>
                                <a href="#" className="MI-bottomlink">#Ui&Ux</a>
                            </div>
                        </div>
                    </div>
                    <p className='MI-View text-center'>View more</p>
                </div>
                {/* End Fourth card */}
                {/* End Samall Cards */}
                {/* End Bottom Section */}
            </div>
            {/* End */}
        </section>

    )
}


