import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';
import '../i18n/i18nflts'
import { useTranslation } from 'react-i18next'


import '../styles/components/homePage.sass';


export default function HomePage(){
    const { t, i18n } = useTranslation();
    return(
        <main>
            <section id='welcome'>
                <div className='circleDctBottom'>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> </p>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> </p>

                </div>

                <div className='circleDctTop'>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize circleNone'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/>  </p>
                    <p> <Icon.CircleFill className='circleDctSize circleNone'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> </p>
                    <p> <Icon.CircleFill className='circleDctSize circleNone'/> <Icon.CircleFill className='circleDctSize circleNone'/> <Icon.CircleFill className='circleDctSize circleNone'/> <Icon.CircleFill className='circleDctSize'/> <Icon.CircleFill className='circleDctSize'/> </p>

                </div>

                <div className='MarginAuto1100px containerWelcome'>
                    <div className='sizeTxt'>
                        <p className='pHi'> {t('sectionWelcome.pHi')} <span> Erik Prado </span ></p>
                        <p className='p2'> {t('sectionWelcome.pFront')}</p>
                        <div>
                            <p className='txt'> {t('sectionWelcome.p1')} </p>
                            <p className='txt'> {t('sectionWelcome.p2')} </p>
                        </div>
                        <div className='lineBtn'>
                            <a href='#contact'>
                            <button className='btnFill'> <Icon.EnvelopeAtFill className='iconMail' /> {t('sectionWelcome.contact')}  </button>
                            </a>
                        </div>

                    </div>
                    <div className='sizeImg'>
                        <div className="img"></div>
                    </div>
                    
                </div>
            </section>

            <section id='numberInfo'>
                <div className="MarginAuto1100px flex">
                    <Link to="https://github.com/ErikPradoDev" target='_blank'>
                        <div className='numberInfoSize'>
                            <p className='number'>+70</p>
                            <p className='codeTxt'> {t('sectionInfoNumber.commitp1')} <br /> {t('sectionInfoNumber.commitp2')} </p>
                        </div>
                    </Link>
                    <Link to='/projects'>
                        <div className='numberInfoSize'>
                            <p className='number'>02</p>
                            <p className='codeTxt'> {t('sectionInfoNumber.projectsp1')} <br /> {t('sectionInfoNumber.projectsp2')} </p>
                        </div>
                    </Link>
                    <Link to=''>
                        <div className='numberInfoSize'>
                            <p className='number'>12</p>
                            <p className='codeTxt'> {t('sectionInfoNumber.techp1')} <br /> {t('sectionInfoNumber.techp2')} </p>
                        </div>
                    </Link>
                    <Link to='/blog'>
                        <div className='numberInfoSize'>
                            <p className='number'>04</p>
                            <p className='codeTxt'> {t('sectionInfoNumber.articlesp1')} <br /> {t('sectionInfoNumber.articlesp2')} </p>
                        </div>
                    </Link>
                </div>
            </section>

            <section id='tech'>
                <div className="MarginAuto1100px flex">
                        <h3> {t('sectionTech.subtitle')} </h3>
                        <h2> {t('sectionTech.title')} </h2>
                        <div className='lineSection'></div>

                    <div className='MarginAuto900px lineCard'>
                        <div className='cardTec'>
                            <svg width="19" height="19" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.91118 19.4814L0 0.161377H21L19.0863 19.4783L10.4872 21.6272L1.91118 19.4814Z" fill="#E44F26"/>
        <path d="M10.5 19.9851L17.449 18.2487L19.0837 1.74146H10.5V19.9851Z" fill="#E44F26"/>
        <path d="M10.4999 8.90643H7.0212L6.78135 6.48002H10.4999V4.11035H10.4906H3.9082L3.97114 4.74666L4.61671 11.2761H10.4999V8.90643Z" fill="#1F1F1F"/>
        <path d="M10.5002 15.0603L10.4883 15.0634L7.56074 14.3512L7.37362 12.4614H5.95066H4.73438L5.10266 16.1811L10.4883 17.5289L10.5002 17.5258V15.0603Z" fill="#1F1F1F"/>
        <path d="M10.4907 8.90649V11.2762H13.7279L13.4234 14.3496L10.4907 15.0626V17.5281L15.8806 16.1811L15.9198 15.7809L16.5373 9.5428L16.6019 8.90649H15.8934H10.4907Z" fill="#1F1F1F"/>
        <path d="M10.4907 4.11035V5.58229V6.47466V6.48002H16.8324H16.8409L16.8936 5.94798L17.0136 4.74666L17.0765 4.11035H10.4907Z" fill="#1F1F1F"/>
                            </svg>
                            <p> HTML5 </p>
                        </div>

                        <div className='cardTec'>
                        <svg width="19" height="19" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.91048 19.4829L0 0.161377H21L19.087 19.4799L10.4872 21.6289L1.91048 19.4829Z" fill="#1572B6"/>
    <path d="M10.5 19.9867L17.4495 18.2501L19.0844 1.74158H10.5V19.9867Z" fill="#1572B6"/>
    <path d="M10.5 8.74153H13.979L14.2189 6.31493H10.5V3.94507H10.5094H17.0923L17.0293 4.58066L16.3837 11.1114H10.5V8.74153Z" fill="#1F1F1F"/>
    <path d="M10.5163 14.8958L10.5044 14.8988L7.5766 14.1858L7.38946 12.2959H5.96638H4.75L5.11832 16.0167L10.5036 17.3645L10.5163 17.3615V14.8958Z" fill="#1F1F1F"/>
    <path d="M13.7553 11.0109L13.4389 14.1842L10.5068 14.8973V17.363L15.8963 16.0166L15.9363 15.6164L16.3931 11.0109H13.7553Z" fill="#1F1F1F"/>
    <path d="M10.5092 3.94507V5.41713V6.3088V6.31493H4.16698H4.15847L4.10573 5.78208L3.9858 4.58066L3.92285 3.94507H10.5092Z" fill="#1F1F1F"/>
    <path d="M10.5 8.74158V10.2136V11.1053V11.1114H7.6173H7.60879L7.55605 10.5786L7.43697 9.37717L7.37402 8.74158H10.5Z" fill="#1F1F1F"/>
                                        </svg>
                            <p> CSS3 </p>
                        </div>

                        <div className='cardTec'>
                        <svg width="19" height="19" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.4999 12.7382C27.4835 12.7394 26.4806 12.9489 25.5672 13.3508C25.2813 12.9231 25.0604 12.4626 24.9107 11.9817C24.8246 11.6048 24.8047 11.2181 24.8517 10.8356C24.9505 10.4148 25.0787 9.99996 25.2355 9.59367C25.2297 9.54053 25.165 9.28943 24.5142 9.28109C23.8634 9.27276 23.3027 9.39258 23.2426 9.54782C23.1296 9.83138 23.0388 10.1217 22.971 10.4168C22.4323 11.6145 21.7693 12.7636 20.9908 13.8489C20.5546 13.2043 20.3752 12.445 20.4822 11.6963C20.581 11.2754 20.7092 10.8606 20.866 10.4543C20.8602 10.4012 20.7955 10.15 20.1446 10.1417C19.4938 10.1334 18.9332 10.2532 18.8731 10.4084C18.813 10.5637 18.7367 10.9294 18.6014 11.2774C18.4662 11.6254 16.8872 14.8053 16.4733 15.6253C16.2606 16.0421 16.0768 16.3818 15.9474 16.611C15.9412 16.6259 15.9335 16.6402 15.9242 16.6537C15.8087 16.8506 15.7474 16.9579 15.7474 16.9579V16.9631C15.6584 17.1069 15.5636 17.2403 15.5162 17.2403C15.4335 16.9426 15.4375 16.6308 15.5278 16.3349C15.7589 15.2315 16.3254 13.5165 16.3196 13.4571C16.3196 13.4248 16.4259 13.1268 15.9531 12.9726C15.8435 12.9256 15.7204 12.9103 15.6007 12.929C15.481 12.9477 15.3708 12.9993 15.285 13.0768C15.2434 13.0768 15.2145 13.1674 15.2145 13.1674C15.2145 13.1674 15.7289 11.2389 14.2331 11.2389C13.6506 11.3445 13.0974 11.554 12.6061 11.8551C12.1147 12.1563 11.6952 12.543 11.3721 12.9924C10.9698 13.1893 10.1132 13.6103 9.19658 14.0635C8.84979 14.2396 8.48682 14.4157 8.15043 14.5844C8.12731 14.5636 8.10304 14.5365 8.07992 14.5157C6.25929 12.7673 2.91279 11.5337 3.05729 9.19461C3.11046 8.34232 3.43528 6.10429 9.48325 3.38592C14.4608 1.17498 18.4223 1.78762 19.1078 3.14628C20.0892 5.08633 16.9854 8.68824 11.8426 9.21024C11.2736 9.31428 10.686 9.30173 10.1231 9.1735C9.5603 9.04527 9.03663 8.80466 8.59085 8.46944C8.3192 8.20271 8.27759 8.18708 8.17702 8.24022C8.01172 8.32044 8.11807 8.56008 8.17702 8.69866C8.37321 9.01868 8.63858 9.30002 8.95744 9.52604C9.2763 9.75206 9.64219 9.91819 10.0335 10.0146C12.0567 10.4087 14.1661 10.2203 16.0641 9.47593C19.1852 8.38921 21.6127 5.36765 20.9006 2.83684C20.1851 0.26851 15.4561 -0.578569 10.9802 0.857193C8.17673 1.70747 5.58632 3.04678 3.35668 4.79876C0.891022 6.87739 0.501464 8.68303 0.660986 9.4405C1.23896 12.1266 5.34377 13.8739 6.98638 15.171C6.90316 15.2138 6.82686 15.2513 6.76213 15.2825C5.94024 15.6503 2.8076 17.1267 2.0227 18.6875C1.13608 20.4588 2.16489 21.7247 2.84459 21.8956C3.86877 22.1166 4.94395 22.0438 5.92003 21.6874C6.8961 21.331 7.72435 20.7088 8.28915 19.9076C8.7701 19.2431 9.06573 18.4836 9.15087 17.6939C9.23601 16.9042 9.10813 16.1077 8.77812 15.3721C8.77254 15.3602 8.76472 15.3493 8.755 15.3398L9.39887 14.9991C9.81848 14.7751 10.2323 14.5678 10.5872 14.3969C10.3465 15.0225 10.2053 15.6757 10.1676 16.337C10.0859 17.3505 10.43 18.3547 11.1316 19.1501C11.2384 19.233 11.3624 19.2959 11.4963 19.3352C11.6302 19.3746 11.7715 19.3896 11.9119 19.3793C12.6055 19.3793 12.9234 18.8584 13.2713 18.2395C13.6967 17.4831 14.0805 16.6037 14.0805 16.6037C14.0805 16.6037 13.6019 18.9803 14.9024 18.9803C15.3752 18.9803 15.8537 18.426 16.0676 18.1468V18.152C16.0676 18.152 16.0791 18.1363 16.1034 18.0988L16.1797 17.9873V17.9769C16.3693 17.6789 16.7947 17.0017 17.427 15.8775C18.2431 14.4282 19.0292 12.6163 19.0292 12.6163C19.105 13.0145 19.2096 13.4078 19.3424 13.7936C19.5328 14.2614 19.758 14.717 20.0163 15.1575C19.8268 15.3971 19.7089 15.5305 19.7089 15.5305L19.7146 15.5357C19.5609 15.717 19.3956 15.9139 19.2118 16.1056C18.665 16.6475 18.1576 17.2207 17.6929 17.8217C17.6238 17.9226 17.6001 18.0435 17.6265 18.1597C17.6529 18.2758 17.7275 18.3785 17.835 18.4468C18.0784 18.561 18.3558 18.6022 18.6269 18.5646C19.0354 18.5438 19.4372 18.461 19.8152 18.3197C20.1805 18.2038 20.5251 18.0406 20.8382 17.8352C21.161 17.6337 21.4208 17.3606 21.5927 17.0424C21.7646 16.7242 21.8427 16.3714 21.8196 16.0181C21.7833 15.5731 21.6571 15.1377 21.4474 14.7334C21.5064 14.6584 21.563 14.5844 21.6185 14.5094C22.2757 13.6252 22.868 12.7033 23.3917 11.7494C23.4675 12.1476 23.5722 12.5409 23.705 12.9268C23.862 13.331 24.0553 13.723 24.283 14.0989C23.5269 14.6232 22.9314 15.3124 22.5525 16.1015C22.1803 17.0715 22.4693 17.5081 23.0149 17.6091C23.3134 17.6277 23.612 17.5726 23.8784 17.4497C24.2701 17.3337 24.6391 17.1628 24.9719 16.9433C25.3228 16.7567 25.6167 16.4943 25.8272 16.1799C26.0376 15.8654 26.1581 15.5087 26.1776 15.1419C26.1513 14.7757 26.0596 14.4158 25.9059 14.076C26.9036 13.7247 27.9854 13.6127 29.0455 13.7509C31.8591 14.0489 32.4151 15.6316 32.3088 16.2984C32.2589 16.5348 32.1535 16.7588 31.9995 16.9554C31.8456 17.152 31.6468 17.3167 31.4164 17.4383C31.221 17.5497 31.1563 17.5873 31.1736 17.6675C31.1968 17.7852 31.2892 17.779 31.4568 17.7581C31.8809 17.6393 32.255 17.4075 32.5299 17.0931C32.8048 16.7788 32.9675 16.3967 32.9966 15.9973C33.0856 14.4344 31.4303 12.7205 28.5034 12.7361L28.4999 12.7382ZM6.79103 19.3314C5.85701 20.2483 4.55656 20.5942 3.99477 20.3014C3.39136 19.9889 3.62833 18.6344 4.77504 17.6633C5.45526 17.1114 6.19048 16.6172 6.97136 16.1869C7.10776 16.1119 7.3089 16.0056 7.54934 15.8743L7.61407 15.842L7.75625 15.7618C7.96112 16.3805 7.97969 17.0372 7.81007 17.6645C7.64045 18.2918 7.28874 18.8671 6.79103 19.3314ZM13.5892 15.1638C13.2644 15.8775 12.5847 17.706 12.1709 17.6039C11.816 17.5185 11.5929 16.1327 12.1003 14.7637C12.3566 14.1046 12.7298 13.4874 13.2054 12.9361C13.7141 12.4246 14.2759 12.2537 14.4111 12.4621C14.2877 13.3945 14.0107 14.305 13.5892 15.1638ZM19.1991 17.5831C19.0627 17.6466 18.9332 17.6873 18.8743 17.6581C18.8326 17.6373 18.9332 17.5539 18.9332 17.5539C18.9332 17.5539 19.6372 16.8715 19.9146 16.563C20.0741 16.3818 20.2614 16.1692 20.4648 15.9285V15.9973C20.4648 16.8121 19.5898 17.3612 19.2002 17.5852L19.1991 17.5831ZM23.527 16.6933C23.4264 16.6297 23.4438 16.4161 23.7813 15.7504C24.016 15.3228 24.3439 14.9422 24.7454 14.6313C24.8069 14.7891 24.8389 14.9549 24.8401 15.1221C24.8447 15.4779 24.7185 15.8251 24.4811 16.1096C24.2438 16.394 23.9087 16.5996 23.5281 16.6943L23.527 16.6933Z" fill="#CD6799"/>
                                        </svg>
                            <p> SASS </p>
                        </div>

                        <div className='cardTec'>
                        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_34_236)">
    <path d="M9.5625 10.6876V6.98706H12.2325C13.692 6.98706 14.5455 7.67256 14.5455 8.84256C14.5455 10.0456 13.6395 10.6876 11.8995 10.6876H9.5625ZM9.5625 16.3306H12.4095C14.1855 16.3306 15.1245 15.6106 15.1245 14.2651C15.1245 12.9376 14.1495 12.2431 12.2955 12.2431H9.5625V16.3306Z" fill="#8713FC"/>
    <path d="M6.00293 0C4.41163 0 2.88551 0.632141 1.76029 1.75736C0.635071 2.88258 0.00292969 4.4087 0.00292969 6V18C0.00292969 19.5913 0.635071 21.1174 1.76029 22.2426C2.88551 23.3679 4.41163 24 6.00293 24H18.0029C19.5942 24 21.1204 23.3679 22.2456 22.2426C23.3708 21.1174 24.0029 19.5913 24.0029 18V6C24.0029 4.4087 23.3708 2.88258 22.2456 1.75736C21.1204 0.632141 19.5942 0 18.0029 0L6.00293 0ZM7.59293 18V5.3175H12.6914C15.0719 5.3175 16.5059 6.531 16.5059 8.4825C16.5059 9.8085 15.5309 10.995 14.2814 11.2065V11.3565C15.9959 11.532 17.1374 12.753 17.1374 14.406C17.1374 16.638 15.5114 18 12.8054 18H7.59293Z" fill="#8713FC"/>
    </g>
    <defs>
    <clipPath id="clip0_34_236">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
                                        </svg>
                            <p> Bootstrap </p>
                        </div>

                        <div className='cardTec'>
                        <svg width="19" height="19" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0.161377H24V21.7937H0V0.161377Z" fill="#F5DE19"/>
    <path d="M16.122 17.0616C16.3265 17.436 16.6442 17.7507 17.0385 17.9694C17.4328 18.1881 17.8876 18.3019 18.3506 18.2977C19.2848 18.2977 19.8823 17.8766 19.8823 17.2934C19.8823 16.598 19.2686 16.3493 18.24 15.9437L17.676 15.7258C16.0474 15.1008 14.9674 14.3181 14.9674 12.6633C14.9674 11.139 16.2531 9.97778 18.27 9.97778C18.9229 9.93528 19.5752 10.067 20.1456 10.3565C20.716 10.6459 21.1792 11.0804 21.4774 11.6056L19.7143 12.6216C19.5994 12.3611 19.3995 12.1383 19.1409 11.9827C18.8824 11.827 18.5774 11.7459 18.2666 11.7501C18.1309 11.7378 17.994 11.7512 17.8644 11.7893C17.7348 11.8274 17.6154 11.8895 17.5139 11.9714C17.4124 12.0534 17.3309 12.1536 17.2747 12.2655C17.2185 12.3774 17.1888 12.4987 17.1874 12.6216C17.1874 13.2311 17.6066 13.4783 18.5743 13.8577L19.1383 14.0755C21.0548 14.8165 22.1383 15.5713 22.1383 17.2686C22.1383 19.0989 20.5431 20.1017 18.4011 20.1017C17.5665 20.1496 16.7344 19.9788 16.0051 19.6099C15.2758 19.241 14.6805 18.6898 14.2911 18.0227L16.122 17.0616ZM8.15485 17.2377C8.50885 17.804 8.83113 18.283 9.60599 18.283C10.3466 18.283 10.8146 18.0219 10.8146 17.006V10.0937H13.0697V17.033C13.0697 19.1375 11.6983 20.0955 9.70199 20.0955C8.99635 20.1303 8.29555 19.9718 7.69172 19.6408C7.08789 19.3099 6.6093 18.822 6.31885 18.2413L8.15485 17.2377Z" fill="#353535"/>
                                        </svg>
                            <p> JavaScript </p>
                        </div>

                        <div className='cardTec'>
                        <svg width="19" height="19" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_139_185)">
    <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C12.1384 15.0543 13.5187 14.0337 14.4964 12.672C15.4741 11.3104 16 9.67631 16 8C16 3.58 12.42 0 8 0Z" fill="#7431FA"/>
    </g>
    <defs>
    <clipPath id="clip0_139_185">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
                            <p> Git e GitHub </p>
                        </div>

                        <div className='cardTec'>
                        <svg width="19" height="19" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M747.09 153.65L418.545 741.143C411.76 753.27 394.335 753.343 387.447 741.273L52.3898 153.705C44.8898 140.55 56.1348 124.618 71.0398 127.28L399.94 186.07C402.038 186.445 404.186 186.442 406.282 186.06L728.302 127.365C743.157 124.658 754.46 140.47 747.09 153.65Z" fill="url(#paint0_linear_99_183)"/>
    <path d="M556.61 50.1725L313.478 97.8125C311.535 98.1927 309.773 99.208 308.47 100.699C307.167 102.189 306.397 104.071 306.28 106.047L291.325 358.642C290.975 364.592 296.438 369.21 302.243 367.87L369.935 352.25C376.27 350.787 381.993 356.367 380.69 362.735L360.58 461.217C359.225 467.842 365.448 473.512 371.92 471.547L413.73 458.842C420.213 456.875 426.44 462.56 425.07 469.192L393.11 623.885C391.11 633.56 403.98 638.835 409.348 630.54L412.933 625L611.05 229.62C614.368 223 608.65 215.452 601.375 216.855L531.7 230.302C525.15 231.565 519.58 225.467 521.428 219.06L566.905 61.41C568.755 54.99 563.165 48.8875 556.61 50.1725Z" fill="url(#paint1_linear_99_183)"/>
    <defs>
    <linearGradient id="paint0_linear_99_183" x1="44.2082" y1="106.281" x2="453.087" y2="661.572" gradientUnits="userSpaceOnUse">
    <stop stop-color="#41D1FF"/>
    <stop offset="1" stop-color="#BD34FE"/>
    </linearGradient>
    <linearGradient id="paint1_linear_99_183" x1="381.044" y1="63.1049" x2="455.009" y2="570.492" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFEA83"/>
    <stop offset="0.0833" stop-color="#FFDD35"/>
    <stop offset="1" stop-color="#FFA800"/>
    </linearGradient>
    </defs>
                                        </svg>
                            <p> Vite </p>
                        </div>

                        <div className='cardTec'>
                        <svg width="19" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1687 11.4071C13.3324 11.4071 14.2758 10.5567 14.2758 9.50779C14.2758 8.45885 13.3324 7.60852 12.1687 7.60852C11.0049 7.60852 10.0615 8.45885 10.0615 9.50779C10.0615 10.5567 11.0049 11.4071 12.1687 11.4071Z" fill="#00D8FF"/>
    <path d="M12.1687 13.8625C9.63602 13.9177 7.10968 13.61 4.6841 12.9508C3.56362 12.6307 2.51857 12.1263 1.60176 11.4633C1.25191 11.2368 0.960569 10.9448 0.747722 10.6072C0.534875 10.2697 0.405561 9.89463 0.368652 9.50781C0.368652 8.25201 1.89929 7.02128 4.46327 6.21599C6.9537 5.50244 9.55577 5.15661 12.1687 5.19191C14.7468 5.15944 17.314 5.49902 19.773 6.19776C20.8521 6.50784 21.8617 6.9878 22.755 7.61538C23.0989 7.83132 23.3859 8.11277 23.5956 8.43981C23.8054 8.76685 23.9327 9.13146 23.9687 9.50781C23.9687 10.813 22.2577 12.1356 19.5016 12.9576C17.123 13.5953 14.6499 13.9005 12.1687 13.8625ZM12.1687 6.10052C9.66887 6.0704 7.17966 6.39916 4.79451 7.07446C2.4345 7.8167 1.37671 8.83167 1.37671 9.50553C1.37671 10.2105 2.51373 11.319 5.01029 12.0885C7.33074 12.7159 9.74683 13.008 12.1687 12.9538C14.5425 12.9921 16.9089 12.7026 19.1855 12.0954C21.7773 11.3212 22.9573 10.2113 22.9573 9.50781C22.9148 9.26639 22.8172 9.03555 22.6707 8.82986C22.5241 8.62417 22.3319 8.44811 22.106 8.31279C21.3068 7.75603 20.4049 7.33067 19.4417 7.05623C17.0893 6.39054 14.634 6.0679 12.1687 6.10052Z" fill="#00D8FF"/>
    <path d="M7.38134 18.9806C6.98814 18.9887 6.59959 18.9028 6.25528 18.7314C5.0483 18.1039 4.63024 16.2943 5.1368 13.8898C5.69532 11.5887 6.66305 9.38419 8.00253 7.36162C9.259 5.33252 10.8676 3.49768 12.7672 1.92667C13.6043 1.23891 14.57 0.690273 15.6195 0.306207C15.999 0.145863 16.4131 0.0627441 16.8323 0.0627441C17.2515 0.0627441 17.6656 0.145863 18.0452 0.306207C19.3002 0.958037 19.7158 2.95455 19.13 5.51705C18.5542 7.69328 17.6116 9.77707 16.335 11.6958C15.1228 13.7009 13.5649 15.5198 11.7195 17.0844C10.8521 17.7991 9.8453 18.3629 8.75014 18.7474C8.3117 18.894 7.84892 18.9729 7.38134 18.9806ZM8.87573 7.81289C7.59803 9.74963 6.67052 11.8574 6.128 14.0569C5.6619 16.2715 6.10946 17.6033 6.76015 17.9421C7.43444 18.2938 9.07127 17.9603 11.0587 16.3953C12.8203 14.8964 14.3073 13.1553 15.4644 11.2369C16.6873 9.40259 17.5915 7.41035 18.1455 5.3294C18.6967 2.91733 18.2205 1.44045 17.5445 1.08947C17.2912 1.00197 17.0205 0.9628 16.7495 0.974439C16.4784 0.986077 16.2131 1.04827 15.9701 1.15708C15.0359 1.50453 14.1771 1.9978 13.4331 2.6142C11.6181 4.11902 10.0816 5.87558 8.88163 7.81744L8.87573 7.81289Z" fill="#00D8FF"/>
    <path d="M16.9538 18.9906C15.8117 18.9906 14.3611 18.3677 12.8507 17.197C10.9178 15.6117 9.28201 13.755 8.00679 11.699C6.68411 9.70423 5.72404 7.53161 5.16297 5.26346C4.91965 4.26557 4.87456 3.2367 5.0298 2.22463C5.06569 1.84918 5.19253 1.48541 5.40136 1.15896C5.6102 0.832502 5.89595 0.551318 6.23846 0.335232C7.4918 -0.318877 9.61833 0.353465 11.7887 2.09016C13.5929 3.62643 15.1251 5.40302 16.3317 7.35798C17.6536 9.30613 18.6237 11.4312 19.2059 13.6537C19.4597 14.6882 19.4988 15.7561 19.3213 16.8034C19.2791 17.1897 19.1447 17.5631 18.9274 17.8982C18.71 18.2332 18.4149 18.5219 18.0621 18.7445C17.7234 18.9137 17.3409 18.9986 16.9538 18.9906ZM8.87915 11.2416C10.1025 13.2065 11.665 14.9834 13.5081 16.5056C15.4037 17.9757 16.9074 18.2917 17.5539 17.9491C18.2282 17.5958 18.7254 16.1539 18.213 13.8208C17.6515 11.6989 16.721 9.67046 15.456 7.81076C14.3045 5.93969 12.8421 4.23851 11.1195 2.7663C9.07638 1.13141 7.41931 0.765987 6.74418 1.11849C6.53376 1.27262 6.36107 1.4644 6.23704 1.68173C6.113 1.89905 6.0403 2.1372 6.02353 2.38113C5.88952 3.28373 5.93318 4.20056 6.15249 5.08949C6.69218 7.25856 7.61295 9.33597 8.87999 11.2431L8.87915 11.2416Z" fill="#00D8FF"/>
                                        </svg>
                            <p> React </p>
                        </div>

                        <div className='cardTec'>
                        <svg width="19" height="19" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_99_186)">
    <path d="M39.8304 6.63196V18.6769L53.3657 53.4409C53.3657 53.4409 57.4979 61.9311 45.6794 64H18.7177C18.7177 64 7.70213 62.8505 10.343 54.1283L24.5671 18.6773V6.63196H39.8304Z" fill="#009688"/>
    <path d="M40.1163 5.23155H23.8794C22.5643 5.23155 21.4946 4.06167 21.4946 2.61624C21.4946 1.16989 22.5639 0 23.8794 0H40.1163C41.4374 0 42.5053 1.16989 42.5053 2.61624C42.5053 4.06167 41.437 5.23155 40.1163 5.23155Z" fill="#004D40"/>
    <path d="M35.8326 26.2988C37.5749 26.2988 38.9957 28.0012 38.9957 30.1095C38.9957 32.2086 37.574 33.9152 35.8326 33.9152C34.0861 33.9152 32.6694 32.2086 32.6694 30.1095C32.6694 28.0003 34.0861 26.2988 35.8326 26.2988Z" fill="white"/>
    <path d="M26.1224 36.1844C27.595 36.1844 28.7887 34.7455 28.7887 32.9707C28.7887 31.1958 27.595 29.757 26.1224 29.757C24.6498 29.757 23.4561 31.1958 23.4561 32.9707C23.4561 34.7455 24.6498 36.1844 26.1224 36.1844Z" fill="white"/>
    <path d="M41.0342 17.8786V12.1497C41.0342 12.1497 48.2989 10.548 51.9296 18.9979C51.9296 18.9979 46.2713 23.1203 41.0342 17.8786Z" fill="#004D40"/>
    <path d="M23.2407 17.8786V12.1497C23.2407 12.1497 15.9751 10.548 12.3462 18.9979C12.3462 18.9979 17.9989 23.1203 23.2407 17.8786Z" fill="#004D40"/>
    <path d="M45.4019 41.5862C33.5885 37.9216 23.6565 39.8889 18.8021 41.3761L13.9068 53.1589C11.703 60.193 20.9053 61.1175 20.9053 61.1175H43.424C53.2947 59.4499 49.8449 52.6069 49.8449 52.6069L45.4019 41.5862Z" fill="white"/>
    <path d="M28.3771 45.9641C28.3771 47.2347 26.6695 48.2682 24.5663 48.2682C22.4632 48.2682 20.7607 47.2342 20.7607 45.9641C20.7607 44.6885 22.4632 43.6587 24.5663 43.6587C26.6705 43.6596 28.3771 44.6885 28.3771 45.9641Z" fill="#004D40"/>
    <path d="M41.9283 45.9641C41.9283 47.2347 40.2208 48.2682 38.1227 48.2682C36.0135 48.2682 34.312 47.2342 34.312 45.9641C34.312 44.6885 36.0135 43.6587 38.1227 43.6587C40.2217 43.6596 41.9283 44.6885 41.9283 45.9641Z" fill="#004D40"/>
    </g>
    <defs>
    <clipPath id="clip0_99_186">
    <rect width="64" height="64" fill="white"/>
    </clipPath>
    </defs>
                                        </svg>
                            <p> React i18Next </p>
                        </div>

                        <div className='cardTec'>
                        <svg width="19" height="19" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M243.956 470.586C284.012 470.586 316.484 438.115 316.484 398.059C316.484 358.003 284.012 325.531 243.956 325.531C203.9 325.531 171.429 358.003 171.429 398.059C171.429 438.115 203.9 470.586 243.956 470.586ZM72.5275 615.641C112.583 615.641 145.055 583.169 145.055 543.114C145.055 503.058 112.583 470.586 72.5275 470.586C32.4717 470.586 0 503.058 0 543.114C0 583.169 32.4717 615.641 72.5275 615.641ZM727.473 615.641C767.528 615.641 800 583.169 800 543.114C800 503.058 767.528 470.586 727.473 470.586C687.417 470.586 654.945 503.058 654.945 543.114C654.945 583.169 687.417 615.641 727.473 615.641Z" fill="black"/>
    <path d="M489.267 401.115C486.948 376.884 485.767 356.716 467.205 342.541C443.696 324.59 417.066 336.238 384.264 324.398C352.032 316.6 328.125 287.983 328.125 253.873C328.125 213.765 361.181 181.25 401.957 181.25C432.158 181.25 458.124 199.086 469.561 224.633C487.066 257.882 475.689 291.719 497.682 308.763C523.723 328.944 558.832 314.165 598.007 333.287C610.594 339.071 621.249 348.245 628.756 359.615C636.264 370.986 640.625 384.552 640.625 399.12C640.625 433.23 616.718 461.847 584.486 469.644C551.684 481.484 525.054 469.836 501.545 487.788C475.109 507.974 489.262 541.746 467.717 577.42C455.488 600.911 430.632 616.989 401.957 616.989C361.181 616.989 328.125 584.475 328.125 544.366C328.125 515.23 345.568 490.102 370.743 478.533C409.918 459.412 445.027 474.191 471.068 454.009C486.091 442.367 489.267 424.407 489.267 401.115Z" fill="#D0021B"/>
                                        </svg>
                            <p> React Router </p>
                        </div>

                        <div className='cardTec'>
                        <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="figma"><path fill="#161616" fill-rule="evenodd" d="m60,12c0-4.42-3.58-8-8-8H12c-4.42,0-8,3.58-8,8v40c0,4.42,3.58,8,8,8h40c4.42,0,8-3.58,8-8V12h0Z"></path><path fill="#0cc2ff" fill-rule="evenodd" d="m39.01,25.01c3.87,0,7.01,3.14,7.01,7.01s-3.14,7.01-7.01,7.01-7.01-3.14-7.01-7.01,3.14-7.01,7.01-7.01h0Z"></path><path fill="#ff7568" fill-rule="evenodd" d="m46,18c0-3.87-3.13-7-7-7h-14.02c-3.87,0-7,3.13-7,7s3.13,7,7,7h14.02c3.87,0,7-3.13,7-7h0Z"></path><path fill="#af5bff" fill-rule="evenodd" d="m31.99,25.01h-7.01c-1.86,0-3.64.74-4.95,2.05-1.31,1.31-2.05,3.09-2.05,4.95s.74,3.64,2.05,4.95c1.31,1.31,3.09,2.05,4.95,2.05h7.01v-14h0Z"></path><path fill="#ff4611" fill-rule="evenodd" d="m31.99,11h-7.01c-1.86,0-3.64.74-4.95,2.05-1.31,1.31-2.05,3.09-2.05,4.95s.74,3.64,2.05,4.95c1.31,1.31,3.09,2.05,4.95,2.05h7.01v-14h0Z"></path><path fill="#00e681" fill-rule="evenodd" d="m32,38.99h-7.01c-1.86,0-3.64.74-4.95,2.05-1.31,1.31-2.05,3.09-2.05,4.95s.74,3.64,2.05,4.95c1.31,1.31,3.09,2.05,4.95,2.05h0c1.86,0,3.64-.74,4.95-2.05,1.31-1.31,2.05-3.09,2.05-4.95v-7h0Z"></path></svg>

                            <p> Figma </p>
                        </div>

                        <div className='cardTec'>
                        <svg widths="19" height="19" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
    <path fill="#03A9F4" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"></path><path fill="#020F16" d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z"></path><path fill="#020F16" d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.503-1.123-0.503-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113-0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z"></path>
                                        </svg>
                            <p> Photoshop </p>
                        </div>
                       
                    </div>

                </div>
            </section>

            <section id='blog'>
                <div className="MarginAuto1100px flex">
                            <h3>../blog</h3>
                            <h2> {t('sectionBlog.title')} </h2>
                            <div className='lineSection'></div>
                            <div className='lineBlog MarginAuto900px'>
            <Link to='/blog/creative-process-of-a-website' className='blogCard'> 
                    <div className='imgBlogSize'>
                        <Icon.LightbulbFill className='iconLamp' />
                    </div>
                        <p className='titleBlog'> Creative process of a website. </p>
                        <p className='postBlog'> Published in January 1, 2024. </p>
                    <div className='lineSection'></div>  
                        <p className='aboutTxtBlog'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, provident quia modi labore fugit error nostrum sint veritatis quibusdam expedita commodi nesciunt dolore suscipit cumque amet dolores! Doloremque, enim. Magni. </p>
                        <div className='lineBtn'>
                                <button className='btnFill'> <Icon.FileTextFill className='iconBtn'/> Read Article </button>
                                <p className='pTxtReading'>  <Icon.ClockFill className='colorOrange' /> 5 minutes reading time. </p>
                         </div>
            </Link>

            <div className='blogCard'> 
                    <div className='imgBlogSize'>
                        <Icon.PencilSquare className='iconLamp' />
                    </div>
                        <p className='titleBlog'> Article being written. </p>
                        <p className='postBlog'> Published in January 1, 2024. </p>
                    <div className='lineSection'></div>  
                        <p className='aboutTxtBlog'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, provident quia modi labore fugit error nostrum sint veritatis quibusdam expedita commodi nesciunt dolore suscipit cumque amet dolores! Doloremque, enim. Magni. </p>
                        <div className='lineBtn'>
                        <button className='btnFill'> <Icon.FileTextFill className='iconBtn'/> Read Article </button>
                        <p className='pTxtReading'>  <Icon.ClockFill className='colorOrange' /> 5 minutes reading time. </p>
                         </div>
            </div>

            </div>
                
                
                </div>
            </section>

            <section id='projects'>
                <div className="MarginAuto1100px flex">
                            <h3> {t('sectionProject.subtitle')} </h3>
                            <h2> {t('sectionProject.title')} </h2>
                            <div className='lineSection'></div>
                
                <div className='MarginAuto900px'>
                <Link to={'/projects/windows-desktop-erik-prado'}>
                    <div className='cardProject windows marginBottom20px'>
                        <div className='cardPhoto backgroundDesktop'>
                            <div className='txtNew'> <p> <Icon.BookmarkStarFill />  {t('sectionProject.new')} </p></div>
                        </div>
                        <div className='txtProject'>
                            <div className='titleSize'>
                                <div className='logoProjectCard'>
                                    <svg width="50" height="50" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="65" height="65" rx="5"/>
            <rect width="40" height="40" transform="translate(12 13)"/>
            <path d="M28.6666 33.855L16.1758 33.8333L16.1766 43.0016C16.1766 43.8341 16.7908 44.5383 17.6149 44.6525L28.6666 46.1816V33.855Z" fill="url(#paint0_linear_0_1)"/>
            <path d="M30.3335 33.8583V46.4125L45.9352 48.5708C46.9368 48.7092 47.8302 47.9317 47.8302 46.92L47.8335 33.8883L30.3335 33.8583Z" fill="url(#paint1_linear_0_1)"/>
            <path d="M28.6668 19.88L17.6018 21.4467C16.7793 21.5633 16.1676 22.2675 16.1685 23.0983L16.1785 32.1667H28.6668V19.88Z" fill="url(#paint2_linear_0_1)"/>
            <path d="M30.3335 19.6442V32.1667H47.8293V19.0859C47.8293 18.0725 46.9327 17.2934 45.9293 17.4359L30.3335 19.6442Z" fill="url(#paint3_linear_0_1)"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="20.0858" y1="34.7658" x2="25.8208" y2="44.325" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1784D8"/>
            <stop offset="1" stop-color="#0864C5"/>
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="32.5035" y1="35.6083" x2="49.121" y2="47.0792" gradientUnits="userSpaceOnUse">
            <stop stop-color="#31ABEC"/>
            <stop offset="1" stop-color="#1582D5"/>
            </linearGradient>
            <linearGradient id="paint2_linear_0_1" x1="18.7851" y1="22.7492" x2="33.4901" y2="35.9842" gradientUnits="userSpaceOnUse">
            <stop stop-color="#31ABEC"/>
            <stop offset="1" stop-color="#1582D5"/>
            </linearGradient>
            <linearGradient id="paint3_linear_0_1" x1="33.5943" y1="21.4559" x2="58.6927" y2="38.515" gradientUnits="userSpaceOnUse">
            <stop stop-color="#54DAFF"/>
            <stop offset="1" stop-color="#25A2E5"/>
            </linearGradient>
            </defs>
                                    </svg>
                                </div>
                                <p> Windows Desktop | Erik Prado </p>
                            </div>

                            <p className='aboutTxt'> {t('pageProjectWindows.pResume')} </p>
                        
                            <div>
                                <p className='techUsed'> {t('sectionProject.tech')} </p>
                                <div className="techLine">
                                    <p> #SASS </p>
                                    <p> #JavaScript </p>
                                    <p> #Git e GitHub </p>
                                    <p> #Vite </p>
                                    <p> #React </p>
                                    <p> #React Router </p>
                                </div>
                            </div>

                            <div className='lineBtn'>
                                <button className='btnFill'> <Icon.Github className='iconBtn' /> GitHub </button>
                                <button className='btnSimple'> <Icon.BoxArrowInUpRight className='iconBtn'/> Deploy </button>
                            </div>
                        </div>
                    </div>
                </Link>

                    <div className='cardProject'>
                        <div className='cardPhoto dev'> 
                            <div className='txtDev'> <p> <Icon.Tools />  Being developed </p></div>
                            <Icon.Tools />
                        </div>
                        <div className='txtProject'>
                            <div className='titleSize'>
                                <div className='logoProjectCard'>
                                    <Icon.CodeSlash className='code' />
                                </div>
                                <p> Being developed </p>
                            </div>

                            <p className='aboutTxt'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nulla ratione ex qui, laboriosam cumque nemo quasi officiis quae, nam natus vel quas, dolorum reprehenderit pariatur perspiciatis necessitatibus officia. Nihil! </p>
                        
                            <div>
                                <p className='techUsed'> {t('sectionProject.tech')}  </p>
                                <div className="techLine">
                                    <p> #SASS </p>
                                    <p> #JavaScript </p>
                                    <p> #Git e GitHub </p>
                                    <p> #Vite </p>
                                    <p> #React </p>
                                    <p> #React Router </p>
                                </div>
                            </div>

                            <div className='lineBtn'>
                                <button className='btnFill'> <Icon.Github className='iconBtn' /> GitHub </button>
                                <button className='btnSimple'> <Icon.BoxArrowInUpRight className='iconBtn'/> Deploy </button>
                            </div>
                        </div>
                    </div>
                </div>



                </div>
            </section>

        </main>

    )
}