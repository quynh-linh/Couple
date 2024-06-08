import classNames from 'classnames/bind';
import Image from 'next/image';
import { ArcherContainer, ArcherElement } from 'react-archer';
import styles from "../Profile.module.scss";
import images from '@/assets/images';
const cx = classNames.bind(styles);
const ArcherProfiles = () => {
    return (
        <div className={cx('profile','my-9')}>
            <ArcherContainer style={{width: "100%"}} strokeColor="red">
                <div style={{display: 'flex'}}>
                    <div className={cx('profile-parent')}>
                        <ArcherElement
                            id="element1"
                            relations={[
                            {
                                targetId: 'root',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                                style: { strokeColor: 'black', strokeWidth: 1.5 }
                            },
                            ]}
                        >
                            <div  className={cx('profile-parent-child','ml-6  my-2')}>Left Top</div>
                        </ArcherElement>
                        <ArcherElement
                            id="element2"
                            relations={[
                            {
                                targetId: 'root',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                                style: { strokeColor: 'black', strokeWidth: 1.5 }
                            },
                            ]}
                        >
                            <div  className={cx('profile-parent-child','ml-6  my-2')}>Left Center</div>
                        </ArcherElement>
                        <ArcherElement
                            id="element3"
                            relations={[
                            {
                                targetId: 'root',
                                targetAnchor: 'left',
                                sourceAnchor: 'right',
                                style: { strokeColor: 'black', strokeWidth: 1.5 }
                            },
                            ]}
                        >
                            <div  className={cx('profile-parent-child','ml-6  my-2')}>Left Bottom</div>
                        </ArcherElement>
                    </div>
                    <div style={{width: "100%", display: 'flex' , alignItems: "center" , justifyContent: 'center'}}>
                        <ArcherElement
                            id="root"
                        >
                            <Image className={cx('profile-img')} src={images.men} alt="Men" />
                        </ArcherElement>
                    </div>
                    <div className={cx('profile-parent')}>
                        <ArcherElement
                            id="element4"
                            relations={[
                            {
                                targetId: 'root',
                                targetAnchor: 'right',
                                sourceAnchor: 'left',
                                style: { strokeColor: 'black', strokeWidth: 1.5 }
                            },
                            ]}
                        >
                            <div  className={cx('profile-parent-child','mr-6  my-2')}>Right Top</div>
                        </ArcherElement>
                        <ArcherElement
                            id="element5"
                            relations={[
                            {
                                targetId: 'root',
                                targetAnchor: 'right',
                                sourceAnchor: 'left',
                                style: { strokeColor: 'black', strokeWidth: 1.5 }
                            },
                            ]}
                        >
                            <div  className={cx('profile-parent-child','mr-6  my-2')}>Right Center</div>
                        </ArcherElement>
                        <ArcherElement
                            id="element6"
                            relations={[
                            {
                                targetId: 'root',
                                targetAnchor: 'right',
                                sourceAnchor: 'left',
                                style: { strokeColor: 'black', strokeWidth: 1.5 }
                            },
                            ]}
                        >
                            <div  className={cx('profile-parent-child','mr-6 my-2')}>Right Bottom</div>
                        </ArcherElement>
                    </div>
                </div>
            </ArcherContainer>
        </div>
    );
};

export default ArcherProfiles;