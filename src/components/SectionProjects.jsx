import * as Icon from 'react-bootstrap-icons';
import '../i18n/i18nflts'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SectionProjectsModule.sass'




export default function SectionProjects() {
    const { t, i18n } = useTranslation();
    return (
        <motion.section id='projects'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            viewport={{ once: true }}
        >
            <div className="MarginAuto1100px flex">
                <h3> {t('sectionProject.subtitle')} </h3>
                <h2> {t('sectionProject.title')} </h2>
                <div className='lineSection'></div>

                <div className='MarginAuto900px'>

                    <div className='cardProject mc marginBottom20px'>
                        <div className='titleSizeResponsive'>
                            <div className='logoProjectCard'>
                                <svg width="30" height="30" viewBox="0 0 139 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_42)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M138.934 115.495C138.322 85.7159 133.527 57.0541 125.428 34.7924C117.265 12.3661 107.076 0.0135498 96.7461 0.0135498C90.3268 0.0135498 84.2971 4.68654 78.8158 13.9112C75.4214 19.6326 72.2579 27.1446 69.5072 35.9852C66.7478 27.1446 63.5901 19.6326 60.1899 13.9112C54.7145 4.68654 48.6819 0.0135498 42.2626 0.0135498C31.9235 0.0135498 21.7403 12.3661 13.5805 34.7924C5.48415 57.0541 0.686961 85.7159 0.0750462 115.493L0 118.987H20.7445L20.7849 115.614C21.5902 53.3978 36.4003 13.9372 42.4329 13.9372C46.4969 13.9372 56.8821 41.2618 58.4581 108.913L58.5389 112.246H80.4697L80.5477 108.913C82.1208 41.2618 92.5089 13.9343 96.5729 13.9343C102.608 13.9343 117.413 53.3949 118.221 115.611L118.264 118.987H139L138.934 115.495Z" fill="#FEBE14" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M137.363 115.533C136.757 85.9206 131.989 57.4523 123.95 35.3581C116.157 13.9137 106.239 1.61609 96.7461 1.61609C86.3551 1.61609 76.5702 16.0625 69.5072 41.5272C62.4413 16.0654 52.6536 1.61898 42.2568 1.61898C32.7692 1.61898 22.8487 13.9166 15.0497 35.3552C7.01394 57.4494 2.25139 85.9206 1.64525 115.533L1.60773 117.378H19.1945L19.2147 115.593C20.0316 52.5425 34.9196 12.3282 42.4329 12.3282C48.8695 12.3282 58.5649 45.8767 60.0312 108.87L60.0774 110.64H78.9342L78.9746 108.87C80.4409 45.8796 90.142 12.3282 96.5729 12.3282C104.089 12.3282 118.977 52.5425 119.791 115.593L119.814 117.378H137.401L137.363 115.533Z" fill="#FEBE14" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0663 6.98512V10.5433C31.8109 11.6177 18.1958 57.513 17.4482 115.57L10.4718 108.425V108.246C12.6886 51.3208 28.1943 7.43856 42.0663 6.98512Z" fill="#FEBE14" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.7084 3.45583H42.9004C53.1847 4.14898 62.9724 21.5875 69.4899 48.528V100.589C66.9499 46.8153 55.6468 6.97646 42.2828 6.97646C39.5263 6.97646 36.7005 8.70934 33.9238 11.9267V6.90714C36.5215 4.79014 39.1366 3.60601 41.7084 3.45583ZM101.413 8.5707V13.5585C99.7566 11.5744 98.1229 10.5173 96.5729 10.5173C86.6726 10.5173 78.4954 53.3194 77.2052 108.832L69.513 100.95V100.826C72.0242 46.9337 83.3417 6.97646 96.7259 6.97646C98.273 6.97646 99.8432 7.5252 101.413 8.5707Z" fill="#FEBE14" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M135.571 114.73V115.547L128.577 108.39L128.548 108.419C126.511 55.5808 113.022 13.9397 100.008 7.76781V3.98436C116.674 9.51513 134.217 56.2624 135.568 114.73H135.571Z" fill="#FEBE14" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_42">
                                            <rect width="139" height="119" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p> McDonalds Webiste Redesign </p>
                        </div>


                        <div className='cardPhotoProject welcomeMc'>
                            <div className='txtNew'> <p> <Icon.BookmarkStarFill />  {t('sectionProject.new')} </p></div>
                        </div>
                        <div className='txtProject'>
                            <div className='titleSizeResponsiveTwo'>
                                <div className='logoProjectCard'>
                                    <svg width="30" height="30" viewBox="0 0 139 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_42)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M138.934 115.495C138.322 85.7159 133.527 57.0541 125.428 34.7924C117.265 12.3661 107.076 0.0135498 96.7461 0.0135498C90.3268 0.0135498 84.2971 4.68654 78.8158 13.9112C75.4214 19.6326 72.2579 27.1446 69.5072 35.9852C66.7478 27.1446 63.5901 19.6326 60.1899 13.9112C54.7145 4.68654 48.6819 0.0135498 42.2626 0.0135498C31.9235 0.0135498 21.7403 12.3661 13.5805 34.7924C5.48415 57.0541 0.686961 85.7159 0.0750462 115.493L0 118.987H20.7445L20.7849 115.614C21.5902 53.3978 36.4003 13.9372 42.4329 13.9372C46.4969 13.9372 56.8821 41.2618 58.4581 108.913L58.5389 112.246H80.4697L80.5477 108.913C82.1208 41.2618 92.5089 13.9343 96.5729 13.9343C102.608 13.9343 117.413 53.3949 118.221 115.611L118.264 118.987H139L138.934 115.495Z" fill="#FEBE14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M137.363 115.533C136.757 85.9206 131.989 57.4523 123.95 35.3581C116.157 13.9137 106.239 1.61609 96.7461 1.61609C86.3551 1.61609 76.5702 16.0625 69.5072 41.5272C62.4413 16.0654 52.6536 1.61898 42.2568 1.61898C32.7692 1.61898 22.8487 13.9166 15.0497 35.3552C7.01394 57.4494 2.25139 85.9206 1.64525 115.533L1.60773 117.378H19.1945L19.2147 115.593C20.0316 52.5425 34.9196 12.3282 42.4329 12.3282C48.8695 12.3282 58.5649 45.8767 60.0312 108.87L60.0774 110.64H78.9342L78.9746 108.87C80.4409 45.8796 90.142 12.3282 96.5729 12.3282C104.089 12.3282 118.977 52.5425 119.791 115.593L119.814 117.378H137.401L137.363 115.533Z" fill="#FEBE14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0663 6.98512V10.5433C31.8109 11.6177 18.1958 57.513 17.4482 115.57L10.4718 108.425V108.246C12.6886 51.3208 28.1943 7.43856 42.0663 6.98512Z" fill="#FEBE14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.7084 3.45583H42.9004C53.1847 4.14898 62.9724 21.5875 69.4899 48.528V100.589C66.9499 46.8153 55.6468 6.97646 42.2828 6.97646C39.5263 6.97646 36.7005 8.70934 33.9238 11.9267V6.90714C36.5215 4.79014 39.1366 3.60601 41.7084 3.45583ZM101.413 8.5707V13.5585C99.7566 11.5744 98.1229 10.5173 96.5729 10.5173C86.6726 10.5173 78.4954 53.3194 77.2052 108.832L69.513 100.95V100.826C72.0242 46.9337 83.3417 6.97646 96.7259 6.97646C98.273 6.97646 99.8432 7.5252 101.413 8.5707Z" fill="#FEBE14" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M135.571 114.73V115.547L128.577 108.39L128.548 108.419C126.511 55.5808 113.022 13.9397 100.008 7.76781V3.98436C116.674 9.51513 134.217 56.2624 135.568 114.73H135.571Z" fill="#FEBE14" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_42">
                                                <rect width="139" height="119" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className='pTitleProject'> McDonalds Webiste Redesign </p>
                            </div>

                            <p className='aboutTxt'> {t('pageProjectWindows.pResume')} </p>

                            <div>
                                <p className='techUsed'> {t('sectionProject.tech')} </p>
                                <div className="techLine">
                                    <p> #Bootstrap </p>
                                    <p> #Figma </p>
                                    <p> #SASS </p>
                                    <p> #JavaScript </p>
                                    <p> #React </p>
                                    <p> #Vite </p>
                                    <p> #FramerMotion </p>
                                    <p> #Versel </p>
                                    <p> #Git e GitHub </p>
                                </div>
                            </div>

                            <div className='lineBtn'>
                                <Link to="https://github.com/ErikPradoDev/mcdonalds-website-redesign" target='_blank'>
                                    <button className='btnFill'> <Icon.Github className='iconGitHub' size={20} fill='#18171d' /> GitHub  </button>
                                </Link>
                                <Link to="https://mcdonalds-website-redesign.vercel.app/" target='_blank'>
                                    <button className='btnSimple'> <Icon.BoxArrowInUpRight className='iconBtn' /> Deploy </button>
                                </Link>
                                <Link to={'/projects/mcdonalds-website-redesign'}>
                                    <button className='btnSimple'> <Icon.InfoCircleFill className='iconBtn' /> {t('sectionProject.info')} </button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className='cardProject windows marginBottom20px'>
                        <div className='titleSizeResponsive'>
                            <div className='logoProjectCard'>
                                <svg width="50" height="50" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="65" height="65" rx="5" />
                                    <rect width="40" height="40" transform="translate(12 13)" />
                                    <path d="M28.6666 33.855L16.1758 33.8333L16.1766 43.0016C16.1766 43.8341 16.7908 44.5383 17.6149 44.6525L28.6666 46.1816V33.855Z" fill="url(#paint0_linear_0_1)" />
                                    <path d="M30.3335 33.8583V46.4125L45.9352 48.5708C46.9368 48.7092 47.8302 47.9317 47.8302 46.92L47.8335 33.8883L30.3335 33.8583Z" fill="url(#paint1_linear_0_1)" />
                                    <path d="M28.6668 19.88L17.6018 21.4467C16.7793 21.5633 16.1676 22.2675 16.1685 23.0983L16.1785 32.1667H28.6668V19.88Z" fill="url(#paint2_linear_0_1)" />
                                    <path d="M30.3335 19.6442V32.1667H47.8293V19.0859C47.8293 18.0725 46.9327 17.2934 45.9293 17.4359L30.3335 19.6442Z" fill="url(#paint3_linear_0_1)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_0_1" x1="20.0858" y1="34.7658" x2="25.8208" y2="44.325" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#1784D8" />
                                            <stop offset="1" stop-color="#0864C5" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_0_1" x1="32.5035" y1="35.6083" x2="49.121" y2="47.0792" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#31ABEC" />
                                            <stop offset="1" stop-color="#1582D5" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_0_1" x1="18.7851" y1="22.7492" x2="33.4901" y2="35.9842" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#31ABEC" />
                                            <stop offset="1" stop-color="#1582D5" />
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_0_1" x1="33.5943" y1="21.4559" x2="58.6927" y2="38.515" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#54DAFF" />
                                            <stop offset="1" stop-color="#25A2E5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <p> Windows Desktop | Erik Prado </p>
                        </div>

                        <div className='cardPhotoProject backgroundDesktop'>
                        </div>
                        <div className='txtProject'>
                            <div className='titleSizeResponsiveTwo'>
                                <div className='logoProjectCard'>
                                    <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" fill="#2b2b2b" />
                                        <path d="M16.6666 20.855L4.17578 20.8333L4.17661 30.0016C4.17661 30.8341 4.79078 31.5383 5.61495 31.6525L16.6666 33.1816V20.855Z" fill="url(#paint0_linear_209_183)" />
                                        <path d="M18.3335 20.8583V33.4125L33.9352 35.5708C34.9368 35.7092 35.8302 34.9317 35.8302 33.92L35.8335 20.8883L18.3335 20.8583Z" fill="url(#paint1_linear_209_183)" />
                                        <path d="M16.6668 6.88L5.60179 8.44667C4.77929 8.56334 4.16762 9.26751 4.16846 10.0983L4.17846 19.1667H16.6668V6.88Z" fill="url(#paint2_linear_209_183)" />
                                        <path d="M18.3335 6.6442V19.1667H35.8293V6.08586C35.8293 5.07253 34.9327 4.29336 33.9293 4.43586L18.3335 6.6442Z" fill="url(#paint3_linear_209_183)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_209_183" x1="8.08578" y1="21.7658" x2="13.8208" y2="31.325" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#1784D8" />
                                                <stop offset="1" stop-color="#0864C5" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_209_183" x1="20.5035" y1="22.6083" x2="37.121" y2="34.0792" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#31ABEC" />
                                                <stop offset="1" stop-color="#1582D5" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_209_183" x1="6.78512" y1="9.74917" x2="21.4901" y2="22.9842" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#31ABEC" />
                                                <stop offset="1" stop-color="#1582D5" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_209_183" x1="21.5943" y1="8.45586" x2="46.6927" y2="25.515" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#54DAFF" />
                                                <stop offset="1" stop-color="#25A2E5" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </div>
                                <p className='pTitleProject'> Windows Desktop | Erik Prado </p>
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
                                <Link to="https://github.com/ErikPradoDev/Windows-Desktop-Erik-Prado" target='_blank'>
                                    <button className='btnFill'> <Icon.Github className='iconGitHub' size={20} fill='#18171d' /> GitHub  </button>
                                </Link>
                                <Link to="https://windows-desktop-erik-prado.vercel.app/" target='_blank'>
                                    <button className='btnSimple'> <Icon.BoxArrowInUpRight className='iconBtn' /> Deploy </button>
                                </Link>
                                <Link to={'/projects/windows-desktop-erik-prado'}>
                                    <button className='btnSimple'> <Icon.InfoCircleFill className='iconBtn' /> {t('sectionProject.info')} </button>
                                </Link>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </motion.section>
    )
}